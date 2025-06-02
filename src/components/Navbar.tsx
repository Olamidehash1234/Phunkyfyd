import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        className={`border-b border-[#0403231A] bg-[#FDFCF6] transform transition-all duration-500 ease-in-out w-full ${
          isScrolled ? "fixed top-0 left-0 right-0 z-50 translate-y-0" : "relative -translate-y-1"
        }`}
      >
        <div className="px-4 lg:px-[80px]">
          <div className="flex justify-between items-center h-16 md:h-[69px]">
            {/* Company Name - Left */}
            <div className="flex-shrink-0">
              <a href="/">
                <h1 className="text-lg md:text-[18px] font-bold text-[#040323] uppercase">
                  Phunkifyd Interiors
                </h1>
              </a>
            </div>

            {/* Center Logo - Hidden on mobile, visible on desktop */}
            <div className="hidden md:w-[100px] md:h-[100px] lg:flex flex-1 justify-center mt-[32px] ml-[90px] z-10">
              <a href="/">
                <img src="/Logo.svg" alt="" />
              </a>
            </div>

            {/* Desktop Navigation Links - Right */}
            <div className="hidden lg:flex md:text-[18px] items-center space-x-8 md:space-x-[40px]">
              <Link
                to="/about"
                className="text-[#040323] hover:text-gray-900 transition-colors duration-200 font-semibold"
              >
                About Us
              </Link>
              <Link
                to="/services"
                className="text-[#040323] hover:text-gray-900 transition-colors duration-200 font-semibold"
              >
                Services
              </Link>
              <Link
                to="/portfolio"
                className="text-[#040323] hover:text-gray-900 transition-colors duration-200 font-semibold"
              >
                Portfolio
              </Link>
              <Link
                to="/contact"
                className="text-[#040323] hover:text-gray-900 transition-colors duration-200 font-semibold"
              >
                Contact Us
              </Link>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-[#040323] hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Dark Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation Menu - Update z-index */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 fixed top-16 left-0 right-0 z-50">
          <div className="px-4 py-4 space-y-4">
            {/* Mobile Logo */}
            <div className="flex justify-center pb-4">
              <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
                <span className="text-yellow-400 font-bold text-lg">P</span>
              </div>
            </div>

            <Link
              to="/about"
              className="block text-[#040323] hover:text-gray-900 transition-colors duration-200 font-semibold py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/services"
              className="block text-[#040323] hover:text-gray-900 transition-colors duration-200 font-semibold py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className="block text-[#040323] hover:text-gray-900 transition-colors duration-200 font-semibold py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className="block text-[#040323] hover:text-gray-900 transition-colors duration-200 font-semibold py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
