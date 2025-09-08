import Image from 'next/image'
import Link from 'next/link'

export default function CTABanner() {
  return (
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 w-full relative overflow-hidden bg-transparent">
      {/* Dark Background */}
      <div className="absolute inset-0 bg-transparent"></div>
      
      <div className="w-full relative z-10">
        {/* Main Banner Card */}
        <div className="bg-gradient-to-r from-[#2a2a2a] to-[#1f1f1f] rounded-3xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-24 py-6 sm:py-8 md:py-10 lg:py-12 relative overflow-hidden">
          {/* Purple Glow Effects */}
         
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center relative z-10">
            {/* Left Content */}
            <div className='grid grid-cols-1 gap-4 lg:col-span-2'>
              {/* Logo */}
              <div className="mb-2 sm:mb-4">
                <Image 
                  src="/logo.png" 
                  alt="EverXNode Logo" 
                  width={80}
                  height={80}
                  className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
                />
              </div>
              
              {/* Main Heading */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-medium text-white leading-tight">
                Power the Future of AI with <span className="text-[#D799FE]">EverXNode's</span>
                <br />
                NFT <span className="text-[#D799FE]">Node</span> Licensing
              </h2>
              
              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-thin text-white mb-2 sm:mb-4 leading-relaxed max-w-3xl">
                Step into the decentralized AI compute economy with exclusive NFT-licensed nodes. Each license unlocks access to premium rewards, governance participation, and priority earnings. Secure your whitelist spot today and be among the pioneers driving the future of AI infrastructure.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Link href="/why-join" className="bg-[#D799FE] text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base hover:bg-[#C688FD] transition-all duration-300 transform hover:scale-105 text-center">
                  Why Join?
                </Link>
                
                <Link href="/how-it-works" className="bg-transparent border-2 border-[#D799FE] text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded-full font-medium text-sm sm:text-base hover:bg-[#D799FE] hover:text-white transition-all duration-300 transform hover:scale-105 text-center">
                  How It Works?
                </Link>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="mt-4 sm:mt-6 md:mt-8 relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[400px] lg:h-[400px] xl:w-[467px] xl:h-[467px] rounded-3xl sm:rounded-[50px] lg:rounded-[70px] overflow-hidden shadow-2xl shadow-[#D799FE]/40" style={{filter: 'drop-shadow(0 5px 10px rgba(215, 153, 254, 0.4))'}}>
                <Image 
                  src="/women.png" 
                  alt="Future AI Person" 
                  width={467}
                  height={467}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 