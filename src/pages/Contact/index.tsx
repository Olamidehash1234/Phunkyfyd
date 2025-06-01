import React, { useState } from 'react';

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  return (
    <div className="w-full px-[16px] lg:px-[80px] py-[40px] lg:pt-[80px]">
      <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[640px]">
        {/* Left Section - Contact Form */}
        <div className="lg:col-span-1 p-[10px] lg:pr-[20px] lg:pl-[0px] lg:pt-[0px] flex flex-col">
          <div className="max-w-[400px]">
            <h1 className="text-4xl lg:text-[60px] font-bold text-[#040323] lg:leading-[70px] mb-2">
              Hey,
            </h1>
            <h2 className="text-4xl lg:text-[60px] font-bold text-[#040323] lg:leading-[70px] mb-12 lg:mb-[40px]">
              Let Us Talk
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-[30px] lg:gap-[40px]">
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Name"
                  className="w-full pb-3 lg:pb-[0px] lg:text-[18px] text-[#040323] font-medium placeholder-[#040323B2] bg-transparent border-0 border-b border-[#04032399] focus:border-[#04032399] lg:leading-[38px] focus:outline-none transition-colors duration-200"
                />
              </div>
              
              <div className="relative">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="w-full pb-3 lg:pb-[0px] lg:text-[18px] text-[#040323] font-medium placeholder-[#040323B2] bg-transparent border-0 border-b border-[#04032399] focus:border-[#04032399] lg:leading-[38px] focus:outline-none transition-colors duration-200"
                />
              </div>
              
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Email Address"
                  className="w-full pb-3 lg:pb-[0px] lg:text-[18px] text-[#040323] font-medium placeholder-[#040323B2] bg-transparent border-0 border-b border-[#04032399] focus:border-[#04032399] lg:leading-[38px] focus:outline-none transition-colors duration-200"
                />
              </div>
              
              <div className="relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Message To Us"
                  rows={5}
                  className="w-full pb-3 lg:pb-[0px] lg:text-[18px] text-[#040323] font-medium placeholder-[#040323B2] bg-transparent border-0 border-b border-[#04032399] focus:border-[#04032399] lg:leading-[38px] focus:outline-none transition-colors duration-200"
                />
              </div>
            </form>
            <button
                type="submit"
                className="mt-8 lg:mt-[54px] flex items-center gap-3 lg:gap-[40px] text-gray-900 hover:text-amber-600 transition-colors duration-200 group"
              >
                <span className="text-lg font-medium">Send Message</span>
                <div className="w-12 h-12 lg:w-[60px] lg:h-[60px] rounded-full border border-[#040323] group-hover:border-amber-600 flex items-center justify-center  transition-colors duration-200">
                  <img src="/icons/contact/arrow.svg" alt="" />
                </div>
              </button>
          </div>
        </div>

        {/* Middle Section - Contact Information */}
        <div className="lg:col-span-1 px-[10px] py-[40px] lg:p-12 lg:pr-[40px] lg:pt-[0px] flex flex-col lg:mt-2">
          <div className="max-w-md">
            <div className="">
              <h3 className="text-[16px] font-bold lg:text-[20px] lg:leading-[40px] text-[#04032399] uppercase tracking-wider mb-6 lg:mb-[60px]">
                CONTACT INFORMATION
              </h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-[18px] lg:text-[22px] font-bold lg:leading-[40px] text-[#040323] uppercase mb-3">
                    EMAIL ADDRESS:
                  </h4>
                  <div className="space-y-2 lg:space-y-[6px]">
                    <a 
                      href="mailto:info@plunkifyinteriors.com" 
                      className="block text-[16px] text-[#040323] lg:text-[20px] lg:leading-[38px] font-bold transition-colors duration-200 hover:underline underline-offset-[3px]"
                    >
                      info@plunkifyinteriors.com
                    </a>
                    <a 
                      href="mailto:sales@plunkifyinteriors.com" 
                      className="block text-[16px] text-[#040323] lg:text-[20px] lg:leading-[38px] font-bold transition-colors duration-200 hover:underline underline-offset-[3px]"
                    >
                      sales@plunkifyinteriors.com
                    </a>
                    <a 
                      href="mailto:enquiries@plunkifyinteriors.com" 
                      className="block text-[16px] text-[#040323] lg:text-[20px] lg:leading-[38px] font-bold transition-colors duration-200 hover:underline underline-offset-[3px]"
                    >
                      enquiries@plunkifyinteriors.com
                    </a>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm lg:text-[22px] font-bold lg:leading-[40px] text-[#040323] uppercase mb-3">
                    PHONE NUMBERS:
                  </h4>
                  <div className="space-y-2 lg:space-y-[6px]">
                    <a 
                      href="tel:+2347024516528" 
                      className="block text-[16px] text-[#040323] lg:text-[20px] lg:leading-[38px] font-bold transition-colors duration-200 hover:underline underline-offset-[2px]"
                    >
                      +234 701 2345 678
                    </a>
                    <a 
                      href="tel:+2347024516289" 
                      className="block text-[16px] text-[#040323] lg:text-[20px] lg:leading-[38px] font-bold transition-colors duration-200 hover:underline underline-offset-[2px]"
                    >
                      +234 702 3456 789
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="lg:col-span-1 relative h-[450px] lg:h-auto">
          <div className="absolute inset-0">
            <img
              src="/images/contact/img1.png"
              alt="Luxury interior design with golden accents and modern fixtures"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComponent;