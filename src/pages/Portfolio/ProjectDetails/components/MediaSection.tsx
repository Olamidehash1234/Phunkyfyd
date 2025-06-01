interface MediaSectionProps {
  videoUrl: string;
}

const MediaSection = ({ videoUrl }: MediaSectionProps) => {
  return (
    <div className="w-full h-[300px] lg:h-[935px] mb-[40px] lg:mb-[0px] px-[16px] lg:px-[80px]">
      <video
        src={videoUrl}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
      />
    </div>
  );
};

export default MediaSection;
