interface HeroProps {
  projectName: string;
  description: string;
  image: string;
}

const Hero = ({ projectName, description, image }: HeroProps) => {
  return (
    <div className="relative h-[50vh] lg:h-[773px] mb-[0px] lg:mb-[0px]">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 flex items-center">
        <div className="text-left text-white max-w-[600px] px-[16px] lg:px-[80px] lg:text-[60px]">
          <h1 className="text-[40px] lg:text-[66px] lg:leading-[70px] font-bold mb-4 lg:mb-[40px]">
            {projectName}
          </h1>
          <p className="text-[16px] lg:text-[20px] font-semibold lg:leading-[26px] leading-relaxed">
            {description}
          </p>
        </div>
      </div>
      <img
        src={image}
        alt="Project Hero"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Hero;
