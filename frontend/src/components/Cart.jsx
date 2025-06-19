import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Trash2,
  Plus,
  Minus,
  ShoppingCart,
  CreditCard,
  Wallet,
  Gift,
  Tag,
  ChevronRight,
  Shield,
  Clock,
  Heart,
  Truck,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Premium Wireless Headphones",
      price: 199.99,
      quantity: 1,
      image: "https://placehold.co/100x100",
      category: "Electronics",
      inStock: true,
      estimatedDelivery: "2-3 business days",
      badge: "Best Seller",
    },
    {
      id: 2,
      name: "Smart Watch Series 5",
      price: 299.99,
      quantity: 1,
      image: "https://placehold.co/100x100",
      category: "Wearables",
      inStock: true,
      estimatedDelivery: "1-2 business days",
      badge: "New",
    },
  ]);

  const [savedItems, setSavedItems] = useState([]);
  const [couponCode, setCouponCode] = useState("");
  const [selectedPayment, setSelectedPayment] = useState("card");
  const [couponError, setCouponError] = useState("");
  const [couponSuccess, setCouponSuccess] = useState(false);

  const updateQuantity = (id, change) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, Number(item.quantity) + Number(change)) }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const saveForLater = (id) => {
    const item = cartItems.find((item) => item.id === id);
    setSavedItems([...savedItems, item]);
    removeItem(id);
  };

  const moveToCart = (id) => {
    const item = savedItems.find((item) => item.id === id);
    setCartItems([...cartItems, item]);
    setSavedItems(savedItems.filter((item) => item.id !== id));
  };

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === "save10") {
      setCouponSuccess(true);
      setCouponError("");
    } else {
      setCouponError("Invalid coupon code");
      setCouponSuccess(false);
    }
  };

  const subtotal = cartItems.reduce(
    (sum, item) => Number(sum) + Number(item.price) * Number(item.quantity),
    0
  );
  const shipping = 9.99;
  const discount = couponSuccess ? subtotal * 0.1 : 0;
  const total = subtotal + shipping - discount;

  const handleCheckout = () => {
    console.log("Proceeding to checkout...");
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
                    index === 0
                      ? "w-8 h-8 rounded-full flex items-center justify-center bg-blue-600 text-white"
                      : "w-8 h-8 rounded-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                  }
                >
                  {index + 1}
                </div>
                <span className="mt-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                  {step}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
            <div className="h-full w-1/4 bg-blue-600 rounded-full transition-all duration-500"></div>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
          <ShoppingCart className="w-8 h-8" />
          Your Cart
          <span className="text-lg font-normal text-gray-600 dark:text-gray-400">
            ({cartItems.length} items)
          </span>
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg">
              {cartItems.length > 0 ? (
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-6">
                      <div className="flex gap-6">
                        <div className="relative">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-32 h-32 object-cover rounded-lg shadow-md"
                          />
                          {item.badge && (
                            <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <div>
                              <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                                {item.category}
                              </span>
                              <h3 className="text-xl font-medium text-gray-900 dark:text-white mt-1">
                                {item.name}
                              </h3>
                            </div>
                            <div className="flex items-start gap-4">
                              <button
                                onClick={() => saveForLater(item.id)}
                                className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                              >
                                <Heart className="w-5 h-5" />
                              </button>
                              <button
                                onClick={() => removeItem(item.id)}
                                className="text-red-400 hover:text-red-600 dark:hover:text-red-300"
                              >
                                <Trash2 className="w-5 h-5" />
                              </button>
                            </div>
                          </div>
                          <p className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mt-2">
                            ${item.price.toFixed(2)}
                          </p>
                          <div className="flex items-center gap-6 mt-4">
                            <div className="flex items-center gap-2">
                              <div className="flex items-center border-2 border-gray-200 dark:border-gray-700 rounded-lg">
                                <button
                                  onClick={() => updateQuantity(item.id, -1)}
                                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                  <Minus className="w-4 h-4" />
                                </button>
                                <input
                                  type="number"
                                  value={item.quantity}
                                  onChange={(e) => 
                                    updateQuantity(item.id, Number(e.target.value) - item.quantity)
                                  }
                                  className="w-12 text-center border-none focus:ring-0 text-gray-900 dark:text-white bg-transparent"
                                />
                                <button
                                  onClick={() => updateQuantity(item.id, 1)}
                                  className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                  <Plus className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                              <Clock className="w-4 h-4" />
                              <span>Estimated delivery: {item.estimatedDelivery}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-12 text-center">
                  <ShoppingCart className="w-20 h-20 mx-auto text-gray-400" />
                  <h3 className="mt-4 text-xl font-medium text-gray-900 dark:text-white">
                    Your cart is empty
                  </h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Add items to get started with your shopping journey
                  </p>
                  <button
                    onClick={() => navigate("/products")}
                    className="mt-6 inline-flex items-center px-6 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    Continue Shopping
                    <ChevronRight className="ml-2 w-5 h-5" />
                  </button>
                </div>
              )}
            </div>

            {/* Saved Items */}
            {savedItems.length > 0 && (
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Saved for Later ({savedItems.length})
                </h3>
                <div className="divide-y divide-gray-200 dark:divide-gray-700">
                  {savedItems.map((item) => (
                    <div key={item.id} className="py-4 flex gap-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                          {item.name}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          ${item.price.toFixed(2)}
                        </p>
                        <button
                          onClick={() => moveToCart(item.id)}
                          className="mt-2 text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                        >
                          Move to Cart
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
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
                      Subtotal ({cartItems.reduce((sum, item) => sum + item.quantity, 0)} items)
                    </span>
                    <span className="text-gray-900 dark:text-white font-medium">
                      ${subtotal.toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">
                      Shipping
                    </span>
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-green-500" />
                      <span className="text-gray-900 dark:text-white font-medium">
                        ${shipping.toFixed(2)}
                      </span>
                    </div>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600 dark:text-green-400">
                      <span>Discount (10% off)</span>
                      <span>-${discount.toFixed(2)}</span>
                    </div>
                  )}
                  <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold text-gray-900 dark:text-white">
                        Total
                      </span>
                      <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Coupon Code */}
              <div className="p-6">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                  <Tag className="w-4 h-4" />
                  Apply Coupon Code
                </h3>
                <div className="space-y-3">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={couponCode}
                      onChange={(e) => {
                        setCouponCode(e.target.value);
                        setCouponError("");
                        setCouponSuccess(false);
                      }}
                      placeholder="Enter code"
                      className={
                        couponError
                          ? "flex-1 px-3 py-2 border border-red-300 dark:border-red-600 rounded-lg shadow-sm text-gray-900 dark:text-white bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          : couponSuccess
                          ? "flex-1 px-3 py-2 border border-green-300 dark:border-green-600 rounded-lg shadow-sm text-gray-900 dark:text-white bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          : "flex-1 px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg shadow-sm text-gray-900 dark:text-white bg-white dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      }
                    />
                    <button
                      onClick={applyCoupon}
                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  {couponError && (
                    <div className="flex items-center gap-2 text-red-600 dark:text-red-400 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {couponError}
                    </div>
                  )}
                  {couponSuccess && (
                    <div className="flex items-center gap-2 text-green-600 dark:text-green-400 text-sm">
                      <CheckCircle2 className="w-4 h-4" />
                      Coupon applied successfully!
                    </div>
                  )}
                </div>
              </div>

              {/* Payment Methods */}
              <div className="p-6">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-4">
                  Payment Method
                </h3>
                <div className="space-y-3">
                  <label
                    className={
                      selectedPayment === "card"
                        ? "flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-colors border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                        : "flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-colors border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400"
                    }
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="card"
                      checked={selectedPayment === "card"}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <CreditCard className="w-5 h-5 text-gray-400" />
                    <div>
                      <span className="text-gray-900 dark:text-white font-medium">
                        Credit/Debit Card
                      </span>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        All major cards accepted
                      </p>
                    </div>
                  </label>
                  <label
                    className={
                      selectedPayment === "wallet"
                        ? "flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-colors border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                        : "flex items-center gap-3 p-4 border-2 rounded-lg cursor-pointer transition-colors border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400"
                    }
                  >
                    <input
                      type="radio"
                      name="payment"
                      value="wallet"
                      checked={selectedPayment === "wallet"}
                      onChange={(e) => setSelectedPayment(e.target.value)}
                      className="text-blue-600 focus:ring-blue-500"
                    />
                    <Wallet className="w-5 h-5 text-gray-400" />
                    <div>
                      <span className="text-gray-900 dark:text-white font-medium">
                        Digital Wallet
                      </span>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Apple Pay, Google Pay, etc.
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Checkout Button */}
              <div className="p-6">
                <button
                  onClick={() => navigate('/shipping')}
                  disabled={cartItems.length === 0}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 text-white bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 rounded-lg font-medium transition-colors shadow-lg disabled:cursor-not-allowed"
                >
                  <Shield className="w-5 h-5" />
                  Proceed to Checkout
                  <ChevronRight className="w-5 h-5" />
                </button>
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <Shield className="w-4 h-4" />
                  <p>Secure checkout powered by Stripe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 