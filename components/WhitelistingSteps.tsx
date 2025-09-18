'use client'

import { useEffect, useState } from 'react'

export default function WhitelistingSteps() {
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white mb-6">
            Whitelisting <span className="text-[#D799FE]">Step</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 max-w-3xl mx-auto">
            Follow these simple steps to join the EverXNode whitelist and secure your place in the future of AI compute.
          </p>
        </div>

        {/* Whitelisting Steps Cards */}
        <div className="grid md:grid-cols-3 gap-8 cards-container">
          {/* Step 1: Sign up for whitelist registration */}
          <div className={`card bg-gray-900/80 border border-gray-800 rounded-2xl p-8 text-center hover:border-[#D799FE3D] transition-all duration-300 transform transition-all duration-400 ease-out ${
            cardStates[0] === 0 ? 'opacity-0 scale-200 translate-x-0 translate-y-0 blur-sm' :
            cardStates[0] === 1 ? 'opacity-100 scale-200 translate-x-0 translate-y-0 blur-none z-10' :
            cardStates[0] === 2 ? 'opacity-100 scale-110 translate-x-0 translate-y-0 blur-none z-10' :
            'opacity-100 scale-100 translate-x-0 translate-y-0 blur-none'
          } ${cardStates[1] === 1 || cardStates[2] === 1 ? 'blur-sm' : ''} ${cardStates[1] === 2 || cardStates[2] === 2 ? 'blur-sm' : ''}`}>
            <div className="mb-8">
              <img src="/wjcard1.png" alt="Whitelist Step 1" className="w-24 h-24 mx-auto" />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-regular text-white mb-4">
              Sign up for whitelist registration
            </h3>
              <p className="text-white text-sm sm:text-sm md:text-md lg:text-lg font-extralight leading-relaxed mb-6">
              Join the exclusive whitelist to secure your early access to EverXNode's revolutionary AI compute platform.
            </p>
            <button className="bg-[#D799FE] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-[#C088E8] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#D799FE3D]">
              Sign up
            </button>
          </div>

          {/* Step 2: Secure your purchase allocation */}
          <div className={`card bg-gray-900/80 border border-gray-800 rounded-2xl p-8 text-center hover:border-[#D799FE3D] transition-all duration-300 transform transition-all duration-400 ease-out ${
            cardStates[1] === 0 ? 'opacity-0 scale-200 translate-x-0 translate-y-0 blur-sm' :
            cardStates[1] === 1 ? 'opacity-100 scale-200 translate-x-0 translate-y-0 blur-none z-10' :
            cardStates[1] === 2 ? 'opacity-100 scale-110 translate-x-0 translate-y-0 blur-none z-10' :
            'opacity-100 scale-100 translate-x-0 translate-y-0 blur-none'
          } ${cardStates[0] === 1 || cardStates[2] === 1 ? 'blur-sm' : ''} ${cardStates[0] === 2 || cardStates[2] === 2 ? 'blur-sm' : ''}`}>
            <div className="mb-8">
              <img src="/wjcard2.png" alt="Whitelist Step 2" className="w-24 h-24 mx-auto" />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-regular text-white mb-4">
              Secure your purchase allocation
            </h3>
            <p className="text-white text-sm sm:text-sm md:text-md lg:text-lg font-extralight leading-relaxed mb-6">
              Reserve your spot in the EverXNode ecosystem with guaranteed access to premium NFT Node Licenses.
            </p>
            <button className="bg-[#D799FE] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-[#C088E8] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#D799FE3D]">
              Sign up
            </button>
          </div>

          {/* Step 3: Claim your NFT Node License and earn */}
          <div className={`card bg-gray-900/80 border border-gray-800 rounded-2xl p-8 text-center hover:border-[#D799FE3D] transition-all duration-300 transform transition-all duration-400 ease-out ${
            cardStates[2] === 0 ? 'opacity-0 scale-200 translate-x-0 translate-y-0 blur-sm' :
            cardStates[2] === 1 ? 'opacity-100 scale-200 translate-x-0 translate-y-0 blur-none z-10' :
            cardStates[2] === 2 ? 'opacity-100 scale-110 translate-x-0 translate-y-0 blur-none z-10' :
            'opacity-100 scale-100 translate-x-0 translate-y-0 blur-none'
          } ${cardStates[0] === 1 || cardStates[1] === 1 ? 'blur-sm' : ''} ${cardStates[0] === 2 || cardStates[1] === 2 ? 'blur-sm' : ''}`}>
            <div className="mb-8">
              <img src="/wjcard3.png" alt="Whitelist Step 3" className="w-24 h-24 mx-auto" />
            </div>
            <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-regular text-white mb-4">
              Claim your NFT Node License and earn
            </h3>
            <p className="text-white text-sm sm:text-sm md:text-md lg:text-lg font-extralight leading-relaxed mb-6">
              Activate your NFT Node License and start earning rewards by contributing to the AI compute network.
            </p>
            <button className="bg-[#D799FE] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:bg-[#C088E8] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#D799FE3D]">
              Sign up
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 