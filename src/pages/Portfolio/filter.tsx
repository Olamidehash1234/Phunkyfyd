import { useState } from 'react';
import { Link } from 'react-router-dom';

const PortfolioGallery = () => {
  const [activeTab, setActiveTab] = useState('All');

  const portfolioItems = [
    {
      id: 1,
      category: 'Residential',
      image: '/images/portfolio/img1.png',
      alt: 'Modern bedroom interior',
      projectName: 'Zaya and Ryan'
    },
    {
      id: 2,
      category: 'Residential',
      image: '/images/portfolio/img2.png',
      alt: 'Bathroom with wooden accents',
      projectName: 'Zaya and Ryan'
    },
    {
      id: 3,
      category: 'Commercial Space',
      image: '/images/portfolio/img8.png',
      alt: 'Modern office layout',
      projectName: 'Zaya and Ryan'
    },
    {
      id: 4,
      category: 'Decor/Furniture Store',
      image: '/images/portfolio/img3.png',
      alt: 'Modern staircase with decor',
      projectName: 'Zaya and Ryan'
    },
    {
      id: 5,
      category: 'Commercial Space',
      image: '/images/portfolio/img4.png',
      alt: 'Modern office space',
      projectName: 'Zaya and Ryan'
    },
    {
      id: 6,
      category: 'Commercial Space',
      image: '/images/portfolio/img5.png',
      alt: 'Contemporary office interior',
      projectName: 'Zaya and Ryan'
    },
    {
      id: 7,
      category: 'Decor/Furniture Store',
      image: '/images/portfolio/img6.png',
      alt: 'Autumn decor display',
      projectName: 'Zaya and Ryan'
    },
    {
      id: 8,
      category: 'Decor/Furniture Store',
      image: '/images/portfolio/img7.png',
      alt: 'Elegant interior showroom',
      projectName: 'Zaya and Ryan'
    },
    {
      id: 9,
      category: 'Residential',
      image: '/images/portfolio/img1.png',
      alt: 'Luxury apartment design',
      projectName: 'Zaya and Ryan'
    },
    {
      id: 10,
      category: 'Commercial Space',
      image: '/images/portfolio/img1.png',
      alt: 'Restaurant interior',
      projectName: 'Zaya and Ryan'
    },
    {
      id: 11,
      category: 'Decor/Furniture Store',
      image: '/images/portfolio/img1.png',
      alt: 'Furniture showcase',
      projectName: 'Zaya and Ryan'
    },
    {
      id: 12,
      category: 'Residential',
      image: '/images/portfolio/img1.png',
      alt: 'Villa interior',
      projectName: 'Zaya and Ryan'
    },
    {
      id: 13,
      category: 'Commercial Space',
      image: '/images/portfolio/img1.png',
      alt: 'Hotel lobby',
      projectName: 'Zaya and Ryan'
    },
    {
      id: 14,
      category: 'Decor/Furniture Store',
      image: '/images/portfolio/img1.png',
      alt: 'Lifestyle store display',
      projectName: 'Zaya and Ryan'
    },
    {
      id: 15,
      category: 'Residential',
      image: '/images/portfolio/img1.png',
      alt: 'Modern home design',
      projectName: 'Zaya and Ryan'
    },
    {
      id: 16,
      category: 'Commercial Space',
      image: '/images/portfolio/img1.png',
      alt: 'Retail space design',
      projectName: 'Zaya and Ryan'
    },
  ];

  const tabs = ['All', 'Residential', 'Commercial Space', 'Decor/Furniture Store'];

  const filteredItems = activeTab === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeTab);

  return (
    <div id="portfolio-filter" className="w-full px-[16px] pb-[40px] lg:px-[80px] lg:pb-[0px]">
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
              <span className="absolute text-[20px] bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 lg:text-[26px] font-semibold">
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