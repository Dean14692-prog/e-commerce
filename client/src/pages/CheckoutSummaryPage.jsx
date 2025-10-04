import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useElectronics } from "./ElectronicsContext";

const CheckoutSummaryPage = () => {
  // Destructure values from context
  const { cart, cartTotal, deliveryFees, orderTotal, UserCircleIcon } =
    useElectronics();

  // 1. STATE FOR SINGLE-ITEM SLIDER
  const [startDisplayIndex, setStartDisplayIndex] = useState(0);

  // Constants and Calculations for the slider
  const totalShippingItems = cart.length;
  // Determine the max index, ensuring it's never negative
  const maxStartIndex = Math.max(0, totalShippingItems - 1);
  // Safety clamp the index to ensure it's within [0, maxStartIndex]
  const safeStartIndex = Math.min(
    Math.max(startDisplayIndex, 0),
    maxStartIndex
  );
  const itemToDisplay = cart[safeStartIndex];

  // Slider Navigation Logic
  const nextItem = () => {
    setStartDisplayIndex((prevIndex) => Math.min(prevIndex + 1, maxStartIndex));
  };

  const prevItem = () => {
    setStartDisplayIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const canGoPrev = safeStartIndex > 0;
  const canGoNext = safeStartIndex < maxStartIndex;

  // Assuming a static tax rate for display purposes
  const estimatedTaxes = cartTotal * 0.05; // 5% mock tax

  // Calculate the final total using the mock tax
  const finalOrderTotal = cartTotal + deliveryFees + estimatedTaxes;

  // Mock UserCircleIcon if it's potentially missing from useElectronics to prevent errors
  const FinalUserCircleIcon =
    UserCircleIcon ||
    (() => (
      <svg
        className="w-8 h-8 text-orange-500 flex-shrink-0"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ));

  return (
    <div className="min-h-screen bg-[#1a2037] p-8">
      <div className="max-w-6xl mx-auto">
        <Link
          to="/cart"
          className="flex items-center text-gray-400 hover:text-orange-500 transition-colors mb-8"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          <span className="font-semibold">Back to Cart</span>
        </Link>

        <h2 className="text-4xl font-extrabold text-white mb-8 border-b border-gray-700 pb-4">
          Order Summary & Checkout
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column: Customer Address, Delivery Details, Payment Method */}
          <div className="flex-grow space-y-6 lg:w-2/3">
            {/* 1. CUSTOMER ADDRESS */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex justify-between items-center border-b border-gray-700 pb-3">
                <div className="flex items-center">
                  <span className="text-orange-500 mr-2">1.</span> CUSTOMER
                  ADDRESS
                </div>
                <button className="text-orange-500 text-sm font-semibold hover:text-orange-400 transition-colors">
                  Change
                </button>
              </h3>
              <div className="flex items-start space-x-4 text-gray-300">
                <FinalUserCircleIcon className="w-8 h-8 text-orange-500 flex-shrink-0" />
                <div>
                  <p className="font-medium text-white">John Doe</p>
                  <p className="text-sm">123 React Lane, Code City, CA 90210</p>
                  <p className="text-sm">johndoe@example.com</p>
                  <p className="text-sm">Phone: (555) 123-4567</p>
                </div>
              </div>
            </div>

            {/* 2. DELIVERY DETAILS (Now contains the item slider) */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex justify-between items-center border-b border-gray-700 pb-3">
                <div className="flex items-center">
                  <span className="text-orange-500 mr-2">2.</span> DELIVERY
                  DETAILS
                </div>
                <button className="text-orange-500 text-sm font-semibold hover:text-orange-400 transition-colors">
                  Change
                </button>
              </h3>

              {/* Mock Delivery Location */}
              <div className="border-b border-gray-700 pb-4 mb-4">
                <p className="text-gray-300 font-medium flex justify-between items-center">
                  Pick-up Station
                  <span className="text-sm text-gray-400">
                    Delivered within 3-5 business days
                  </span>
                </p>
                <div className="ml-4 mt-2 p-3 bg-gray-700/50 rounded-lg border border-gray-600">
                  <p className="text-white font-semibold">
                    Tech Hub Central Station
                  </p>
                  <p className="text-gray-400 text-sm">
                    456 Component Street, Silicon Valley, CA 90210
                  </p>
                </div>
              </div>

              {/* Items Slider Implementation */}
              <h4 className="font-medium text-white mb-3">
                Items ({totalShippingItems})
              </h4>

              {totalShippingItems > 0 ? (
                // Wrapper for 3/4 width and left alignment
                <div className="w-full md:w-3/4">
                  <div className="relative group px-4 py-6 border border-gray-700 rounded-lg">
                    {/* Single Item Card Content */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <img
                          src={itemToDisplay.image}
                          alt={itemToDisplay.name}
                          className="w-16 h-16 object-cover rounded-md"
                        />
                        <div className="max-w-xs">
                          <p className="text-white font-medium line-clamp-1">
                            {itemToDisplay.name}
                          </p>
                          <p className="text-gray-400 text-sm">
                            Qty: {itemToDisplay.quantity}
                          </p>
                        </div>
                      </div>
                      <span className="text-white font-semibold flex-shrink-0">
                        $
                        {(itemToDisplay.price * itemToDisplay.quantity).toFixed(
                          2
                        )}
                      </span>
                    </div>

                    {/* NAVIGATION BUTTONS (Hidden until hover) */}
                    {totalShippingItems > 1 && (
                      <>
                        {/* Previous Button */}
                        <button
                          onClick={prevItem}
                          disabled={!canGoPrev}
                          className={`absolute -left-3 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800/80 border border-gray-700 rounded-full transition-opacity duration-300 z-10 ${
                            canGoPrev
                              ? "opacity-0 group-hover:opacity-100 hover:bg-gray-600"
                              : "opacity-0 cursor-not-allowed"
                          }`}
                          aria-label="Previous item"
                        >
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                        </button>

                        {/* Next Button */}
                        <button
                          onClick={nextItem}
                          disabled={!canGoNext}
                          className={`absolute -right-3 top-1/2 transform -translate-y-1/2 p-2 bg-gray-800/80 border border-gray-700 rounded-full transition-opacity duration-300 z-10 ${
                            canGoNext
                              ? "opacity-0 group-hover:opacity-100 hover:bg-gray-600"
                              : "opacity-0 cursor-not-allowed"
                          }`}
                          aria-label="Next item"
                        >
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </>
                    )}

                    {/* Item Index Indicator */}
                    <div className="text-center text-gray-400 text-sm mt-3">
                      Item{" "}
                      <span className="font-semibold text-white">
                        {safeStartIndex + 1}
                      </span>{" "}
                      of {totalShippingItems}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-gray-400 p-4 border border-gray-700 rounded-lg">
                  Your cart is empty.
                </div>
              )}

              {/* MODIFY CART LINK */}
              <Link
                to="/cart" // Navigates to the /cart route
                className="text-orange-500 text-sm font-semibold hover:text-orange-400 transition-colors mt-4 block"
              >
                Modify cart
              </Link>
            </div>

            {/* 3. PAYMENT METHOD */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex justify-between items-center border-b border-gray-700 pb-3">
                <div className="flex items-center">
                  <span className="text-orange-500 mr-2">3.</span> PAYMENT
                  METHOD
                </div>
                <button className="mt-0 text-orange-500 hover:text-orange-400 text-sm font-semibold">
                  Change Payment
                </button>
              </h3>
              <div className="flex items-center space-x-4 text-gray-300">
                <div className="text-3xl">💳</div>
                <div>
                  <p className="font-medium text-white">Visa ending in 4242</p>
                  <p className="text-sm">Expires 08/2026</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4. ORDER SUMMARY (Fixed width lg:w-80) */}
          <div className="lg:w-80 flex-shrink-0 lg:order-2">
            <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-2xl p-6 sticky top-24">
              <h3 className="font-bold text-2xl text-white mb-4 border-b border-gray-700 pb-3 text-left">
                Order Summary
              </h3>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-gray-300">
                  <span>Items Subtotal:</span>
                  <span className="font-medium">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Shipping & Handling:</span>
                  <span className="font-medium">
                    ${deliveryFees.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Taxes (Estimated):</span>
                  <span className="font-medium">
                    ${estimatedTaxes.toFixed(2)}
                  </span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t border-gray-700">
                <span className="text-xl font-bold text-white">
                  Order Total:
                </span>
                <span className="text-3xl font-extrabold text-orange-500">
                  ${finalOrderTotal.toFixed(2)}
                </span>
              </div>

              <button
                // Removed alert and set to a no-op function
                onClick={() => {}}
                disabled={cart.length === 0}
                className={`w-full py-4 mt-6 rounded-xl font-extrabold text-lg transition-all duration-200 shadow-xl ${
                  cart.length > 0
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white hover:shadow-green-500/25 transform hover:scale-[1.02]"
                    : "bg-gray-600 text-gray-400 cursor-not-allowed"
                }`}
              >
                Place Your Order
              </button>

              <p className="text-xs text-gray-400 mt-3 text-center">
                By placing your order, you agree to our terms and conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSummaryPage;