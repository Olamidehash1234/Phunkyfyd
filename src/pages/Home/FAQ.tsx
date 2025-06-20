const FAQSection = () => {
  const faqs = [
    {
      question: "What services does PHUNKIFYD INTERIORS offer?",
      answer: "We offer interior design, furniture design, 3D rendering, sourcing and aftercare."
    },
    {
      question: "Do you use local materials?",
      answer: "Yes, 85% of our pieces are locally crafted with high-quality materials."
    },
    {
      question: "Can I be involved in the design process?",
      answer: "Yes, your input is key. We work closely with you throughout the project."
    },
    {
      question: " What’s the typical timeline?",
      answer: "Quotations are ready in 10 working days. Project timelines vary by scope."
    },
    {
      question: "Do you offer 3D designs?",
      answer: "Yes, 3D renderings are available at an extra cost, depending on space size."
    },
    {
      question: "How do you ensure quality?",
      answer: "We do regular site visits and keep you updated every step of the way."
    },
    {
      question: "Do you work outside Lagos?",
      answer: "Yes, we’ve worked across Nigeria and in Ghana."
    },
    {
      question: "Can I buy furniture separately?",
      answer: "Yes, our Decor/Furniture Store offers stand-alone pieces and décor."
    }
  ];

  return (
    <div className="py-[40px] px-4 sm:px-6 lg:pt-[80px] lg:pb-[0px] lg:px-[80px] ">
      <div className="border-b border-[#04032333] lg:pb-[80px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - Images */}
          <div className="space-y-6 lg:flex lg:flex-col lg:justify-between">
            <h2 className="text-4xl font-serif text-[#040323] lg:text-[60px] mb-8 lg:mb-0">FAQS</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-[10px]">
              {/* First Item - Video */}
              <div className="bg-gray-100 rounded-[2px] overflow-hidden h-[300px] lg:h-[500px]">
                <video 
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="https://res.cloudinary.com/drbxjaxya/video/upload/v1750247005/video-faq_eexocp.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
              
              {/* Second Image */}
              <div className="bg-gray-100 rounded-[2px] overflow-hidden h-[300px] lg:h-[500px]">
                <img src="https://res.cloudinary.com/drbxjaxya/image/upload/v1750245158/image-faq-new_kedmtv.jpg" alt="" className='w-full h-full object-cover' />
              </div>
            </div>
          </div>

          {/* Right side - FAQ Items */}
          <div className="space-y-1 border-t-[0.5px] border-[#04032380]">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b-[0.5px] border-[#04032380] py-6 lg:py-[20px] flex items-start space-x-4 lg:space-x-[57px] ">
                {/* Icon */}
                <div className="flex-shrink-0 mt-1">
                  <img src="/icons/home/pck.svg" alt="" />
                </div>
                
                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                    <div>
                      <h3 className="text-[#040323] lg:text-[18px] font-medium text-base leading-relaxed lg:leading-[26px]">
                        {faq.question}
                      </h3>
                    </div>
                    <div>
                      <p className="text-[#040323] lg:text-[18px] font-medium text-base leading-relaxed lg:leading-[26px]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;