import Image from 'next/image'

export default function TokenUtility() {
  return (
    <section id="token-utility" className="-mt-32 lg:-mt-32 relative overflow-hidden bg-transparent">
      <div className="container-1400 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white mb-2">
            Token Utility
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-thin text-white max-w-7xl mx-auto mb-8">
            The EverXNode Token is the backbone of the ecosystem.
          </p>
        </div>

        {/* Utility includes section */}
        <div className="mb-12">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-4">
            Utility includes
          </h3>
          
          {/* Cards Grid - Top two cards side by side */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {/* Earn for Compute - Float in from left */}
            <div className="bg-white/[0.05] backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 group opacity-0 animate-slide-in-left">
              <div className="flex items-center space-x-6">
                {/* Text Content - Left Side */}
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-regular text-white mb-4">
                    Earn for Compute
                  </h3>
                  <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-extralight leading-relaxed">
                    Contribute your GPU/CPU power to process AI workloads, and earn EverXNode tokens in return.
                  </p>
                </div>
                
                {/* Icon - Right Side */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-black border-2 border-[#D799FE] rounded-full flex items-center justify-center shadow-[0_0_20px_#D799FE] p-0">
                    <Image
                      src="/chip.png"
                      alt="Chip Icon"
                      width={96}
                      height={96}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Passive Income Potential - Float in from right */}
            <div className="bg-white/[0.05] backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 group opacity-0 animate-slide-in-right">
              <div className="flex items-center space-x-6">
                {/* Text Content - Left Side */}
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-regular text-white mb-4">
                    Passive Income Potential
                  </h3>
                  <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-extralight leading-relaxed">
                    Once your node is active, you can enjoy continuous rewards as AI tasks are handled effortlessly in the background.
                  </p>
                </div>
                
                {/* Icon - Right Side */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-black border-2 border-[#D799FE] rounded-full flex items-center justify-center shadow-[0_0_20px_#D799FE] p-0">
                    <Image
                      src="/stack.png"
                      alt="Stack Icon"
                      width={96}
                      height={96}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Staking Unlocks More - Float in from bottom */}
          <div className="flex justify-center">
            <div className="bg-white/[0.05] backdrop-blur-sm rounded-2xl p-8 transition-all duration-300 group opacity-0 animate-slide-in-bottom max-w-2xl">
              <div className="flex items-center space-x-6">
                {/* Text Content - Left Side */}
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-regular text-white mb-4">
                    Staking Unlocks More
                  </h3>
                  <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-extralight leading-relaxed">
                    Premium and Enterprise licenses require staking EverXNode tokens and provide higher rewards.
                  </p>
                </div>
                
                {/* Icon - Right Side */}
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 bg-black border-2 border-[#D799FE] rounded-full flex items-center justify-center shadow-[0_0_20px_#D799FE] p-0">
                    <Image
                      src="/token.png"
                      alt="Token Icon"
                      width={96}
                      height={96}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 