import React from "react";
import { Truck, ShieldCheck, CreditCard, Headset, Gift } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description, color }) => {
  return (
    <div className="flex flex-col items-center text-center gap-1 p-2 min-w-[120px] md:min-w-0">
      <div className={`p-2 rounded-full ${color} bg-opacity-10`}>
        <Icon className={`h-5 w-5 md:h-8 md:w-8 ${color}`} />
      </div>
      <h3 className="text-s font-semibold text-gray-800">{title}</h3>
      <p className="text-[10px] text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Free delivery",
      color: "text-blue-600",
    },
    {
      icon: ShieldCheck,
      title: "Guarantee",
      description: "30-day refund",
      color: "text-green-600",
    },
    {
      icon: CreditCard,
      title: "Secure Pay",
      description: "Safe payments",
      color: "text-yellow-600",
    },
    {
      icon: Headset,
      title: "24/7 Support",
      description: "Always here",
      color: "text-red-600",
    },
    {
      icon: Gift,
      title: "Free Gift",
      description: "With orders",
      color: "text-purple-600",
    },
  ];

  return (
    <section className="w-full py-4 md:py-6 ">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex overflow-x-auto md:grid md:grid-cols-5 gap-2 md:gap-4 no-scrollbar">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;


