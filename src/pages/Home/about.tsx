import React from "react";
import { Link } from "react-router-dom";

const AboutSection: React.FC = () => {
  return (
    <div className="w-full pt-[60px] px-4 lg:px-20 lg:pt-[89px] lg:pb-[80px]">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[49px]">
        {/* Left column - Images */}
        <div className="w-full lg:w-[55%] flex lg:flex-row lg:gap-[10px] gap-[10px] lg:items-end">
          <div className="w-full lg:h-[400px] lg:self-start">
            <img
              src="https://res.cloudinary.com/drbxjaxya/image/upload/v1749554411/IMG_9053_ofozox.jpg"
              alt="Interior design showcase"
              className="w-full h-auto lg:h-full object-cover"
            />
          </div>
          <div className="w-full lg:h-[250px] self-end">
            <img
              src="https://res.cloudinary.com/drbxjaxya/image/upload/v1749552795/IMG_8970_qfieip.jpg"
              alt="Interior design showcase"
              className="w-full h-auto lg:h-full object-cover"
            />
          </div>
        </div>

        {/* Right column - Text */}
        <div className="w-full lg:w-[45%] space-y-6 lg:self-end lg:mb-[20px]">
          <p className="text-base lg:text-[18px] font-semibold lg:leading-[30px] text-[#040323] text-justify">
            At Phunkifyd, we are more than an interior design firm; we are{" "}
            <span className="text-[#ECAF21]"> storytellers </span> who bring
            spaces to life. With a steadfast commitment to local craftsmanship{" "}
            <span className="text-[#ECAF21]">(85% locally built)</span>, we
            specialize in modern contemporary pieces crafted with unparalleled
            quality and meticulous attention to detail.
          </p>
          <div className="flex items-center space-x-4">
            <Link to="/about" className="flex items-center space-x-4">
              <span className="font-semibold text-sm lg:text-[16px]">
                Learn More About Us
              </span>
              <button className="group w-12 h-12 border border-[#040323] rounded-full flex items-center justify-center hover:border-yellow-500 transition-all duration-300">
                <img src="/icons/home/arrow.svg" alt="" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
