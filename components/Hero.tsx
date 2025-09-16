"use client"

import Image from 'next/image'
import Link from 'next/link'
import { useState, useRef, useEffect } from 'react'
import BubbleOverlay from './BubbleOverlay'

export default function Hero() {
  const [isVideoCompleted, setIsVideoCompleted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Hardcoded 9-second delay
    const timer = setTimeout(() => {
      setIsVideoCompleted(true)
    }, 6000) // 9 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleVideoLoaded = () => {
    // Auto-play the video when it's loaded
    if (videoRef.current) {
      videoRef.current.play()
    }
  }
  return (
    <section className="w-full relative bg-transparent py-8 sm:py-12 lg:py-16">
      {/* Ellipse 7 - Mobile optimized positioning */}
      <div className="absolute top-[200px] sm:top-[300px] lg:top-[300px] left-0 w-full opacity-100 pointer-events-none z-10 overflow-hidden">
        <img 
          src="/Ellipse 7.png" 
          alt="Eclipse Glow" 
          className="w-full h-auto object-cover"
        />
      </div>
      <div className="absolute top-[500px] sm:top-[700px] lg:top-[700px] left-0 w-full opacity-100 pointer-events-none z-10 overflow-hidden">
        <img 
          src="/Ellipse 8.png" 
          alt="Eclipse Glow" 
          className="w-full h-auto object-cover"
        />
      </div>
      
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
        {/* Mobile: Stacked layout, Large+: Grid layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-[1fr_1.2fr] gap-0 w-full">
          {/* Left Side - Text Content */}
          <div className="pt-8 sm:pt-16 lg:pt-16 lg:pr-8 order-1 lg:order-1 text-center lg:text-left">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[66px] font-medium text-white leading-tight sm:leading-[50px] lg:leading-[68px] tracking-[0%]">
              Power the Future of AI with EverXNode
            </h1>
            <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 max-w-2xl mt-4 sm:mt-6 mx-auto lg:mx-0">
              Own a Node License NFT, fuel AI compute, and earn rewards, with tokens driving staking, governance, and long-term value.
            </p>
            
            {/* Mobile: Centered buttons, Desktop: Positioned to the right */}
            <div className="flex flex-row gap-2 sm:gap-4 pt-6 sm:pt-8 lg:pt-8 pl-0 sm:pl-8 lg:pl-0 items-center lg:items-start justify-center lg:justify-start">
              <Link href="/whitelisting" className="bg-gradient-to-r from-[#CA5DE5] to-[#5B5B5B] text-white px-4 xs:px-5 sm:px-6 md:px-8 py-2 xs:py-2.5 sm:py-3 rounded-full font-semibold hover:from-[#B54DD4] hover:to-[#4A4A4A] transition-all duration-300 transform hover:scale-105 shadow-[0_0_10px_#CA5DE5] hover:shadow-[0_0_20px_#CA5DE5] text-sm xs:text-base sm:text-lg md:text-xl w-auto">
                Join the Whitelist
              </Link>
              <Link href="/contact" className="bg-transparent border-2 border-[#CA5DE5] text-white px-4 xs:px-5 sm:px-6 md:px-8 py-2 xs:py-2.5 sm:py-3 rounded-full font-semibold hover:bg-[#CA5DE5] hover:text-black transition-all duration-300 transform hover:scale-105 shadow-[0_0_10px_#CA5DE5] hover:shadow-[0_0_20px_#CA5DE5] text-sm xs:text-base sm:text-lg md:text-xl w-auto">
                Contact Us
              </Link>
            </div>
            
            {/* Connection line to tree - Hidden on mobile, shown on lg+ */}
          
          </div>

          {/* Right Side - Tree Visualization */}
          <div className="relative w-full overflow-hidden order-2 lg:order-2">
            {/* Radial glow under the tree - Mobile optimized */}
            <div className="absolute top-[200px] sm:top-[300px] lg:top-[400px] left-1/2 transform -translate-x-1/2 w-full max-w-[400px] sm:max-w-[600px] lg:max-w-[800px] h-[200px] sm:h-[300px] lg:h-[400px] opacity-60 pointer-events-none z-0">
              <div className="w-full h-full bg-radial-gradient from-[#D799FE3D] via-[#D799FE1A] to-transparent rounded-full blur-3xl"></div>
            </div>
            <div className="relative w-full min-h-[400px] sm:min-h-[500px] lg:min-h-[550px] flex items-center justify-center z-5 pt-4 sm:pt-8 lg:pt-16 pb-4 sm:pb-8 lg:pb-0">
              {/* Tree Image with Overlay Bubbles */}
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Show image on all screen sizes */}
                <video
                  ref={videoRef}
                  src="/tree.mp4"
                  muted
                  autoPlay
                  playsInline
                  onLoadedData={handleVideoLoaded}
                  className="w-full max-w-full h-auto object-contain min-h-[350px] sm:min-h-[450px]"
                />
                
                {/* Interactive Bubbles Overlay - Hidden on mobile, shown on sm+ */}
                <div className="hidden sm:block">
                  <BubbleOverlay
                    text="Provide AI Compute"
                    position="top-[60px] sm:top-[80px] lg:top-[90px] left-[5px] sm:left-[10px] lg:left-[10px]"
                    lineImage="/linesmallinvertedflipped.png"
                    lineWidth={80}
                    lineHeight={30}
                    linePosition="top-[15px] sm:top-[25px] lg:top-[35px] left-[100px] sm:left-[130px] lg:left-[240px]"
                    isVisible={isVideoCompleted}
                  />

                  <BubbleOverlay
                    text="Earn Rewards"
                    position="top-[130px] sm:top-[170px] lg:top-[190px] right-[5px] sm:right-[10px] lg:right-[10px]"
                    lineImage="/linesmall.png"
                    lineWidth={80}
                    lineHeight={30}
                    linePosition="top-[15px] sm:top-[25px] lg:top-[35px] right-[80px] sm:right-[110px] lg:right-[200px]"
                    isVisible={isVideoCompleted}
                  />

                  <BubbleOverlay
                    text="Join the Revolution"
                    position="top-[220px] sm:top-[300px] lg:top-[340px] left-[30px] sm:left-[60px] lg:left-[100px] transform"
                    lineImage="/linesmallinverted.png"
                    lineWidth={80}
                    lineHeight={30}
                    linePosition="top-[-5px] lg:top-[15px] left-[110px] sm:left-[140px] lg:left-[235px]"
                    isVisible={isVideoCompleted}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 