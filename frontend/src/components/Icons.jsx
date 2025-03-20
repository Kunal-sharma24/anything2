import { Truck, ShieldCheck, CreditCard, Headset } from "lucide-react";

const Features = () => {
  return (
    <div className="w-full px-3 py-8 md:py-12">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-around items-center gap-x-3 md:gap-x-10 text-gray-700 ">
        {/* Free Shipping */}
        <div className="flex flex-col items-center text-center gap-1 md:flex-row md:gap-4">
          <Truck className="h-8 w-8 md:h-14 md:w-14 text-blue-600" />
          <div>
            <h3 className="text-xs md:text-lg font-semibold">Free Shipping</h3>
            <p className="text-[10px] md:text-sm opacity-80">On all orders</p>
          </div>
        </div>

        {/* Money Guarantee */}
        <div className="flex flex-col items-center text-center gap-1 md:flex-row md:gap-4">
          <ShieldCheck className="h-8 w-8 md:h-14 md:w-14 text-green-600" />
          <div>
            <h3 className="text-xs md:text-lg font-semibold">Money Guarantee</h3>
            <p className="text-[10px] md:text-sm opacity-80">30-day refund</p>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="flex flex-col items-center text-center gap-1 md:flex-row md:gap-4">
          <CreditCard className="h-8 w-8 md:h-14 md:w-14 text-yellow-600" />
          <div>
            <h3 className="text-xs md:text-lg font-semibold">Secure Payments</h3>
            <p className="text-[10px] md:text-sm opacity-80">Multiple options</p>
          </div>
        </div>

        {/* Customer Support */}
        <div className="flex flex-col items-center text-center gap-1 md:flex-row md:gap-4">
          <Headset className="h-8 w-8 md:h-14 md:w-14 text-red-600" />
          <div>
            <h3 className="text-xs md:text-lg font-semibold">Customer Support</h3>
            <p className="text-[10px] md:text-sm opacity-80">24/7 support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
