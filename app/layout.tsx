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
      <body className="font-['Poppins']">
      
        
        <Header />
        <main className="relative z-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
} 