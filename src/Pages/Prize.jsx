"use client"

import { useState, useEffect, useRef } from "react"
import { Trophy, Award, Star, Users, Sparkles, ChevronLeft, ChevronRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import AnimatedTitle from "../Components/AnimatedTitle";
import Footer from "../Components/Footer";

export default function HackathonPage() {
  const [activeTrack, setActiveTrack] = useState(0)
  const [hoveredPrize, setHoveredPrize] = useState(null)
  const containerRef = useRef(null)

  // Auto-rotate through tracks
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTrack((prev) => (prev + 1) % tracks.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const prizes = [
    {
      title: "1st Place",
      amount: "$5,000",
      icon: <Trophy className="h-8 w-8 text-yellow-400" />,
      color: "from-yellow-600/20 to-yellow-400/10",
      borderColor: "border-yellow-500/30",
      textColor: "text-yellow-400",
    },
    {
      title: "2nd Place",
      amount: "$3,000",
      icon: <Award className="h-8 w-8 text-gray-300" />,
      color: "from-gray-500/20 to-gray-300/10",
      borderColor: "border-gray-400/30",
      textColor: "text-gray-300",
    },
    {
      title: "3rd Place",
      amount: "$1,500",
      icon: <Star className="h-8 w-8 text-amber-500" />,
      color: "from-amber-600/20 to-amber-400/10",
      borderColor: "border-amber-500/30",
      textColor: "text-amber-500",
    },
    {
      title: "All Girls",
      amount: "$2,000",
      icon: <Users className="h-8 w-8 text-pink-400" />,
      color: "from-pink-600/20 to-pink-400/10",
      borderColor: "border-pink-500/30",
      textColor: "text-pink-400",
    },
    {
      title: "Best Beginner",
      amount: "$1,000",
      icon: <Sparkles className="h-8 w-8 text-cyan-400" />,
      color: "from-cyan-600/20 to-cyan-400/10",
      borderColor: "border-cyan-500/30",
      textColor: "text-cyan-400",
    },
  ]

  const tracks = [
    {
      title: "Cybersecurity",
      description: "Protect critical infrastructure and secure communications",
      color: "from-purple-600/20 to-purple-400/5",
    },
    {
      title: "Logistics & Supply",
      description: "Optimize resource distribution in challenging environments",
      color: "from-emerald-600/20 to-emerald-400/5",
    },
    {
      title: "Command & Control",
      description: "Build systems for improved situational awareness",
      color: "from-blue-600/20 to-blue-400/5",
    },
    {
      title: "Data Analytics",
      description: "Leverage data for actionable intelligence capabilities",
      color: "from-amber-600/20 to-amber-400/5",
    },
    {
      title: "Communications",
      description: "Develop robust solutions for challenging scenarios",
      color: "from-red-600/20 to-red-400/5",
    },
  ]

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 24 },
    },
  }

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 400, damping: 17 },
    },
    hover: {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
  }

  const floatingAnimation = {
    y: [0, -10, 0],
    transition: {
      duration: 4,
      repeat: Number.POSITIVE_INFINITY,
      repeatType: "reverse",
      ease: "easeInOut",
    },
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden pl-20" ref={containerRef}>
      <div className="relative w-full">
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-60"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent opacity-60"></div>

          {/* Animated grid lines */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(to right, rgba(255, 255, 255, 0.1) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          ></div>

          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              initial={{
                x: Math.random() * 100 + (i % 2 === 0 ? 10 : 70) + "%",
                y: Math.random() * 100 + "%",
                opacity: Math.random() * 0.5 + 0.1,
                scale: Math.random() * 0.6 + 0.2,
              }}
              animate={{
                y: [null, "-20%", null],
                opacity: [null, Math.random() * 0.7 + 0.3, null],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
              style={{
                width: Math.random() * 4 + 1 + "px",
                height: Math.random() * 4 + 1 + "px",
                background: `rgba(${Math.random() * 100 + 100}, ${Math.random() * 100 + 100}, ${Math.random() * 255}, ${Math.random() * 0.5 + 0.5})`,
              }}
            />
          ))}
        </div>

        {/* Main content container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative flex flex-col items-center container mx-auto px-4 text-[#198f51] mb-10">
            <AnimatedTitle
              title="  <b>War </b> </br> <b>Cheast </b>"
              containerClass="mt-8 !text-black text-center reveal-element "
            />
          </div>
            
            <motion.div
              className="h-1 w-40 mx-auto bg-gradient-to-r from-green-500 via-green-600 to-green-800 rounded-full mb-6"
              animate={{
                width: ["10%", "30%", "10%"],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Prize cards */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-16"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {prizes.map((prize, index) => (
              <motion.div
                key={index}
                className={`bg-gradient-to-b ${prize.color} border ${prize.borderColor} rounded-xl overflow-hidden backdrop-blur-sm`}
                variants={cardVariants}
                whileHover="hover"
                onHoverStart={() => setHoveredPrize(index)}
                onHoverEnd={() => setHoveredPrize(null)}
              >
                <motion.div
                  className="p-4 flex flex-col items-center text-center"
                  animate={hoveredPrize === index ? floatingAnimation : {}}
                >
                  <motion.div
                    className={`mb-3 p-3 rounded-full bg-black/30 ${prize.borderColor}`}
                    animate={
                      hoveredPrize === index
                        ? {
                            scale: [1, 1.1, 1],
                            rotate: [0, 5, 0, -5, 0],
                            transition: { duration: 0.5 },
                          }
                        : {}
                    }
                  >
                    {prize.icon}
                  </motion.div>
                  <h3 className={`text-lg font-bold ${prize.textColor}`}>{prize.title}</h3>
                  <p className="text-2xl font-bold text-white mt-1">{prize.amount}</p>

                  <AnimatePresence>
                    {hoveredPrize === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-2 text-sm text-gray-300"
                      >
                         
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Track showcase */}
          <div className="mb-16">
          <div className="relative flex flex-col items-center container mx-auto px-4 text-[#198f51] mb-10">
            <AnimatedTitle
              title="  <b> Mission</b> </b> </br> <b>Directives </b>"
              containerClass="mt-8 !text-black text-center reveal-element "
            />
          </div>

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTrack}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className={`bg-gradient-to-r ${tracks[activeTrack].color} border border-white/10 rounded-xl p-6 backdrop-blur-sm`}
                >
                  <h3 className="text-2xl font-bold text-white mb-2">{tracks[activeTrack].title}</h3>
                  <p className="text-gray-300">{tracks[activeTrack].description}</p>
                </motion.div>
              </AnimatePresence>

              {/* Track navigation */}
              <div className="flex justify-center mt-6 gap-2">
                <button
                  onClick={() => setActiveTrack((prev) => (prev - 1 + tracks.length) % tracks.length)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <div className="flex items-center gap-2">
                  {tracks.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTrack(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        activeTrack === index ? "w-6 bg-gradient-to-r from-green-600 to-green-600-400" : "bg-white/30"
                      }`}
                      aria-label={`View track ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setActiveTrack((prev) => (prev + 1) % tracks.length)}
                  className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
   
        </div>
      </div>
      <Footer />
    </div>
  )
}

