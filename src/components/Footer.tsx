import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#FDFCF6] py-[40px] mx-4 lg:mx-[80px] lg:mt-[80px] lg:pt-[0px] lg:pb-[20px] overflow-hidden">
      {/* Left Background Illustration */}
      <div className="hidden lg:block absolute left-[90px] top-[2px] z-[1]">
        <img
          src="/icons/footer/bg.svg"
          alt=""
          className="opacity-50"
        />
      </div>

      {/* Right Background Illustration */}
      <div className="hidden lg:block absolute left-[700px] top-[-100px] z-[1]">
        <img
          src="/icons/footer/bg-r.svg"
          alt=""
          className="opacity-50"
        />
      </div>

      <div className="flex flex-col border-t-[1px] border-[#04032380] pt-[40px] lg:pt-[60px] lg:flex-row justify-between items-start gap-8 relative z-[2]">
        {/* Left Section */}
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-[40px] max-w-[470px]">
          <img
            src="/icons/home/Logo.svg"
            alt="Phunkifyd Logo"
            className="w-[80px] lg-w-[124px]"
          />
          <p className=" text-sm text-[#040323] font-medium lg:text-[18px] text-justify leading-relaxed lg:leading-[26px]">
            We are an Interior Design Firm that highly believes in local
            furniture (85percent) built in the highest quality and attention to
            details; More deeply into Modern Contemporary Pieces
          </p>
        </div>

        {/* Middle Section */}
        <div className="flex lg:flex-col gap-4">
          <Link to="/about" className="text-[#040323] font-semibold lg:text-[18px] hover:text-black">
            About Us
          </Link>
          <Link to="/services" className="text-[#040323] font-semibold lg:text-[18px] hover:text-black">
            Services
          </Link>
          <Link to="/portfolio" className="text-[#040323] font-semibold lg:text-[18px] hover:text-black">
            Portfolio
          </Link>
          <Link to="/contact" className="text-[#040323] font-semibold lg:text-[18px] hover:text-black">
            Contact Us
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-6 lg:gap-[22px]">
          <p className="text-[#040323] lg:text-[18px] font-semibold text-sm">
            Copyright © 2025 Phunkifyd Interiors. All rights reserved.{" "}
          </p>
          <div className="flex gap-4 lg:gap-[20px]">
            <img src="/icons/footer/instagram.svg" alt="" className="cursor-pointer" />
            <img src="/icons/footer/x.svg" alt="" className="cursor-pointer" />
            <img src="/icons/footer/youtube.svg" alt="" className="cursor-pointer"/>
            <img src="/icons/footer/linkeldn.svg" alt="" className="cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
