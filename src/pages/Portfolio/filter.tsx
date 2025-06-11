import { useState } from 'react';
import { Link } from 'react-router-dom';

const PortfolioGallery = () => {
  const [activeTab, setActiveTab] = useState('All');

  const portfolioItems = [
    {
      id: 1,
      category: 'Commercial Space',
      image: 'https://res.cloudinary.com/drbxjaxya/image/upload/v1749551915/IMG_9049_sh139f.jpg',
      alt: 'Bathroom with wooden accents',
      projectName: 'Project Barrels'
    },
    {
      id: 2,
      category: 'Residential',
      image: 'https://res.cloudinary.com/drbxjaxya/image/upload/v1749552432/IMG_9008_onsoto.jpg',
      alt: 'Modern office layout',
      projectName: 'Project BeeJay'
    },
    {
      id: 3,
      category: 'Commercial Space',
      image: 'https://res.cloudinary.com/drbxjaxya/image/upload/v1749552795/IMG_8969_gyrwsp.jpg',
      alt: 'Modern bedroom interior',
      projectName: 'Project Bisuga'
    },
    {
      id: 4,
      category: 'Cooperate',
      image: 'https://res.cloudinary.com/drbxjaxya/image/upload/v1749553241/IMG_8991_gbplfp.jpg',
      alt: 'Modern staircase with decor',
      projectName: 'Bukenzo'
    },
    {
      id: 5,
      category: 'Commercial Space',
      image: 'https://res.cloudinary.com/drbxjaxya/image/upload/v1749554411/IMG_9053_ofozox.jpg',
      alt: 'Modern office space',
      projectName: 'Project Jenny’s glow'
    },
    {
      id: 6,
      category: 'Commercial Space',
      image: 'https://res.cloudinary.com/drbxjaxya/image/upload/v1749555665/IMG_9041_gglzqm.jpg',
      alt: 'Contemporary office interior',
      projectName: 'Project Jenny’s glow(Ghana)'
    },
    {
      id: 7,
      category: 'Commercial Space',
      image: 'https://res.cloudinary.com/drbxjaxya/image/upload/v1749556296/IMG_9021_rtv98p.jpg',
      alt: 'Autumn decor display',
      projectName: 'Project Mav'
    },
    {
      id: 8,
      category: 'Commercial Space',
      image: 'https://res.cloudinary.com/drbxjaxya/image/upload/v1749556822/IMG_8986_b1eyz2.jpg',
      alt: 'Elegant interior showroom',
      projectName: 'Project Ruby'
    },
    {
      id: 9,
      category: 'Commercial Space',
      image: 'https://res.cloudinary.com/drbxjaxya/image/upload/v1749582297/IMG_9035_bpk7t0.jpg',
      alt: 'Luxury apartment design',
      projectName: 'Project Skin Therapy'
    },
    {
      id: 10,
      category: 'Commercial Space',
      image: 'https://res.cloudinary.com/drbxjaxya/image/upload/v1749582801/IMG_9043_pd32mw.jpg',
      alt: 'Luxury apartment design',
      projectName: 'Project Slush Cafe'
    },
  ];

  const tabs = ['All', 'Residential', 'Commercial Space', 'Cooperate'];

  const filteredItems = activeTab === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeTab);

  return (
    <div id="portfolio-filter" className="overflow-hidden w-full px-[16px] pb-[40px] lg:px-[80px] lg:pb-[0px]">
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

      <div className="hidden lg:block absolute left-[700px] top-[900px] z-[1]">
        <img
          src="/icons/portfolio/bg.svg"
          alt=""
          className="opacity-50"
        />
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-[13px]">
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
              <span className="absolute text-[20px] bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 lg:text-[24px] font-semibold">
                {item.projectName}
              </span>
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