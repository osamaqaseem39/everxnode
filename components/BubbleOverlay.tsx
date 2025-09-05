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
      <div className="bg-[#D799FE3D] backdrop-blur-sm rounded-full px-6 py-4 text-white text-base font-medium shadow-lg shadow-[#D799FE3D]">
        {text}
      </div>
      <Image
        src={lineImage}
        alt="Connection Line"
        width={lineWidth}
        height={lineHeight}
        className={`absolute ${linePosition}`}
      />
    </div>
  )
} 