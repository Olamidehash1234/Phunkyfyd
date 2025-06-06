import React from 'react';

const PortfolioHeroComponent: React.FC = () => {
  const scrollToNext = () => {
    const filterSection = document.getElementById('portfolio-filter');
    if (filterSection) {
      filterSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
    <div className="hidden lg:block absolute left-[500px] top-[80px] z-[2]">
        <img
          src="/icons/about/bg.svg"
          alt=""
          className="opacity-0"
        />
      </div>
    <div className="mx-[16px] my-[40px] lg:my-[80px] lg:mx-[80px]  relative h-[300px] lg:h-[551px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://res.cloudinary.com/drbxjaxya/image/upload/v1749205912/design_pdqaeg.png"
          alt="Luxury bedroom interior"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-[#00000099]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        <h1 className="text-[40px] lg:text-[60px] lg:leading-[70px] font-bold text-white">
          PORTFOLIO
        </h1>

        {/* Scroll Indicator */}
        <div className="absolute bottom-[30px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 lg:gap-[20px]">
          <div 
            onClick={scrollToNext}
            className="w-12 h-12 lg:w-[60px] lg:h-[60px] rounded-full border border-[#F8F8F8] flex items-center justify-center hover:cursor-pointer">
            <img src="/icons/portfolio/arrow.svg" alt="" />
          </div>
          <a 
            onClick={scrollToNext}
            className="text-[#F8F8F8] hover:cursor-pointer text-xs lg:text-[16px] lg:leading-[30px] uppercase relative
            after:content-[''] after:absolute after:w-0 after:h-[1px] after:bg-[#F8F8F8] after:left-0 after:bottom-0
            after:transition-all after:duration-300 hover:after:w-full">
            SCROLL DOWN
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PortfolioHeroComponent;