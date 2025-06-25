const MeetTheCEO = () => {
  return (
    <div className=" py-[40px] px-4 lg:px-[80px] lg:pb-[60px]">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image Section */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="https://res.cloudinary.com/drbxjaxya/image/upload/v1750432713/IMG_4474_qgws8l.jpg"
                alt="Funke Olude, CEO of Fort Interiors"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="order-1 lg:order-2 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
                MEET THE CEO
              </h2>
            </div>

            <div className="space-y-6 text-gray-700 leading-relaxed">
              <p className="text-base sm:text-lg">
                <span className="font-semibold">Founder and Creative Director for PHUNKIFYD INTERIORS.</span>
              </p>

              <p className="text-sm lg:text-[16px] font-medium lg:leading-[24px]">
                Started out in the year 2018 where unique furniture pieces where hard to find and purchase, we had no choice than to think outside the box and create something from what we could lay our hands on in Nigeria.
              </p>

              <p className="text-sm lg:text-[16px] font-medium lg:leading-[24px]">
                Phunkifydinteriors was born out of the flair of arrangement of cluttered spaces and the idea of how it makes me feel good.
              </p>

              <p className="text-sm lg:text-[16px] font-medium lg:leading-[24px]">
                We started out with recycling of old furnitures or old clothes by using them to make fantastic pieces and that was the limelight for my brand; my creativity was spot on and from there we've grown to be atleast one of the top 10 interior designers in Lagos Nigeria. This creativity can be spotted in of our recent modern salon design where we had to cut plumber pipes in shapes and create ceiling lighting for a nail room in 2023
              </p>

              <div className="pt-4">
                <p className="text-sm text-gray-600 mb-1">Warm regards,</p>
                <p className="font-semibold text-gray-900 text-base">FUNKE OLUDE </p>
                <p className="text-sm text-gray-900">Creative Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MeetTheCEO;