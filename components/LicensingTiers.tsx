export default function LicensingTiers() {
  return (
    <section className="py-24 relative overflow-hidden bg-transparent">
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D799FE3D]/5 to-transparent"></div>
      
      <div className="container-1400 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
        <h2 className="text-[48px] lg:text-[64px] font-medium text-white mb-2">
        Key <span className="text-[#D799FE]">NFT Licensing Tiers</span>
          </h2>
        </div>

        {/* Licensing Tiers Cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          <img src="/card2.png" alt="Basic Tier Card" className="w-full rounded-2xl" />
          <img src="/card1.png" alt="Premium Tier Card" className="w-full rounded-2xl" />
          <img src="/card3.png" alt="Enterprise Tier Card" className="w-full rounded-2xl" />
        </div>
      </div>
    </section>
  )
} 