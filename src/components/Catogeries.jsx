import React from 'react'

function Catogeries() {
  return (
    <div>
      
      <div className='categories h-[400px] w-full my-5'>
        <div className='flex justify-center text-[32px] font-semibold py-5'>Popular Categories</div>
        <div className='flex justify-around h-[200px] my-5 mx-20'>
          <div>
             <div className='bg-[#DEE2E4] h-[200px] w-[150px] rounded-2xl hover:shadow-xl hover:scale-110 transition-transform'>
              <div className='mx-3 py-5'><img src=".\ecom\mens.png" alt="clothes" /></div>
             </div>
             <div className='flex justify-center text-[18px] my-2 hover:text-[#15ACC9]'>Clothes</div>
          </div>

          <div>
          <div className='bg-[#DEE2E4] h-[200px] w-[150px] rounded-2xl hover:shadow-xl hover:scale-110 transition-transform'>
            <div className='mx-3 py-8'><img src=".\ecom\iphone11.png" alt="smartphone" /></div>
          </div>
          <div className='flex justify-center text-[18px] my-2 hover:text-[#15ACC9]'>Smartphones</div>
          </div>
          <div>
          <div className='bg-[#DEE2E4] h-[200px] w-[150px] rounded-2xl hover:shadow-xl hover:scale-110 transition-transform'>
            <div className='py-7 mx-2'><img src=".\ecom\R.png" alt="shoes" /></div>
          </div>
          <div className='flex justify-center  text-[18px] my-2 hover:text-[#15ACC9]'>Footwear</div>
          </div>
          <div>
          <div className='bg-[#DEE2E4] h-[200px] w-[150px] rounded-2xl hover:shadow-xl hover:scale-110 transition-transform'>
            <div className='py-14'><img src=".\ecom\hplaptop.png" alt="" /></div>
          </div>
          <div className='flex justify-center text-[18px] my-2 hover:text-[#15ACC9]'>Laptops</div>
          </div>
          <div>
          <div className='bg-[#DEE2E4] h-[200px] w-[150px] rounded-2xl hover:shadow-xl hover:scale-110 transition-transform'>
            <div className='mx-4 py-9'><img src=".\ecom\headphone.png" alt="" /></div>
          </div>
          <div className='flex justify-center text-[18px] my-2 hover:text-[#15ACC9]'>Headphones</div>
          </div>
          <div>
          <div className='bg-[#DEE2E4] h-[200px] w-[150px] rounded-2xl hover:shadow-xl hover:scale-110 transition-transform'>
            <div className='mx-5 py-9'><img src=".\ecom\iwatch.png" alt="" /></div>
          </div>
          <div className='flex justify-center text-[18px] my-2 hover:text-[#15ACC9]'>Smart Watches</div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Catogeries
