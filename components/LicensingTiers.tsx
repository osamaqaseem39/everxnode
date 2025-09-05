export default function LicensingTiers() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D799FE3D]/5 to-transparent"></div>
      
      <div className="container-1400 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Key <span className="text-[#D799FE]">NFT Licensing Tiers</span>
          </h2>
        </div>

        {/* Licensing Tiers Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Basic Tier */}
          <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-8 hover:border-[#D799FE3D] transition-all duration-300 group">
            <div className="text-center mb-6">
              <span className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Basic
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Entry-level GPUs
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white">1.5x Rewards Multiplier</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white">Resale Enabled</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-gray-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <span className="text-gray-400">Staking Requirement: No Staking</span>
              </div>
            </div>
          </div>

          {/* Premium Tier - Featured */}
          <div className="bg-gradient-to-br from-[#D799FE] via-purple-600 to-purple-800 border border-[#D799FE] rounded-2xl p-8 transform scale-105 shadow-2xl shadow-[#D799FE3D] group">
            <div className="text-center mb-6">
              <span className="bg-gray-800 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Premium
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              High-performance GPUs
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white">2.0x Rewards Multiplier</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white">Resale Enabled</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white">Staking Requirement: 5,000 $EverXNode Tokens</span>
              </div>
            </div>
            {/* Call to Action Button */}
            <div className="text-center">
              <button className="bg-white text-[#D799FE] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Join the Whitelist
              </button>
            </div>
          </div>

          {/* Enterprise Tier */}
          <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-8 hover:border-[#D799FE3D] transition-all duration-300 group">
            <div className="text-center mb-6">
              <span className="bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Enterprise
              </span>
            </div>
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Large-scale compute clusters
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white">3.0x Rewards Multiplier</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white">Resale Enabled</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-white">Staking Requirement: 20,000 $EverXNode Tokens</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 