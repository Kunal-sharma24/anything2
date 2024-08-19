import React from 'react'

function Crousel() {
  return (
       <div className="h-[400px] w-full flex justify-center">
        <div className='h-[400px] w-[80%] bg-[#91E0EF] rounded-3xl'>
          <div className='flex'>
            <div className='h-[400] w-[50%]'>
          <div className='h-[250px] opacity-[70%] font-bold text-[28px] py-8 px-12'>
              Samsung Galaxy Z Fold4 <br />
              5G (Phantom Black, 12GB <br />
              RAM, 256GB Storage) with <br />
              No Cost EMI/Additional <br />
              Exchange Offers.
              </div>
              <div className='text-[16px] font-medium px-12'>Free Delivery Sat,6 July</div>
              <div className='text-[16px] font-medium text-red-500 mx-12 hover:text-white w-fit'>Only one left in stock</div>
              <div className='flex'>
              <button class="bg-[#15ACC9] text-[18px] hover:scale-110 transition-transform hover:shadow-2xl text-grey hover:text-white font-semibold py-1.5 m-12 px-2.5 my-4 rounded-full size-100">
            Shop Now
            </button>
            <button class="outline-[#15ACC9] outline outline-2 text-[18px] hover:scale-110 transition-transform hover:shadow-2xl text-grey hover:text-white hover:bg-[#15ACC9] font-semibold py-1.5 px-2.5 my-4 rounded-full size-100">
            Add to Cart
            </button> 
            </div>
             </div>
             <div className='h-[400px] w-[60%] py-8 hover:scale-125 transition-transform'><img src=".\ecom\zflip.png" alt="" /></div>
        </div>
        
        
        </div>
        </div> 
  )
}

export default Crousel

