interface MainImageProps {
  mainImage: string;
}

const MainImage = ({ mainImage }: MainImageProps) => {
  return (
    <div className="w-full h-[300px] lg:h-[935px] mb-[40px] lg:mb-[0px] px-[16px] lg:px-[80px]">
      <img
        src={mainImage}
        alt="Project Main Image"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default MainImage;
