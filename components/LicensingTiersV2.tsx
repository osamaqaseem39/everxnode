export default function LicensingTiersV2() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-t from-black via-purple-900 to-black">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#D799FE3D] rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#D799FE3D] rounded-full blur-3xl opacity-10"></div>
      
      <div className="container-1400 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-bold text-white mb-6">
            Key <span className="text-[#D799FE]">NFT Licensing Tiers</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            EverXNode offers a tiered NFT Node Licensing structure, providing varying levels of rewards and benefits.
          </p>
        </div>

        {/* Tier Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Bronze Tier */}
          <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-8 hover:border-[#D799FE3D] transition-all duration-300 group text-center">
            <div className="mb-8">
              {/* 3D Bronze Metallic Icon */}
              <div className="w-24 h-24 mx-auto relative">
                <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-amber-600 via-amber-500 to-yellow-400 rounded-full transform rotate-45 shadow-lg opacity-90"></div>
                <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-300 rounded-full transform -rotate-12 opacity-80"></div>
                <div className="absolute inset-0 w-12 h-12 bg-gradient-to-br from-yellow-300 to-amber-200 rounded-full transform rotate-24 opacity-70"></div>
                {/* Purple and Blue Highlights */}
                <div className="absolute top-2 left-2 w-4 h-4 bg-[#D799FE] rounded-full opacity-60"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Bronze Tier
            </h3>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Entry-level access to the EverXNode compute economy, offering foundational rewards.
            </p>
            <button className="bg-[#D799FE] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#C088E8] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#D799FE3D]">
              Learn More
            </button>
          </div>

          {/* Silver Tier */}
          <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-8 hover:border-[#D799FE3D] transition-all duration-300 group text-center">
            <div className="mb-8">
              {/* 3D Silver Metallic Icon */}
              <div className="w-24 h-24 mx-auto relative">
                <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-gray-400 via-gray-300 to-gray-200 rounded-full transform rotate-45 shadow-lg opacity-90"></div>
                <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-gray-300 to-gray-200 rounded-full transform -rotate-12 opacity-80"></div>
                <div className="absolute inset-0 w-12 h-12 bg-gradient-to-br from-gray-200 to-white rounded-full transform rotate-24 opacity-70"></div>
                {/* Purple and Blue Highlights */}
                <div className="absolute top-2 left-2 w-4 h-4 bg-[#D799FE] rounded-full opacity-60"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Silver Tier
            </h3>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Enhanced rewards and benefits for dedicated node operators, with increased earning potential.
            </p>
            <button className="bg-[#D799FE] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#C088E8] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#D799FE3D]">
              Learn More
            </button>
          </div>

          {/* Gold Tier */}
          <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-8 hover:border-[#D799FE3D] transition-all duration-300 group text-center">
            <div className="mb-8">
              {/* 3D Gold Metallic Icon */}
              <div className="w-24 h-24 mx-auto relative">
                <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-yellow-500 via-yellow-400 to-amber-300 rounded-full transform rotate-45 shadow-lg opacity-90"></div>
                <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-yellow-400 to-amber-200 rounded-full transform -rotate-12 opacity-80"></div>
                <div className="absolute inset-0 w-12 h-12 bg-gradient-to-br from-amber-200 to-yellow-100 rounded-full transform rotate-24 opacity-70"></div>
                {/* Purple and Blue Highlights */}
                <div className="absolute top-2 left-2 w-4 h-4 bg-[#D799FE] rounded-full opacity-60"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 bg-blue-400 rounded-full opacity-60"></div>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Gold Tier
            </h3>
            <p className="text-white/70 text-lg mb-8 leading-relaxed">
              Premium access with maximum rewards, exclusive features, and top-tier governance participation.
            </p>
            <button className="bg-[#D799FE] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#C088E8] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#D799FE3D]">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 