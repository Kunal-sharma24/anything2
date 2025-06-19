import React, { useState } from 'react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

function Crousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Samsung Galaxy Z Fold4",
      description: "5G (Phantom Black, 12GB RAM, 256GB Storage) with No Cost EMI/Additional Exchange Offers.",
      deliveryDate: "Free Delivery Sat, 6 July",
      stockStatus: "Only one left in stock",
      imageSrc: "./ecom/zflip.png",
    },
    {
      id: 2,
      title: "Apple iPhone 15 Pro Max",
      description: "(256 GB) - Black Titanium FORGED IN TITANIUM — iPhone 15 Pro Max has a strong and light.",
      deliveryDate: "Free Delivery Sun, 9 July",
      stockStatus: "Only 4 left in stock",
      imageSrc: "./ecom/i15.png",
    },
    {
      id: 3,
      title: "HP Laptop 15, 13th Gen Intel Core i3-1315U",
      description: "15.6-inch (39.6 cm), FHD, 8GB DDR4, 512GB SSD, Intel Iris Xᵉ graphics.",
      deliveryDate: "Free Delivery Sat, 6 July",
      stockStatus: "Out of Stock",
      imageSrc: "./ecom/hplaptop.png",
    },
  ];

  const handlePrevClick = () => {
    setActiveIndex(activeIndex === 0 ? slides.length - 1 : activeIndex - 1);
  };

  const handleNextClick = () => {
    setActiveIndex(activeIndex === slides.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <div className="h-[280px] md:h-[400px] mt-20 md:mt-24 flex justify-center overflow-hidden relative">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`h-[260px] md:h-[400px] w-[90%] md:w-[90%] lg:w-[85%] bg-[#91E0EF] rounded-3xl absolute transition-all duration-500 ${
            index === activeIndex ? "opacity-100 scale-100 z-10" : "opacity-0 scale-95 z-0"
          }`}
          style={{ 
  transform: `translateX(${(index - activeIndex) * 100}%)`,
  background: 'linear-gradient(135deg, #c3e7f9 0%, #91e0ef 100%)'
}}

        >
          <div className="flex items-center relative w-full h-full">
            {/* Left Side (Text) */}
            <div className="h-full w-[50%] px-4 md:px-8 flex flex-col justify-center">
              <div className="opacity-[70%] font-bold text-[16px] md:text-[24px] lg:text-[28px] py-2 md:py-4">
                {slide.title} <br />
                {slide.description}
              </div>
              <div className="text-[12px] md:text-[16px] font-medium">{slide.deliveryDate}</div>
              <div className="text-[12px] md:text-[16px] font-medium text-red-500 hover:text-white w-fit">
                {slide.stockStatus}
              </div>
              <div className="flex gap-2 mt-2 md:mt-4">
                <button className="bg-[#15ACC9] text-[12px] md:text-[16px] lg:text-[18px] hover:scale-110 transition-transform hover:shadow-2xl text-grey hover:text-white font-semibold py-1 px-3 rounded-full">
                  Shop Now
                </button>
                <button className="outline-[#15ACC9] outline outline-2 text-[12px] md:text-[16px] lg:text-[18px] hover:scale-110 transition-transform hover:shadow-2xl text-grey hover:text-white hover:bg-[#15ACC9] font-semibold py-1 px-3 rounded-full">
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Right Side (Image) */}
            <div className="h-[160px] md:h-[260px] w-[50%] flex justify-center items-center hover:scale-110 transition-all duration-500">
              <img className="max-h-full w-auto object-contain" src={slide.imageSrc} alt={slide.title} />
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={handlePrevClick}
        className="absolute z-20 h-[36px] md:h-[48px] w-[36px] md:w-[48px] text-[16px] md:text-[20px] font-extrabold left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-[#15ACC9] text-white rounded-full p-2 shadow-2xl hover:shadow-black hover:bg-white hover:text-gray-800 transition-all flex items-center justify-center"
      >
        <FiChevronLeft />
      </button>
      <button
        onClick={handleNextClick}
        className="absolute z-20 h-[36px] md:h-[48px] w-[36px] md:w-[48px] text-[16px] md:text-[20px] font-extrabold right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-[#15ACC9] text-white rounded-full p-2 shadow-2xl hover:shadow-black hover:bg-white hover:text-gray-800 transition-all flex items-center justify-center"
      >
        <FiChevronRight />
      </button>
    </div>
  );
}

export default Crousel;
