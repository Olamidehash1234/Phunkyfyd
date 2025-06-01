interface ChallengeSectionProps {
  challengeImage: string;
  challengeText: string;
  sectionType: 'challenge' | 'concept';
}

const ChallengeSection = ({ challengeImage, challengeText, sectionType }: ChallengeSectionProps) => {
  const title = sectionType === 'challenge' ? 'Challenge' : 'Challenge';

  return (
    <div className="px-[16px] lg:px-[80px] py-[40px] lg:py-[0px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[40px] lg:gap-[149px]">
        <div className="lg:h-[906px]">
          <img
            src={challengeImage}
            alt="Project Challenge"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-[#000] font-bold text-[16px] lg:leading-[42px] font-[outfit] lg:text-[36px] mb-[20px] lg:mb-[36px]">
            {title}
          </h2>
          <p className="text-[16px] lg:text-[18px] text-justify lg:leading-[32px] leading-relaxed text-[#040323cc] font-normal lg:max-w-[403px]">
            {challengeText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChallengeSection;
