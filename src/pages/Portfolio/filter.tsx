import { useState } from 'react';
import { Link } from 'react-router-dom';
import { portfolioData } from './data';

// Add your other project images here
const otherProjects = [
  {
    id: 'other1',
    image: 'https://res.cloudinary.com/drbxjaxya/image/upload/v1750417807/IMG_7222_it7dke.jpg',
    alt: 'Other Project 1',
  },
  {
    id: 'other2',
    image: 'https://res.cloudinary.com/drbxjaxya/image/upload/v1750417806/IMG_7229_vjzmq7.jpg',
    alt: 'Other Project 2',
    projectName: 'Sculpture Piece',
    description: 'Modern sculpture for a living room.'
  },
   {
    id: 'other3',
    image: 'https://res.cloudinary.com/drbxjaxya/image/upload/v1750417803/IMG_7231_shrqt8.jpg',
    alt: 'Other Project 3',
    projectName: 'Sculpture Piece',
    description: 'Modern sculpture for a living room.'
  },
   {
    id: 'other4',
    image: 'https://res.cloudinary.com/drbxjaxya/image/upload/v1750417802/IMG_7227_v6gkcc.jpg',
    alt: 'Other Project 4',
    projectName: 'Sculpture Piece',
    description: 'Modern sculpture for a living room.'
  },
  {
    id: 'other5',
    image: 'https://res.cloudinary.com/drbxjaxya/image/upload/v1750417801/IMG_7221_aksmt0.jpg',
    alt: 'Other Project 5',
    projectName: 'Sculpture Piece',
    description: 'Modern sculpture for a living room.'
  },
  {
    id: 'other6',
    image: 'https://res.cloudinary.com/drbxjaxya/image/upload/v1750417801/IMG_7218_g0ogm8.jpg',
    alt: 'Other Project 6',
    projectName: 'Sculpture Piece',
    description: 'Modern sculpture for a living room.'
  },
  {
    id: 'other7',
    image: 'https://res.cloudinary.com/drbxjaxya/image/upload/v1750417800/IMG_7228_pzoprj.jpg',
    alt: 'Other Project 7',
    projectName: 'Sculpture Piece',
    description: 'Modern sculpture for a living room.'
  },
  {
    id: 'other8',
    image: 'https://res.cloudinary.com/drbxjaxya/image/upload/v1750417800/IMG_7226_cccbok.jpg',
    alt: 'Other Project 8',
    projectName: 'Sculpture Piece',
    description: 'Modern sculpture for a living room.'
  },
  {
    id: 'other9',
    image: 'https://res.cloudinary.com/drbxjaxya/image/upload/v1750417799/IMG_7223_npdatd.jpg',
    alt: 'Other Project 8',
    projectName: 'Sculpture Piece',
    description: 'Modern sculpture for a living room.'
  }
];

const PortfolioGallery = () => {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Residential', 'Commercial Space', 'Cooperate', 'Other Projects'];

  let filteredItems;
  if (activeTab === 'All') {
    filteredItems = portfolioData;
  } else if (activeTab === 'Other Projects') {
    filteredItems = otherProjects;
  } else {
    filteredItems = portfolioData.filter(item => item.category === activeTab);
  }

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
            to={activeTab === 'Other Projects' ? '#' : `/portfolio/${item.id}`}
            className={`group relative overflow-hidden rounded-[2px] hover:shadow-xl transition-all duration-300 transform`}
          >
            <div className="aspect-[4/3] lg:h-[260px] w-full">
              <img
                src={item.image}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            </div>
            {activeTab !== 'Other Projects' && (
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
            )}
            {/* Removed projectName/description for Other Projects */}
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