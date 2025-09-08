import Image from 'next/image'
import BubbleOverlay from './BubbleOverlay'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center w-full relative bg-transparent">
      {/* Ellipse 7 - Full width starting from 80% of hero */}
      <div className="absolute top-[300px] left-0 w-full opacity-100 pointer-events-none z-10">
        <img 
          src="/Ellipse 7.png" 
          alt="Eclipse Glow" 
          className="w-full h-auto object-cover"
        />
        
      </div>
      <div className="absolute top-[700px] left-0 w-full opacity-100 pointer-events-none z-10">
        <img 
          src="/Ellipse 8.png" 
          alt="Eclipse Glow" 
          className="w-full h-auto object-cover"
        />
        
      </div>
      
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-24">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-0  w-full">
          {/* Left Side - Text Content */}
          <div className="pt-16 sm:pt-24 md:pt-32 lg:pt-[200px] lg:pr-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[66px] font-medium text-white leading-tight sm:leading-[50px] md:leading-[60px] lg:leading-[68px] tracking-[0%]">
              Power the Future of AI with EverXNode
            </h1>
            <p className="text-sm sm:text-base text-white/80 max-w-2xl">
              Own a Node License NFT, fuel AI compute, and earn rewards, with tokens driving staking, governance, and long-term value.
            </p>
            
            {/* Buttons positioned to the right of text content */}
            <div className="flex flex-col sm:flex-row gap-4 pt-8 sm:pt-12 md:pt-16 lg:pt-[200px] pl-0 sm:pl-8 md:pl-16 lg:pl-[200px] items-start sm:items-end">
              <button className="bg-gradient-to-r from-[#CA5DE5] to-[#5B5B5B] text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full font-semibold hover:from-[#B54DD4] hover:to-[#4A4A4A] transition-all duration-300 transform hover:scale-105 shadow-[0_0_10px_#CA5DE5] hover:shadow-[0_0_20px_#CA5DE5] text-sm sm:text-base">
                Join the Whitelist
              </button>
              <button className="bg-transparent border-2 border-[#CA5DE5] text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-[#CA5DE5] hover:text-black transition-all duration-300 transform hover:scale-105 shadow-[0_0_10px_#CA5DE5] hover:shadow-[0_0_20px_#CA5DE5] text-sm sm:text-base">
                Contact Us
              </button>
            </div>
            
            {/* Connection line to tree */}
            <div className="hidden lg:block absolute top-[600px] left-[700px] transform -translate-y-1/2">
              <Image
                src="/connect.png"
                alt="Connection Line"
                width={600}
                height={40}
                className="object-contain"
              />
            </div>
          </div>

          {/* Right Side - Tree Visualization */}
          <div className="relative w-full">
            {/* Radial glow under the tree */}
            <div className="absolute top-[400px] left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] opacity-60 pointer-events-none z-0">
              <div className="w-full h-full bg-radial-gradient from-[#D799FE3D] via-[#D799FE1A] to-transparent rounded-full blur-3xl"></div>
            </div>
            <div className="relative w-full h-[400px] sm:h-[500px] md:h-[700px] lg:h-[1000px] flex items-center justify-center z-5">
              {/* Tree Image with Overlay Bubbles */}
              <div className="relative w-full h-full">
                <Image
                  src="/tree.png"
                  alt="AI Neural Network Tree"
                  width={900}
                  height={1000}
                  className="w-full h-full object-contain"
                />
                
                {/* Interactive Bubbles Overlay */}
                <BubbleOverlay
                  text="Provide AI Compute"
                  position="top-[80px] -left-[100px]"
                  lineImage="/linesmallinvertedflipped.png"
                  lineWidth={120}
                  lineHeight={40}
                  linePosition="top-[30px] left-[210px]"
                />

                <BubbleOverlay
                  text="Earn Rewards"
                  position="top-[200px] right-[0px]"
                  lineImage="/linesmall.png"
                  lineWidth={120}
                  lineHeight={40}
                  linePosition="top-[30px] right-[160px] "
                />

                <BubbleOverlay
                  text="Join the Revolution"
                  position="top-[350px] left-[100px] transform "
                  lineImage="/linesmallinverted.png"
                  lineWidth={120}
                  lineHeight={40}
                  linePosition="top-[0px] left-[205px] "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 