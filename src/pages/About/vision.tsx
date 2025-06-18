export default function VisionMissionComponent() {
  return (
    <div className="pt-[40px] px-[16px] lg:py-[80px] border-t-[1px] border-[#04032333] relative">
      <div className="mx-auto">
        {/* Vision Section */}
        <div className="flex flex-col md:flex-row lg:flex-row items-center gap-12 lg:gap-[39px] mb-10
          lg:mb-[-240px]
          min-[1366px]:ml-[440px]
          min-[1517px]:ml-[570px]
          min-[1707px]:ml-[680px]
          min-[1821px]:ml-[750px]">
          {/* Content */}
          <div className="lg:w-[457px] flex flex-col justify-center self-start relative">
            {/* Background Illustration */}
            <div className="hidden lg:block absolute right-[-450px] top-[-280px] z-[1] min-[1366px]:right-[-380px] min-[1517px]:right-[-450px] min-[1517px]:top-[-280px]">
              <img
                src="/icons/bg-big.svg"
                alt=""
                className="opacity-50"
              />
            </div>
            <h2 className="text-[#ECAF21] text-lg font-bold mb-6 tracking-wide">
              OUR VISION | Designing Legacy Spaces
            </h2>
            <p className="text-gray-800 text-base leading-relaxed lg:text-[20px] lg:leading-[30px]  text-justify font-light">
              To create one-in-a-lifetime design statements that transcend generations, crafting innovative, livable spaces that remain cherished long after our work is complete.
            </p>
          </div>
          
          {/* Right Image */}
          <div className="lg:w-[259px] relative z-[2]">
            <div className="bg-gray-100 rounded-lg overflow-hidden h-auto lg:h-[389px]">
              <img src="https://res.cloudinary.com/drbxjaxya/image/upload/v1750182360/IMG_6132.JPEG_e9vrfv.jpg" alt="" />
            </div>
          </div>
        </div>

        {/* Background Illustration */}
            <div className="hidden lg:block absolute  left-[40px] top-[179px] z-[1]">
              <img
                src="/icons/bg.svg"
                alt=""
                className="opacity-50"
              />
            </div>
        {/* Mission Section */}
        <div className="flex flex-col overflow-hidden md:flex-row lg:flex-row items-center gap-12
          lg:ml-[120px]
          min-[1366px]:ml-[110px]
          min-[1517px]:ml-[120px]
          min-[1707px]:ml-[140px]
          min-[1821px]:ml-[140px]">
          {/* Left Image */}
          <div className="lg:w-[259px] relative z-[2]">
            <div className="bg-gray-100 rounded-lg overflow-hidden h-auto lg:h-[345px]">
              <img src="https://res.cloudinary.com/drbxjaxya/image/upload/v1749582297/IMG_9037_liwx5b.jpg" alt="" />
            </div>
          </div>
          
          {/* Content */}
          <div className="lg:w-[457px] flex flex-col justify-center self-end relative">
            <h2 className="text-[#ECAF21] text-lg font-bold mb-6 tracking-wide">
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