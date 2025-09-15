import Image from 'next/image'
import BubbleOverlay from './BubbleOverlay'

export default function TreeVisualization() {
  return (
    <div className="relative w-full overflow-x-hidden">
      <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[800px] xl:h-[900px] flex items-center justify-center">
        {/* Tree Image */}
        <div className="relative w-full h-full">
          <Image
            src="/tree.png"
            alt="AI Neural Network Tree"
            width={900}
            height={900}
            className="w-full h-full object-contain min-h-[450px] sm:min-h-[550px]"
            priority
          />
          
          {/* Interactive Bubbles Overlay - Hidden on mobile, shown on sm+ */}
          <div className="hidden sm:block">
            <BubbleOverlay
              text="Provide AI Compute"
              position="top-[50px] sm:top-[60px] lg:top-[80px] left-[5px] sm:left-[10px] lg:-left-[100px] xl:-left-[120px]"
              lineImage="/linesmallinvertedflipped.png"
              lineWidth={80}
              lineHeight={30}
              linePosition="top-[15px] sm:top-[20px] lg:top-[30px] left-[80px] sm:left-[110px] lg:left-[210px] xl:left-[250px]"
            />

            <BubbleOverlay
              text="Earn Rewards"
              position="top-[120px] sm:top-[150px] lg:top-[200px] right-[5px] sm:right-[10px] lg:right-[0px] xl:right-[20px]"
              lineImage="/linesmall.png"
              lineWidth={80}
              lineHeight={30}
              linePosition="top-[15px] sm:top-[20px] lg:top-[30px] right-[60px] sm:right-[80px] lg:right-[160px] xl:right-[200px]"
            />

            <BubbleOverlay
              text="Join the Revolution"
              position="top-[200px] sm:top-[250px] lg:top-[350px] left-[20px] sm:left-[40px] lg:left-[100px] xl:left-[130px] transform"
              lineImage="/linesmallinverted.png"
              lineWidth={80}
              lineHeight={30}
              linePosition="top-[0px] left-[80px] sm:left-[105px] lg:left-[205px] xl:left-[255px]"
            />
          </div>
        </div>
      </div>
    </div>
  )
} 