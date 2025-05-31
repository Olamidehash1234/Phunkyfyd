import React from 'react';

const TransformSection: React.FC = () => {
  return (
    <div className="py-0 px-[16px] sm:px-6 lg:pt-[80px] lg:px-[80px] lg:pb-[0px]">
      <div className="">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[20px] md:text-[50px] lg:text-[60px] font-bold leading-tight mb-6 lg:mb-[20px]">
            READY TO TRANSFORM YOUR SPACE INTO A TIMELESS EXPERIENCE?
          </h2>
          
           <div className="flex items-center space-x-4 lg:space-x-[40px]">
            <span className=" font-medium text-sm lg:text-[16px]">
              Speak With Us Today
            </span>
            <button className="group w-12 h-12 border border-[#040323]  rounded-full flex items-center justify-center hover:border-yellow-500 transition-all duration-300">
              <img src="/icons/home/arrow.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransformSection;
