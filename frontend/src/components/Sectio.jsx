import React from 'react';

export const Sectio = () => {
  return (
    <div className="flex-grow w-full bg-[#F1F6F8]">
      <div className="w-full h-auto md:h-[280px] bg-[#DEE2E5] absolute rounded-t-[40px] px-4 md:px-[150px] py-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-0">
          
          {/* Logo Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
            <div className="h-[60px] w-[60px] md:h-[80px] md:w-[80px]">
              <img src="./ecom/ecom.png" alt="Logo" className="h-full w-full object-contain" />
            </div>
            <div className="text-[#3CA9C0] font-bold text-[24px] md:text-[30px] text-center md:text-left">
              Anything
              <div className="font-normal text-[14px] md:text-[15px] text-black">
                <b>www.anything.com</b>
              </div>
            </div>
          </div>
          <div className='grid md:grid md:mr-6 md:gap-32 gap-16 grid-cols-3'>
          {/* About Us */}
          <div className="text-center md:text-left">
            <div className="font-medium text-[18px] md:text-[20px]">About Us</div>
            <b>
              <div className="font-normal text-[14px] md:text-[15px] text-black my-1 hover:underline hover:text-[#3CA9C0]">
                <a href="http://www.anything.com">Contact Us</a>
              </div>
            </b>
            <b>
              <div className="font-normal text-[14px] md:text-[15px] text-black hover:underline hover:text-[#3CA9C0]">
                <a href="http://www.gmail.com">Mail Us</a>
              </div>
            </b>
          </div>

          {/* Products */}
          <div className="text-center md:text-left">
            <div className="font-medium text-[18px] md:text-[20px]">Products</div>
            {['Clothes', 'Smartphones', 'Laptops', 'Headphones', 'Smart Watches', 'Shoes'].map((product, index) => (
              <b key={index}>
                <div className="font-normal text-[14px] md:text-[15px] text-black my-1 hover:underline hover:text-[#3CA9C0]">
                  <a href="http://www.anything.com">{product}</a>
                </div>
              </b>
            ))}
          </div>

          {/* Help */}
          <div className="text-center md:text-left">
            <div className="font-medium text-[18px] md:text-[20px]">Help</div>
            {['FAQ', 'Shipping', 'Customer Care'].map((help, index) => (
              <b key={index}>
                <div className="font-normal text-[14px] md:text-[15px] text-black my-1 hover:underline hover:text-[#3CA9C0]">
                  <a href="http://www.anything.com">{help}</a>
                </div>
              </b>
            ))}
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sectio;
