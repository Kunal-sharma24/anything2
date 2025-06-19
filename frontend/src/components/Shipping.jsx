import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Truck,
  Package,
  MapPin,
  Gift,
  ChevronRight,
  ChevronLeft,
  Clock,
  Shield,
  Building2,
  Home,
  CheckCircle2,
} from "lucide-react";

const Shipping = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    zipCode: "",
    country: "United States",
  });

  const [deliveryOption, setDeliveryOption] = useState("standard");
  const [savedAddresses, setSavedAddresses] = useState([
    {
      id: 1,
      type: "home",
      name: "Home",
      address: "123 Main Street, Apt 4B",
      city: "New York",
      state: "NY",
      zipCode: "10001",
      isDefault: true,
    },
    {
      id: 2,
      type: "office",
      name: "Office",
      address: "456 Business Ave",
      city: "New York",
      state: "NY",
      zipCode: "10002",
      isDefault: false,
    },
  ]);

  const [selectedAddress, setSelectedAddress] = useState(null);
  const [isGiftWrapping, setIsGiftWrapping] = useState(false);
  const [giftMessage, setGiftMessage] = useState("");

  const deliveryOptions = [
    {
      id: "standard",
      name: "Standard Delivery",
      description: "Delivery within 3-5 business days",
      price: 0,
      icon: Truck,
    },
    {
      id: "express",
      name: "Express Delivery",
      description: "Delivery within 1-2 business days",
      price: 14.99,
      icon: Clock,
    },
    {
      id: "priority",
      name: "Priority Delivery",
      description: "Next day delivery guaranteed",
      price: 24.99,
      icon: Package,
    },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAddressSelect = (address) => {
    setSelectedAddress(address);
    setFormData({
      ...formData,
      address: address.address,
      city: address.city,
      state: address.state,
      zipCode: address.zipCode,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle shipping information submission
    navigate("/payment");
  };

  const checkoutSteps = ["Cart", "Shipping", "Payment", "Confirmation"];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Checkout Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between w-full">
            {checkoutSteps.map((step, index) => (
              <div key={step} className="flex flex-col items-center">
                <div
                  className={
                    index === 1
                      ? "w-8 h-8 rounded-full flex items-center justify-center bg-blue-600 text-white"
                      : index < 1
                      ? "w-8 h-8 rounded-full flex items-center justify-center bg-green-500 text-white"
                      : "w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                  }
                >
                  {index < 1 ? <CheckCircle2 className="w-5 h-5" /> : index + 1}
                </div>
                <span className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                  {step}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
            <div className="h-full w-1/2 bg-blue-600 rounded-full transition-all duration-500"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Shipping Form */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Shipping Address
              </h2>

              {/* Saved Addresses */}
              {savedAddresses.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">
                    Saved Addresses
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {savedAddresses.map((address) => (
                      <div
                        key={address.id}
                        className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                          selectedAddress?.id === address.id
                            ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                            : "border-gray-200 dark:border-gray-700 hover:border-blue-500"
                        }`}
                        onClick={() => handleAddressSelect(address)}
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-2">
                            {address.type === "home" ? (
                              <Home className="w-5 h-5 text-gray-400" />
                            ) : (
                              <Building2 className="w-5 h-5 text-gray-400" />
                            )}
                            <span className="font-medium text-gray-900 dark:text-white">
                              {address.name}
                            </span>
                          </div>
                          {address.isDefault && (
                            <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                              Default
                            </span>
                          )}
                        </div>
                        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                          {address.address}
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {address.city}, {address.state} {address.zipCode}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* New Address Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm text-gray-900 dark:text-white bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm text-gray-900 dark:text-white bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm text-gray-900 dark:text-white bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm text-gray-900 dark:text-white bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Street Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm text-gray-900 dark:text-white bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Apartment, suite, etc. (optional)
                  </label>
                  <input
                    type="text"
                    name="apartment"
                    value={formData.apartment}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm text-gray-900 dark:text-white bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="col-span-2">
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm text-gray-900 dark:text-white bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      State
                    </label>
                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm text-gray-900 dark:text-white bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      ZIP Code
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm text-gray-900 dark:text-white bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              </form>
            </div>

            {/* Delivery Options */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                Delivery Options
              </h2>
              <div className="space-y-4">
                {deliveryOptions.map((option) => {
                  const Icon = option.icon;
                  return (
                    <label
                      key={option.id}
                      className={`flex items-center justify-between p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                        deliveryOption === option.id
                          ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                          : "border-gray-200 dark:border-gray-700 hover:border-blue-500"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <input
                          type="radio"
                          name="deliveryOption"
                          value={option.id}
                          checked={deliveryOption === option.id}
                          onChange={(e) => setDeliveryOption(e.target.value)}
                          className="text-blue-600 focus:ring-blue-500"
                        />
                        <div>
                          <div className="flex items-center gap-2">
                            <Icon className="w-5 h-5 text-gray-400" />
                            <span className="font-medium text-gray-900 dark:text-white">
                              {option.name}
                            </span>
                          </div>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                            {option.description}
                          </p>
                        </div>
                      </div>
                      <span className="font-medium text-gray-900 dark:text-white">
                        {option.price === 0
                          ? "Free"
                          : `$${option.price.toFixed(2)}`}
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Gift Options */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Gift Options
                </h2>
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="giftWrapping"
                    checked={isGiftWrapping}
                    onChange={(e) => setIsGiftWrapping(e.target.checked)}
                    className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label
                    htmlFor="giftWrapping"
                    className="text-sm text-gray-600 dark:text-gray-400"
                  >
                    Add gift wrapping (+$5.00)
                  </label>
                </div>
              </div>
              {isGiftWrapping && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Gift Message (optional)
                  </label>
                  <textarea
                    value={giftMessage}
                    onChange={(e) => setGiftMessage(e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm text-gray-900 dark:text-white bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Enter your gift message here..."
                  />
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg divide-y divide-gray-200 dark:divide-gray-700">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  Order Summary
                </h2>
                <div className="space-y-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Subtotal
                    </span>
                    <span className="text-gray-900 dark:text-white font-medium">
                      $499.98
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Shipping
                    </span>
                    <span className="text-gray-900 dark:text-white font-medium">
                      {deliveryOption === "standard"
                        ? "Free"
                        : deliveryOption === "express"
                        ? "$14.99"
                        : "$24.99"}
                    </span>
                  </div>
                  {isGiftWrapping && (
                    <div className="flex justify-between">
                      <span className="text-gray-600 dark:text-gray-400">
                        Gift Wrapping
                      </span>
                      <span className="text-gray-900 dark:text-white font-medium">
                        $5.00
                      </span>
                    </div>
                  )}
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-900 dark:text-white">
                        Total
                      </span>
                      <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        $
                        {(
                          499.98 +
                          (deliveryOption === "express"
                            ? 14.99
                            : deliveryOption === "priority"
                            ? 24.99
                            : 0) +
                          (isGiftWrapping ? 5 : 0)
                        ).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Buttons */}
              <div className="p-6">
                <button
                  onClick={handleSubmit}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 text-white bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors shadow-lg"
                >
                  <Shield className="w-5 h-5" />
                  Continue to Payment
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  onClick={() => navigate("/cart")}
                  className="w-full mt-4 flex items-center justify-center gap-2 px-6 py-4 text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-lg font-medium transition-colors"
                >
                  <ChevronLeft className="w-5 h-5" />
                  Back to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping; 