import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import AnimatedTitle from "../Components/AnimatedTitle"
const template = "/img/final_frame.png"
const defaultAvatar = "/img/final_defaultIMG.jpg"

// AnimatedTitle component inline to avoid GSAP issues
// const AnimatedTitle = ({ title, className, containerClass }) => {
//   return (
//     <div className={containerClass}>
//       <h1 className={className} dangerouslySetInnerHTML={{ __html: title }} />
//     </div>
//   )
// }

const Digitalswag = () => {
  const [image, setImage] = useState(null)
  const [name, setName] = useState("")
  const [imageAdjustments, setImageAdjustments] = useState({
    scale: 1,
    offsetX: 0,
    offsetY: 0,
    rotation: 0,
  })
  const [showAdjustments, setShowAdjustments] = useState(false)
  const [templateLoaded, setTemplateLoaded] = useState(false)
  const [defaultAvatarLoaded, setDefaultAvatarLoaded] = useState(false)

  const canvasRef = useRef(null)
  const imageInputRef = useRef(null)
  const defaultAvatarRef = useRef(null)
  const templateImgRef = useRef(null)
  const uploadedImgRef = useRef(null)

  // Load default avatar with proper error handling
  useEffect(() => {
    const defaultAvatarImg = new Image()
    defaultAvatarImg.onload = () => {
      defaultAvatarRef.current = defaultAvatarImg
      setDefaultAvatarLoaded(true)
    }
    defaultAvatarImg.onerror = () => {
      console.warn("Default avatar failed to load")
      setDefaultAvatarLoaded(true) // Still set to true to prevent infinite loading
    }
    defaultAvatarImg.src = defaultAvatar
  }, [])

  // Preload template with proper error handling
  useEffect(() => {
    const img = new Image()
    img.onload = () => {
      templateImgRef.current = img
      setTemplateLoaded(true)
    }
    img.onerror = () => {
      console.warn("Template image failed to load")
      setTemplateLoaded(true) // Still set to true to prevent infinite loading
    }
    img.src = template
  }, [])

  // Draw canvas only when assets are loaded
  useEffect(() => {
    if (defaultAvatarLoaded && templateLoaded) {
      drawSwag()
    }
  }, [name, image, imageAdjustments, templateLoaded, defaultAvatarLoaded])

  const handleImageUpload = (event) => {
    const file = event.target.files[0]
    if (!file) return

    const reader = new FileReader()

    reader.onload = () => {
      const img = new Image()
      img.onload = () => {
        uploadedImgRef.current = img
        setImage({
          src: reader.result,
          width: img.width,
          height: img.height,
        })
      }
      img.onerror = () => {
        console.error("Failed to load uploaded image")
        alert("Failed to load the uploaded image. Please try again with a different image.")
      }
      img.src = reader.result
    }

    reader.onerror = () => {
      console.error("Failed to read file")
      alert("Failed to read the file. Please try again.")
    }

    reader.readAsDataURL(file)
  }

  const handleDownloadSwag = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const tempCanvas = document.createElement("canvas")
    const tempCtx = tempCanvas.getContext("2d")
    const scaleFactor = 2

    tempCanvas.width = canvas.width * scaleFactor
    tempCanvas.height = canvas.height * scaleFactor

    tempCtx.drawImage(canvas, 0, 0, canvas.width, canvas.height, 0, 0, tempCanvas.width, tempCanvas.height)

    const dataURL = tempCanvas.toDataURL("image/png", 1.0)
    const downloadLink = document.createElement("a")
    downloadLink.href = dataURL
    downloadLink.download = "generated_swag.png"
    downloadLink.click()
  }

  const drawSwag = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    try {
      if (image && uploadedImgRef.current && uploadedImgRef.current.complete) {
        // Save the current context state
        ctx.save()

        // Apply transformations
        const centerX = canvas.width / 2
        const centerY = canvas.height / 2

        // Move to center, apply rotation, then move back
        ctx.translate(centerX + imageAdjustments.offsetX, centerY + imageAdjustments.offsetY)
        ctx.rotate((imageAdjustments.rotation * Math.PI) / 180)
        ctx.scale(imageAdjustments.scale, imageAdjustments.scale)

        // Calculate image dimensions and position
        let sx, sy, sWidth, sHeight
        const aspectRatioCanvas = canvas.width / canvas.height
        const aspectRatioImage = uploadedImgRef.current.width / uploadedImgRef.current.height

        if (aspectRatioImage > aspectRatioCanvas) {
          sWidth = uploadedImgRef.current.height * aspectRatioCanvas
          sHeight = uploadedImgRef.current.height
          sx = (uploadedImgRef.current.width - sWidth) / 2
          sy = 0
        } else {
          sWidth = uploadedImgRef.current.width
          sHeight = uploadedImgRef.current.width / aspectRatioCanvas
          sx = 0
          sy = (uploadedImgRef.current.height - sHeight) / 2
        }

        // Draw the image centered at the origin (which is now at the transformed center)
        ctx.drawImage(
          uploadedImgRef.current,
          sx,
          sy,
          sWidth,
          sHeight,
          -canvas.width / 2,
          -canvas.height / 2,
          canvas.width,
          canvas.height,
        )

        // Restore the context state
        ctx.restore()
      } else if (defaultAvatarRef.current && defaultAvatarRef.current.complete) {
        // Draw default avatar only if it's loaded and complete
        ctx.drawImage(defaultAvatarRef.current, 0, 0, canvas.width, canvas.height)
      }

      // Draw template if preloaded and complete
      if (templateImgRef.current && templateImgRef.current.complete) {
        ctx.drawImage(templateImgRef.current, 0, 0, canvas.width, canvas.height)
      }

      // Draw text overlay
      const fontSize = canvas.width * 0.045
      ctx.font = `bold ${fontSize}px serif`
      ctx.fillStyle = "#4a2419"
      ctx.textAlign = "center"
      const textY = canvas.height - canvas.height * 0.2
      ctx.fillText((name && "•↣ " + name + " ↢•") || "•↣ " + "Your Name Here" + " ↢•", canvas.width / 2, textY)
    } catch (error) {
      console.error("Error drawing canvas:", error)
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  }

  const resetImageAdjustments = () => {
    setImageAdjustments({
      scale: 1,
      offsetX: 0,
      offsetY: 0,
      rotation: 0,
    })
  }

  const handleImageUploadEnhanced = (event) => {
    handleImageUpload(event)
    setShowAdjustments(true)
    resetImageAdjustments()
  }

  return (
    <>
      <div className="min-h-screen text-white relative overflow-hidden">
        <div className="container mx-auto px-4 py-8 md:py-12 relative z-10">
          {/* Enhanced Title Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="text-center mb-12 md:mb-16"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <AnimatedTitle
                className="text-4xl md:text-6xl lg:text-7xl font-bold"
                title="<b>Digital</b> <b>Badge</b>"
                containerClass="text-center bg-gradient-to-r from-[#198f51] to-emerald-400 bg-clip-text text-transparent"
              />
            </motion.div>
          </motion.div>

          <div className="flex flex-col xl:flex-row justify-center items-start gap-8 xl:gap-16 max-w-7xl mx-auto">
            {/* Canvas Section - Enhanced */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              className="w-full xl:w-1/2 flex justify-center"
            >
              <div className="relative group">
                <div className="relative bg-black rounded-xl p-6 border border-gray-800">
                  <canvas
                    ref={canvasRef}
                    width={900}
                    height={1125}
                    className="w-full max-w-md h-auto rounded-lg shadow-2xl border-2 border-[#198f51]/30"
                  />

                  {/* Preview label */}
                  <div className="absolute top-2 left-2 bg-[#198f51] text-black px-3 py-1 rounded-full text-sm font-semibold">
                    Preview
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Controls Section - Enhanced */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="w-full xl:w-1/2 max-w-2xl"
            >
              <div className="bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm rounded-2xl p-8 border border-[#198f51]/20 shadow-2xl">
                {/* Header */}
                <motion.div variants={itemVariants} className="mb-8">
                  <motion.h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Hack<span className="text-[#198f51] drop-shadow-lg">4</span>Brahma
                  </motion.h1>

                  <div className="space-y-4 text-gray-300">
                    <p className="text-lg leading-relaxed">
                      Get ready to unleash your inner tech warrior at{" "}
                      <span className="text-[#198f51] font-semibold">Hack4Brahma</span>! Show off your hype and rep the
                      hackathon spirit with our exclusive digital badge.
                    </p>
                    <p className="text-base text-emerald-200">
                      Personalize your badge with your name and photo. Download and share your badge on social media.
                    </p>
                    <p className="text-sm text-[#198f51] italic flex items-center gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      We don't store your image. Your privacy is our priority.
                    </p>
                  </div>
                </motion.div>

                {/* Input Section */}
                <motion.div variants={itemVariants} className="space-y-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-[#198f51] uppercase tracking-wide">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value.toUpperCase())}
                      placeholder="Enter Your Name"
                      className="w-full px-4 py-3 bg-black/50 border-2 border-[#198f51]/30 rounded-lg text-white text-lg placeholder-gray-500 focus:outline-none focus:border-[#198f51] focus:ring-2 focus:ring-[#198f51]/20 transition-all duration-300"
                    />
                  </div>

                  {/* Image Adjustment Controls */}
                  {image && showAdjustments && (
                    <motion.div
                      variants={itemVariants}
                      className="space-y-4 p-4 bg-black/30 rounded-lg border border-[#198f51]/20"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-semibold text-[#198f51]">🎨 Adjust Your Image</h3>
                        <button
                          onClick={() => setShowAdjustments(!showAdjustments)}
                          className="text-gray-400 hover:text-white transition-colors"
                        >
                          {showAdjustments ? "▼" : "▶"}
                        </button>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Scale Control */}
                        <div className="space-y-2">
                          <label className="block text-sm text-gray-300">
                            Scale: {imageAdjustments.scale.toFixed(2)}x
                          </label>
                          <input
                            type="range"
                            min="0.5"
                            max="3"
                            step="0.1"
                            value={imageAdjustments.scale}
                            onChange={(e) =>
                              setImageAdjustments((prev) => ({ ...prev, scale: Number.parseFloat(e.target.value) }))
                            }
                            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                          />
                        </div>

                        {/* Rotation Control */}
                        <div className="space-y-2">
                          <label className="block text-sm text-gray-300">Rotation: {imageAdjustments.rotation}°</label>
                          <input
                            type="range"
                            min="-180"
                            max="180"
                            step="5"
                            value={imageAdjustments.rotation}
                            onChange={(e) =>
                              setImageAdjustments((prev) => ({ ...prev, rotation: Number.parseInt(e.target.value) }))
                            }
                            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                          />
                        </div>

                        {/* X Position Control */}
                        <div className="space-y-2">
                          <label className="block text-sm text-gray-300">
                            Horizontal: {imageAdjustments.offsetX}px
                          </label>
                          <input
                            type="range"
                            min="-200"
                            max="200"
                            step="5"
                            value={imageAdjustments.offsetX}
                            onChange={(e) =>
                              setImageAdjustments((prev) => ({ ...prev, offsetX: Number.parseInt(e.target.value) }))
                            }
                            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                          />
                        </div>

                        {/* Y Position Control */}
                        <div className="space-y-2">
                          <label className="block text-sm text-gray-300">Vertical: {imageAdjustments.offsetY}px</label>
                          <input
                            type="range"
                            min="-200"
                            max="200"
                            step="5"
                            value={imageAdjustments.offsetY}
                            onChange={(e) =>
                              setImageAdjustments((prev) => ({ ...prev, offsetY: Number.parseInt(e.target.value) }))
                            }
                            className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider"
                          />
                        </div>
                      </div>

                      {/* Quick Action Buttons */}
                      <div className="flex gap-2 pt-2">
                        <button
                          onClick={resetImageAdjustments}
                          className="px-3 py-1 bg-gray-600 hover:bg-gray-500 text-white text-sm rounded transition-colors"
                        >
                          🔄 Reset
                        </button>
                        <button
                          onClick={() => setShowAdjustments(false)}
                          className="px-3 py-1 bg-[#198f51] hover:bg-emerald-600 text-black text-sm rounded transition-colors"
                        >
                          ✅ Done
                        </button>
                      </div>
                    </motion.div>
                  )}

                  {/* Action Buttons */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUploadEnhanced}
                      ref={imageInputRef}
                      style={{ display: "none" }}
                    />

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => imageInputRef.current?.click()}
                      className="cursor-pointer"
                    >
                      <div className="bg-gradient-to-r from-[#198f51] to-emerald-500 hover:from-emerald-500 hover:to-[#198f51] text-black font-semibold py-3 px-6 rounded-lg text-center transition-all duration-300 shadow-lg hover:shadow-[#198f51]/25">
                        📸 Upload IMG
                      </div>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={handleDownloadSwag}
                      className="cursor-pointer"
                    >
                      <div className="bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white font-semibold py-3 px-6 rounded-lg text-center transition-all duration-300 shadow-lg">
                        ⬇️ Download
                      </div>
                    </motion.div>

        
                  </div>
                </motion.div>

                {/* Stats or Additional Info */}
                <motion.div variants={itemVariants} className="mt-8 pt-6 border-t border-[#198f51]/20">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-[#198f51]">∞</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wide">Possibilities</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#198f51]">🔒</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wide">Secure</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#198f51]">⚡</div>
                      <div className="text-xs text-gray-400 uppercase tracking-wide">Instant</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #198f51;
          cursor: pointer;
          border: 2px solid #000;
        }
        
        .slider::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #198f51;
          cursor: pointer;
          border: 2px solid #000;
        }
      `}</style>
    </>
  )
}

export default Digitalswag