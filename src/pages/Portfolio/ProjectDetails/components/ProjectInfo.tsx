interface ProjectInfoProps {
  brief: string;
  location: string;
  year: string;
  //   services: string;
}

const ProjectInfo = ({
  brief,
  location,
  year,
}: ProjectInfoProps) => {
  return (
    <div className="py-[40px] lg:pb-[80px] lg:pt-[123px]">
      <div className="">
        <h2 className="text-[#000] font-bold text-[40px] lg:text-[60px] mb-[20px] lg:mb-[40px]">
          Brief
        </h2>
        <div className=" flex flex-col lg:flex-row gap-[40px] lg:gap-[200px]">
          {/* Left Column */}
          <div>
            <p className="text-[16px] max-w-[429px] lg:text-[18px] text-justify lg:leading-[32px] leading-relaxed text-[#040323cc] font-medium">
              {brief}
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-4 lg:space-y-[30px]">
            <div className="flex items-center gap-[35px]">
              <img
                src="/icons/portfolio/location.svg"
                alt=""
                className="w-5 h-5"
              />
              <div>
                <h3 className="text-[#040323] lg:leading-[16px] text-[14px] lg:text-[14px] font-medium mb-[5px]">
                  Location:
                </h3>
                <p className="text-[16px] lg:text-[20px] lg:leading-[16px] text-[#040323] font-light">
                  {location}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-[35px]">
              <img src="/icons/portfolio/width.svg" alt="" className="w-5 h-5" />
              <div>
                <h3 className="text-[#040323] lg:leading-[16px] text-[14px] lg:text-[14px] font-medium mb-[5px]">
                  Square meters:
                </h3>
              </div>
            </div>
            <div className="flex items-center gap-[35px]">
              <img
                src="/icons/portfolio/date.svg"
                alt=""
                className="w-5 h-5"
              />
              <div>
                <h3 className="text-[#040323] lg:leading-[16px] text-[14px] lg:text-[14px] font-medium mb-[5px]">
                  Date:
                </h3>
                <p className="text-[16px] lg:text-[20px] lg:leading-[16px] text-[#040323] font-light">
                  {year}
                </p>
              </div>
            </div>
            {/* <div>
              <h3 className="text-[#040323] text-[14px] lg:text-[16px] font-medium mb-1">SERVICES</h3>
              <p className="text-[16px] lg:text-[22px] text-[#040323] font-light">{services}</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
