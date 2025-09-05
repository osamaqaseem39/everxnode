export default function WhitelistingSteps() {
  return (
    <section className="min-h-screen bg-black relative overflow-hidden flex items-center">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D799FE3D] rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D799FE3D] rounded-full blur-3xl opacity-20"></div>
      
      <div className="container-1400 w-full relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Whitelisting Step
          </h1>
        </div>

        {/* Whitelisting Steps Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1: Sign up for whitelist registration */}
          <div className="bg-gray-900/80 border border-[#D799FE3D] rounded-2xl p-8 text-center hover:border-[#D799FE] transition-all duration-300 group">
            <div className="mb-6">
              {/* Neural Network Icon */}
              <div className="w-24 h-24 mx-auto relative">
                <div className="absolute inset-0 w-24 h-24 border-2 border-[#D799FE] rounded-full bg-black"></div>
                <div className="absolute inset-0 w-20 h-20 bg-black rounded-full flex items-center justify-center">
                  {/* Neural Network Pattern */}
                  <div className="relative w-16 h-16">
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#D799FE] rounded-full"></div>
                    <div className="absolute top-4 left-2 w-2 h-2 bg-[#D799FE] rounded-full"></div>
                    <div className="absolute top-4 right-2 w-2 h-2 bg-[#D799FE] rounded-full"></div>
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#D799FE] rounded-full"></div>
                    <div className="absolute top-12 left-2 w-2 h-2 bg-[#D799FE] rounded-full"></div>
                    <div className="absolute top-12 right-2 w-2 h-2 bg-[#D799FE] rounded-full"></div>
                    <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#D799FE] rounded-full"></div>
                    
                    {/* Connection Lines */}
                    <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-px h-3 bg-[#D799FE] opacity-60"></div>
                    <div className="absolute top-5 left-2 w-px h-3 bg-[#D799FE] opacity-60"></div>
                    <div className="absolute top-5 right-2 w-px h-3 bg-[#D799FE] opacity-60"></div>
                    <div className="absolute top-9 left-1/2 transform -translate-x-1/2 w-px h-3 bg-[#D799FE] opacity-60"></div>
                    <div className="absolute top-13 left-2 w-px h-3 bg-[#D799FE] opacity-60"></div>
                    <div className="absolute top-13 right-2 w-px h-3 bg-[#D799FE] opacity-60"></div>
                  </div>
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 w-24 h-24 bg-[#D799FE3D] rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Sign up for whitelist registration
            </h3>
            <button className="bg-[#D799FE] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#C088E8] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#D799FE3D]">
              Sign up
            </button>
          </div>

          {/* Step 2: Secure your purchase allocation */}
          <div className="bg-gray-900/80 border border-[#D799FE3D] rounded-2xl p-8 text-center hover:border-[#D799FE] transition-all duration-300 group">
            <div className="mb-6">
              {/* Credit Card Icon */}
              <div className="w-24 h-24 mx-auto relative">
                <div className="absolute inset-0 w-24 h-24 border-2 border-[#D799FE] rounded-full bg-black"></div>
                <div className="absolute inset-0 w-20 h-20 bg-black rounded-full flex items-center justify-center">
                  {/* Credit Card */}
                  <div className="w-12 h-8 bg-[#D799FE] rounded-sm relative">
                    <div className="absolute top-2 left-2 w-6 h-1 bg-white rounded-sm"></div>
                    <div className="absolute bottom-2 left-2 w-4 h-1 bg-white rounded-sm"></div>
                    <div className="absolute top-1/2 right-2 transform -translate-y-1/2 w-1 h-4 bg-white rounded-sm"></div>
                  </div>
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 w-24 h-24 bg-[#D799FE3D] rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Secure your purchase allocation
            </h3>
            <button className="bg-[#D799FE] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#C088E8] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#D799FE3D]">
              Sign up
            </button>
          </div>

          {/* Step 3: Claim your NFT Node License and earn */}
          <div className="bg-gray-900/80 border border-[#D799FE3D] rounded-2xl p-8 text-center hover:border-[#D799FE] transition-all duration-300 group">
            <div className="mb-6">
              {/* NFT Phone Icon */}
              <div className="w-24 h-24 mx-auto relative">
                <div className="absolute inset-0 w-24 h-24 border-2 border-[#D799FE] rounded-full bg-black"></div>
                <div className="absolute inset-0 w-20 h-20 bg-black rounded-full flex items-center justify-center">
                  {/* Mobile Phone */}
                  <div className="w-10 h-16 bg-[#D799FE] rounded-lg relative">
                    {/* Screen */}
                    <div className="absolute inset-1 bg-black rounded-sm flex items-center justify-center">
                      <span className="text-[#D799FE] text-xs font-bold">NFT</span>
                    </div>
                    {/* Home Button */}
                    <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#D799FE] rounded-full"></div>
                  </div>
                  {/* Hands holding the phone */}
                  <div className="absolute -left-2 top-4 w-3 h-8 bg-[#D799FE] rounded-full transform rotate-12"></div>
                  <div className="absolute -right-2 top-4 w-3 h-8 bg-[#D799FE] rounded-full transform -rotate-12"></div>
                </div>
                {/* Glow Effect */}
                <div className="absolute inset-0 w-24 h-24 bg-[#D799FE3D] rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-6">
              Claim your NFT Node License and earn
            </h3>
            <button className="bg-[#D799FE] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#C088E8] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#D799FE3D]">
              Sign up
            </button>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            Follow these simple steps to join the EverXNode whitelist and secure your place in the future of AI compute.
          </p>
        </div>
      </div>
    </section>
  )
} 