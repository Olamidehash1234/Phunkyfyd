import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import Toast from '../../components/Toast';

const ContactComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  
  const [toast, setToast] = useState({
    show: false,
    message: '',
    type: 'success' as 'success' | 'error' | 'loading'
  });

  useEffect(() => {
    // Initialize EmailJS with public key
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate form fields
    if (!formData.name || !formData.email || !formData.message) {
      setToast({
        show: true,
        message: 'Please fill in all required fields',
        type: 'error'
      });
      return;
    }

    setToast({
      show: true,
      message: 'Sending message...',
      type: 'loading'
    });

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }
      );

      setToast({
        show: true,
        message: 'Message sent successfully!',
        type: 'success'
      });
      setFormData({ name: '', phone: '', email: '', message: '' });
    } catch (error: unknown) {
      console.error('Failed to send message:', error);
      setToast({
        show: true,
        message: 'Failed to send message. Please try again.',
        type: 'error'
      });
    }
  };

  return (
    <div className="w-full px-[16px] lg:px-[80px] py-[40px] lg:pt-[80px] relative">
      {/* Background image - moved up in DOM and adjusted z-index */}
      <div className="hidden lg:block absolute left-[500px] top-[70px] -z-10 pointer-events-none">
        <img
          src="/icons/about/bg.svg"
          alt=""
          className="opacity-50"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[640px] relative z-10">
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

              <button
                type="submit"
                disabled={toast.type === 'loading'}
                className={`mt-8 lg:mt-[54px] flex items-center gap-3 lg:gap-[40px] transition-colors duration-200 group ${
                  toast.type === 'loading' 
                    ? 'opacity-50 cursor-not-allowed text-gray-400' 
                    : 'text-gray-900 hover:text-amber-600'
                }`}
              >
                <span className="text-lg font-medium">
                  {toast.type === 'loading' ? 'Sending...' : 'Send Message'}
                </span>
                <div className={`w-12 h-12 lg:w-[60px] lg:h-[60px] rounded-full border flex items-center justify-center transition-colors duration-200 ${
                  toast.type === 'loading'
                    ? 'border-gray-400'
                    : 'border-[#040323] group-hover:border-amber-600'
                }`}>
                  <img src="/icons/contact/arrow.svg" alt="" />
                </div>
              </button>
            </form>
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
                    PHONE NUMBER:
                  </h4>
                  <div className="space-y-2 lg:space-y-[6px]">
                    <a 
                      href="tel:+2348092529183 " 
                      className="block text-[16px] text-[#040323] lg:text-[20px] lg:leading-[38px] font-bold transition-colors duration-200 hover:underline underline-offset-[2px]"
                    >
                      +2348092529183 
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="lg:col-span-1 z-[1] relative h-[450px] lg:h-auto">
          <div className="absolute inset-0">
            <img
              src="https://res.cloudinary.com/drbxjaxya/image/upload/v1749200726/img1_tbvuze.png"
              alt="Luxury interior design with golden accents and modern fixtures"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      <Toast
        show={toast.show}
        message={toast.message}
        type={toast.type}
        onHide={() => setToast(prev => ({ ...prev, show: false }))}
      />
    </div>
  );
};

export default ContactComponent;