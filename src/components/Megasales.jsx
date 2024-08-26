import React from 'react'

function Megasales() {
  return (
    <div>
       <div className='zflip h-[350px] w-full flex mb-10 my-5'>
      <div className='bg-[#91E0EF] h-[350px] w-full rounded-xl mx-7 flex'>
        <div className='font-bold text-[54px] opacity-[70%] px-[120px] py-8 w-[50%]'>Mega Sales Extravaganza!
            <div className='font-semibold text-[14px]'>Unbelievable deals and massive Discounts Awaits YOU.At our Mega Sales Extravaganza!
            </div>
            <button class="bg-[#15ACC9] text-[20px] hover:scale-110 transition-transform hover:shadow-2xl hover:bg-white text-white hover:text-black font-semibold py-1.5 px-4 rounded-full size-100">
            Upto 30% off
            </button> 
          </div>
          <div className='object-scale-down h-[250px] w-[24%] my-8 hover:scale-125 transition-transform'><img src=".\ecom\galaxy.png" alt="laptop" /></div>
          <div className='font-bold text-[54px] px-[75px] my-12'>Promo
          <div className='font-semibold text-[24px] opacity-[70%] px-8'>weddeal</div>
          <button class="bg-[#15ACC9] text-[20px] hover:bg-white text-white hover:text-black hover:scale-110 transition-transform hover:shadow-2xl font-semibold py-1.5 px-4 rounded-full">
            Start Shopping
            </button>
          </div>
         

        
      </div>
    </div>



    </div>
  )
}

export default Megasales
