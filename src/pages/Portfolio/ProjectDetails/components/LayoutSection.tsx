interface LayoutSectionProps {
  layoutImage: string;
  layoutText: string;
}

const LayoutSection = ({ layoutImage, layoutText }: LayoutSectionProps) => {
  return (
    <div className="mt-[139px] px-[16px] lg:px-[80px]">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 align-center gap-[40px] lg:gap-[129px]">
          <div className="lg:h-[340px]">
            <img
              src={layoutImage}
              alt="Project Layout"
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="text-[#000] font-bold text-[16px] lg:text-[36px] mb-[20px] lg:mb-[40px]">
              Layout
            </h2>
            <p className="text-[16px] lg:text-[18px] text-justify lg:leading-[32px] leading-relaxed text-[#040323cc] font-medium">
              {layoutText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutSection;
