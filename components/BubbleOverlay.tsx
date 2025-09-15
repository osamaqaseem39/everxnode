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
      <div className="bg-[#D799FE3D] backdrop-blur-sm rounded-full px-2 py-1.5 xs:px-3 xs:py-2 sm:px-6 sm:py-3 md:px-8 md:py-5 text-white text-[10px] xs:text-xs sm:text-sm md:text-base lg:text-lg font-medium shadow-lg shadow-[#D799FE3D] max-w-[70px] xs:max-w-[80px] sm:max-w-[100px] md:max-w-none whitespace-nowrap">
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