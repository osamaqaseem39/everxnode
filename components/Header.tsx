import Link from 'next/link'
import Image from 'next/image'

export default function Header() {
  return (
          <header>
      <div className="container-1400">
        <div className="flex justify-between items-center h-32">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex flex-col items-center">
              <div className="relative group">
                <div className="absolute inset-0 w-[73px] h-[63px] bg-[#D799FE3D] rounded-xl blur-md group-hover:blur-lg transition-all duration-300"></div>
                <Image
                  src="/logo.png"
                  alt="EverXNode Logo"
                  width={73}
                  height={63}
                  className="w-[73px] h-[63px] relative z-10 drop-shadow-xl filter brightness-110"
                  priority
                />
              </div>
              <Link href="/" className="text-sm font-medium text-white tracking-wide hover:text-[#D799FE] transition-colors duration-300 mt-1">
                EverXNode
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center justify-start">
            <div className="flex items-center space-x-2">
              <Link href="/" className="text-white hover:text-gray-200 px-3 py-2 text-base font-extralight transition-colors duration-200">
                Home
              </Link>
              <span className="text-white text-lg font-extralight">{'>'}</span>
              <Link href="/token-utility" className="text-white hover:text-gray-200 px-3 py-2 text-base font-extralight transition-colors duration-200">
                Token Utility
              </Link>
              <span className="text-white text-lg font-extralight">{'>'}</span>
              <Link href="/whitelisting" className="text-white hover:text-gray-200 px-3 py-2 text-base font-extralight transition-colors duration-200">
                Whitelisting
              </Link>
              <span className="text-white text-lg font-extralight">{'>'}</span>
              <Link href="/nft-licensing" className="text-white hover:text-gray-200 px-3 py-2 text-base font-extralight transition-colors duration-200">
                NFT Licensing
              </Link>
              <span className="text-white text-lg font-extralight">{'>'}</span>
              <Link href="/about" className="text-white hover:text-gray-200 px-3 py-2 text-base font-extralight transition-colors duration-200">
                About us
              </Link>
            </div>
          </nav>

          {/* Contact Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-[#CA5DE5] to-[#5B5B5B] text-white px-8 py-3 rounded-full font-semibold hover:from-[#B54DD4] hover:to-[#4A4A4A] transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_#CA5DE5] hover:shadow-[0_0_40px_#CA5DE5]">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white hover:text-purple-300">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
} 