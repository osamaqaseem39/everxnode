export default function WhitelistingSteps() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden flex items-center">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D799FE3D] rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D799FE3D] rounded-full blur-3xl opacity-20"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#D799FE2D] rounded-full blur-2xl opacity-15"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D799FE2D] rounded-full blur-2xl opacity-15"></div>
      
      <div className="container-1400 w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-medium text-white mb-6">
            Whitelisting <span className="text-[#D799FE]">Step</span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Follow these simple steps to join the EverXNode whitelist and secure your place in the future of AI compute.
          </p>
        </div>

        {/* Whitelisting Steps Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1: Sign up for whitelist registration */}
          <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-8 text-center hover:border-[#D799FE3D] transition-all duration-300 group">
            <div className="mb-8">
              {/* Brain with Interconnected Lines Icon */}
              <div className="w-24 h-24 mx-auto relative">
                <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-[#D799FE] via-[#C088E8] to-[#9B59B6] rounded-full transform rotate-45 shadow-lg opacity-90"></div>
                <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-[#C088E8] to-[#9B59B6] rounded-full transform -rotate-12 opacity-80"></div>
                <div className="absolute inset-0 w-12 h-12 bg-gradient-to-br from-[#9B59B6] to-[#8E44AD] rounded-full transform rotate-24 opacity-70"></div>
                {/* Interconnected lines pattern */}
                <div className="absolute top-3 left-3 w-8 h-1 bg-white rounded-full transform rotate-45 opacity-80"></div>
                <div className="absolute top-6 left-2 w-6 h-1 bg-white rounded-full transform -rotate-30 opacity-80"></div>
                <div className="absolute top-8 left-4 w-4 h-1 bg-white rounded-full transform rotate-60 opacity-80"></div>
                <div className="absolute top-5 right-3 w-5 h-1 bg-white rounded-full transform -rotate-45 opacity-80"></div>
                <div className="absolute top-8 right-2 w-3 h-1 bg-white rounded-full transform rotate-30 opacity-80"></div>
                {/* Connection dots */}
                <div className="absolute top-4 left-4 w-1 h-1 bg-white rounded-full"></div>
                <div className="absolute top-6 left-6 w-1 h-1 bg-white rounded-full"></div>
                <div className="absolute top-8 left-3 w-1 h-1 bg-white rounded-full"></div>
                <div className="absolute top-7 right-4 w-1 h-1 bg-white rounded-full"></div>
                <div className="absolute top-9 right-3 w-1 h-1 bg-white rounded-full"></div>
              </div>
            </div>
            <h3 className="text-2xl font-regular text-white mb-4">
              Sign up for whitelist registration
            </h3>
            <p className="text-white font-extralight leading-relaxed mb-6">
              Join the exclusive whitelist to secure your early access to EverXNode's revolutionary AI compute platform.
            </p>
            <button className="bg-[#D799FE] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#C088E8] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#D799FE3D]">
              Sign up
            </button>
          </div>

          {/* Step 2: Secure your purchase allocation */}
          <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-8 text-center hover:border-[#D799FE3D] transition-all duration-300 group">
            <div className="mb-8">
              {/* Credit Card Icon */}
              <div className="w-24 h-24 mx-auto relative">
                <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-[#D799FE] via-[#C088E8] to-[#9B59B6] rounded-full transform rotate-45 shadow-lg opacity-90"></div>
                <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-[#C088E8] to-[#9B59B6] rounded-full transform -rotate-12 opacity-80"></div>
                <div className="absolute inset-0 w-12 h-12 bg-gradient-to-br from-[#9B59B6] to-[#8E44AD] rounded-full transform rotate-24 opacity-70"></div>
                {/* Credit Card */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-6 bg-white rounded-sm relative">
                  {/* Card stripes */}
                  <div className="absolute top-1 left-1 w-6 h-0.5 bg-[#D799FE] rounded-sm"></div>
                  <div className="absolute bottom-1 left-1 w-4 h-0.5 bg-[#D799FE] rounded-sm"></div>
                  <div className="absolute top-1/2 right-1 transform -translate-y-1/2 w-0.5 h-3 bg-[#D799FE] rounded-sm"></div>
                  {/* Card number lines */}
                  <div className="absolute top-3 left-1 w-1 h-0.5 bg-[#D799FE] rounded-sm"></div>
                  <div className="absolute top-3 left-2 w-1 h-0.5 bg-[#D799FE] rounded-sm"></div>
                  <div className="absolute top-3 left-3 w-1 h-0.5 bg-[#D799FE] rounded-sm"></div>
                  <div className="absolute top-3 left-4 w-1 h-0.5 bg-[#D799FE] rounded-sm"></div>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-regular text-white mb-4">
              Secure your purchase allocation
            </h3>
            <p className="text-white font-extralight leading-relaxed mb-6">
              Reserve your spot in the EverXNode ecosystem with guaranteed access to premium NFT Node Licenses.
            </p>
            <button className="bg-[#D799FE] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#C088E8] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#D799FE3D]">
              Sign up
            </button>
          </div>

          {/* Step 3: Claim your NFT Node License and earn */}
          <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-8 text-center hover:border-[#D799FE3D] transition-all duration-300 group">
            <div className="mb-8">
              {/* NFT Cards Icon */}
              <div className="w-24 h-24 mx-auto relative">
                <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-[#D799FE] via-[#C088E8] to-[#9B59B6] rounded-full transform rotate-45 shadow-lg opacity-90"></div>
                <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-[#C088E8] to-[#9B59B6] rounded-full transform -rotate-12 opacity-80"></div>
                <div className="absolute inset-0 w-12 h-12 bg-gradient-to-br from-[#9B59B6] to-[#8E44AD] rounded-full transform rotate-24 opacity-70"></div>
                {/* Overlapping NFT Cards */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {/* Back card */}
                  <div className="w-8 h-10 bg-white rounded-lg transform rotate-6 relative">
                    <div className="absolute inset-1 bg-[#D799FE] rounded-sm flex items-center justify-center">
                      <span className="text-white text-xs font-bold">NFT</span>
                    </div>
                  </div>
                  {/* Front card */}
                  <div className="absolute top-0 left-0 w-8 h-10 bg-white rounded-lg transform -rotate-3 relative">
                    <div className="absolute inset-1 bg-[#D799FE] rounded-sm flex items-center justify-center">
                      <span className="text-white text-xs font-bold">NFT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <h3 className="text-2xl font-regular text-white mb-4">
              Claim your NFT Node License and earn
            </h3>
            <p className="text-white font-extralight leading-relaxed mb-6">
              Activate your NFT Node License and start earning rewards by contributing to the AI compute network.
            </p>
            <button className="bg-[#D799FE] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#C088E8] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#D799FE3D]">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 