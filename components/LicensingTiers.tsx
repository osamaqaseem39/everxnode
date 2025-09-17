export default function LicensingTiers() {
  return (
    <section className="py-24 relative overflow-hidden bg-transparent">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D799FE3D]/5 to-transparent"></div>
      
      <div className="container-1400 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white mb-2">
        Key <span className="text-[#D799FE]">NFT Licensing Tiers</span>
          </h2>
        </div>

        {/* Licensing Tiers Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="text-center">
            <img src="/basic.png" alt="Basic Tier" className="mx-auto mb-4" />
            <img src="/basiccard.png" alt="Basic Tier Card" className="w-full rounded-2xl" />
          </div>
          <div className="text-center">
            <img src="/premium.png" alt="Premium Tier" className="mx-auto mb-4" />
            <img src="/premiumcard.png" alt="Premium Tier Card" className="w-full rounded-2xl" />
          </div>
          <div className="text-center">
            <img src="/enterprice.png" alt="Enterprise Tier" className="mx-auto mb-4" />
            <img src="/enterprisecard.png" alt="Enterprise Tier Card" className="w-full rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
} 