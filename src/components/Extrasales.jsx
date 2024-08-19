import React from 'react'

function Extrasales() {
  return (
    <div>
        <div className='2 blocks h-[350px] w-full grid grid-cols-2 mb-5'>
      <div className='h-[350px] w-full col-span-1'>
        <div className='bg-[#91E0EF] mx-7 my-5 h-[300px] w-[94%] rounded-xl flex'>
          <div className='font-bold text-[28px] opacity-[70%] px-7 py-7 w-[60%]'><a href="http://www.apple.com" target='_blank'>Apple 2022 <br />MacBook Air Laptop</a>
            <div className='font-semibold text-[14px]'>Unbelievable deals and massive Discounts <br />Awaits YOU.At our Mega Sales <br />Extravaganza
            </div>
            <button class="bg-[#15ACC9] text-[20px] hover:scale-110 transition-transform hover:shadow-2xl hover:bg-white text-white hover:text-black font-semibold py-1.5 px-4 my-10 rounded-full size-100">
            Upto 30% off
            </button> 
          </div>
          <div className='h-[250px] w-[49%] my-12 hover:scale-110 transition-transform'><img src=".\ecom\macair.png" alt="laptop" /></div>

        </div>
      </div>
      <div className=' h-[350px] w-full col-span-1 pr-5'>
        <div className='bg-[#91E0EF] mx-5 my-5 h-[300px] w-[96%] rounded-xl flex'>
          <div className='font-bold text-[28px] opacity-[70%] px-7 py-7 w-[60%]'><a href="http://www.oneplus.com" target='_blank'>OnePlus Y series<br />Smart LED TV</a> 
            <div className='font-semibold text-[14px]'>Unbelievable deals and massive<br />Discounts Awaits YOU. At our Mega Sales Extravaganza
          </div>
            <button class="bg-[#15ACC9] text-[20px] hover:scale-110 transition-transform hover:shadow-[#15ACC9]-2xl hover:bg-white text-white hover:text-black font-semibold py-1.5 px-4 my-10 rounded-full size-100">
            Upto 60% off
            </button> 
          </div>
          <div className='h-[200px] w-[50%] mx-[40px] my-16 hover:scale-110 transition-transform'><img src=".\ecom\tv.png" alt="tv" /></div>
      </div>
      </div>
      
    </div>
      
    </div>
  )
}

export default Extrasales
