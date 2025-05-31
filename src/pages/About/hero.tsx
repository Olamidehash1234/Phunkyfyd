export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden px-4 sm:px-6 lg:px-[80px] pt-[40px] lg:pt-[80px] lg:pb-[0px]">
      <div className=" border-b border-[#04032333] lg:pb-[60px] pb-[40px]">
        {/* Top Text */}
        <h1 className="text-3xl lg:text-[96px] font-bold text-left lg:leading-[100px]">
          <span className="text-[#040323]">MORE THAN </span>
          <span className="text-[#ECAF21]">DESIGN</span>
        </h1>

        {/* Image */}
        <div className="mt-6 lg:mt-[20px] relative">
          <video
            src="/video/vid.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full max-h-[573px] object-cover rounded-md"
          />
          <div className="absolute bottom-4 left-4 w-12 h-12 lg:w-[100px] lg:h-[100px]">
            <img
              src="/video/Logo.svg"
              alt="Logo"
              className="w-full h-full object-contain mix-blend-screen opacity-70"
            />
          </div>
        </div>

        {/* Bottom Text */}
        <h2 className="mt-6 lg:mt-[20px] text-3xl lg:text-[96px] font-bold text-right leading-tight">
          <span className="text-[#040323]">IT’S A </span>
          <span className="text-[#ECAF21]">LEGACY</span>
        </h2>
      </div>
    </section>
  );
}
