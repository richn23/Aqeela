"use client"
import { useEffect, useRef, useState } from "react"
import { MeshGradient, PulsingBorder } from "@paper-design/shaders-react"
import { motion } from "framer-motion"

export default function ShaderHero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const handleMouseEnter = () => setIsActive(true)
    const handleMouseLeave = () => setIsActive(false)

    const container = containerRef.current
    if (container) {
      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)
    }

    return () => {
      if (container) {
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div ref={containerRef} id="hero" className="min-h-screen bg-[#E5DCD0] relative overflow-hidden">
      <svg className="absolute inset-0 w-0 h-0">
        <defs>
          <filter id="glass-effect" x="-50%" y="-50%" width="200%" height="200%">
            <feTurbulence baseFrequency="0.005" numOctaves="1" result="noise" />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.3" />
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0.02
                      0 1 0 0 0.02
                      0 0 1 0 0.05
                      0 0 0 0.9 0"
              result="tint"
            />
          </filter>
          <filter id="gooey-filter" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
              result="gooey"
            />
            <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
          </filter>
          <filter id="text-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5F1EB" />
            <stop offset="30%" stopColor="#8FA88F" />
            <stop offset="70%" stopColor="#5C7C5C" />
            <stop offset="100%" stopColor="#F5F1EB" />
          </linearGradient>
        </defs>
      </svg>

      {/* Shader Background */}
      <MeshGradient
        className="absolute inset-0 w-full h-full"
        colors={["#E5DCD0", "#8FA88F", "#5C7C5C", "#4A6B4A", "#F5F1EB"]}
        speed={0.2}
      />
      <MeshGradient
        className="absolute inset-0 w-full h-full opacity-30"
        colors={["#F5F1EB", "#C4D4C4", "#8FA88F", "#A8C4A8"]}
        speed={0.1}
      />

      {/* Main Content */}
      <main className="absolute bottom-16 md:bottom-24 left-8 md:left-16 z-20 max-w-2xl pt-24">
        <div className="text-left">
          <motion.div
            className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6 relative border border-[#5C7C5C]/20"
            style={{
              filter: "url(#glass-effect)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute top-0 left-1 right-1 h-px bg-gradient-to-r from-transparent via-[#5C7C5C]/30 to-transparent rounded-full" />
            <span className="text-[#4A6B4A] text-sm font-medium relative z-10 tracking-wide">
              Online Therapy & Coaching
            </span>
          </motion.div>

          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#4A6B4A] mb-6 leading-none tracking-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.span
              className="block font-light text-[#5C7C5C] text-3xl md:text-4xl lg:text-5xl mb-2 tracking-wider"
              style={{
                fontFamily: 'Georgia, serif',
              }}
            >
              This feeling isn&apos;t forever...
            </motion.span>
            <motion.span
              className="block drop-shadow-lg"
              style={{
                fontFamily: "'Caveat', cursive",
                fontWeight: 600,
                fontStyle: 'italic',
                background: "linear-gradient(135deg, #4A6B4A 0%, #5C7C5C 50%, #8FA88F 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: "url(#text-glow)",
              }}
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              You can heal
            </motion.span>
            {/* Curved underline */}
            <motion.svg
              className="block mt-2"
              style={{ width: '200px', height: '10px' }}
              viewBox="0 0 200 8"
              fill="none"
              preserveAspectRatio="none"
              initial={{ opacity: 0, pathLength: 0 }}
              animate={{ opacity: 1, pathLength: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <motion.path
                d="M2 5.5C30 2 60 7 100 4C140 1 170 6 198 3.5"
                stroke="#4A6B4A"
                strokeWidth="2.5"
                strokeLinecap="round"
                fill="none"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 0.8 }}
              />
            </motion.svg>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl font-light text-[#5C7C5C] mb-8 leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Gentle, evidence-based support to help you move from overwhelmed to clarity — from anywhere, online.
          </motion.p>

          <motion.div
            className="flex items-center gap-4 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <motion.a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="px-8 py-4 rounded-full bg-[#5C7C5C] text-white font-medium text-sm transition-all duration-300 hover:bg-[#4A6B4A] cursor-pointer shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book a Call
            </motion.a>
            <motion.a
              href="#process"
              onClick={(e) => scrollToSection(e, '#process')}
              className="px-8 py-4 rounded-full bg-transparent border-2 border-[#5C7C5C]/40 text-[#5C7C5C] font-medium text-sm transition-all duration-300 hover:bg-[#5C7C5C]/10 hover:border-[#5C7C5C] cursor-pointer backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              How it works
            </motion.a>
          </motion.div>
        </div>
      </main>

      {/* Pulsing Border Decoration */}
      <div className="absolute bottom-8 right-8 z-30">
        <div className="relative w-20 h-20 flex items-center justify-center">
          <PulsingBorder
            colors={["#5C7C5C", "#8FA88F", "#4A6B4A", "#A8C4A8", "#3A5A3A"]}
            colorBack="#00000000"
            speed={1.2}
            roundness={1}
            thickness={0.1}
            softness={0.5}
            intensity={0.3}
            bloom={0.25}
            spots={5}
            spotSize={0.4}
            pulse={0.2}
            smoke={0.4}
            smokeSize={0.5}
            scale={0.65}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
            }}
          />

          {/* Rotating Text */}
          <motion.svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            animate={{ rotate: 360 }}
            transition={{
              duration: 25,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            style={{ transform: "scale(1.6)" }}
          >
            <defs>
              <path id="circle" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" />
            </defs>
            <text className="text-sm fill-[#5C7C5C]/70 font-medium" style={{ fontSize: '7px' }}>
              <textPath href="#circle" startOffset="0%">
                You Can Heal • Therapy • Coaching • You Can Heal • Therapy • Coaching •
              </textPath>
            </text>
          </motion.svg>
        </div>
      </div>
    </div>
  )
}
