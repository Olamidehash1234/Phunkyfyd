interface ImplementationSectionProps {
  implementationImage: string;
  implementationText: string;
  implementationText2: string;
}

const ImplementationSection = ({ implementationImage, implementationText, implementationText2 }: ImplementationSectionProps) => {
  return (
    <div className="px-[16px] lg:px-[80px] py-[40px] lg:py-[0px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[149px]">
        <div className="lg:h-[906px]">
          <img
            src={implementationImage}
            alt="Implementation"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center order-2">
          <h2 className="text-[#000] font-bold text-[16px] lg:leading-[42px] font-[outfit] lg:text-[36px] mb-[20px] lg:mb-[36px]">
            Implementation
          </h2>
          <div className="space-y-6">
            <p className="text-[16px] lg:text-[18px] font-[outfit] text-justify lg:leading-[32px] leading-relaxed text-[#040323] font-normal lg:max-w-[403px]">
              {implementationText}
            </p>
            <p className="text-[16px] lg:text-[18px] text-justify font-[outfit] lg:leading-[32px] leading-relaxed text-[#040323] font-normal lg:max-w-[403px]">
              {implementationText2}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImplementationSection;
