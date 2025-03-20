import React from 'react';

function Extrasales() {
  return (
    <div className="w-full mb-5">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:h-[350px]">
        
        {/* MacBook Air Sale */}
        <div className="h-[180px] w-full md:h-[350px] ">
          <div className="bg-[#91E0EF] mx-2 h-full rounded-lg flex px-3 py-2 
              md:mx-7 md:my-5 md:h-[300px] md:w-[94%] md:rounded-xl md:px-0 md:py-0">
            
            {/* Text Section */}
            <div className="font-bold text-[16px] opacity-[70%] w-[55%] ml-4 mt-4
                md:text-[28px] md:w-[60%] md:px-7 md:py-7 md:ml-0 md:mt-0">
              <a href="http://www.apple.com" target="_blank" rel="noopener noreferrer">
                Apple 2022 <br /> MacBook Air Laptop
              </a>
              <div className="font-semibold text-[10px] leading-snug 
                  md:text-[14px] md:leading-normal">
                Unbelievable deals and massive Discounts <br /> Await YOU at our Mega Sales <br /> Extravaganza
              </div>
              <button className="bg-[#15ACC9] text-[10px] hover:scale-110 transition-transform 
                  hover:shadow-2xl hover:bg-white text-white hover:text-black font-semibold py-1 px-2 my-2 rounded-full 
                  md:text-[20px] md: md:px-4">
                Upto 30% off
              </button>
            </div>

            {/* Image Section */}
            <div className="h-[90px] w-[45%] hover:scale-110 transition-transform mt-4
                md:h-[250px] md:w-[49%] md:my-12 md:mt-14">
              <img src="./ecom/macair.png" alt="MacBook Air" />
            </div>
          </div>
        </div>

        {/* OnePlus TV Sale */}
        <div className="h-[180px] w-full md:h-[350px]">
          <div className="bg-[#91E0EF] mx-2 h-full rounded-lg flex px-3 py-2 
              md:mx-5 md:my-5 md:h-[300px] md:w-[96%] md:rounded-xl md:px-0 md:py-0">
            
            {/* Text Section */}
            <div className="font-bold text-[16px] opacity-[70%] w-[55%] ml-4 mt-4
                md:text-[28px] md:w-[60%] md:px-7 md:py-7 md:ml-0 md:mt-0">
              <a href="http://www.oneplus.com" target="_blank" rel="noopener noreferrer">
                OnePlus Y series <br /> Smart LED TV
              </a>
              <div className="font-semibold text-[10px] leading-snug 
                  md:text-[14px] md:leading-normal">
                Unbelievable deals and massive <br /> Discounts Await YOU at our Mega Sales Extravaganza
              </div>
              <button className="bg-[#15ACC9] text-[10px] hover:scale-110 transition-transform 
                  hover:shadow-2xl hover:bg-white text-white hover:text-black font-semibold py-1 px-2 my-2 rounded-full 
                  md:text-[20px] md:py-1.5 md:px-4 md:my-10">
                Upto 60% off
              </button>
            </div>

            {/* Image Section */}
            <div className="h-[90px] w-[45%] mx-1 hover:scale-110 transition-transform mt-4
                md:h-[200px] md:w-[50%] md:mx-[40px] md:my-16 md:mt-14">
              <img src="./ecom/tv.png" alt="OnePlus TV" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Extrasales;
