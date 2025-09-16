export default function ContactHero() {
  return (
    <section className="py-24 relative overflow-hidden bg-transparent">
      {/* Background Glows - Matching website style */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D799FE3D] rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D799FE3D] rounded-full blur-3xl opacity-20"></div>
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#D799FE2D] rounded-full blur-2xl opacity-15"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D799FE2D] rounded-full blur-2xl opacity-15"></div>
      
      <div className="container-1400 w-full relative z-10 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium text-white mb-2">
            Contact Us
          </h2>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-thin text-white max-w-7xl mx-auto mb-8">
            Get in touch with our team for any questions or inquiries.
          </p>
        </div>

        {/* Top Buttons */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex gap-8">
            <a 
              href="https://discord.gg/vu5c3jn2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-white text-base sm:text-lg md:text-xl font-medium shadow-lg shadow-[#D799FE3D] hover:bg-white/[0.05] hover:border-white/20 hover:shadow-xl hover:shadow-[#D799FE4D] transition-all duration-300 transform hover:scale-105"
            >
              DISCORD
            </a>
            <a 
              href="https://x.com/EverXNode" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-white text-base sm:text-lg md:text-xl font-medium shadow-lg shadow-[#D799FE3D] hover:bg-white/[0.05] hover:border-white/20 hover:shadow-xl hover:shadow-[#D799FE4D] transition-all duration-300 transform hover:scale-105"
            >
              TWITTER
            </a>
            <a 
              href="https://www.instagram.com/everxnode/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-white text-base sm:text-lg md:text-xl font-medium shadow-lg shadow-[#D799FE3D] hover:bg-white/[0.05] hover:border-white/20 hover:shadow-xl hover:shadow-[#D799FE4D] transition-all duration-300 transform hover:scale-105"
            >
              INSTAGRAM
            </a>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Spiral Image */}
          <div className="relative">
            <div className="relative w-full h-[600px] flex items-center justify-center">
              {/* Spiral Image with Glow Effects */}
              <div className="relative w-full h-full max-w-2xl max-h-2xl">
                <img 
                  src="/spiral.png" 
                  alt="Spiral" 
                  className="w-full h-full object-contain relative z-10"
                />
                
                {/* Main Glow Effect - Matching website style */}
                <div className="absolute inset-0 w-full h-full bg-[#D799FE3D] rounded-full blur-3xl opacity-60"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-sm relative">
            {/* Form Glow Effects - Matching website style */}
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#D799FE3D] rounded-full blur-2xl opacity-20"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#D799FE3D] rounded-full blur-2xl opacity-15"></div>
            
            <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-white mb-8 relative z-10">
              Your Detail
            </h3>
            
            <form className="space-y-6 relative z-10">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-sm sm:text-base md:text-lg font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b-2 border-[#D799FE] text-white placeholder-white/50 py-3 focus:outline-none focus:border-[#C088E8] transition-colors text-sm sm:text-base md:text-lg"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm sm:text-base md:text-lg font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-transparent border-b-2 border-[#D799FE] text-white placeholder-white/50 py-3 focus:outline-none focus:border-[#C088E8] transition-colors text-sm sm:text-base md:text-lg"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-white text-sm sm:text-base md:text-lg font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Message Subject"
                  className="w-full bg-transparent border-b-2 border-[#D799FE] text-white placeholder-white/50 py-3 focus:outline-none focus:border-[#C088E8] transition-colors text-sm sm:text-base md:text-lg"
                />
              </div>

              {/* Comments/Questions */}
              <div>
                <label className="block text-white text-sm sm:text-base md:text-lg font-medium mb-2">
                  Comments / Questions
                </label>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full bg-transparent border-b-2 border-[#D799FE] text-white placeholder-white/50 py-3 focus:outline-none focus:border-[#C088E8] transition-colors resize-none text-sm sm:text-base md:text-lg"
                ></textarea>
              </div>

              {/* Share Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#D799FE] to-pink-400 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-full font-bold text-base sm:text-lg md:text-xl hover:from-[#C088E8] hover:to-pink-500 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-[#D799FE3D] hover:shadow-[#D799FE66]"
                >
                  SHARE
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
} 