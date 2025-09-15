'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="relative">
      <div className="container-1400">
        <div className="flex justify-between items-center h-32">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex flex-col items-center group">
              <div className="relative group">
                <div className="absolute inset-0 w-[73px] h-[63px] bg-[#D799FE3D] rounded-xl blur-md group-hover:blur-lg transition-all duration-300"></div>
                <Image
                  src="/logo.png"
                  alt="EverXNode Logo"
                  width={73}
                  height={63}
                  className="w-[73px] h-[63px] relative z-10 drop-shadow-xl filter brightness-110 group-hover:scale-105 transition-transform duration-300"
                  priority
                />
              </div>
              <span className="text-xs sm:text-sm md:text-base font-medium text-white tracking-wide group-hover:text-[#D799FE] transition-colors duration-300 mt-1">
                EverXNode
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center justify-start">
            <div className="flex items-center space-x-2">
              <Link href="/" className="text-white hover:text-gray-200 px-3 py-2 text-sm sm:text-base md:text-lg font-extralight transition-colors duration-200">
                Home
              </Link>
              <span className="text-white text-sm sm:text-base md:text-lg font-extralight">{'>'}</span>
              <Link href="/token-utility" className="text-white hover:text-gray-200 px-3 py-2 text-sm sm:text-base md:text-lg font-extralight transition-colors duration-200">
                Token Utility
              </Link>
              <span className="text-white text-sm sm:text-base md:text-lg font-extralight">{'>'}</span>
              <Link href="/whitelisting" className="text-white hover:text-gray-200 px-3 py-2 text-sm sm:text-base md:text-lg font-extralight transition-colors duration-200">
                Whitelisting
              </Link>
              <span className="text-white text-sm sm:text-base md:text-lg font-extralight">{'>'}</span>
              <Link href="/nft-licensing" className="text-white hover:text-gray-200 px-3 py-2 text-sm sm:text-base md:text-lg font-extralight transition-colors duration-200">
                NFT Licensing
              </Link>
              <span className="text-white text-sm sm:text-base md:text-lg font-extralight">{'>'}</span>
              <Link href="/about" className="text-white hover:text-gray-200 px-3 py-2 text-sm sm:text-base md:text-lg font-extralight transition-colors duration-200">
                About us
              </Link>
            </div>
          </nav>

          {/* Desktop Contact Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-[#CA5DE5] to-[#5B5B5B] text-white px-6 sm:px-8 py-2 sm:py-3 rounded-full text-sm sm:text-base md:text-lg font-semibold hover:from-[#B54DD4] hover:to-[#4A4A4A] transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_#CA5DE5] hover:shadow-[0_0_40px_#CA5DE5]">
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-white hover:text-purple-300 transition-colors duration-200 p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMobileMenu}
          ></div>
          
          {/* Mobile Menu */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-gray-900/95 backdrop-blur-md border-l border-gray-700/50 shadow-2xl">
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-700/50">
                <div className="flex items-center space-x-3">
                  <Image
                    src="/logo.png"
                    alt="EverXNode Logo"
                    width={40}
                    height={40}
                    className="w-10 h-10"
                  />
                  <span className="text-white font-medium text-lg">EverXNode</span>
                </div>
                <button 
                  onClick={closeMobileMenu}
                  className="text-white hover:text-purple-300 transition-colors duration-200 p-2"
                  aria-label="Close mobile menu"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="flex-1 p-6">
                <div className="space-y-4">
                  <Link 
                    href="/" 
                    onClick={closeMobileMenu}
                    className="block text-white hover:text-[#D799FE] px-4 py-3 text-lg font-medium transition-colors duration-200 rounded-lg hover:bg-white/5"
                  >
                    Home
                  </Link>
                  <Link 
                    href="/token-utility" 
                    onClick={closeMobileMenu}
                    className="block text-white hover:text-[#D799FE] px-4 py-3 text-lg font-medium transition-colors duration-200 rounded-lg hover:bg-white/5"
                  >
                    Token Utility
                  </Link>
                  <Link 
                    href="/whitelisting" 
                    onClick={closeMobileMenu}
                    className="block text-white hover:text-[#D799FE] px-4 py-3 text-lg font-medium transition-colors duration-200 rounded-lg hover:bg-white/5"
                  >
                    Whitelisting
                  </Link>
                  <Link 
                    href="/nft-licensing" 
                    onClick={closeMobileMenu}
                    className="block text-white hover:text-[#D799FE] px-4 py-3 text-lg font-medium transition-colors duration-200 rounded-lg hover:bg-white/5"
                  >
                    NFT Licensing
                  </Link>
                  <Link 
                    href="/about" 
                    onClick={closeMobileMenu}
                    className="block text-white hover:text-[#D799FE] px-4 py-3 text-lg font-medium transition-colors duration-200 rounded-lg hover:bg-white/5"
                  >
                    About us
                  </Link>
                </div>
              </nav>

              {/* Mobile Contact Button */}
              <div className="p-6 border-t border-gray-700/50">
                <Link 
                  href="/contact" 
                  onClick={closeMobileMenu}
                  className="block w-full bg-gradient-to-r from-[#CA5DE5] to-[#5B5B5B] text-white px-6 py-3 rounded-full text-center font-semibold hover:from-[#B54DD4] hover:to-[#4A4A4A] transition-all duration-300 transform hover:scale-105 shadow-lg shadow-[#CA5DE5]/30"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
} 