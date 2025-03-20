import React from "react";

function Newarrivals() {
  return (
    <div className="w-full py-12">
      {/* Title Section */}
      <div className="flex justify-between items-center px-8">
        <h2 className="text-[32px] font-semibold md:ml-10 mb-[-20px]">New Arrivals</h2>
        <a href="#" className="text-blue-500 text-[16px] mb-[-20px] hover:underline">
          View All
        </a>
      </div>

      {/* Product Grid */}
      <div className="flex justify-between items-center md:ml-20 md:mr-20 px-2 mt-8 gap-1 md:gap-0">
        {[
          { img: "./ecom/i15.png", name: "iPhone 15 Pro Max", reviews: "3.5k Reviews" },
          { img: "./ecom/shoesair.png", name: "Air VapourMax", reviews: "2.3k Reviews" },
          { img: "./ecom/trouser.png", name: "Korean Trousers", reviews: "3.5k Reviews" },
          { img: "./ecom/marshall.png", name: "Marshall 3.76", reviews: "4.5k Reviews" }
        ].map((item, index) => (
          <div
            key={index}
            className="bg-[#DEE2E4] rounded-2xl p-3 flex flex-col items-center hover:shadow-xl hover:scale-105 transition-transform 
            h-[180px] w-[120px] md:h-[300px] md:w-[250px]"
          >
            <img src={item.img} alt={item.name} className="h-[60%] w-auto object-contain" />
            <div className="text-[12px] md:text-[20px] font-medium opacity-70 mt-2 text-center">{item.name}</div>
            <div className="text-xs md:text-sm opacity-60">{item.reviews}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Newarrivals;
