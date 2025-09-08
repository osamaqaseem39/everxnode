export default function ContactHero() {
  return (
    <section className="min-h-screen bg-gradient-to-bl from-cyan-900 via-black to-pink-900 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D799FE3D] rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D799FE3D] rounded-full blur-3xl opacity-20"></div>
      <div className="absolute top-1/2 left-1/6 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-1/3 right-1/6 w-80 h-80 bg-pink-400/15 rounded-full blur-3xl opacity-25"></div>
      <div className="absolute top-1/6 right-1/3 w-72 h-72 bg-purple-400/20 rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/6 left-1/3 w-56 h-56 bg-blue-400/15 rounded-full blur-3xl opacity-25"></div>
      
      {/* Top Right Glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D799FE3D] rounded-full blur-3xl opacity-30"></div>
      <div className="absolute top-8 right-8 w-32 h-32 bg-[#D799FE3D] rounded-full blur-2xl opacity-40"></div>
      <div className="absolute top-16 right-24 w-20 h-20 bg-cyan-400/25 rounded-full blur-xl opacity-30"></div>
      <div className="absolute top-24 right-12 w-16 h-16 bg-pink-400/20 rounded-full blur-lg opacity-25"></div>
      <div className="absolute top-12 right-32 w-12 h-12 bg-purple-400/15 rounded-full blur-md opacity-20"></div>
      
      <div className="container-1400 w-full relative z-10 py-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-[48px] lg:text-[64px] font-medium text-white mb-2">
            Contact Us
          </h2>
          <p className="text-[40px] font-thin text-white max-w-7xl mx-auto mb-8">
            Get in touch with our team for any questions or inquiries.
          </p>
        </div>

        {/* Top Buttons */}
        <div className="flex flex-col items-center mb-16">
          <div className="flex gap-8">
            <button className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-full px-8 py-4 text-white text-lg font-medium shadow-lg shadow-[#D799FE3D] hover:bg-white/[0.05] hover:border-white/20 hover:shadow-xl hover:shadow-[#D799FE4D] transition-all duration-300 transform hover:scale-105">
              DISCORD
            </button>
            <button className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-full px-8 py-4 text-white text-lg font-medium shadow-lg shadow-[#D799FE3D] hover:bg-white/[0.05] hover:border-white/20 hover:shadow-xl hover:shadow-[#D799FE4D] transition-all duration-300 transform hover:scale-105">
              TWITTER
            </button>
            <button className="bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-full px-8 py-4 text-white text-lg font-medium shadow-lg shadow-[#D799FE3D] hover:bg-white/[0.05] hover:border-white/20 hover:shadow-xl hover:shadow-[#D799FE4D] transition-all duration-300 transform hover:scale-105">
              INSTAGRAM
            </button>
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
                
                {/* Purple Glow */}
                <div className="absolute inset-0 w-full h-full bg-[#D799FE3D] rounded-full blur-3xl opacity-60"></div>
                
                {/* Teal Glow */}
                <div className="absolute inset-0 w-full h-full bg-cyan-400/20 rounded-full blur-3xl opacity-40"></div>
                
                {/* Additional Glow Effects */}
                <div className="absolute inset-0 w-full h-full bg-[#D799FE3D] rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute inset-0 w-full h-full bg-cyan-400/10 rounded-full blur-3xl opacity-20 animate-pulse"></div>
              </div>
              
              {/* Additional Glow Elements Around Spiral */}
              <div className="absolute top-8 left-8 w-20 h-20 bg-pink-400/20 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <div className="absolute bottom-12 right-12 w-16 h-16 bg-blue-400/15 rounded-full blur-xl opacity-25 animate-pulse"></div>
              <div className="absolute top-1/2 -left-4 w-12 h-12 bg-purple-400/20 rounded-full blur-lg opacity-20 animate-pulse"></div>
              <div className="absolute top-1/4 -right-6 w-14 h-14 bg-cyan-400/15 rounded-full blur-lg opacity-25 animate-pulse"></div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 backdrop-blur-sm relative">
            {/* Form Glow Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#D799FE3D]/10 via-transparent to-[#D799FE3D]/10 rounded-2xl"></div>
            <div className="absolute -top-4 -left-4 w-32 h-32 bg-[#D799FE3D] rounded-full blur-2xl opacity-40"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-cyan-400/20 rounded-full blur-2xl opacity-30"></div>
            <div className="absolute top-1/2 -right-8 w-16 h-16 bg-pink-400/15 rounded-full blur-xl opacity-25"></div>
            
            <h3 className="text-2xl font-medium text-white mb-8 relative z-10">
              Your Detail
            </h3>
            
            <form className="space-y-6 relative z-10">
              {/* Name and Email Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b-2 border-[#D799FE] text-white placeholder-white/50 py-3 focus:outline-none focus:border-[#C088E8] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white text-sm font-medium mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-transparent border-b-2 border-[#D799FE] text-white placeholder-white/50 py-3 focus:outline-none focus:border-[#C088E8] transition-colors"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Message Subject"
                  className="w-full bg-transparent border-b-2 border-[#D799FE] text-white placeholder-white/50 py-3 focus:outline-none focus:border-[#C088E8] transition-colors"
                />
              </div>

              {/* Comments/Questions */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Comments / Questions
                </label>
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full bg-transparent border-b-2 border-[#D799FE] text-white placeholder-white/50 py-3 focus:outline-none focus:border-[#C088E8] transition-colors resize-none"
                ></textarea>
              </div>

              {/* Share Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#D799FE] to-pink-400 text-white px-12 py-4 rounded-full font-bold text-lg hover:from-[#C088E8] hover:to-pink-500 transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-[#D799FE3D] hover:shadow-[#D799FE66]"
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