// Digital-swag.jsx
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  User,
  Download,
  Share,
  Linkedin,
  Twitter,
  Instagram,
  Upload,
  Camera,
  Copy,
  Check,
} from "lucide-react";

import { toPng } from "html-to-image";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu.jsx";
import { Button } from "../components/ui/button.jsx";

import { Input } from "../Components/ui/input.jsx";

import { useMobile } from "../hooks/use-mobile.js";

import { cn } from "../lib/utils.js";

export default function Digitalswag() {
  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [currentDate, setCurrentDate] = useState("");
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [hashtagCopied, setHashtagCopied] = useState(false);
  const [handleCopied, setHandleCopied] = useState(false);

  const badgeRef = useRef(null);
  const fileInputRef = useRef(null);
  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const isMobile = useMobile();

  // Date Logocs
  useEffect(() => {
    const now = new Date();
    const opts = { day: "numeric", month: "long", year: "numeric" };
    setCurrentDate(now.toLocaleDateString("en-US", opts));
  }, []);

  // Handlers (upload, camera, clipboard bord copy)
  const handleNameChange = (e) => setName(e.target.value);
  const handleFileUpload = (e) => {
    const f = e.target.files?.[0];
    if (!f) return;
    const r = new FileReader();
    r.onload = (ev) => setImage(ev.target.result);
    r.readAsDataURL(f);
  };
  const handleUploadClick = () => fileInputRef.current?.click();
  const copyToClipboard = (text, type) =>
    navigator.clipboard.writeText(text).then(() => {
      if (type === "hashtag") {
        setHashtagCopied(true);
        setTimeout(() => setHashtagCopied(false), 2000);
      } else {
        setHandleCopied(true);
        setTimeout(() => setHandleCopied(false), 2000);
      }
    });

  const handleCameraClick = async () => {
    try {
      setIsCameraOpen(true);
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      if (videoRef.current) videoRef.current.srcObject = stream;
    } catch {
      setIsCameraOpen(false);
    }
  };
  const handleCapture = () => {
    if (!videoRef.current || !canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");
    canvasRef.current.width = videoRef.current.videoWidth;
    canvasRef.current.height = videoRef.current.videoHeight;
    ctx.drawImage(videoRef.current, 0, 0);
    setImage(canvasRef.current.toDataURL("image/png"));
    videoRef.current.srcObject.getTracks().forEach((t) => t.stop());
    setIsCameraOpen(false);
  };
  const handleCloseCamera = () => {
    videoRef.current?.srcObject?.getTracks().forEach((t) => t.stop());
    setIsCameraOpen(false);
  };

  // ——  DOWNLOAD HANDLER USING html-to-image (downld logic here) ——
  const handleDownload = () => {
    if (!badgeRef.current) return;
    setIsDownloading(true);

    toPng(badgeRef.current, {
      cacheBust: true,
      pixelRatio: 4,
      backgroundColor: null,
    })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `Hack4Brahma-Badge-${name || "YourName"}.png`;
        link.href = dataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((err) => {
        console.error("Download error:", err);
      })
      .finally(() => {
        setIsDownloading(false);
      });
  };

  const handleShare = (platform) => {
    const text = encodeURIComponent(
      `Check out my Hack4Brahma Digital Badge! #Hack4Brahma @Hack4Brahma`
    );
    const url = encodeURIComponent(window.location.href);
    let shareUrl = "";
    if (platform === "linkedin") {
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
    } else if (platform === "twitter") {
      shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
    } else {
      alert(
        "To share on Instagram, please download the image and upload it to your Instagram account."
      );
      return;
    }
    window.open(shareUrl, "_blank");
  };

  return (
    <main className="min-h-screen w-full bg-gradient-to-r from-yellow-300 via-green-300 to-cyan-400 flex flex-col items-center justify-center p-4">
      <motion.h1
        className="text-4xl md:text-6xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get Your Digital Swag
      </motion.h1>

      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8">
        {/* Badge Preview */}
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div ref={badgeRef} className="bg-teal-900 rounded-lg p-4 relative">
            <div className="flex justify-center mb-2">
              <div className="text-yellow-300 font-bold flex items-center text-xl">
                <span>&lt;</span>
                <span>Hack4Brahma</span>
                <span>/&gt;</span>
                <span className="ml-1">:D</span>
              </div>
            </div>
            <div className="text-white text-xs text-center mb-2">
              {currentDate} | Venue Here
            </div>
            <div className="relative aspect-square border-4 border-yellow-300 rounded-md overflow-hidden mb-4">
              <div className="absolute inset-0 bg-black/20 z-10" />
              {image ? (
                <img
                  src={image}
                  alt="Uploaded"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-teal-800 to-teal-950 flex items-center justify-center">
                  <User className="w-1/2 h-1/2 text-red-500" />
                </div>
              )}
              <div className="absolute top-4 left-4 flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-2 bg-yellow-300 rounded-full" />
                ))}
              </div>
              <div className="absolute top-4 right-4">
                <div className="w-4 h-4 border border-white/50 rotate-45" />
              </div>
              <div className="absolute bottom-4 right-4 text-lg font-bold text-cyan-400 writing-mode-vertical transform rotate-180">
                HACKER<span className="text-4xl">⌁</span>
              </div>
            </div>
            <motion.div
              className="bg-yellow-300 text-black font-bold py-2 px-4 rounded-md text-center mb-4"
              animate={{ scale: name ? [1, 1.05, 1] : 1 }}
              transition={{ duration: 0.3 }}
            >
              {name || "Your Name"}
            </motion.div>
            <div className="text-center text-sm mb-4">
              <span className="text-yellow-300">Innovate</span>
              <span className="text-white">-</span>
              <span className="text-yellow-300">Elevate</span>
              <span className="text-white">-</span>
              <span className="text-cyan-400">Transform</span>
            </div>
            <div className="flex justify-center space-x-4">
              {["Uber", "Meta", "Drdo"].map((s) => (
                <div
                  key={s}
                  className="bg-white rounded-full p-1 w-10 h-10 flex items-center justify-center text-xs"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Controls */}
        <motion.div
          className="w-full max-w-md"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="bg-black/10 backdrop-blur-sm p-6 rounded-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Hack4Brahma Digital Badge
            </h2>
            <p className="mb-4">
              🧠 Hack4Brahma&#39;s here. Flex that badge like it&#39;s your
              whole career.
            </p>

            <p className="mb-4">
              Personalize your Hack4Brahma Badge with your name and photo.
              Download it and spread the word on social media using
              <span className="flex items-center mt-1 mb-1">
                <span className="font-bold mr-2">#Hack4Brahma</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-6 px-2"
                  onClick={() => copyToClipboard("#Hack4Brahma", "hashtag")}
                >
                  {hashtagCopied ? (
                    <Check className="h-3 w-3" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                </Button>
              </span>
              and tagging
              <span className="flex items-center mt-1">
                <span className="font-bold mr-2">@Hack4Brahma</span>
                <Button
                  variant="outline"
                  size="sm"
                  className="h-6 px-2"
                  onClick={() => copyToClipboard("@Hack4Brahma", "handle")}
                >
                  {handleCopied ? (
                    <Check className="h-3 w-3" />
                  ) : (
                    <Copy className="h-3 w-3" />
                  )}
                </Button>
              </span>
            </p>

            <p className="text-sm italic mb-6">
              *📸 Upload away — your images aren&#39;t saved. Even our servers
              have short-term memory loss :)
            </p>

            <Input
              type="text"
              placeholder="Enter Your Name"
              value={name}
              onChange={handleNameChange}
              className="bg-black text-white mb-4"
            />

            <div className="grid grid-cols-2 gap-2">
              <Button
                onClick={handleUploadClick}
                variant="outline"
                className="bg-black text-white"
              >
                <Upload className="mr-2 h-4 w-4" /> UPLOAD
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />

              <Button
                onClick={handleCameraClick}
                variant="outline"
                className="bg-black text-white"
              >
                <Camera className="mr-2 h-4 w-4" /> CAMERA
              </Button>

              <Button
                onClick={handleDownload}
                disabled={isDownloading}
                className={cn(
                  "bg-black text-white",
                  isDownloading && "opacity-70"
                )}
              >
                {isDownloading ? (
                  <div className="flex items-center">
                    <div className="animate-spin mr-2 h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                    PROCESSING
                  </div>
                ) : (
                  <>
                    <Download className="mr-2 h-4 w-4" /> DOWNLOAD
                  </>
                )}
              </Button>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="bg-black text-white">
                    <Share className="mr-2 h-4 w-4" /> SHARE
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuItem onClick={() => handleShare("linkedin")}>
                    <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleShare("twitter")}>
                    <Twitter className="mr-2 h-4 w-4" /> Twitter
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={() => handleShare("instagram")}>
                    <Instagram className="mr-2 h-4 w-4" /> Instagram
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            {/* Camera Modal */}
            {isCameraOpen && (
              <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
                <div className="bg-white rounded-lg p-4 max-w-md w-full">
                  <h3 className="text-xl font-bold mb-4">Take a Photo</h3>
                  <div className="relative aspect-video bg-black rounded-md overflow-hidden mb-4">
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <canvas ref={canvasRef} className="hidden" />
                  <div className="flex justify-between">
                    <Button onClick={handleCloseCamera} variant="outline">
                      Cancel
                    </Button>
                    <Button
                      onClick={handleCapture}
                      className="bg-black text-white"
                    >
                      <Camera className="mr-2 h-4 w-4" /> Capture
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
