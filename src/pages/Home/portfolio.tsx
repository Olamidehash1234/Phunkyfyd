import { Link } from "react-router-dom";

const Portfolio = () => {
  const portfolioImages = [
    {
      id: 1,
      src: "https://res.cloudinary.com/drbxjaxya/image/upload/v1750242115/IMG_6940_q9wcqz.jpg",
      alt: "Modern restaurant interior with warm lighting",
    },
    {
      id: 2,
      src: "https://res.cloudinary.com/drbxjaxya/image/upload/v1750242275/IMG_6941_i16yly.jpg",
      alt: "Elegant wall sconces and decor",
    },
    {
      id: 3,
      src: "https://res.cloudinary.com/drbxjaxya/image/upload/v1749553241/IMG_8991_gbplfp.jpg",
      alt: "Luxury living room with neutral tones",
    },
  ];

  return (
    <div className="pt-[40px] bg-[#FDFCF6] lg:pt-[80px] lg:mb-[40px] ">
      <div className="">
        {/* Header */}
        <div className="flex relative bg-[#FDFCF6] z-20 flex-col lg:flex-row justify-between items-center mb-[30px] lg:mb-[60px] px-6 md:px-12 lg:px-[80px]">
          <h1 className="text-[30px] md:text-6xl lg:text-[60px] font-bold text-gray-900 tracking-wide ">
            OUR PORTFOLIO
          </h1>
          <div className="flex items-center space-x-4">
            <Link to="/portfolio" className="flex items-center space-x-4">
              <span className="font-semibold text-sm lg:text-[16px]">
                View All Portfolio
              </span>
              <button className="group w-12 h-12 border border-[#040323] rounded-full flex items-center justify-center hover:border-yellow-500 transition-all duration-300">
                <img src="/icons/home/arrow.svg" alt="" />
              </button>
            </Link>
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 lg:gap-0">
          {/* First Image - Restaurant Interior */}
          <div className="group cursor-pointer overflow-hidden bg-white relative">
            <div className="h-[250px] lg:h-[600px] overflow-hidden">
              <img
                src={portfolioImages[0].src}
                alt={portfolioImages[0].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                <h3 className="text-2xl font-light mb-4 lg:text-[30px] lg:mb-[10px]">
                  Project Zaya and Ryan
                </h3>
                <p className="text-lg mb-6 lg:mb-[40px] lg:text-[20px] text-[#fff]">
                  Commercial
                </p>
                <Link to="/portfolio/12">
                  <button className="border border-white px-8 lg:px-[60px] py-2 hover:bg-white hover:text-black lg:text-[18px] transition-colors duration-300">
                    View Project
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Second Image - Wall Sconces */}
          <div className="group cursor-pointer overflow-hidden bg-white relative">
            <div className="h-[250px] lg:h-[600px] overflow-hidden">
              <img
                src={portfolioImages[1].src}
                alt={portfolioImages[1].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                <h3 className="text-2xl font-light mb-4 lg:text-[30px] lg:mb-[10px]">
                  Project Eesha VGC
                </h3>
                <p className="text-lg mb-6 lg:mb-[40px] lg:text-[20px] text-[#fff]">
                  Residential
                </p>
                <Link to="/portfolio/11">
                  <button className="border border-white px-8 lg:px-[60px] py-2 hover:bg-white hover:text-black lg:text-[18px] transition-colors duration-300">
                    View Project
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Third Image - Living Room */}
          <div className="group cursor-pointer overflow-hidden bg-white relative">
            <div className="h-[250px] lg:h-[600px] overflow-hidden">
              <img
                src={portfolioImages[2].src}
                alt={portfolioImages[2].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                <h3 className="text-2xl font-light mb-4 lg:text-[30px] lg:mb-[10px]">
                  Project Bukenzo
                </h3>
                <p className="text-lg mb-6 lg:mb-[40px] lg:text-[20px] text-[#fff]">
                  Cooperate
                </p>
                <Link to="/portfolio/4">
                  <button className="border border-white px-8 lg:px-[60px] py-2 hover:bg-white hover:text-black lg:text-[18px] transition-colors duration-300">
                    View Project
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
