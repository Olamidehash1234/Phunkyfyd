const ApproachSection: React.FC = () => {
  const approachSteps = [
    {
      title: "DISCOVERY & DIALOGUE",
      description: "We begin by listening intently to your needs and desires. Our team possesses a unique \"onsite creativity gift\" that often allows us to visualize your space's transformation during our first meeting.",
      image: "/images/about/vision.png",
      isReversed: false
    },
    {
      title: "CREATIVE CONCEPTUALISATION",
      description: "We translate your vision into tangible designs through:",
      bulletPoints: [
        "Detailed on-site sketches",
        "Customized mood boards",
        "Meticulously crafted design concepts",
        "3D renderings that bring your space to life (available at additional cost)"
      ],
      image: "/images/about/vision.png",
      isReversed: true
    },
    {
      title: "TRANSPARENT PLANNING",
      description: "Within 10 working days, we provide comprehensive quotations covering every aspect of your project, from furniture pieces to civil works.",
      image: "/images/about/vision.png",
      isReversed: false
    },
    {
      title: "MATERIAL SELECTION",
      description: "We arrange personal consultations to explore fabric options, wood finishes, metal treatments, and color palettes, ensuring every element aligns with your vision.",
      image: "/images/about/vision.png",
      isReversed: true
    },
    {
      title: "FORMAL AGREEMENT ",
      description: "Our projects are backed by professionally drafted contracts, reviewed and sealed by our reputable law firm, protecting your interests throughout our partnership.",
      image: "/images/about/vision.png",
      isReversed: false
    },
    {
      title: "EXPERT SOURCING  ",
      description: "Our projects are backed by professionally drafted contracts, reviewed and sealed by our reputable law firm, protecting your interests throughout our partnership",
      image: "/images/about/vision.png",
      isReversed: true
    },
  ];

  return (
    <div className="bg-[#FDFCF6] border-b pt-[40px] pb-[20px] px-[16px] lg:px-[100px] lg:pt-[0px] lg:pb-[60px] mb-[40px] lg:mb-[0px]">
      {/* Vertical Border Above Header */}
      <div className="hidden lg:block w-[1px] h-[80px] mx-auto bg-[#04032333] mb-[40px]"></div>

      {/* Header - Aligned with right content */}
      <div className="lg:w-1/2 text-center lg:text-left lg:ml-auto lg:pl-[0px] mb-[40px] lg:mb-[40px]">
        <h2 className="text-[24px] lg:text-[32px] font-bold text-[#040323] mb-[10px] lg:leading-[42px] leading-[30px]">
          THE PHUNKIFYD APPROACH
        </h2>
        <p className="text-[18px] leading-tight lg:text-[20px] font-semibold">
          Thoughtful Design from Concept to Completion
        </p>
      </div>

      {/* Approach Steps */}
      <div className="flex flex-col lg:gap-0 relative">
        {/* Vertical Border */}
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-[#04032333]"></div>
        
        {approachSteps.map((step, index) => (
          <div key={index} 
            className={`flex flex-col lg:flex-row items-start lg:items-start lg:py-[80px] pb-[40px] relative ${
              step.isReversed ? 'lg:flex-row-reverse' : ''
            }`}
          >
            <div className={`flex-1 ${
              step.isReversed 
                ? 'lg:pl-[48px]' 
                : 'lg:pr-[48px] lg:text-right text-right'
            }`}>
              <div className={`flex gap-6 mb-2 lg:mb-[10px] ${
                step.isReversed ? '' : 'justify-end'
              }`}>
                <h3 className="text-[18px] lg:text-[20px] lg:leading-[20px] font-bold text-[#040323]">
                  {step.title}
                </h3>
              </div>
              <div>
                <p className="text-[16px] lg:text-[16px] text-[#040323] leading-[20px] mb-4 font-medium lg:mb-[2px]">
                  {step.description}
                </p>
                {step.bulletPoints && (
                  <ul className="list-disc font-medium mb-4 pl-5 lg:pl-[30px] space-y-[0px]">
                    {step.bulletPoints.map((point, i) => (
                      <li key={i} className="text-[16px] lg:text-[16px] text-[#040323] leading-[20px]">
                        {point}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Center Illustration */}
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-[80px] z-10">
              <img 
                src="/icons/about/illustration.svg" 
                alt="Step illustration" 
                className=""
              />
            </div>

            <div className={`w-full lg:w-1/2 h-[300px] ${step.isReversed ? 'lg:pr-[48px]' : 'lg:pl-[48px]'}`}>
              <img src={step.image} alt={step.title} className="w-full h-full lg:h-full object-cover" />
            </div>
          </div>
        ))}  
      </div>
      {/* Load More Text */}
        <div className="hidden lg:flex justify-center items-center mt-[20px]">
          <span className="text-[16px] font-medium text-[#040323] cursor-pointer hover:text-[#ECAF21]">
            Load More
          </span>
        </div>
    </div>
  );
};

export default ApproachSection;
