export default function AboutUs() {
  return (
    <section className="py-24 relative overflow-hidden bg-transparent">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-[#D799FE3D] rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#D799FE3D] rounded-full blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#D799FE3D] rounded-full blur-3xl opacity-10"></div>
      
      <div className="container-1400 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6">
            About <span className="text-[#D799FE]">EverXNode</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/80 max-w-3xl mx-auto">
            Pioneering the future of decentralized AI compute infrastructure
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Left Side - Mission Statement */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Our Mission
              </h3>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed">
                EverXNode is revolutionizing the AI compute landscape by creating a decentralized network 
                that democratizes access to high-performance computing resources. We're building the 
                infrastructure that will power the next generation of AI applications.
              </p>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed">
                By combining blockchain technology with AI compute capabilities, we're enabling 
                individuals and organizations to participate in the AI revolution while earning 
                rewards for their contributions.
              </p>
            </div>
            
            {/* Key Stats */}
            <div className="grid grid-cols-2 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#D799FE] mb-2">100K+</div>
                <div className="text-white/70">Active Nodes</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#D799FE] mb-2">$50M+</div>
                <div className="text-white/70">Total Rewards</div>
              </div>
            </div>
          </div>

          {/* Right Side - Vision & Values */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                Vision & Values
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#D799FE3D] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-[#D799FE] rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white mb-2">Decentralization</h4>
                    <p className="text-sm sm:text-base md:text-lg text-white/70">Building a truly distributed network that empowers individuals worldwide</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#D799FE3D] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-[#D799FE] rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white mb-2">Innovation</h4>
                    <p className="text-sm sm:text-base md:text-lg text-white/70">Pushing the boundaries of what's possible in AI and blockchain integration</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-[#D799FE3D] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-3 h-3 bg-[#D799FE] rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-white mb-2">Community</h4>
                    <p className="text-sm sm:text-base md:text-lg text-white/70">Fostering a collaborative ecosystem where everyone benefits from growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-gray-900/50 border border-[#D799FE3D] rounded-2xl p-12">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Ready to Join the Revolution?
          </h3>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
            Be part of the future of decentralized AI compute. Join thousands of node operators 
            who are already earning rewards while powering the next generation of AI applications.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#D799FE] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base md:text-lg font-semibold hover:bg-[#C088E8] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#D799FE3D]">
              Get Started Today
            </button>
            <button className="border border-[#D799FE] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-sm sm:text-base md:text-lg font-semibold hover:bg-[#D799FE] hover:text-black transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 