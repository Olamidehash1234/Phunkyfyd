import React from "react";

const HeroSection: React.FC = () => {
  return (
    <section className="bg-[#FDFCF6;] py-[40px] lg:pt-[80px]">
      <div className="px-[16px] lg:px-[80px]">
        {/* Title Section */}
        <h1 className="font-bold text-[30px] md:max-md:text-[92px] xl:text-[89px] 2xl:text-[145px] text-[#ECAF21]">
          TIMELESS.{" "}
          <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] text-[#040323] font-medium">
            Where Contemporary Design
          </span>{" "}
          <span className="text-[#040323]">BEAUTIFUL.</span>
        </h1>

        <h1 className="font-bold text-[30px] md:text-[89px] xl:text-[89px] 2xl:text-[145px] text-[#ECAF21] md:mb-[80px] md:mt-[-40px]">
          <span className="text-[#040323]">FUNCTIONAL.{" "}</span>
          <span className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-[20px] 2xl:text-[24px] font-medium text-[#040323] md:mr-[20px]">
            Creates Tomorrow's Classics
          </span>
          DESIGN.
        </h1>

        {/* Main Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[49px]">
          {/* Left Side - Images Container */}
          <div className="flex gap-4 lg:gap-[10px] items-end">
            {/* Taller Left Image */}
            <div className="flex-1">
              <div className=" md:h-96 md:w-auto rounded-[2px] overflow-hidden">
                <img
                  src="/images/home/img1.png"
                  alt="Modern living room interior with contemporary furniture and chandelier"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Shorter Right Image - Aligned to bottom */}
            <div className="flex-1">
              <div className="md:h-64 md:w-auto rounded-[2px] overflow-hidden">
                <img
                  src="/images/home/img2.png"
                  alt="Contemporary dining area with modern seating and plants"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="flex flex-col justify-end md:mb-[30px] space-y-8 lg:space-y-[20px]">
            {/* Main Text Content */}
            <div className="text-justify">
              <p className=" font-semibold text-sm md:text-[18px] leading-relaxed md:leading-[30px]">
                At Phunkify'd, we are more than an interior design firm; we are{" "}
                <span className="text-[#ECAF21] font-medium">
                  storytellers
                </span>{" "}
                who bring spaces to life. With a steadfast commitment to local
                craftsmanship{" "}
                <span className="text-[#ECAF21] font-medium">
                  (85% locally built)
                </span>
                , we specialize in modern contemporary pieces crafted with
                unparalleled quality and meticulous attention to detail.
              </p>
            </div>

            {/* Learn More Button */}
            <div className="flex items-center space-x-4">
              <span className=" font-medium text-sm lg:text-[16px] font-medium">
                Learn More About Us
              </span>
              <button className="group w-12 h-12 border border-[#040323]  rounded-full flex items-center justify-center hover:border-yellow-500 transition-all duration-300">
                <img src="/icons/home/arrow.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
