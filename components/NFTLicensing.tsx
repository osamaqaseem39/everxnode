'use client'

import { useRef, useEffect } from 'react'

export default function NFTLicensing() {
  const img1Ref = useRef<HTMLImageElement>(null);
  const img2Ref = useRef<HTMLImageElement>(null);
  const img3Ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let animationId: number;
    let startTime = Date.now();

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      
      const refs = [img1Ref, img2Ref, img3Ref];
      refs.forEach((ref) => {
        if (ref.current) {
          const spinRotation = (elapsed / 2000) * 360;
          ref.current.style.transform = `rotate(${spinRotation}deg)`;
        }
      });
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);


  return (
    <section id="nft-licensing" className="py-12 container-1400 relative overflow-hidden w-full bg-transparent">
      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white mb-2">
            What is EverXNode NFT <span className="text-[#D799FE]">Node</span> licensing<span className="text-[#D799FE]">?</span>
          </h2>
          <div className="text-center max-w-6xl mx-auto mb-8">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-thin text-center text-white">
              <span className="text-[#D799FE]">EverXNode</span> NFT Node Licenses grant you the ability to operate AI compute nodes on
            
              our decentralized network. By securing an NFT license, you gain:
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Card 1: Access to AI Compute Rewards */}
          <div className="flex flex-col items-center text-center">
            {/* Header Card */}
            <div className="bg-[rgba(217,217,217,0.2)] rounded-full  py-2 w-full relative shadow-lg shadow-[#D799FE]/30">
              <h3 className="text-md sm:text-lg md:text-xl lg:text-2xl font-extralight text-white">
                Access to AI Compute Rewards
              </h3>
            </div>
            
            {/* Description Card */}
            <div className="bg-[rgba(217,217,217,0.2)] backdrop-blur-sm rounded-3xl p-8 py-12 w-full flex flex-col items-center mt-2 group">
              <p className="text-white font-extralight text-base sm:text-lg md:text-xl mb-8 leading-relaxed">
                Earn EverXNode tokens by contributing your GPU/CPU power.
              </p>
              
              {/* Shape Image */}
              <div className="w-full h-full flex items-center justify-center">
                <img 
                  ref={img1Ref}
                  src="/shape1.png" 
                  alt="AI Compute Rewards" 
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Card 2: Exclusive Governance Rights */}
          <div className="flex flex-col items-center text-center">
            {/* Header Card */}
            <div className="bg-[rgba(217,217,217,0.2)] rounded-full  py-2 w-full relative shadow-lg shadow-[#D799FE]/30">
              <h3 className="text-md sm:text-lg md:text-xl lg:text-2xl font-extralight text-white">
                Exclusive Governance Rights
              </h3>
            </div>
            
            {/* Description Card */}
            <div className="bg-[rgba(217,217,217,0.2)] backdrop-blur-sm rounded-3xl p-8 py-12 w-full flex flex-col items-center mt-2 group">
              <p className="text-white font-extralight text-base sm:text-lg md:text-xl mb-8 leading-relaxed">
                Vote on protocol updates and network decisions.
              </p>
              
              {/* Shape Image */}
              <div className="w-full h-full flex items-center justify-center">
                <img 
                  ref={img2Ref}
                  src="/shape2.png" 
                  alt="Governance Rights" 
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Card 3: Staking Boosts & Tiered Rewards */}
          <div className="flex flex-col items-center text-center">
            {/* Header Card */}
            <div className="bg-[rgba(217,217,217,0.2)] rounded-full  py-2 w-full relative shadow-lg shadow-[#D799FE]/30">
              <h3 className="text-md sm:text-lg md:text-xl lg:text-2xl font-extralight text-white">
                Staking Boosts & Tiered Rewards
              </h3>
            </div>
            
            {/* Description Card */}
            <div className="bg-[rgba(217,217,217,0.2)] backdrop-blur-sm rounded-3xl p-8 py-12 w-full flex flex-col items-center mt-2 group">
                 <p className="text-white font-extralight text-base sm:text-lg md:text-xl mb-8 leading-relaxed">
                 Unlock higher earnings and multipliers for NFT stakers.
              </p>
              
              {/* Shape Image */}
              <div className="w-full h-full flex items-center justify-center">
                <img 
                  ref={img3Ref}
                  src="/shape3.png" 
                  alt="Staking Rewards" 
                  width={200}
                  height={200}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 
