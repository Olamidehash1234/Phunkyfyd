interface ShowcaseSectionProps {
  showcaseImages: string[];
}

const ShowcaseSection = ({ showcaseImages }: ShowcaseSectionProps) => {
  return (
    <div className=" px-[16px] lg:px-[50px] py-[40px] lg:py-[80px] grid grid-cols-2 gap-3 lg:gap-x-[16px] lg:gap-y-[20px] lg:grid-cols-3">
      {showcaseImages.map((image, index) => (
        <div key={index} className="h-[400px] lg:h-[500px] ">
          <img
            src={image}
            alt={`Showcase ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default ShowcaseSection;
