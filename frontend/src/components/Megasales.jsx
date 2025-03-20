import React from 'react';

function Megasales() {
  return (
    <div className="w-full pr-4 md:pr-0 pb-4 md:pb-0">
      <div className="bg-[#91E0EF] w-full md:pr-0 pr-6 rounded-lg mx-2 px-3 py-4 flex flex-col items-center text-center scale-100
        md:h-[350px] md:w-fit md:rounded-xl md:mx-7 md:px-0 md:py-0 md:scale-100 md:flex-row md:text-left md:items-center md:justify-between">

        {/* Left Text Section */}
        <div className="w-full md:w-[50%] leading-tight md:leading-normal md:ml-6">
          <h2 className="font-bold text-[28px] opacity-[80%] 
            md:text-[50px] md:ml-12">
            Mega Sales Extravaganza!
          </h2>
          <p className="font-semibold text-[14px] leading-snug 
            md:text-[14px] md:leading-normal md:ml-12">
            Unbelievable deals and massive Discounts Await YOU.
          </p>
          <p className="font-semibold text-[14px] leading-snug 
            md:text-[14px] md:leading-normal md:ml-12">
            At our Mega Sales Extravaganza!
          </p>
          <button className="bg-[#15ACC9] text-[14px] hover:scale-110 transition-transform 
              hover:shadow-2xl hover:bg-white text-white hover:text-black font-semibold py-2 px-4 rounded-full mt-3
              md:text-[20px] md:px-4 md:py-1.5 md:mt-2 md:ml-12">
            Upto 30% off
          </button> 
        </div>

        {/* Center Image */}
        <div className="h-[140px] w-[50%] my-4 hover:scale-110 transition-transform 
          md:h-[280px] md:w-[30%] md:my-8 md:mr-40">
          <img src="./ecom/galaxy.png" alt="laptop" className="h-full w-full object-contain"/>
        </div>

        {/* Right Promo Section */}
        <div className="w-full leading-tight 
          md:w-auto md:leading-normal md:mr-32">
          <h2 className="font-bold text-[28px] 
            md:text-[54px]">
            Promo
          </h2>
          <p className="font-semibold text-[14px] opacity-[80%] 
            md:text-[24px] md:ml-8">
            weddeal
          </p>
          <button className="bg-[#15ACC9] text-[14px] hover:bg-white text-white hover:text-black 
              hover:scale-110 transition-transform hover:shadow-2xl font-semibold py-2 px-4 rounded-full mt-3
              md:text-[20px] md:px-4 md:py-1.5 md:mt-2">
            Start Shopping
          </button>
        </div>

      </div>
    </div>
  );
}

export default Megasales;
