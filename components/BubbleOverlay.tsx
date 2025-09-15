import Image from 'next/image'

interface BubbleOverlayProps {
  text: string
  position: string
  lineImage: string
  lineWidth: number
  lineHeight: number
  linePosition: string
}

export default function BubbleOverlay({ 
  text, 
  position, 
  lineImage, 
  lineWidth, 
  lineHeight, 
  linePosition 
}: BubbleOverlayProps) {
  return (
    <div className={`absolute ${position}`}>
      <div className="bg-[#D799FE3D] backdrop-blur-sm rounded-full px-3 py-2 xs:px-4 xs:py-2.5 sm:px-8 sm:py-5 text-white text-xs xs:text-sm sm:text-base md:text-lg lg:text-xl font-medium shadow-lg shadow-[#D799FE3D] max-w-[80px] xs:max-w-[90px] sm:max-w-none">
        {text}
      </div>
      <Image
        src={lineImage}
        alt="Connection Line"
        width={lineWidth}
        height={lineHeight}
        className={`absolute ${linePosition} hidden sm:block`}
      />
    </div>
  )
} 