import { useState } from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from './data';

const PortfolioGallery = () => {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Residential', 'Commercial Space', 'Cooperate'];

  const filteredItems = activeTab === 'All' 
    ? portfolioData 
    : portfolioData.filter(item => item.category === activeTab);

  return (
    <div id="portfolio-filter" className="overflow-hidden w-full px-[16px] pb-[40px] lg:px-[80px] lg:pb-[0px] relative">
      {/* Navigation Tabs */}
      <div className="flex flex-wrap gap-8 gap-y-[10px] lg:gap-[50px] mb-8 lg:mb-[20px]">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-2 px-1 text-sm lg:text-[16px] font-bold transition-colors duration-200 relative ${
              activeTab === tab
                ? 'text-[#ECAF21] border-b-2 border-[#ECAF21]'
                : 'text-[#04032366] hover:text-amber-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Moving the background icon here and updating its positioning and z-index */}
      <div className="hidden lg:block absolute left-[700px] top-[300px] -z-10 pointer-events-none">
        <img
          src="/icons/portfolio/bg.svg"
          alt=""
          className="opacity-30"
        />
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-[13px] relative z-10">
        {filteredItems.map((item) => (
          <Link
            key={item.id}
            to={`/portfolio/${item.id}`}
            className="group relative overflow-hidden rounded-[2px] hover:shadow-xl transition-all duration-300 transform"
          >
            <div className="aspect-[4/3] lg:h-[260px] w-full">
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300">
              <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-[20px] lg:text-[24px] font-semibold block">
                  {item.projectName}
                </span>
                <span className="text-[14px] lg:text-[16px] text-[#F8F8F8]">
                  {item.description}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* No items message */}
      {filteredItems.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No items found for this category.</p>
        </div>
      )}
    </div>
  );
};

export default PortfolioGallery;