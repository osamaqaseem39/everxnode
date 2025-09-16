export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 bg-transparent relative overflow-hidden min-h-screen flex items-center">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#D799FE3D] rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-[#D799FE3D] rounded-full blur-3xl opacity-20"></div>
      
      <div className="container-1400 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - How It Works Visual */}
          <div className="relative">
            <div className="w-full h-[600px] flex items-center justify-center">
              {/* Main Element */}
              <div className="relative w-96 h-96 flex items-center justify-center">
                {/* Glow Effect */}
                <div className="absolute inset-0 w-96 h-96 bg-gradient-to-br from-[#D799FE]/30 via-purple-500/20 to-teal-500/30 rounded-full blur-3xl opacity-60 animate-pulse"></div>
                <img 
                  src="/ring.gif" 
                  alt="How It Works Element" 
                  className="w-full h-full object-contain relative z-10"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Process Steps */}
          <div className="space-y-8">
            {/* Section Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white mb-6 text-center">
              How It <span className="text-[#D799FE]">Works?</span>
            </h2>

            {/* Step 1: REGISTER FOR THE WHITELIST */}
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 hover:border-[#D799FE3D] transition-all duration-300 group">
              <div className="flex items-center space-x-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <img 
                    src="/hiwcard1.png" 
                    alt="Register for Whitelist" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 uppercase tracking-wide">
                    REGISTER FOR THE WHITELIST
                  </h3>
                  <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed">
                    Sign up to secure priority access before the public mint goes live.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2: RECEIVE YOUR ALLOCATION */}
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 hover:border-[#D799FE3D] transition-all duration-300 group">
              <div className="flex items-center space-x-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <img 
                    src="/hiwcard2.png" 
                    alt="Receive Your Allocation" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 uppercase tracking-wide">
                    RECEIVE YOUR ALLOCATION
                  </h3>
                  <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed">
                    If selected, you'll be granted the opportunity to purchase an exclusive V-1 Node license.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3: ACTIVATE YOUR NODE */}
            <div className="bg-gray-900/60 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-6 hover:border-[#D799FE3D] transition-all duration-300 group">
              <div className="flex items-center space-x-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <img 
                    src="/hiwcard3.png" 
                    alt="Activate Your Node" 
                    className="w-12 h-12 object-contain"
                  />
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-white mb-2 uppercase tracking-wide">
                    ACTIVATE YOUR NODE
                  </h3>
                  <p className="text-white/70 text-sm sm:text-base md:text-lg leading-relaxed">
                    Deploy your node, connect your CPU/GPU resources and start earning rewards by powering AI compute tasks.
                  </p>
                </div>
              </div>
            </div>

            {/* Scroll/Learn More Indicator */}
            <div className="text-center pt-8">
              <div className="inline-block bg-[#D799FE3D] rounded-lg p-3">
                <svg className="w-6 h-6 text-[#D799FE]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 