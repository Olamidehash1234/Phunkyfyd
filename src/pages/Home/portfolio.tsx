const Portfolio = () => {
  const portfolioImages = [
    {
      id: 1,
      src: "/images/home/prt-img1.png",
      alt: "Modern restaurant interior with warm lighting",
    },
    {
      id: 2,
      src: "/images/home/prt-img2.png",
      alt: "Elegant wall sconces and decor",
    },
    {
      id: 3,
      src: "/images/home/prt-img3.png",
      alt: "Luxury living room with neutral tones",
    },
  ];

  return (
    <div className="pt-[40px] lg:pt-[80px] lg:mb-[40px] ">
      <div className="">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-[30px] lg:mb-[60px] px-6 md:px-12 lg:px-[80px]">
          <h1 className="text-[30px] md:text-6xl lg:text-[60px] font-bold text-gray-900 tracking-wide ">
            OUR PORTFOLIO
          </h1>
          <div className="flex items-center space-x-4">
            <span className=" font-semibold text-sm lg:text-[16px]">
              View All Services
            </span>
            <button className="group w-12 h-12 border border-[#040323]  rounded-full flex items-center justify-center hover:border-yellow-500 transition-all duration-300">
              <img src="/icons/home/arrow.svg" alt="" />
            </button>
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
                <h3 className="text-2xl font-light mb-4 lg:text-[30px] lg:mb-[10px]">Zaya and Ryan</h3>
                <p className="text-lg mb-6 lg:mb-[40px] lg:text-[20px] text-[#fff]">Commercial</p>
                <button className="border border-white px-8 lg:px-[60px] py-2 hover:bg-white hover:text-black lg:text-[18px] transition-colors duration-300">
                  View Project
                </button> 
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
                <h3 className="text-2xl font-light mb-4 lg:text-[30px] lg:mb-[10px]">Project Eesha</h3>
                <p className="text-lg mb-6 lg:mb-[40px] lg:text-[20px] text-[#fff]">Residential</p>
                <button className="border border-white px-8 lg:px-[60px] py-2 hover:bg-white lg:text-[18px] hover:text-black transition-colors duration-300">
                  View Project
                </button>
              </div>
            </div>
          </div>

          {/* Third Image - Living Room */}
           <div className="group cursor-pointer overflow-hidden bg-white relative">
            <div className="h-[250px] lg:h-[600px] overflow-hidden">
              <img
                src={portfolioImages[1].src}
                alt={portfolioImages[1].alt}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                <h3 className="text-2xl font-light mb-4 lg:text-[30px] lg:mb-[10px]">Hand Made Sofa</h3>
                <p className="text-lg mb-6 lg:mb-[40px] lg:text-[20px] text-[#fff]">Decor/Furniture Store</p>
                <button className="border border-white px-8 lg:px-[60px] py-2 hover:bg-white lg:text-[18px] hover:text-black transition-colors duration-300">
                  View Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
