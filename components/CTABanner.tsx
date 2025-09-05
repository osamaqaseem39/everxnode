import Image from 'next/image'

export default function CTABanner() {
  return (
    <section className="py-24 px-24 w-full relative overflow-hidden">
      {/* Dark Background */}
      <div className="absolute inset-0 bg-transparent"></div>
      
      <div className="w-full relative z-10">
        {/* Main Banner Card */}
        <div className="bg-gradient-to-r from-[#2a2a2a] to-[#1f1f1f] rounded-3xl px-24 py-12 relative overflow-hidden">
          {/* Purple Glow Effects */}
         
          <div className="grid lg:grid-cols-3 gap-12 tems-center relative z-10">
            {/* Left Content */}
            <div className='grid grid-cols-1 gap-4 col-span-2'>
              {/* Logo */}
              <div className="mb-4">
                <Image 
                  src="/logo.png" 
                  alt="EverXNode Logo" 
                  width={100} 
                  height={100}
                />
              </div>
              
              {/* Main Heading */}
              <h2 className="text-[36px] lg:text-[48px] font-medium text-white  leading-tight">
                Power the Future of AI with <span className="text-[#D799FE]">EverXNode's</span>
                <br />
                NFT <span className="text-[#D799FE]">Node</span> Licensing
              </h2>
              
              {/* Description */}
              <p className="text-[24px] font-thin text-white mb-2 leading-relaxed max-w-3xl">
                Step into the decentralized AI compute economy with exclusive NFT-licensed nodes. Each license unlocks access to premium rewards, governance participation, and priority earnings. Secure your whitelist spot today and be among the pioneers driving the future of AI infrastructure.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex gap-4">
                <button className="bg-[#D799FE] text-white px-8 py-3 rounded-full font-medium text-[16px] hover:bg-[#C688FD] transition-all duration-300 transform hover:scale-105">
                  Why Join?
                </button>
                
                <button className="bg-transparent border-2 border-[#D799FE] text-white px-8 py-3 rounded-full font-medium text-[16px] hover:bg-[#D799FE] hover:text-white transition-all duration-300 transform hover:scale-105">
                  How It Works?
                </button>
              </div>
            </div>
            
            {/* Right Image */}
            <div className="relative">
                            <div className="mt-8     relative w-[467px] h-[467px] rounded-[70px] overflow-hidden shadow-2xl shadow-[#D799FE]/40" style={{filter: 'drop-shadow(0 5px 10px rgba(215, 153, 254, 0.4))'}}>
                  <Image 
                  src="/women.png" 
                  alt="Future AI Person" 
                  width={467}
                  height={467}
                  
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 