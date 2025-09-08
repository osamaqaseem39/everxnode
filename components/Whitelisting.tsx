import Image from 'next/image'

export default function Whitelisting() {
  return (
    <section className="py-12 relative bg-transparent overflow-x-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#D799FE3D]/5 via-transparent to-[#D799FE3D]/5"></div>
      
      {/* Purple Strip Behind Cards - Full Width */}
      <div className="absolute left-0 right-0 w-full h-[100px] bg-[#D799FE] z-10" style={{top: '600px'}}></div>
      
      <div className="container-1400 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[48px] lg:text-[64px] font-medium text-white mb-2">
            Whitelisting
          </h2>
          <p className="text-[40px] font-thin text-white max-w-7xl mx-auto mb-8">
            Whitelist access gives early adopters priority entry into EverXNode's compute economy.
          </p>
          
          {/* Benefits Label */}
          <div className="inline-block">
            <span className="bg-white/[0.1] text-white px-6 py-2 rounded-full text-[20px] font-light">
              Benefits of Whitelisting
            </span>
          </div>
          
          
        </div>
        
        {/* Feature Cards */}
        <div className="flex flex-col lg:flex-row justify-center gap-8 mb-12 relative z-10  ">
          {/* Card 1: Premium Reward Multipliers */}
          <div className="w-full max-w-[470px] h-[400px] bg-black border border-[#D799FE3D] rounded-2xl p-8 hover:border-[#D799FE] hover:shadow-2xl hover:shadow-[#D799FE]/20 transition-all duration-300 group flex flex-col lg:-mt-20">
            <div className="text-center mb-6">
              <Image 
                src="/wcard1.png" 
                alt="Mod icon" 
                width={64} 
                height={64}
                className=" mx-auto mb-12"
              />
            </div>
            <h3 className="text-[24px] font-extralight text-white items-center text-center mb-6 leading-relaxed flex-grow">
              Premium Reward Multipliers For Early Node Operators
            </h3>
           
          </div>

          {/* Card 2: Guaranteed Allocation */}
          <div className="w-full max-w-[470px] h-[400px] bg-black border border-[#D799FE3D] rounded-2xl p-8 hover:border-[#D799FE] hover:shadow-2xl hover:shadow-[#D799FE]/20 transition-all duration-300 group flex flex-col ">
            <div className="text-center mb-6">
              <Image 
                src="/wcard2.png" 
                alt="Lock icon" 
                width={64} 
                height={64}
                className=" mx-auto mb-12"
              />
            </div>
            <h3 className="text-[24px] font-extralight text-white items-center text-center mb-6 leading-relaxed flex-grow">
              Guaranteed Allocation Before Public Sales
            </h3>
           
          </div>

          {/* Card 3: Limited NFT Licenses */}
          <div className="w-full max-w-[470px] h-[400px] bg-black border border-[#D799FE3D] rounded-2xl p-8 hover:border-[#D799FE] hover:shadow-2xl hover:shadow-[#D799FE]/20 transition-all duration-300 group flex flex-col lg:-mt-20">
            <div className="text-center mb-6">
              <Image 
                src="/wcard3.png" 
                alt="Eye icon" 
                width={64} 
                height={64}
                className="mx-auto mb-12"
              />
            </div>
            <h3 className="text-[24px] font-extralight text-white items-center text-center mb-6 leading-relaxed flex-grow">
              Access To Limited NFT Licenses (Scarcity = Value)
            </h3>
           
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center space-x-4">
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-white font-medium">01/04</span>
            <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black hover:bg-gray-200 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Main Call to Action */}
        <div className="text-center">
          <button className="bg-gradient-to-r from-[#CA5DE5] to-[#5B5B5B] text-white px-8 py-4 rounded-full font-semibold hover:from-[#B54DD4] hover:to-[#4A4A4A] transition-all duration-300 transform hover:scale-105 shadow-[0_0_10px_#CA5DE5] hover:shadow-[0_0_20px_#CA5DE5]">
            Join the Whitelist
          </button>
        </div>
      </div>
    </section>
  )
} 