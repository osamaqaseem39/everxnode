'use client'

import { useRef, useEffect, useState } from 'react'

export default function NFTLicensing() {
  const img1Ref = useRef<HTMLImageElement>(null);
  const img2Ref = useRef<HTMLImageElement>(null);
  const img3Ref = useRef<HTMLImageElement>(null);
  const [openCards, setOpenCards] = useState<boolean[]>([false, false, false]);
  const speedsRef = useRef([
    { ref: img1Ref, normalSpeed: 12000, slowSpeed: 20000, currentSpeed: 12000, isHovered: false, offsetX: 0, offsetY: 0, targetOffsetX: 0, targetOffsetY: 0, rotation: 0, targetRotation: 0 },
    { ref: img2Ref, normalSpeed: 15000, slowSpeed: 25000, currentSpeed: 15000, isHovered: false, offsetX: 0, offsetY: 0, targetOffsetX: 0, targetOffsetY: 0, rotation: 0, targetRotation: 0 },
    { ref: img3Ref, normalSpeed: 18000, slowSpeed: 30000, currentSpeed: 18000, isHovered: false, offsetX: 0, offsetY: 0, targetOffsetX: 0, targetOffsetY: 0, rotation: 0, targetRotation: 0 }
  ]);

  useEffect(() => {
    let animationId: number;
    let lastTime = Date.now();
    const speeds = speedsRef.current;

    const animate = () => {
      const currentTime = Date.now();
      const deltaTime = currentTime - lastTime;
      lastTime = currentTime;
      
      speeds.forEach((speed, index) => {
        if (speed.ref.current) {
          // Smoothly transition speed
          const targetSpeed = speed.isHovered ? speed.slowSpeed : speed.normalSpeed;
          speed.currentSpeed += (targetSpeed - speed.currentSpeed) * 0.02;
          
          // Smooth repulsion effect
          speed.offsetX += (speed.targetOffsetX - speed.offsetX) * 0.15;
          speed.offsetY += (speed.targetOffsetY - speed.offsetY) * 0.15;
          
          // Smooth rotation effect
          speed.rotation += (speed.targetRotation - speed.rotation) * 0.1;
          
          // Apply transform with repulsion and rotation
          speed.ref.current.style.transform = `translate(${speed.offsetX}px, ${speed.offsetY}px) rotate(${speed.rotation}deg)`;
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
    const repulsionStrength = 30;
    
    if (distance > 0) {
      speed.targetOffsetX = (deltaX / distance) * repulsionStrength;
      speed.targetOffsetY = (deltaY / distance) * repulsionStrength;
      
      // Add rotation based on cursor position relative to image center
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      speed.targetRotation = angle * 0.3; // Subtle rotation based on cursor direction
    }
  };

  const handleMouseMove = (index: number) => (e: React.MouseEvent<HTMLImageElement>) => {
    const speed = speedsRef.current[index];
    if (!speed.isHovered) return;
    
    // Update repulsion effect based on current cursor position
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = centerX - e.clientX;
    const deltaY = centerY - e.clientY;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    const repulsionStrength = Math.max(10, 50 - distance * 0.2); // Dynamic strength based on distance
    
    if (distance > 0) {
      speed.targetOffsetX = (deltaX / distance) * repulsionStrength;
      speed.targetOffsetY = (deltaY / distance) * repulsionStrength;
      
      // Dynamic rotation based on cursor position and distance
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      const rotationIntensity = Math.min(1, distance / 100); // More rotation when cursor is further
      speed.targetRotation = angle * 0.2 * rotationIntensity;
    }
  };

  const handleMouseLeave = (index: number) => () => {
    const speed = speedsRef.current[index];
    speed.isHovered = false;
    speed.targetOffsetX = 0;
    speed.targetOffsetY = 0;
    speed.targetRotation = 0; // Return to original rotation
  };

  const toggleCard = (index: number) => {
    setOpenCards(prev => {
      const newCards = [...prev];
      newCards[index] = !newCards[index];
      return newCards;
    });
  };

  return (
    <section className="py-12 container-1400 relative overflow-hidden w-full ">
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-[#D799FE3D] rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-[#D799FE3D] rounded-full blur-3xl opacity-10"></div>
      

      <div className=" relative z-10">
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
            <div className="bg-[rgba(217,217,217,0.2)] rounded-full  py-2 w-full relative shadow-lg shadow-[#D799FE]/30 cursor-pointer" onClick={() => toggleCard(0)}>
              <h3 className="text-[23px] font-extralight text-white">
                Access to AI Compute Rewards
              </h3>
              {/* Triangular connector - hollow pointing down */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full mb-2">
                <div className={`w-0 h-0 border-l-[12px] border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-[#D799FE]/30 transition-transform duration-300 ${openCards[0] ? 'rotate-180' : ''}`}></div>
              </div>
            </div>
            
            {/* Description Card */}
            <div className={`bg-[rgba(217,217,217,0.2)] backdrop-blur-sm rounded-3xl p-8 py-12 w-full flex flex-col items-center mt-2 group transition-all duration-500 overflow-hidden ${openCards[0] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 p-0 py-0'}`}>
              <p className="text-white font-extralight text-[20px] mb-8 leading-relaxed">
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
                  className="object-contain transition-all duration-500 group-hover:scale-110"
                  onMouseEnter={handleMouseEnter(0)}
                  onMouseMove={handleMouseMove(0)}
                  onMouseLeave={handleMouseLeave(0)}
                />
              </div>
            </div>
          </div>

          {/* Card 2: Exclusive Governance Rights */}
          <div className="flex flex-col items-center text-center">
            {/* Header Card */}
            <div className="bg-[rgba(217,217,217,0.2)] rounded-full  py-2 w-full relative shadow-lg shadow-[#D799FE]/30 cursor-pointer" onClick={() => toggleCard(1)}>
              <h3 className="text-[23px] font-extralight text-white">
                Exclusive Governance Rights
              </h3>
              {/* Triangular connector - hollow pointing down */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full mb-2">
                <div className={`w-0 h-0 border-l-[12px] border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-[#D799FE]/30 transition-transform duration-300 ${openCards[1] ? 'rotate-180' : ''}`}></div>
              </div>
            </div>
            
            {/* Description Card */}
            <div className={`bg-[rgba(217,217,217,0.2)] backdrop-blur-sm rounded-3xl p-8 py-12 w-full flex flex-col items-center mt-2 group transition-all duration-500 overflow-hidden ${openCards[1] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 p-0 py-0'}`}>
              <p className="text-white font-extralight text-[20px] mb-8 leading-relaxed">
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
                  className="object-contain transition-all duration-500 group-hover:scale-110"
                  onMouseEnter={handleMouseEnter(1)}
                  onMouseMove={handleMouseMove(1)}
                  onMouseLeave={handleMouseLeave(1)}
                />
              </div>
            </div>
          </div>

          {/* Card 3: Staking Boosts & Tiered Rewards */}
          <div className="flex flex-col items-center text-center">
                        {/* Header Card */}
            <div className="bg-[rgba(217,217,217,0.2)] rounded-full  py-2 w-full relative shadow-lg shadow-[#D799FE]/30 cursor-pointer" onClick={() => toggleCard(2)}>
                 <h3 className="text-[23px] font-extralight text-white">
                 Staking Boosts & Tiered Rewards
              </h3>
              {/* Triangular connector - hollow pointing down */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full mb-2">
                <div className={`w-0 h-0 border-l-[12px] border-r-[12px] border-t-[12px] border-l-transparent border-r-transparent border-t-[#D799FE]/30 transition-transform duration-300 ${openCards[2] ? 'rotate-180' : ''}`}></div>
              </div>
            </div>
            
            {/* Description Card */}
            <div className={`bg-[rgba(217,217,217,0.2)] backdrop-blur-sm rounded-3xl p-8 py-12 w-full flex flex-col items-center mt-2 group transition-all duration-500 overflow-hidden ${openCards[2] ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 p-0 py-0'}`}>
                 <p className="text-white font-extralight text-[20px] mb-8 leading-relaxed">
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
                  className="object-contain transition-all duration-500 group-hover:scale-110"
                  onMouseEnter={handleMouseEnter(2)}
                  onMouseMove={handleMouseMove(2)}
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
