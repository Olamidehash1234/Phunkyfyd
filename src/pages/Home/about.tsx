import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AboutSection: React.FC = () => {
  // Image arrays for both slideshows
  const firstSlideImages = [
    "https://res.cloudinary.com/drbxjaxya/image/upload/v1750417806/IMG_7229_vjzmq7.jpg",
    "https://res.cloudinary.com/drbxjaxya/image/upload/v1750417800/IMG_7226_cccbok.jpg",
    "https://res.cloudinary.com/drbxjaxya/image/upload/v1750417803/IMG_7231_shrqt8.jpg",
    "https://res.cloudinary.com/drbxjaxya/image/upload/v1750242275/IMG_6941_i16yly.jpg",
    "https://res.cloudinary.com/drbxjaxya/image/upload/v1750422813/IMG_5740_r84ipk-new_mrvotn.jpg"
  ];

  const secondSlideImages = [
    "https://res.cloudinary.com/drbxjaxya/image/upload/v1750417800/IMG_7228_pzoprj.jpg",
    "https://res.cloudinary.com/drbxjaxya/image/upload/v1750417801/IMG_7221_aksmt0.jpg",
    "https://res.cloudinary.com/drbxjaxya/image/upload/v1750417799/IMG_7223_npdatd.jpg",
    "https://res.cloudinary.com/drbxjaxya/image/upload/v1750242112/IMG_6934_jnrkwt.jpg",
    "https://res.cloudinary.com/drbxjaxya/image/upload/v1750422799/com_byqfwz.jpg"
  ];

  // Use a single index for both slideshows
  const [currentIndex, setCurrentIndex] = useState(0);

  // Find the max length of both arrays
  const maxSlides = Math.max(firstSlideImages.length, secondSlideImages.length);

  // Auto-slide effect for both slideshows at the same time
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === maxSlides - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, [maxSlides]);

  return (
    <div className="w-full pt-[55px] px-4 lg:px-20 lg:pt-[89px] lg:pb-[80px]">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[49px]">
        {/* Left column - Slideshows */}
        <div className="w-full lg:w-[65%] flex lg:flex-row lg:gap-[10px] gap-[10px] lg:items-end">
          <div className="w-full h-[230px] lg:h-[400px] relative lg:self-start">
            {firstSlideImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Interior design showcase ${index + 1}`}
                className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000"
                style={{
                  opacity: currentIndex % firstSlideImages.length === index ? 1 : 0,
                  zIndex: currentIndex % firstSlideImages.length === index ? 1 : 0,
                }}
              />
            ))}
          </div>
          <div className="w-full h-[170px] lg:h-[320px] relative self-end overflow-hidden">
            {secondSlideImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Interior design showcase ${index + 1}`}
                className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000"
                style={{
                  opacity: currentIndex % secondSlideImages.length === index ? 1 : 0,
                  zIndex: currentIndex % secondSlideImages.length === index ? 1 : 0,
                }}
              />
            ))}
          </div>
        </div>

        {/* Right column - Text */}
        <div className="w-full lg:w-[45%] space-y-6 lg:self-end lg:mb-[20px]">
          <p className="text-base lg:text-[18px] font-semibold lg:leading-[30px] text-[#040323] text-justify">
            At PHUNKIFYD INTERIORS, we are more than an interior design firm; we are{" "}
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
