import React from "react";

const OurDesignSolutions: React.FC = () => {
  return (
    <section className="w-full py-10 lg:pt-[80px] lg:pb-[0px] px-4 lg:px-[80px]">
      <div
        className="max-w-8xl h-auto lg:h-[573px] mx-auto flex flex-col lg:flex-row gap-6 items-start"
        // style={{ height: "573px" }}
      >
        {/* Left Video - 60% width */}
        <div className="w-full lg:w-[60%] h-[300px] lg:h-full">
          <video
            src="/video/design1.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-md"
          />
        </div>

        {/* Right Section - 40% width */}
        <div className="w-full lg:w-[40%] h-full flex flex-col">
          {/* Top Text - 50% height */}
          <div className="h-1/2 flex flex-col justify-center 
            text-[50px] leading-tight
            lg:text-[93px] lg:leading-[90px]
            min-[1093px]:text-[83px]
            min-[1242px]:text-[85px]
            min-[1366px]:text-[87px]
            min-[1517px]:text-[96px]
            min-[1707px]:text-[111px]
            min-[1821px]:text-[119px]
            font-bold">
            <h2 className="text-[#040323]">OUR</h2>
            <h2 className="text-[#ECAF21]">DESIGN</h2>
            <h2 className="text-[#040323]">SOLUTIONS</h2>
          </div>

          {/* Bottom Image - 50% height */}
          <div className="h-[300px] lg:h-1/2 mt-2">
            <video
              src="/video/design2.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurDesignSolutions;
