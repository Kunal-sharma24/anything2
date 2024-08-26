import React from 'react'

function Newarrivals() {
  return (
    <div>
      
      <div className='newarrival h-[510px] w-full '>
      <div className='flex justify-center'>
        <div className='font-semibold text-[32px] px-8 flex justify-start w-[90%]'>New Arrivals</div>
        <div className='font-semibold text-[16px] mr-2 my-4 hover:underline text-blue-500 flex justify-end '>View All</div>
      </div>
      <div className='flex justify-between my-8 mx-[80px] '>
        <div>
           <div className='bg-[#DEE2E4] h-[300px] w-[250px] rounded-2xl flex justify-center hover:shadow-xl hover:scale-110 transition-transform'>
             <div className='h[80%] w-[80%] my-4'><img src=".\ecom\i15.png" alt="iphone" /></div>
        </div>
         <div className='flex justify-center my-5 text-[20px] font-medium opacity-[70%]'>Iphone 15 Pro Max</div>
         <div className='flex justify-center'>(3.5k Reviews)</div>
        </div>
        <div>
         <div className='bg-[#DEE2E4] h-[300px] w-[250px] rounded-2xl hover:shadow-xl hover:scale-110 transition-transform'>
           <div className='rotate-[30deg] flex jusitfy-center py-6'><img src=".\ecom\shoesair.png" alt="shoes" /></div>
        </div>
           <div className='flex justify-center my-5 text-[20px] font-medium opacity-[70%]'>Air VapourMax</div>
           <div className='flex justify-center'>(2.3k Reviews)</div>
        </div>
        <div>
            <div className='bg-[#DEE2E4] h-[300px] w-[250px] rounded-2xl hover:shadow-xl hover:scale-110 transition-transform'>
              <div className='mx-4 flex jusitfy-center py-12'><img src=".\ecom\trouser.png" alt="shoes" /></div>
        </div>
            <div className='flex justify-center my-5 text-[20px] font-medium opacity-[70%]'>Korean Trousers</div>
            <div className='flex justify-center'>(3.5k Reviews)</div>
        </div>
        <div>
         <div className='bg-[#DEE2E4] h-[300px] w-[250px] rounded-2xl hover:shadow-xl hover:scale-110 transition-transform'>
            <div className=' flex jusitfy-center mx-5 py-10'><img src=".\ecom\marshall.png" alt="shoes" /></div>
        </div>
          <div className='flex justify-center my-5 text-[20px] font-medium opacity-[70%]'>Marshall 3.76</div>
          <div className='flex justify-center'>(4.5k Reviews)</div>
        </div>
         </div>
      </div>
    </div>
  )
}

export default Newarrivals
