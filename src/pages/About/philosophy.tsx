export default function ClientPhilosophyComponent() {
  return (
    <div className="py-16 px-[16px] lg:pb-[80px] overflow-hidden border-b lg:px-[10%]">
      <div className="">
        <div className="flex flex-col lg:flex-row items-end gap-[20px] lg:gap-[53px]">
          {/* Left Content */}
          <div className="w-full lg:w-[65%] flex flex-col justify-center">
            <h2 className="text-amber-500 text-lg lg:text-[24px] font-bold mb-6 tracking-wide">
              CLIENT-CENTERED PHILOSOPHY | Your Vision, Our Expertise
            </h2>
            <p className="text-gray-800 text-justify text-base lg:text-[20px] leading-relaxed font-medium">
              While we honor client preferences above all, our design expertise
              allows us to gently guide decisions toward optimal solutions. We
              have mastered the art of presenting compelling design choices that
              align with both your immediate desires and long-term enjoyment of
              the space. Our ability to blend client vision with design
              excellence has earned us a loyal clientele who return to us time
              and again, recognizing the timeless appeal and functionality of
              our work.
            </p>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-[365px]">
            <div className="bg-gray-100 overflow-hidden h-auto lg:h-[389px]">
              <img
                src="https://res.cloudinary.com/drbxjaxya/image/upload/v1749204597/philosophy_ulguqa.png"
                alt="Philosophy"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
