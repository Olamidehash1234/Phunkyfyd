export default function VisionMissionComponent() {
  return (
    <div className="pt-16 px-[16px] lg:py-[80px] border-t">
      <div className="mx-auto">
        {/* Vision Section */}
        <div className="flex flex-col md:flex-row lg:flex-row items-center gap-12 lg:gap-[39px] mb-10
          lg:mb-[-240px]
          lg:ml-[430px]
          min-[1366px]:ml-[420px]
          min-[1517px]:ml-[555px]
          min-[1707px]:ml-[660px]
          min-[1821px]:ml-[730px]">
          {/* Content */}
          <div className="lg:w-[457px] flex flex-col justify-center self-start">
            <h2 className="text-amber-500 text-lg font-light mb-6 tracking-wide">
              OUR VISION | Designing Legacy Spaces
            </h2>
            <p className="text-gray-800 text-base leading-relaxed lg:text-[20px] lg:leading-[30px]  text-justify font-light">
              To create one-in-a-lifetime design statements that transcend generations, crafting innovative, livable spaces that remain cherished long after our work is complete.
            </p>
          </div>
          
          {/* Right Image */}
          <div className="lg:w-[259px]">
            <div className="bg-gray-100 rounded-lg overflow-hidden h-auto lg:h-[389px]">
              <img src="/images/about/vision.png" alt="" />
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="flex flex-col md:flex-row lg:flex-row items-center gap-12
          lg:ml-[120px]
          min-[1366px]:ml-[110px]
          min-[1517px]:ml-[120px]
          min-[1707px]:ml-[140px]
          min-[1821px]:ml-[140px]">
          {/* Left Image */}
          <div className="lg:w-[259px]">
            <div className="bg-gray-100 rounded-lg overflow-hidden h-auto lg:h-[389px]">
              <img src="/images/about/mission.png" alt="" />
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:w-[457px] flex flex-col justify-center self-end">
            <h2 className="text-amber-500 text-lg font-light mb-6 tracking-wide">
              OUR MISSION | Enhancing Lives through Design
            </h2>
            <p className="text-gray-800 text-base leading-relaxed text-justify lg:text-[20px] lg:leading-[30px] font-light">
              To produce exceptional furniture pieces and spaces that elevate the living experience of our clients while maintaining the highest standards of quality, reliability, and trustworthiness.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}