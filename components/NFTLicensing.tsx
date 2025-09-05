'use client'

import { useRef, useEffect } from 'react'

export default function NFTLicensing() {
  const img1Ref = useRef<HTMLImageElement>(null);
  const img2Ref = useRef<HTMLImageElement>(null);
  const img3Ref = useRef<HTMLImageElement>(null);
  const speedsRef = useRef([
    { ref: img1Ref, normalSpeed: 12000, slowSpeed: 20000, currentSpeed: 12000, isHovered: false, offsetX: 0, offsetY: 0, targetOffsetX: 0, targetOffsetY: 0 },
    { ref: img2Ref, normalSpeed: 15000, slowSpeed: 25000, currentSpeed: 15000, isHovered: false, offsetX: 0, offsetY: 0, targetOffsetX: 0, targetOffsetY: 0 },
    { ref: img3Ref, normalSpeed: 18000, slowSpeed: 30000, currentSpeed: 18000, isHovered: false, offsetX: 0, offsetY: 0, targetOffsetX: 0, targetOffsetY: 0 }
  ]);

  useEffect(() => {
    let animationId: number;
    let startTime = Date.now();
    const speeds = speedsRef.current;

    const animate = () => {
      const currentTime = Date.now();
      
      speeds.forEach((speed, index) => {
        if (speed.ref.current) {
          // Smoothly transition speed
          const targetSpeed = speed.isHovered ? speed.slowSpeed : speed.normalSpeed;
          speed.currentSpeed += (targetSpeed - speed.currentSpeed) * 0.02;
          
          // Smooth repulsion effect
          speed.offsetX += (speed.targetOffsetX - speed.offsetX) * 0.1;
          speed.offsetY += (speed.targetOffsetY - speed.offsetY) * 0.1;
          
          // Calculate rotation
          const elapsed = currentTime - startTime;
          const rotation = (elapsed / speed.currentSpeed) * 360;
          
          // Apply transform with rotation and repulsion
          speed.ref.current.style.transform = `translate(${speed.offsetX}px, ${speed.offsetY}px) rotate(${rotation}deg)`;
        }
      });
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const handleMouseEnter = (index: number) => (e: React.MouseEvent<HTMLImageElement>) => {
    const speed = speedsRef.current[index];
    speed.isHovered = true;
    
    // Create repulsion effect - push away from cursor
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = centerX - e.clientX;
    const deltaY = centerY - e.clientY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const repulsionStrength = 20;
    
    if (distance > 0) {
      speed.targetOffsetX = (deltaX / distance) * repulsionStrength;
      speed.targetOffsetY = (deltaY / distance) * repulsionStrength;
    }
  };

  const handleMouseLeave = (index: number) => () => {
    const speed = speedsRef.current[index];
    speed.isHovered = false;
    speed.targetOffsetX = 0;
    speed.targetOffsetY = 0;
  };

  return (
    <section className="py-12 relative overflow-hidden w-full ">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#D799FE3D] rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-[#D799FE3D] rounded-full blur-3xl opacity-10"></div>
      

      <div className="w-full px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[48px] lg:text-[64px] font-medium text-white mb-2">
            What is EverXNode NFT <span className="text-[#D799FE]">Node</span> licensing<span className="text-[#D799FE]">?</span>
          </h2>
          <div className="text-center max-w-6xl mx-auto mb-8">
            <p className="text-[24px] font-thin text-center  text-white">
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
            <div className="bg-[rgba(217,217,217,0.2)] rounded-full px-8 py-2 w-full relative shadow-lg shadow-[#D799FE]/30">
              <h3 className="text-[32px] font-extralight text-white">
                Access to AI Compute Rewards
              </h3>
              {/* Triangular connector - hollow pointing down */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full mb-2">
                <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-[#D799FE]/30"></div>
              </div>
            </div>
            
            {/* Description Card */}
            <div className="bg-[rgba(217,217,217,0.2)] backdrop-blur-sm rounded-3xl p-8 py-12 w-full flex flex-col items-center mt-2 group">
              <p className="text-white font-thin text-[32px] mb-8 leading-relaxed">
                Earn EverXNode tokens by contributing your GPU/CPU power.
              </p>
              
              {/* Shape Image */}
              <div className="w-full h-full flex items-center justify-center">
                <img 
                  ref={img1Ref}
                  src="/shape1.png" 
                  alt="AI Compute Rewards" 
                  width={250}
                  height={250}
                  className="object-contain transition-all duration-500 group-hover:scale-110"
                  onMouseEnter={handleMouseEnter(0)}
                  onMouseLeave={handleMouseLeave(0)}
                />
              </div>
            </div>
          </div>

          {/* Card 2: Exclusive Governance Rights */}
          <div className="flex flex-col items-center text-center">
            {/* Header Card */}
            <div className="bg-[rgba(217,217,217,0.2)] rounded-full px-8 py-2 w-full relative shadow-lg shadow-[#D799FE]/30">
              <h3 className="text-[32px] font-extralight text-white">
                Exclusive Governance Rights
              </h3>
              {/* Triangular connector - hollow pointing down */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full mb-2">
                <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-[#D799FE]/30"></div>
              </div>
            </div>
            
            {/* Description Card */}
            <div className="bg-[rgba(217,217,217,0.2)] backdrop-blur-sm rounded-3xl p-8 py-12 w-full flex flex-col items-center mt-2 group">
              <p className="text-white font-thin text-[32px] mb-8 leading-relaxed">
                Vote on protocol updates and network decisions.
              </p>
              
              {/* Shape Image */}
              <div className="w-full h-full flex items-center justify-center">
                <img 
                  ref={img2Ref}
                  src="/shape2.png" 
                  alt="Governance Rights" 
                  width={250}
                  height={250}
                  className="object-contain transition-all duration-500 group-hover:scale-110"
                  onMouseEnter={handleMouseEnter(1)}
                  onMouseLeave={handleMouseLeave(1)}
                />
              </div>
            </div>
          </div>

          {/* Card 3: Staking Boosts & Tiered Rewards */}
          <div className="flex flex-col items-center text-center">
                        {/* Header Card */}
            <div className="bg-[rgba(217,217,217,0.2)] rounded-full px-8 py-2 w-full relative shadow-lg shadow-[#D799FE]/30">
                 <h3 className="text-[32px] font-extralight text-white">
                 Staking Boosts & Tiered Rewards
              </h3>
              {/* Triangular connector - hollow pointing down */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full mb-2">
                <div className="w-0 h-0 border-l-[12px] border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-[#D799FE]/30"></div>
              </div>
            </div>
            
            {/* Description Card */}
            <div className="bg-[rgba(217,217,217,0.2)] backdrop-blur-sm rounded-3xl p-8 py-12 w-full flex flex-col items-center mt-2 group">
                 <p className="text-white font-thin text-[32px] mb-8 leading-relaxed">
                 Unlock higher earnings and multipliers for NFT stakers.
              </p>
              
              {/* Shape Image */}
              <div className="w-full h-full flex items-center justify-center">
                <img 
                  ref={img3Ref}
                  src="/shape3.png" 
                  alt="Staking Rewards" 
                  width={250}
                  height={250}
                  className="object-contain transition-all duration-500 group-hover:scale-110"
                  onMouseEnter={handleMouseEnter(2)}
                  onMouseLeave={handleMouseLeave(2)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 