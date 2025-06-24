export default function FurnitureDesignComponent() {
  return (
    <div className="px-[16px] py-[40px] lg:px-[80px] lg:pt-[80px] lg:pb-0 relative">
      {/* Background Logo */}
      <div 
        className="absolute inset-0 bg-center bg-[length:250px] mb-[200px] lg:mb-0 lg:bg-[length:500px] bg-no-repeat opacity-5 pointer-events-none"
        style={{
          backgroundImage: "url('/Logo.svg')",
        }}
      ></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 border-b-[1px] border-[#0000001A] pb-[40px] lg:pb-[80px] relative z-10">
        {/* Left Column - Text Content */}
        <div className="space-y-8 items-center">
          {/* Commercial Spaces Section */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              For our Commercial Spaces:
            </h2>
            <p className="text-[#000] lg:text-[16px] leading-relaxed text-sm">
              It's about infusing the beauty of putting the experimental into
              design. An escape for the modern day human! This is what happens
              when experience becomes the blueprint.
            </p>
            <p className="text-[#000] lg:text-[16px] leading-relaxed text-sm mt-3">
              Our commercial spaces are designed to intentionally give a glimpse
              of how intentional the brand is with its customers clients from
              the reception before stepping into the other areas of the space.
            </p>
          </div>

          {/* Residential Design Section */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              For Our Residential Design:
            </h2>
            <p className="text-[#000] text-sm lg:text-[16px] leading-relaxed ">
              It's not about how the space looks, it's about how much we reflect
              your personality in that space. How it reflects your values, your
              culture and the rhythm of your life and if your home doesn't tell
              that, you won't feel your own unique story in how you live, how
              you gather, and how you rest. We fix livable spaces right to shape
              your lifestyle and living passions because because sources say "we
              spend 80percent of our lives" in the home
            </p>
          </div>

          {/* Furnishings Section */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              Our Furnishings:
            </h2>
            <p className="text-[#000] lg:text-[16px] leading-relaxed text-sm">
              Majorly custom/bespoke furnitures carefully built and made in
              Nigeria with a 20 percent in well curated imported pieces to add
              the icing on the cake!
            </p>
          </div>
        </div>

        {/* Right Column - Images and Logo */}
        <div className="space-y-6 items-end">
          {/* Logo */}
          {/* <div className="flex justify-center mb-8">
            <div className="w-32 h-32 lg:w-auto lg:h-auto rounded-full flex items-center justify-center">
              <img src="/Logo.svg" alt="" />
            </div>
          </div> */}

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Top Left Image - Living room with plant */}
            <div className="bg-gray-100 lg:h-auto lg:w-auto">
              <div className="w-full h-full bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center">
                <img src="https://res.cloudinary.com/drbxjaxya/image/upload/v1750797842/IMG_9743_ymgzgy.jpg" alt="" className="h-full object-cover" />
              </div>
            </div>

            {/* Top Right Image - Minimalist space */}
            <div className="bg-gray-100 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <img src="https://res.cloudinary.com/drbxjaxya/image/upload/v1750175670/IMG_4324_nasbxw.jpg" alt="" className="h-full object-cover"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}