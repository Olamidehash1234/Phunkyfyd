interface GridSectionProps {
  gridImages: string[];
}

const GridSection = ({ gridImages }: GridSectionProps) => {
  return (
    <div className="px-[16px] lg:px-[80px] py-[40px] lg:py-[80px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[13px]">
        {gridImages.map((image, index) => (
          <div key={index} className="w-full lg:h-[900px]">
            <img
              src={image}
              alt={`Grid Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default GridSection;
