export default function Footer() {
  return (
    <footer className="relative mt-16 bg-black bg-opacity-50 text-white overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20 flex items-center justify-center">
        <img 
          src="/footerimage.png" 
          alt="" 
          className="max-w-full max-h-full object-contain"
        />
      </div>
    
              <div className="relative z-10 container-1400 py-12">
          <div className="grid grid-cols-1 md:grid-cols-8 gap-8">
                      <div className="md:col-span-2">
              <div className="grid items-center mb-4">
                <img src="/logo.png" alt="EverXNode" className="w-20 h-20 mr-3" />
                <h3 className="text-lg font-semibold">EverXNode</h3>
              </div>
              <p className="text-gray-400">
                Power the Future of AI with EverXNode's NFT Node Licensing
              </p>
            </div>
            <div className="md:col-span-4 text-center">
              <h4 className="text-md font-semibold mb-4">Explore</h4>
              <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="/token-utility" className="text-gray-400 hover:text-white">Token Utility</a></li>
                <li><a href="/whitelisting" className="text-gray-400 hover:text-white">Whitelisting</a></li>
                <li><a href="/nft-licensing" className="text-gray-400 hover:text-white">NFT Licensing</a></li>
                <li><a href="/about" className="text-gray-400 hover:text-white">About us</a></li>
              </ul>
            </div>
           <div className="hidden md:block md:col-span-2">
             <button className="bg-gradient-to-r from-[#CA5DE5] to-[#5B5B5B] text-white px-8 py-3 rounded-full font-semibold hover:from-[#B54DD4] hover:to-[#4A4A4A] transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_#CA5DE5] hover:shadow-[0_0_40px_#CA5DE5]">
               Contact Us
             </button>
            </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 EverXNode. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 