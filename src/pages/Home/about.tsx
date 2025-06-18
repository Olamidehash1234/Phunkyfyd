import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AboutSection: React.FC = () => {
  // Image arrays for both slideshows
  const firstSlideImages = [
    "https://res.cloudinary.com/drbxjaxya/image/upload/v1750175671/IMG_4329_zuqgxn.jpg",
    "https://res.cloudinary.com/drbxjaxya/image/upload/v1750175670/IMG_6925_k6mc9u.jpg", // Replace with actual image URLs
    "https://res.cloudinary.com/drbxjaxya/image/upload/v1750179566/new-image1_whfwdd.jpg",
    "https://res.cloudinary.com/drbxjaxya/image/upload/v1750175670/IMG_4324_nasbxw.jpg",
  ];

  const secondSlideImages = [
    "https://res.cloudinary.com/drbxjaxya/image/upload/v1750181524/image3_eywjwr.jpg",
    "https://res.cloudinary.com/drbxjaxya/image/upload/v1750181523/image4_rxwsyf.jpg", // Replace with actual image URLs
    "https://res.cloudinary.com/drbxjaxya/image/upload/v1750181517/image2_atiw1i.jpg",
  ];

  const [currentFirstIndex, setCurrentFirstIndex] = useState(0);
  const [currentSecondIndex, setCurrentSecondIndex] = useState(0);

  // Auto-slide effect for first slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentFirstIndex((prevIndex) =>
        prevIndex === firstSlideImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(timer);
  }, []);

  // Auto-slide effect for second slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSecondIndex((prevIndex) =>
        prevIndex === secondSlideImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full pt-[55px] px-4 lg:px-20 lg:pt-[89px] lg:pb-[80px]">
      <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-[49px]">
        {/* Left column - Slideshows */}
        <div className="w-full lg:w-[65%] flex lg:flex-row lg:gap-[10px] gap-[10px] lg:items-end">
          <div className="w-full lg:h-[400px] lg:self-start relative overflow-hidden">
            {firstSlideImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Interior design showcase ${index + 1}`}
                className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000"
                style={{
                  opacity: currentFirstIndex === index ? 1 : 0,
                  zIndex: currentFirstIndex === index ? 1 : 0,
                }}
              />
            ))}
          </div>
          <div className="w-full lg:h-[320px] self-end relative overflow-hidden">
            {secondSlideImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Interior design showcase ${index + 1}`}
                className="w-full h-full object-cover absolute top-0 left-0 transition-opacity duration-1000"
                style={{
                  opacity: currentSecondIndex === index ? 1 : 0,
                  zIndex: currentSecondIndex === index ? 1 : 0,
                }}
              />
            ))}
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
