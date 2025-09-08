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
          <div className="absolute -top-40 -left-40 w-[800px] h-[800px] rounded-full opacity-10 blur-3xl" style={{background: '#D799FE'}}></div>
          <div className="absolute -bottom-40 -right-40 w-[800px] h-[800px] rounded-full opacity-10 blur-3xl" style={{background: '#D799FE'}}></div>
        </div>
        
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
} 