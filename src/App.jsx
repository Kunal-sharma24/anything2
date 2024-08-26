import Catogeries from "./components/Catogeries"
import Crousel from "./components/Crousel"
import Extrasales from "./components/Extrasales"
import Featuredbrands from "./components/Featuredbrands"
import Icons from "./components/Icons"
import Megasales from "./components/Megasales"
import Carosel from "./components/Carosel"
import { Navbar } from "./components/Navbar"
import Newarrivals from "./components/Newarrivals"
import { Sectio } from "./components/Sectio"

function App() {

  return (
    <>
    <div className=" bg-[#F1F6F8] h-full w-full flex flex-col min-h-screen">
      <Navbar />
      <Crousel/>
      <Icons/>
      <Catogeries/>
      <Newarrivals/>
      <Megasales/>
      <Extrasales/>
      <Featuredbrands/>
      <Sectio/>
  
    <div className=" h-full w-full flex flex-col min-h-screen">
      <Navbar className="flex-grow" />
      <div className='bg-[#F1F6F8] h-full w-full'>
        <Carosel />

      <div className='icons h-[80px] w-full py-8'>
        <div className='flex justify-around mx-20'>
          <div className='flex'>
          <div className='h-[60px] w-[60px] my-1 flex'><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 25 25" id="free-shipping"><path d="M22.5,11.667,20.2,8.6A1.506,1.506,0,0,0,19,8H16V6.5A1.5,1.5,0,0,0,14.5,5H3.5A1.5,1.5,0,0,0,2,6.5v10A1.5,1.5,0,0,0,3.5,18h.551a2.5,2.5,0,0,0,4.9,0h7.1a2.5,2.5,0,0,0,4.9,0H21.5A1.5,1.5,0,0,0,23,16.5V13.167A2.515,2.515,0,0,0,22.5,11.667ZM3,16.5V6.5A.5.5,0,0,1,3.5,6h11a.5.5,0,0,1,.5.5V17H8.949a2.5,2.5,0,0,0-4.9,0H3.5A.5.5,0,0,1,3,16.5ZM6.5,19A1.5,1.5,0,1,1,8,17.5,1.5,1.5,0,0,1,6.5,19Zm12,0A1.5,1.5,0,1,1,20,17.5,1.5,1.5,0,0,1,18.5,19Zm3-2h-.551a2.5,2.5,0,0,0-4.9,0H16V9h3a.5.5,0,0,1,.4.2l.975,1.3H17.5v2h4.322a1.486,1.486,0,0,1,.178.667V15h-.5a.5.5,0,0,0,0,1H22v.5A.5.5,0,0,1,21.5,17Zm-2.65.15a.469.469,0,0,1,.15.35.433.433,0,0,1-.04.19.355.355,0,0,1-.11.16.483.483,0,0,1-.7,0,.355.355,0,0,1-.11-.16A.433.433,0,0,1,18,17.5a.469.469,0,0,1,.15-.35A.5.5,0,0,1,18.85,17.15Zm-11.89.16a.471.471,0,0,1,0,.38.533.533,0,0,1-.27.27A.433.433,0,0,1,6.5,18a.406.406,0,0,1-.19-.04.355.355,0,0,1-.16-.11.483.483,0,0,1,0-.7.5.5,0,0,1,.54-.11.533.533,0,0,1,.27.27ZM9.5,12.5v-3A.5.5,0,0,1,10,9h1a.5.5,0,0,1,0,1h-.5v.5H11a.5.5,0,0,1,0,1h-.5V12H11a.5.5,0,0,1,0,1H10A.5.5,0,0,1,9.5,12.5Zm2.5,0v-3a.5.5,0,0,1,.5-.5h1a.5.5,0,0,1,0,1H13v.5h.5a.5.5,0,0,1,0,1H13V12h.5a.5.5,0,0,1,0,1h-1A.5.5,0,0,1,12,12.5Zm-8,0v-3A.5.5,0,0,1,4.5,9h1a.5.5,0,0,1,0,1H5v.5h.5a.5.5,0,0,1,0,1H5v1a.5.5,0,0,1-1,0Zm3.016.5a.5.5,0,0,0,.5-.5v-.85l.537,1.074a.5.5,0,0,0,.894-.448l-.5-.992A1.249,1.249,0,0,0,7.75,9H7.016a.5.5,0,0,0-.5.5v3A.5.5,0,0,0,7.016,13ZM8,10.25a.25.25,0,0,1-.25.25.5.5,0,0,0-.234.061V10H7.75A.25.25,0,0,1,8,10.25Z"></path></svg></div>
          <div className='my-2 font-medium'>Free <br />Shipping</div>
          </div>
          <div className='flex'>
          <div className='h-[50px] w-[50px] my-2'><svg xmlns="http://www.w3.org/2000/svg" class='size-11' viewBox="0 0 32 32" id="money"><path d="M16 17c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8zm0-14c-3.309 0-6 2.691-6 6s2.691 6 6 6 6-2.691 6-6-2.691-6-6-6z"></path><path d="M16.4 13.2h-.8a2.613 2.613 0 0 1-2.493-1.864 1 1 0 1 1 1.918-.565c.075.253.312.43.575.43h.8a.6.6 0 0 0 0-1.201h-.8C14.166 10 13 8.833 13 7.4s1.166-2.6 2.6-2.6h.8c1.121 0 2.111.714 2.466 1.778a1 1 0 1 1-1.897.633.598.598 0 0 0-.569-.411h-.8a.6.6 0 0 0 0 1.2h.8c1.434 0 2.6 1.167 2.6 2.6s-1.166 2.6-2.6 2.6z"></path><path d="M16 6c-.271 0-.521-.11-.71-.29-.04-.05-.09-.1-.12-.16a.556.556 0 0 1-.09-.17.672.672 0 0 1-.061-.18C15.01 5.13 15 5.07 15 5c0-.26.109-.52.29-.71.37-.37 1.04-.37 1.42 0 .18.19.29.45.29.71 0 .07-.01.13-.021.2a.606.606 0 0 1-.06.18.578.578 0 0 1-.09.17c-.04.06-.08.11-.12.16-.189.18-.449.29-.709.29zm0 8c-.271 0-.521-.11-.71-.29-.04-.05-.09-.1-.12-.16a.556.556 0 0 1-.09-.17.672.672 0 0 1-.061-.18c-.009-.07-.019-.13-.019-.2 0-.26.109-.52.29-.71.37-.37 1.04-.37 1.42 0 .18.19.29.45.29.71 0 .07-.01.13-.021.2a.606.606 0 0 1-.06.18.578.578 0 0 1-.09.17c-.04.06-.08.11-.12.16-.189.18-.449.29-.709.29zm2 17H2a1 1 0 0 1-1-1v-9c0-.265.105-.52.293-.707C1.527 20.058 3.653 18 6 18c1.944 0 4.452 1.469 5.295 2H16a3.004 3.004 0 0 1 2.955 3.519l7.891-3.288a2.995 2.995 0 0 1 2.818.273A2.993 2.993 0 0 1 31 23a1 1 0 0 1-.496.864l-12 7A1.003 1.003 0 0 1 18 31zM3 29h14.729l11.14-6.498a1.01 1.01 0 0 0-.314-.334.984.984 0 0 0-.939-.091l-9.23 3.846A1.007 1.007 0 0 1 18 26h-8a1 1 0 1 1 0-2h6a1.001 1.001 0 0 0 0-2h-5c-.197 0-.391-.059-.555-.167C9.68 21.323 7.387 20 6 20c-1.09 0-2.347.88-3 1.439V29z"></path></svg></div>
          <div className='my-2 font-medium'>Money <br />Guarentee</div>
            </div>
            <div className='flex'>
          <div className='my-2'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z" />
                      </svg>
            </div>
            <div className='my-2 font-medium px-1'>Payment <br />Methods</div>
            </div>
            <div className='flex'>
          <div className='h-[45px] w-[45px] my-2'><svg viewBox="0 -0.5 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="si-glyph si-glyph-customer-support" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>715</title> <defs> </defs> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g transform="translate(1.000000, 0.000000)" fill="#434343"> <g transform="translate(0.000000, 2.000000)"> <path d="M8.005,10.094 C6.563,10.094 5.098,9.238 4.243,8.105 C0.141,8.105 0.017,13.965 0.017,13.965 L15.992,13.965 C15.992,13.965 16.314,8.079 11.701,8.079 C10.847,9.226 9.447,10.094 8.005,10.094 Z" class="si-glyph-fill"> </path> <path d="M11.441,3.069 C11.441,4.755 9.902,7.979 8.002,7.979 C6.105,7.979 4.565,4.754 4.565,3.069 C4.565,1.384 6.104,0.016 8.002,0.016 C9.902,0.017 11.441,1.385 11.441,3.069 L11.441,3.069 Z" class="si-glyph-fill"> </path> </g> <path d="M12.975,3.614 C12.975,3.298 12.535,3.043 11.989,3.041 L11.989,2.39 C11.989,2.293 12.026,0.022 8.014,0.022 C4.004,0.022 4.041,2.293 4.041,2.39 L4.041,3.064 C4.031,3.064 4.023,3.061 4.014,3.061 C3.471,3.061 3.034,3.312 3.034,3.623 L3.034,6.377 C3.034,6.686 3.472,6.938 4.014,6.938 C4.556,6.938 4.996,6.686 4.996,6.377 L4.996,3.623 C4.996,3.58 4.969,3.541 4.953,3.501 L4.953,2.75 C4.953,2.681 4.665,0.967 8.014,0.967 C11.364,0.967 11.016,2.681 11.016,2.75 L11.016,3.541 C11.01,3.566 10.991,3.588 10.991,3.614 L10.991,6.431 C10.991,6.748 11.434,7.005 11.983,7.005 C11.995,7.005 12.004,7.001 12.016,7.001 L12.016,8.03 L11.032,8.03 L11.032,9 L12.985,9 L12.975,3.614 L12.975,3.614 Z" class="si-glyph-fill"> </path> </g> </g> </g></svg>
          </div>
          <div className='my-2 font-medium px-1'>Customer <br />Support</div>
          </div>
          <div className='flex'>
          <div className='h-[50px] w-[50px] my-1'><svg width="64px" height="64px" viewBox="0 0 400 400" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M252.644 56.915C295.342 38.4482 320.69 113.363 271.651 123.522C231.551 131.832 216.845 78.0154 247.144 58.0544" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M330.482 265.712C341.911 277.397 345.967 295.564 330.334 311.241C305.977 335.671 271.834 312.649 271.756 285.037" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M192.293 285.199C193.35 293.668 190.602 302.807 182.127 311.229C159.576 333.641 128.721 316.163 123.655 291.812" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M231 133C206.612 161.128 194.495 179.606 187 209" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M231.268 139C230.078 174.935 230.842 200.382 278 181.706" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M270.454 181.27C277.648 203.747 292.95 234.179 296.436 257.918" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M198.698 209.851C179.8 211.119 147.038 219.427 133.916 234.11C126.125 242.825 100.697 270.714 108.106 285.446C112.07 293.339 163.502 289.662 170.276 288.7C200.718 284.374 240.691 289.662 270.337 285.446C276.764 284.532 267.42 277.198 275.865 277.198C288.469 277.198 350.064 262.896 339.366 250.123C314.559 220.523 257.393 244.451 266.097 274.746" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M200.303 212.449C207.9 229.886 214.057 274.576 214.593 278.703" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M200.303 208.553C255.045 208.309 257.332 233.927 223.294 274.806" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M169.124 213.748C142.024 230.768 99.6067 221.459 67.7939 231.936" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M60 128.007C68.4342 143.576 60 224.334 63.5625 228.038" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M63.8965 128.233C105.69 123.275 132.857 122.22 136.014 128.233C139.17 134.247 139.17 171.658 130.567 218.945" stroke="#000000" stroke-opacity="0.9" stroke-width="16" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg></div>
          <div className='px-3 font-medium my-2'>Fast <br />Delivery</div>
          </div>
        </div>
      </div>







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







      <div className='newarrival h-[510px] w-full '>
      <div className='flex justify-center'>
        <div className='font-semibold text-[32px] px-8 flex justify-start w-[90%]'>New Arrivals</div>
        <div className='font-semibold text-[16px] mr-2 my-4 hover:underline text-blue-500 flex justify-end '>View All</div>
      </div>
      <div className='flex justify-between mx-[30px] my-8 mx-[80px] '>
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






    <div className='zflip h-[350px] w-full flex mb-10 my-5'>
      <div className='bg-[#91E0EF] h-[350px] w-full rounded-xl mx-7 flex'>
        <div className='font-bold text-[54px] opacity-[70%] px-[120px] py-8 w-[50%]'>Mega Sales Extravaganza!
            <div className='font-semibold text-[14px]'>Unbelievable deals and massive Discounts Awaits YOU.At our Mega Sales Extravaganza!
            </div>
            <button class="bg-[#15ACC9] text-[20px] hover:scale-110 transition-transform hover:shadow-2xl hover:bg-white text-white hover:text-black font-semibold py-1.5 px-4 rounded-full size-100">
            Upto 30% off
            </button> 
          </div>
          <div className='object-scale-down h-[250px] w-[24%] my-9 hover:scale-150 transition-transform'><img src=".\ecom\galaxy.png" alt="laptop" /></div>
          <div className='font-bold text-[54px] px-[75px] my-12'>Promo
          <div className='font-semibold text-[24px] opacity-[70%] px-8'>weddeal</div>
          <button class="bg-[#15ACC9] text-[20px] hover:bg-white text-white hover:text-black hover:scale-110 transition-transform hover:shadow-2xl font-semibold py-1.5 px-4 rounded-full">
            Start Shopping
            </button>
          </div>
         

        
      </div>
    </div>








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






     <div className='feature brands bg-[#F1F6F8] h-[250px] w-full'>
        <div className='font-semibold flex justify-center my-3 font-sans text-[32px]'>Featured Brands</div>
        <div className='grid grid-cols-5 flex justify-around mx-20 my-8'>
         <div className='apple h-54 w-54 my-2'>
            <svg fill="#000000" height="100px" width="100px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 22.773 22.773" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573 c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"></path> <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334 c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0 c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019 c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464 c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648 c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"></path> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> </g></svg>
         </div>
        <div className='nike h-58 w-58'>
            <svg xmlns="http://www.w3.org/2000/svg" width="150px" height="150px" viewBox="135.5 361.38 1000 356.39">
              <path d="M245.8075 717.62406c-29.79588-1.1837-54.1734-9.3368-73.23459-24.4796-3.63775-2.8928-12.30611-11.5663-15.21427-15.2245-7.72958-9.7193-12.98467-19.1785-16.48977-29.6734-10.7857-32.3061-5.23469-74.6989 15.87753-121.2243 18.0765-39.8316 45.96932-79.3366 94.63252-134.0508 7.16836-8.0511 28.51526-31.5969 28.65302-31.5969.051 0-1.11225 2.0153-2.57652 4.4694-12.65304 21.1938-23.47957 46.158-29.37751 67.7703-9.47448 34.6785-8.33163 64.4387 3.34693 87.5151 8.05611 15.898 21.86731 29.6684 37.3979 37.2806 27.18874 13.3214 66.9948 14.4235 115.60699 3.2245 3.34694-.7755 169.19363-44.801 368.55048-97.8366 199.35686-53.0408 362.49439-96.4029 362.51989-96.3672.056.046-463.16259 198.2599-703.62654 301.0914-38.08158 16.2806-48.26521 20.3928-66.16827 26.6785-45.76525 16.0714-86.76008 23.7398-119.89779 22.4235z"/>
            </svg>
        </div>
        <div className='hp h-54 w-54 my-4'>
             <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
              <path fill="#fff" d="M24 4A20 20 0 1 0 24 44A20 20 0 1 0 24 4Z"></path><path fill="#1976d2" d="M24,43.997c-0.199,0-0.652,0.006-0.85,0l4-10.999h5.625c0.987,0,2.071-0.759,2.409-1.686l4.748-12.687c0.725-1.995-0.417-3.626-2.539-3.626h-7.804l-6.518,18.257h-0.002l-3.712,10.198C10.55,41.361,4,33.445,4,23.999c0-9.174,6.178-16.905,14.6-19.261l-3.83,10.526h-0.001L8.15,32.998h4.239l5.576-14.999h3.185l-5.576,14.999l3.919,0.001l5.438-14.374c0.726-1.995-0.416-3.626-2.536-3.626H19.15l3.951-10.978C23.399,4.008,23.699,4,24,4c11.046,0,20,8.953,20,19.999S35.046,43.997,24,43.997z M36.15,17.999h-3.185l-4.509,11.999h3.185L36.15,17.999z"></path>
             </svg>
        </div>
        <div className='one plus h-54 w-54 my-5'>
          <svg xmlns="http://www.w3.org/2000/svg" width="80px" height="80px" viewBox="0 0 61 61" id="oneplus"><path fill="#eb0028" d="M18.5 47.8v-5.3h5.3V26.6h-5.3v-5.4h10.6v21.2h5.4v5.3h-16zM53 61V26.5h-5.3v29.2H5.3V13.3h29.2V8H0v53zm0-39.8v-8h8V8h-8V0h-5.3v8h-8v5.3h8v8H53z"></path></svg>
        </div>
        <div className='samsung h-54 w-54'>
            <svg viewBox="0 -67.06 200.777 200.777" xmlns="http://www.w3.org/2000/svg" width="150" height="150" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M200.653 15.87C197.923.194 150.822-4.698 95.446 4.943 72.19 8.994 51.191 14.969 34.838 21.691c2.512.055 4.375.631 5.507 1.76.885.886 1.332 2.102 1.332 3.617v1.555h-5.43V27.25c0-1.144-.686-1.853-1.901-1.853-1.021 0-1.65.461-1.853 1.369a2.63 2.63 0 0 0 .022 1.084c.581 2.375 8.644 3.85 9.521 8.233.115.564.271 1.771.025 3.498-.503 3.535-3.609 4.899-7.563 4.899-5.519 0-7.761-2.614-7.761-6.218l.004-1.705h5.821l.003 2.124c0 1.194.868 1.853 2.05 1.853 1.12 0 1.774-.451 2-1.373.105-.424.151-1.049-.04-1.527-1.077-2.702-8.606-3.964-9.533-8.333-.207-.982-.224-1.818-.052-2.875a5.606 5.606 0 0 1 .482-1.511C9.333 33.398-1.278 42.732.124 50.791c2.733 15.678 49.833 20.565 105.208 10.924 24.342-4.237 46.226-10.58 62.881-17.688-.241.012-.475.038-.725.038-3.79 0-7.174-1.42-7.525-5.294-.062-.705-.073-1-.075-1.402l.002-8.906c0-.384.045-1.058.088-1.406.449-3.744 3.409-5.288 7.512-5.288 3.175 0 7.068.911 7.496 5.291.057.55.051 1.137.05 1.33v.841h-5.484v-1.255c0-.027-.008-.496-.068-.789-.09-.447-.471-1.483-2.033-1.483-1.543 0-1.943 1.038-2.043 1.484-.057.245-.084.597-.084.987v9.679c-.005.336.012.599.046.792.027.152.304 1.486 2.1 1.486 1.783 0 2.059-1.334 2.084-1.486.047-.262.053-.574.051-.792v-2.999h-2.158v-3.23h7.631v5.746c-.002.391-.008.68-.074 1.4-.092 1.016-.412 1.876-.914 2.611 17.663-8.387 27.947-17.57 26.563-25.512zM57.065 43.653l-2.778-18.876h-.1l-2.849 18.876h-5.855l3.938-21.317h9.553l3.914 21.317h-5.823zm28.162 0l-.129-18.511h-.094l-3.445 18.511h-5.495l-3.428-18.511h-.098l-.125 18.511h-5.445l.472-21.317h8.758l2.55 15.835h.125l2.557-15.835h8.754l.47 21.317h-5.427zm25.641-4.131c-.586 4.129-4.631 4.851-7.49 4.851-4.747 0-7.683-2.029-7.683-6.158l.003-1.684h5.751l.004 2.098c0 1.139.803 1.836 2.043 1.836 1.106 0 1.754-.444 1.979-1.356.104-.425.147-1.045-.037-1.513-1.06-2.651-8.53-3.95-9.438-8.251-.208-.975-.223-1.803-.052-2.849.632-3.899 4.374-4.709 7.386-4.709 2.694 0 4.655.588 5.831 1.764.877.878 1.321 2.083 1.321 3.582v1.538h-5.378v-1.357c0-1.162-.721-1.834-1.88-1.834-1.028 0-1.65.457-1.854 1.356a2.59 2.59 0 0 0 .026 1.072c.576 2.364 8.568 3.809 9.443 8.151.113.554.268 1.743.025 3.463zm19.918-1.937c.008.4-.031 1.199-.053 1.404-.328 3.512-2.84 5.297-7.447 5.297-4.625 0-7.139-1.785-7.465-5.297a16.957 16.957 0 0 1-.053-1.4V22.331h5.502V38.07c-.006.352.012.612.047.793.068.35.416 1.486 1.969 1.486 1.548 0 1.896-1.137 1.969-1.482.031-.186.05-.459.05-.798V22.331h5.481v15.254zm23.705 5.851h-7.656l-5.139-16.885h-.086l.285 16.885h-5.336v-21.1h7.977l4.75 16.22h.111l-.281-16.22h5.375v21.1z" fill="#2d4f9e"></path></g></svg>
        </div>
          
       
      </div>
      </div>
      <div className='w-full h-[280px] bg-[#DEE2E5] absolute rounded-t-[40px]'>
            <div className='flex justify-between mx-[150px] my-10 ' >
              
              <div className='font-bold text-[30px] text-[#3CA9C0]'>Anything
                <b>
                  <div className='font-normal text-[15px] text-black mb-2'>www.anything.com</div>
                </b>
              </div>
              <div className='font-medium text-[20px] my-3'>About Us
                
                  <b>
                    <div className='font-normal text-[15px] text-black my-1 hover:underline hover:text-[#3CA9C0]'><a href="http://www.anything.com">Contact Us</a></div>
                  </b>
                  <b>
                    <div className='font-normal text-[15px] text-black hover:underline hover:text-[#3CA9C0]'><a href="http://www.gmail.com">Mail Us</a></div>
                  </b>
              </div>
              <div className='font-medium text-[20px] my-3'>Products
                
              <b>
                    <div className='font-normal text-[15px] text-black my-1 hover:underline hover:text-[#3CA9C0]'><a href="http://www.anything.com">Clothes</a></div>
                  </b>
                  <b>
                    <div className='font-normal text-[15px] text-black hover:underline hover:text-[#3CA9C0]'><a href="http://www.gmail.com">Smartphones</a></div>
                  </b>
                  <b>
                    <div className='font-normal text-[15px] text-black my-1 hover:underline hover:text-[#3CA9C0]'><a href="http://www.anything.com">Laptops</a></div>
                  </b>
                  <b>
                    <div className='font-normal text-[15px] text-black hover:underline hover:text-[#3CA9C0]'><a href="http://www.gmail.com">Headphones</a></div>
                  </b>
                  <b>
                    <div className='font-normal text-[15px] text-black my-1 hover:underline hover:text-[#3CA9C0]'><a href="http://www.anything.com">Smart Watches</a></div>
                  </b>
                  <b>
                    <div className='font-normal text-[15px] text-black hover:underline hover:text-[#3CA9C0]'><a href="http://www.gmail.com">Shoes</a></div>
                  </b>
              </div>
              <div className='font-medium text-[20px] my-3'>Help
              <b>
                    <div className='font-normal text-[15px] text-black my-1 hover:underline hover:text-[#3CA9C0]'><a href="http://www.anything.com">FAQ</a></div>
                  </b>
                  <b>
                    <div className='font-normal text-[15px] text-black hover:underline hover:text-[#3CA9C0]'><a href="http://www.gmail.com">Shipping</a></div>
                  </b>
                  <b>
                    <div className='font-normal text-[15px] text-black my-1 hover:underline hover:text-[#3CA9C0]'><a href="http://www.anything.com">Customer Care</a></div>
                  </b>
              </div>
              
            </div>
           


        </div>    
      </div>
      

    </div>
    </div>
    </>

    
  )
}

export default App
