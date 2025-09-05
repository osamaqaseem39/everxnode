import Image from 'next/image'
import BubbleOverlay from './BubbleOverlay'

export default function TreeVisualization() {
  return (
    <div className="relative w-full">
      <div className="relative w-full h-[600px] lg:h-[800px] xl:h-[900px] flex items-center justify-center">
        {/* Tree Image */}
        <div className="relative w-full h-full">
          <Image
            src="/tree.png"
            alt="AI Neural Network Tree"
            width={900}
            height={900}
            className="w-full h-full object-contain"
            priority
          />
          
          {/* Interactive Bubbles Overlay */}
          <BubbleOverlay
            text="Provide AI Compute"
            position="top-[60px] lg:top-[80px] -left-[30px] sm:-left-[50px] lg:-left-[100px] xl:-left-[120px]"
            lineImage="/linesmallinvertedflipped.png"
            lineWidth={80}
            lineHeight={30}
            linePosition="top-[20px] lg:top-[30px] left-[60px] sm:left-[110px] lg:left-[210px] xl:left-[250px]"
          />

          <BubbleOverlay
            text="Earn Rewards"
            position="top-[150px] lg:top-[200px] right-[0px] lg:right-[0px] xl:right-[20px]"
            lineImage="/linesmall.png"
            lineWidth={80}
            lineHeight={30}
            linePosition="top-[20px] lg:top-[30px] right-[40px] sm:right-[80px] lg:right-[160px] xl:right-[200px]"
          />

          <BubbleOverlay
            text="Join the Revolution"
            position="top-[250px] lg:top-[350px] left-[30px] sm:left-[50px] lg:left-[100px] xl:left-[130px] transform"
            lineImage="/linesmallinverted.png"
            lineWidth={80}
            lineHeight={30}
            linePosition="top-[0px] left-[55px] sm:left-[105px] lg:left-[205px] xl:left-[255px]"
          />
        </div>
      </div>
    </div>
  )
} 