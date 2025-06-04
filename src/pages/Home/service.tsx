import React from "react";
import { Link } from "react-router-dom";

const ServicesComponent: React.FC = () => {
  return (
    <div className="relative border-b-[1px] bg-[#FDFCF6] border-[#0000001A] py-[40px] px-[16px] lg:py-[80px] lg:px-[80px] overflow-hidden">
      <div className="hidden lg:block absolute bottom-[160px] right-[-250px] z-[1]">
            <img
              src="/icons/bg-big.svg"
              alt=""
              className="opacity-50"
            />
          </div>
      {/* Main Content */}
      <div className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-0">
          {/* Left Column - Title and View All */}
          <div className="lg:col-span-1 flex flex-col relative z-0">
            <div>
              <h2 className="lg:pt-[25px] lg:border-t-[0.5px] border-[#04032399] text-[30px] lg:text-[60px] font-bold text-[#040323] leading-tight mb-[10px] lg:mb-[50px] text-center lg:text-left">
                OUR
                <br className="hidden lg:block" />
                SERVICES
              </h2>
            </div>

            <div className="flex items-center justify-center lg:justify-start space-x-4">
              <Link to="/services" className="flex items-center space-x-4">
                <span className="font-semibold text-sm lg:text-[16px]">
                  View All Services
                </span>
                <button className="group w-12 h-12 border border-[#040323] rounded-full flex items-center justify-center hover:border-yellow-500 transition-all duration-300">
                  <img src="/icons/home/arrow.svg" alt="" />
                </button>
              </Link>
            </div>
          </div>

          {/* Background Illustration - Positioned between title and grid */}
          <div className="hidden lg:block absolute left-[-90px] top-[250px] z-[1]">
            <img
              src="/icons/bg-big.svg"
              alt=""
              className="opacity-50"
            />
          </div>

          {/* Right Column - Services Grid */}
          <div className="lg:col-span-2 bg-[#FDFCF6] relative z-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-0">
              {/* Service 1 */}
              <div className="p-6 border lg:border-l-0 lg:rounded-l-[0px] lg:pt-[40px] lg:pb-[50px] rounded-[10px] lg:pl-[0px] lg:pr-[50px] lg:border-t lg:border-b lg:rounded-br-[30px] lg:rounded-r-[30px] border-[#04032399] border-opacity-60 relative z-[1]">
                {/* Background for first card */}
                <div className="hidden lg:block absolute right-[-200px] top-[43px] z-[2]">
                  <img
                    src="/icons/bg-big.svg"
                    alt=""
                    className="opacity-50"
                  />
                </div>
                <div className="mb-[20px]">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <img src="/icons/home/package.svg" alt="" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg lg:text-[20px] font-semibold text-gray-900 mb-[10px] leading-tight">
                    Interior Design & Space Planning
                  </h3>
                  <p className="text-[#040323]  text-sm lg:text-[18px] leading-[26px]">
                    We offer bespoke interior design solutions tailored to both
                    residential and commercial spaces.
                  </p>
                </div>
              </div>

              {/* Service 2 */}
              <div className="p-6 border z-[3] bg-[#FDFCF6] sm:p-8 lg:border-t lg:border-l lg:border-b rounded-[10px] lg:border-l-0 lg:border-r-0 lg:rounded-r-[0] lg:rounded-l-[30px] border-[#04032399] lg:pl-[50px] lg:pr-[50px] lg:pt-[40px]  border-opacity-60">
                <div className="mb-[20px]">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <img src="/icons/home/package.svg" alt="" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg lg:text-[20px] font-semibold text-gray-900 mb-[10px] leading-tight">
                    Furniture Design & Production
                  </h3>
                  <p className="text-[#040323] text-sm lg:text-[18px] leading-[26px]">
                    Our core lies in crafting statement furniture pieces that
                    are not just beautiful but also meaningful.
                  </p>
                </div>
              </div>

              {/* Service 3 */}
              <div className="p-6 border z-[3] bg-[#FDFCF6] lg:border-l-0 lg:rounded-l-[0px] lg:pt-[40px] lg:pb-[50px] rounded-[10px] lg:pl-[0px] lg:pr-[50px] lg:border-t-0 lg:border-b lg:rounded-br-[30px] lg:rounded-r-[30px] border-[#04032399] border-opacity-60">
                <div className="mb-6">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <img src="/icons/home/package.svg" alt="" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg lg:text-[20px] font-semibold text-gray-900 mb-4 leading-tight">
                    3D Visualization & Sketches
                  </h3>
                  <p className="text-[#040323] text-sm lg:text-[18px] leading-[26px]">
                    To give you a better sense of what your space will become,
                    we offer high-quality 3D renderings and on-site sketches.
                  </p>
                </div>
              </div>

              {/* Service 4 */}
              <div className="p-6 border z-[3] bg-[#FDFCF6] sm:p-8 lg:border-t lg:border-l lg:border-b rounded-[10px] lg:border-l-0 lg:border-r-0 lg:rounded-r-[0] lg:rounded-l-[30px] border-[#04032399] lg:pl-[50px] lg:pr-[40px] lg:pt-[40px]  border-opacity-60">
                <div className="mb-[20px]">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center">
                    <img src="/icons/home/package.svg" alt="" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg lg:text-[20px] font-semibold text-gray-900 mb-[10px] leading-tight">
                    Mood Boards & Concept Development
                  </h3>
                  <p className="text-[#040323] text-sm lg:text-[18px] leading-[26px]">
                    Our core lies in crafting statement furniture pieces that
                    are not just beautiful but also meaningful.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesComponent;
