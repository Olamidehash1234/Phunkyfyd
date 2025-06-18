import React from 'react';

const HeroComponent: React.FC = () => {

  return (
    <div className="w-full pt-[40px] px-[16px] lg:px-[80px] lg:pt-[80px] lg:pb-[0px]">
        <div className="">
          <h1 className='font-bold text-[#040323]
            text-[50px] leading-tight lg:leading-[100px] md:text-[87px]
            min-[1366px]:text-[89px]
            min-[1517px]:text-[101px]
            min-[1707px]:text-[113px]
            min-[1821px]:text-[121px]'><span className='text-[#ECAF21]'>
            TIMELESS.</span>
            <span className="font-medium block sm:inline 
              text-[16px] leading-none lg:leading-[28px] lg:ml-[20px] lg:mr-[20px]
              min-[1366px]:text-[20px]
              min-[1517px]:text-[22px]
              min-[1707px]:text-[28px]
              min-[1821px]:text-[30px]">Where Contemporary Design</span> 
            BEAUTIFUL.
          </h1>
        </div>

        <div>
          <h1 className='font-bold text-[#040323]
            text-[50px] lg:leading-[100px] leading-tight md:text-[86px]
            min-[1366px]:text-[89.2px]
            min-[1517px]:text-[101.6px]
            min-[1707px]:text-[113.1px]
            min-[1821px]:text-[121.3px]'>
            FUNCTIONAL.
            <span className="font-medium block sm:inline 
              text-[16px] lg:leading-[28px] lg:ml-[20px] lg:mr-[20px]
              min-[1366px]:text-[20px]
              min-[1517px]:text-[22px]
              min-[1707px]:text-[28px]
              min-[1821px]:text-[30px]">Creates Tomorrow's Classics.</span><span className='text-[#ECAF21]'>DESIGN.</span>
            
          </h1>
        </div>
    </div>
  );
};

export default HeroComponent;