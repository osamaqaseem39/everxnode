export default function HowItWorks() {
  return (
    <section className="py-24 bg-black relative overflow-hidden min-h-screen flex items-center">
      {/* Background Glows */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#D799FE3D] rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-[#D799FE3D] rounded-full blur-3xl opacity-20"></div>
      
      <div className="container-1400 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - 3D Holographic Object */}
          <div className="relative">
            <div className="w-full h-[600px] flex items-center justify-center">
              {/* Complex 3D Intertwined Shape */}
              <div className="relative w-96 h-96">
                {/* Main Ring Structure */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Outer Ring */}
                  <div className="w-80 h-80 border-4 border-transparent rounded-full bg-gradient-to-r from-pink-400 via-purple-500 to-teal-400 transform rotate-45 opacity-80"></div>
                  
                  {/* Middle Ring */}
                  <div className="absolute inset-8 w-64 h-64 border-4 border-transparent rounded-full bg-gradient-to-r from-light-blue-400 via-white to-pink-300 transform -rotate-12 opacity-80"></div>
                  
                  {/* Inner Ring */}
                  <div className="absolute inset-16 w-48 h-48 border-4 border-transparent rounded-full bg-gradient-to-r from-teal-400 via-purple-400 to-light-blue-300 transform rotate-24 opacity-80"></div>
                  
                  {/* Central Core */}
                  <div className="absolute inset-24 w-32 h-32 bg-gradient-to-br from-white via-pink-200 to-purple-300 rounded-full shadow-2xl"></div>
                </div>
                
                {/* Additional Interconnected Elements */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full opacity-80"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-teal-400 to-light-blue-500 rounded-full opacity-80"></div>
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-300 rounded-full opacity-80"></div>
                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-light-blue-400 to-teal-300 rounded-full opacity-80"></div>
                
                {/* Glow Effects */}
                <div className="absolute inset-0 w-96 h-96 bg-gradient-to-br from-pink-500/20 via-purple-500/20 to-teal-500/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Process Steps */}
          <div className="space-y-8">
            {/* Section Title */}
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-12">
              How It Works?
            </h1>

            {/* Step 1: REGISTER FOR THE WHITELIST */}
            <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-8 hover:border-[#D799FE3D] transition-all duration-300 group">
              <div className="flex items-start space-x-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#D799FE3D] rounded-full flex items-center justify-center">
                    <div className="relative">
                      <div className="w-8 h-8 bg-white rounded-full"></div>
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-[#D799FE] rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">+</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-4">
                    REGISTER FOR THE WHITELIST
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Sign up to secure priority access before the ecosystem goes live.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 2: RECEIVE YOUR ALLOCATION */}
            <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-8 hover:border-[#D799FE3D] transition-all duration-300 group">
              <div className="flex items-start space-x-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#D799FE3D] rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 relative">
                      {/* Network Nodes */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
                      <div className="absolute top-2 left-2 w-2 h-2 bg-white rounded-full"></div>
                      <div className="absolute top-2 right-2 w-2 h-2 bg-white rounded-full"></div>
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
                      
                      {/* Connection Lines */}
                      <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-px h-1 bg-white opacity-60"></div>
                      <div className="absolute top-2 left-2 w-px h-1 bg-white opacity-60"></div>
                      <div className="absolute top-2 right-2 w-px h-1 bg-white opacity-60"></div>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-4">
                    RECEIVE YOUR ALLOCATION
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    If selected, you'll be granted the opportunity to purchase an exclusive NFT Node License.
                  </p>
                </div>
              </div>
            </div>

            {/* Step 3: ACTIVATE YOUR NODE */}
            <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-8 hover:border-[#D799FE3D] transition-all duration-300 group">
              <div className="flex items-start space-x-6">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-[#D799FE3D] rounded-full flex items-center justify-center">
                    <div className="w-8 h-8 relative">
                      {/* Complex Star/Snowflake */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-6 h-6 border-2 border-white rounded-full"></div>
                      </div>
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-white"></div>
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-white"></div>
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-2 h-1 bg-white"></div>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-1 bg-white"></div>
                      <div className="absolute top-1 left-1 w-1 h-1 bg-white transform rotate-45"></div>
                      <div className="absolute top-1 right-1 w-1 h-1 bg-white transform -rotate-45"></div>
                      <div className="absolute bottom-1 left-1 w-1 h-1 bg-white transform -rotate-45"></div>
                      <div className="absolute bottom-1 right-1 w-1 h-1 bg-white transform rotate-45"></div>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-4">
                    ACTIVATE YOUR NODE
                  </h3>
                  <p className="text-white/80 text-lg leading-relaxed">
                    Deploy your node, connect your GPU/CPU resources, and start earning rewards by powering AI workloads.
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