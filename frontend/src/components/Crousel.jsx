import React, { useState } from 'react';

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
    setActiveIndex(activeIndex ===  slides.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <div className="h-[400px] w-full flex justify-center overflow-hidden relative">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`h-[400px] w-[80%] bg-[#91E0EF] rounded-3xl absolute transition-all duration-500 ${
            index === activeIndex ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-95 z-0'
          }`}
          style={{ transform: `translateX(${(index - activeIndex) * 100}%)` }}
        >
          <div className='flex relative'>
            <div className='h-[400px] w-[50%]'>
              <div className='h-[250px] opacity-[70%] font-bold text-[28px] py-8 px-12'>
                {slide.title} <br />
                {slide.description}
              </div>
              <div className='text-[16px] font-medium px-12'>{slide.deliveryDate}</div>
              <div className='text-[16px] font-medium text-red-500 mx-12 hover:text-white w-fit'>{slide.stockStatus}</div>
              <div className='flex'>
                <button className="bg-[#15ACC9] text-[18px] hover:scale-110 transition-transform hover:shadow-2xl text-grey hover:text-white font-semibold py-1.5 m-12 px-2.5 my-4 rounded-full size-100">
                  Shop Now
                </button>
                <button className="outline-[#15ACC9] outline outline-2 text-[18px] hover:scale-110 transition-transform hover:shadow-2xl text-grey hover:text-white hover:bg-[#15ACC9] font-semibold py-1.5 px-2.5 my-4 rounded-full size-100">
                  Add to Cart
                </button>
              </div>
            </div>
            <div className='h-[400px] w-[60%] py-8 hover:scale-110 transition-transform'>
              <img src={slide.imageSrc} alt={slide.title} />
            </div>
          </div>
        </div>
      ))}
      {/* ye button part ke liye haa yaha se edit kar dena */}
      <button
        onClick={handlePrevClick}
        className="absolute inset-0 z-10 h-[48px] w-[48px] ml-[85px] text-[20px] font-extrabold left-4 top-1/2 transform -translate-y-1/2 bg-[#15ACC9] text-white rounded-full p-2 shadow-2xl hover:shadow-black hover:bg-white hover:text-gray-800 transition-all"
      >
        &#8592;
      </button>
      <button
        onClick={handleNextClick}
        className="absolute z-20 h-[48px] w-[48px] text-[20px] font-extrabold right-4 top-1/2 mr-[85px] transform -translate-y-1/2 bg-[#15ACC9] text-white rounded-full p-2 shadow-2xl hover:shadow-black hover:bg-white hover:text-gray-800 transition-all"
      >
        &#8594;
      </button>
    </div>
  );
}

export default Crousel;
