'use client'

import Link from 'next/link'
import { useRef, useEffect } from 'react'

export default function WhyJoin() {
  const icon1Ref = useRef<HTMLImageElement>(null);
  const icon2Ref = useRef<HTMLImageElement>(null);
  const icon3Ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let animationId: number;
    let startTime = Date.now();
    const iconRefs = [icon1Ref, icon2Ref, icon3Ref];

    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      
      iconRefs.forEach((iconRef) => {
        if (iconRef.current) {
          // Continuous spin animation (2000ms per rotation)
          const spinRotation = (elapsed / 4000) * 360;
          iconRef.current.style.transform = `rotate(${spinRotation}deg)`;
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
    <section id="why-join" className="py-24 pt-48 bg-transparent relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-[#D799FE3D] rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-[#D799FE3D] rounded-full blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-6xl font-medium text-white mb-6">
            Why <span className="text-[#D799FE]">Join?</span>
          </h2>
        </div>

        {/* Benefits Cards - Horizontal Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: EXCLUSIVE EARLY ADOPTER BENEFITS */}
          <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-8 hover:border-[#D799FE3D] transition-all duration-300 group">
            <div className="flex flex-col items-center text-center space-y-6">
              {/* Top Icon - Crystal */}
              <div className="w-32 h-32 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-400 via-cyan-300 to-blue-400 rounded-lg transform rotate-45 shadow-2xl"></div>
                </div>
                <div className="absolute inset-0 w-20 h-20 bg-[#D799FE3D] rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div>
                <h2 className="text-xl font-bold text-white mb-4 leading-tight">
                  EXCLUSIVE EARLY ADOPTER BENEFITS
                </h2>
                <p className="text-white/80 text-sm leading-relaxed">
                  AS A WHITELIST MEMBER, YOU'LL UNLOCK PREMIUM REWARD MULTIPLIERS DESIGNED TO MAXIMIZE YOUR EARNINGS FROM THE VERY BEGINNING. EARLY ADOPTERS ENJOY PRIORITY ACCESS TO NETWORK BENEFITS.
                </p>
              </div>
              
              {/* Bottom Icon - Polygon Rings */}
              <div className="w-48 h-48 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    ref={icon1Ref}
                    src="/polygon.png" 
                    alt="Polygon Rings" 
                    className="w-48 h-48 object-contain filter brightness-110"
                  />
                </div>
                <div className="absolute inset-0 w-20 h-20 bg-[#D799FE3D] rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          {/* Card 2: PASSIVE INCOME POTENTIAL */}
          <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-8 hover:border-[#D799FE3D] transition-all duration-300 group">
            <div className="flex flex-col items-center text-center space-y-6">
              {/* Top Icon - Logo */}
              <div className="w-32 h-32 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    src="/logo.png" 
                    alt="EverX Logo" 
                      className="w-32 h-32 object-contain filter brightness-110"
                  />
                </div>
                <div className="absolute inset-0 w-20 h-20 bg-[#D799FE3D] rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div>
                <h2 className="text-xl font-bold text-white mb-4 leading-tight">
                  PASSIVE INCOME POTENTIAL
                </h2>
                <p className="text-white/80 text-sm leading-relaxed">
                  BY OPERATING AN EVERXNODE NFT-LICENSED NODE, YOU'LL CONTINUOUSLY EARN REWARDS FROM AI WORKLOADS RUNNING ON THE DECENTRALIZED NETWORK. THIS CREATES A SUSTAINABLE, HANDS-FREE INCOME STREAM POWERED BY REAL DEMAND FOR COMPUTE RESOURCES.
                </p>
              </div>
              
              {/* Bottom Icon - Cubes */}
              <div className="w-48 h-48 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    ref={icon2Ref}
                    src="/cubes.png" 
                    alt="Cubes" 
                    className="w-48 h-48 object-contain filter brightness-110"
                  />
                </div>
                <div className="absolute inset-0 w-20 h-20 bg-[#D799FE3D] rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>

          {/* Card 3: LIMITED SUPPLY HIGH DEMAND */}
          <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-8 hover:border-[#D799FE3D] transition-all duration-300 group">
            <div className="flex flex-col items-center text-center space-y-6">
              {/* Top Icon - Crystal */}
              <div className="w-32 h-32 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-teal-400 via-cyan-300 to-blue-400 rounded-lg transform rotate-45 shadow-2xl"></div>
                </div>
                <div className="absolute inset-0 w-20 h-20 bg-[#D799FE3D] rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div>
                <h2 className="text-xl font-bold text-white mb-4 leading-tight">
                  LIMITED SUPPLY HIGH DEMAND
                </h2>
                <p className="text-white/80 text-sm leading-relaxed">
                  EVERXNODE NFT NODE LICENSES ARE SCARCE BY DESIGN, ONLY A FIXED NUMBER WILL EVER BE AVAILABLE. SECURING YOUR LICENSE EARLY ENSURES YOUR POSITION IN THE NETWORK BEFORE SUPPLY RUNS OUT AND SECONDARY MARKET DEMAND DRIVES UP VALUE.
                </p>
              </div>
              
              {/* Bottom Icon - Stack */}
              <div className="w-48 h-48 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <img 
                    ref={icon3Ref}
                    src="/ring.png" 
                    alt="Stack" 
                    className="w-48 h-48 object-contain filter brightness-110"
                  />
                </div>
                <div className="absolute inset-0 w-20 h-20 bg-[#D799FE3D] rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Link href="/whitelisting" className="bg-gradient-to-r from-[#D799FE] to-pink-400 text-white px-12 py-4 rounded-full text-xl font-bold hover:from-[#C088E8] hover:to-pink-500 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-[#D799FE3D] hover:shadow-[#D799FE66] inline-block">
            Join the Whitelist Now
          </Link>
        </div>
      </div>
    </section>
  )
} 