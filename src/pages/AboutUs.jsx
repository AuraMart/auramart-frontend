import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 py-10 px-4 sm:px-8 md:px-16">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          About Us
        </h1>
        <p className="text-gray-600 mt-2 italic">
          Welcome to Aura Mart - Where Style Meets Savings!
        </p>
      </div>

      {/* Content Section */}
      <div className="flex flex-wrap items-center gap-32">
        {/* Right Section - Image */}
        <div className="w-full md:w-1/4">
          <img
            src="https://res.cloudinary.com/dcn64hytu/image/upload/v1732952958/interracial-young-couple-with-many-shopping-bags-looking-camera_gab3uz.jpg" // Replace with your image URL
            alt="Aura Mart - Top Brands"
            className="rounded-lg shadow-md"
          />
        </div>
        {/* Left Section - Text */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">
            Top Brands, Lowest Prices
          </h2>
          <p className="text-gray-600 mt-4 leading-7">
            At Aura Mart, we pride ourselves on bringing you the latest fashion
            trends from top global brands at prices you won’t find anywhere
            else. Our mission is to make premium fashion accessible to everyone
            without compromising on quality or style.
          </p>
          <p className="text-gray-600 mt-4 leading-7">
            We work tirelessly to source the best deals from trusted suppliers,
            ensuring that every product in our collection meets the highest
            standards of excellence. Shop with us and experience a seamless
            online shopping journey, tailored to your needs.
          </p>
        </div>
      </div>

      {/* Vision Section */}
      <div className="mt-16">
          {/* Vision Text */}
          <div className="w-full">
            <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">
              Our Vision
            </h2>
            <p className="text-gray-600 leading-7">
              Aura Mart is committed to revolutionizing the way people shop for
              fashion. Our vision is to create a world where style knows no
              boundaries, and everyone can express themselves through
              high-quality clothing, regardless of their budget.
            </p>
            <p className="text-gray-600 mt-4 leading-7">
              We believe in empowering our customers with choices that reflect
              their individuality. With Aura Mart, you’ll always find the
              perfect blend of affordability, variety, and style.
            </p>
          </div>

          
      </div>
    </div>
  );
};

export default AboutUs;
