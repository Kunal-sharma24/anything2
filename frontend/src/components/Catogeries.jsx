import React from "react";

const categories = [
  { name: "Clothes", img: "/ecom/mens.png", alt: "clothes" },
  { name: "Smartphones", img: "/ecom/iphone11.png", alt: "smartphone" },
  { name: "Footwear", img: "/ecom/R.png", alt: "shoes" },
  { name: "Laptops", img: "/ecom/hplaptop.png", alt: "laptop" },
  { name: "Headphones", img: "/ecom/headphone.png", alt: "headphone" },
  { name: "Smart Watches", img: "/ecom/iwatch.png", alt: "smartwatch" },
];

const Categories = () => {
  return (
    <div className="w-full">
      {/* Title */}
      <h2 className="font-semibold text-[32px] mb-4 ml-6 md:ml-16">Popular Categories </h2>

      {/* Scrollable on Mobile, No Scroll on Desktop */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="overflow-x-auto md:overflow-hidden scrollbar-hide">
          <div className="flex md:grid md:grid-cols-6 md:ml-12 md:mr-12 gap-4 md:gap-0">
            {categories.map((category, index) => (
              <div key={index} className="flex flex-col items-center min-w-[110px] md:min-w-[140px]">
                {/* Category Box */}
                <div className="bg-gray-200 h-[150px] w-[110px] md:h-[180px] md:w-[140px] rounded-2xl 
                    flex items-center justify-center hover:shadow-xl hover:scale-105 transition-transform">
                  <img
                    src={category.img}
                    alt={category.alt}
                    className="h-28 md:h-32 object-contain"
                  />
                </div>
                {/* Category Name */}
                <p className="text-gray-700 text-sm md:text-lg font-semibold mt-2 hover:text-blue-500 cursor-pointer">
                  {category.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
