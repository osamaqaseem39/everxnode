import Hero from '@/components/Hero'
import TokenUtility from '@/components/TokenUtility'
import Whitelisting from '@/components/Whitelisting'
import NFTLicensing from '@/components/NFTLicensing'
import LicensingTiers from '@/components/LicensingTiers'
import AboutUs from '@/components/AboutUs'
import CTABanner from '@/components/CTABanner'

export default function Home() {
  return (
    <main>
      <Hero />
      <TokenUtility />
      <Whitelisting />
      <NFTLicensing />
      <LicensingTiers />
      <CTABanner />
    </main>
  )
} 