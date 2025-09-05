export default function ContactHero() {
  return (
    <section className="min-h-screen bg-black relative overflow-hidden flex items-center">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D799FE3D] rounded-full blur-3xl opacity-20"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D799FE3D] rounded-full blur-3xl opacity-20"></div>
      
      <div className="container-1400 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Retro Computer */}
          <div className="relative">
            <div className="relative w-full h-[500px] flex items-center justify-center">
              {/* Retro Computer Base */}
              <div className="relative w-80 h-96">
                {/* Monitor Screen */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-64 h-48 bg-gradient-to-br from-[#D799FE] via-purple-500 to-pink-400 rounded-lg shadow-2xl shadow-[#D799FE3D] transform rotate-12">
                  {/* Screen Reflection */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent rounded-lg"></div>
                  {/* Screen Border */}
                  <div className="absolute inset-0 border-2 border-[#D799FE] rounded-lg"></div>
                </div>
                
                {/* Computer Base */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-72 h-32 bg-gradient-to-br from-[#D799FE] via-purple-600 to-blue-500 rounded-lg shadow-2xl shadow-[#D799FE3D]">
                  {/* Floppy Disk Slot */}
                  <div className="absolute top-4 left-8 w-16 h-8 bg-black/30 rounded-sm border border-[#D799FE]"></div>
                  {/* Buttons */}
                  <div className="absolute top-4 right-8 flex space-x-2">
                    <div className="w-4 h-4 bg-[#D799FE] rounded-full shadow-lg"></div>
                    <div className="w-4 h-4 bg-purple-400 rounded-full shadow-lg"></div>
                    <div className="w-4 h-4 bg-blue-400 rounded-full shadow-lg"></div>
                  </div>
                </div>
                
                {/* Glow Effects */}
                <div className="absolute inset-0 w-full h-full bg-[#D799FE3D] rounded-full blur-3xl opacity-40 animate-pulse"></div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Your Detail
            </h2>
            
            <form className="space-y-6">
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