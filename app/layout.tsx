import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'EverXNode - Power the Future of AI',
  description: 'Own a Node License NFT, fuel AI compute, and earn rewards with EverXNode. Join the AI revolution with staking, governance, and long-term value.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-['Poppins'] relative overflow-x-hidden">
        {/* Glow circles background */}
        <div className="fixed inset-0 -z-10">
          <div id="glow-top" className="absolute -top-40 -right-40 w-[800px] h-[800px] rounded-full opacity-0 blur-3xl transition-opacity duration-1000" style={{background: '#D799FE'}}></div>
          <div id="glow-bottom" className="absolute -bottom-40 -left-40 w-[800px] h-[800px] rounded-full opacity-0 blur-3xl transition-opacity duration-1000" style={{background: '#D799FE'}}></div>
        </div>
        
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
        
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('scroll', function() {
                const scrollY = window.scrollY;
                const glowTop = document.getElementById('glow-top');
                const glowBottom = document.getElementById('glow-bottom');
                
                if (scrollY >= 2000) {
                  glowTop.style.opacity = '0.1';
                  glowBottom.style.opacity = '0.1';
                  glowTop.classList.add('animate-pulse-glow');
                  glowBottom.classList.add('animate-pulse-glow-delayed');
                } else {
                  glowTop.style.opacity = '0';
                  glowBottom.style.opacity = '0';
                  glowTop.classList.remove('animate-pulse-glow');
                  glowBottom.classList.remove('animate-pulse-glow-delayed');
                }
              });
            `,
          }}
        />
      </body>
    </html>
  )
} 