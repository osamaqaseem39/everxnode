'use client'

import { useEffect, useState } from 'react'

export default function LicensingTiers() {
  const [cardStates, setCardStates] = useState<number[]>([0, 0, 0]); // 0: hidden, 1: scaled up in center, 2: scaled down in center, 3: final position
  const [headerVisible, setHeaderVisible] = useState(false);
  const [sectionVisible, setSectionVisible] = useState(false);

  useEffect(() => {
    // Section entrance animation
    const sectionTimer = setTimeout(() => setSectionVisible(true), 100);
    
    // Header animation
    const headerTimer = setTimeout(() => setHeaderVisible(true), 300);
    
    // Card 1
    const timer1a = setTimeout(() => setCardStates([1, 0, 0]), 800);
    const timer1b = setTimeout(() => setCardStates([2, 0, 0]), 1200);
    const timer1c = setTimeout(() => setCardStates([3, 0, 0]), 1600);
    
    // Card 2
    const timer2a = setTimeout(() => setCardStates([3, 1, 0]), 1800);
    const timer2b = setTimeout(() => setCardStates([3, 2, 0]), 2200);
    const timer2c = setTimeout(() => setCardStates([3, 3, 0]), 2600);
    
    // Card 3
    const timer3a = setTimeout(() => setCardStates([3, 3, 1]), 2800);
    const timer3b = setTimeout(() => setCardStates([3, 3, 2]), 3200);
    const timer3c = setTimeout(() => setCardStates([3, 3, 3]), 3600);

    return () => {
      clearTimeout(sectionTimer);
      clearTimeout(headerTimer);
      clearTimeout(timer1a); clearTimeout(timer1b); clearTimeout(timer1c);
      clearTimeout(timer2a); clearTimeout(timer2b); clearTimeout(timer2c);
      clearTimeout(timer3a); clearTimeout(timer3b); clearTimeout(timer3c);
    };
  }, []);

  return (
    <section className={`py-24 relative overflow-hidden bg-transparent transition-all duration-1000 ease-out ${
      sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      {/* Custom CSS for hover effects */}
      <style jsx>{`
        .cards-container:hover .card:not(:hover) {
          transform: scale(0.95);
          filter: blur(2px);
          opacity: 0.7;
        }
        .card:hover {
          transform: scale(1.25) !important;
          z-index: 20;
        }
      `}</style>
      
      {/* Subtle Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D799FE3D]/5 to-transparent"></div>
      
      <div className="container-1400 w-full relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-16 transition-all duration-800 ease-out ${
          headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white mb-2">
            Key <span className="text-[#D799FE]">NFT Licensing Tiers</span>
          </h2>
        </div>

        {/* Licensing Tiers Cards */}
        <div className="grid lg:grid-cols-3 gap-8 cards-container">
          <div className={`card text-center transition-all duration-400 ease-out ${
            cardStates[0] === 0 ? 'opacity-0 scale-200 translate-x-0 translate-y-0 blur-sm' :
            cardStates[0] === 1 ? 'opacity-100 scale-200 translate-x-0 translate-y-0 blur-none z-10' :
            cardStates[0] === 2 ? 'opacity-100 scale-110 translate-x-0 translate-y-0 blur-none z-10' :
            'opacity-100 scale-100 translate-x-0 translate-y-0 blur-none'
          } ${cardStates[1] === 1 || cardStates[2] === 1 ? 'blur-sm' : ''} ${cardStates[1] === 2 || cardStates[2] === 2 ? 'blur-sm' : ''}`}>
            <img src="/basiccard.png" alt="Basic Tier Card" className="w-full rounded-2xl" />
          </div>
          <div className={`card text-center transition-all duration-400 ease-out ${
            cardStates[1] === 0 ? 'opacity-0 scale-200 translate-x-0 translate-y-0 blur-sm' :
            cardStates[1] === 1 ? 'opacity-100 scale-200 translate-x-0 translate-y-0 blur-none z-10' :
            cardStates[1] === 2 ? 'opacity-100 scale-110 translate-x-0 translate-y-0 blur-none z-10' :
            'opacity-100 scale-100 translate-x-0 translate-y-0 blur-none'
          } ${cardStates[0] === 1 || cardStates[2] === 1 ? 'blur-sm' : ''} ${cardStates[0] === 2 || cardStates[2] === 2 ? 'blur-sm' : ''}`}>
            <img src="/premiumcard.png" alt="Premium Tier Card" className="w-full rounded-2xl" />
          </div>
          <div className={`card text-center transition-all duration-400 ease-out ${
            cardStates[2] === 0 ? 'opacity-0 scale-200 translate-x-0 translate-y-0 blur-sm' :
            cardStates[2] === 1 ? 'opacity-100 scale-200 translate-x-0 translate-y-0 blur-none z-10' :
            cardStates[2] === 2 ? 'opacity-100 scale-110 translate-x-0 translate-y-0 blur-none z-10' :
            'opacity-100 scale-100 translate-x-0 translate-y-0 blur-none'
          } ${cardStates[0] === 1 || cardStates[1] === 1 ? 'blur-sm' : ''} ${cardStates[0] === 2 || cardStates[1] === 2 ? 'blur-sm' : ''}`}>
            <img src="/enterpricecard.png" alt="Enterprise Tier Card" className="w-full rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  )
} 