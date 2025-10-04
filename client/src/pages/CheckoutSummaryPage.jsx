import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useElectronics } from "./ElectronicsContext";

const CheckoutSummaryPage = () => {
  // Destructure values from context
  const {
    cart,
    cartTotal,
    deliveryFees,
    // orderTotal,
    UserCircleIcon,
    userAddress,
  } = useElectronics();

  // --- START: Original Logic from the CheckoutSummaryPage.jsx file ---

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
  // FIX: Correctly declared with 'const'
  const canGoNext = safeStartIndex < maxStartIndex;

  // Assuming a static tax rate for display purposes
  const estimatedTaxes = cartTotal * 0.05; // 5% mock tax

  // Calculate the final total using the mock tax
  const finalOrderTotal = cartTotal + deliveryFees + estimatedTaxes;

  // --- END: Original Logic from the CheckoutSummaryPage.jsx file ---

  return (
    <div className="min-h-screen bg-[#1a2037] p-8">
      <div className="max-w-6xl mx-auto">
        {/* MODIFIED HEADER: Only contains the 'Modify Cart' link, aligned to the right */}
        <div className="flex items-center justify-end mb-8">
          <Link
            to="/cart"
            className="flex items-center px-4 py-2 text-lg font-semibold border border-orange-500 rounded-xl text-orange-500 hover:bg-orange-700 hover:text-white transition-colors duration-200"
          >
            {/* Shopping Cart Icon */}
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
            Modify Cart
          </Link>
        </div>
        {/* END MODIFIED HEADER */}

        <div className="flex gap-8">
          {/* Left Column: Details */}
          <div className="flex-grow space-y-6">
            {/* Customer Address Card */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <h3 className="font-bold text-xl text-white mb-4 flex justify-between items-center">
                1. CUSTOMER ADDRESS
                <Link
                  to="/Customer-details-editing" // Link to the edit page
                  className="text-orange-500 text-sm font-semibold hover:text-orange-400 transition-colors"
                >
                  Change
                </Link>
              </h3>
              <p className="text-gray-300">{userAddress.fullName}</p>
              <p className="text-gray-400 text-sm mt-1">
                {userAddress.addressSummary}
              </p>
            </div>

            {/* Delivery Details */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <h3 className="font-bold text-xl text-white mb-4">
                2. DELIVERY DETAILS
              </h3>

              {/* Shipping Items Slider */}
              <div className="relative border border-gray-700 rounded-lg p-4 bg-gray-900 mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">
                  Shipping {totalShippingItems} Item
                  {totalShippingItems !== 1 ? "s" : ""}
                </h4>

                {totalShippingItems > 0 && (
                  <>
                    <div className="flex items-center space-x-4">
                      {/* Item Image */}
                      <img
                        src={itemToDisplay.image}
                        alt={itemToDisplay.name}
                        className="w-16 h-16 object-cover rounded"
                      />
                      {/* Item Details */}
                      <div className="flex-grow">
                        <p className="text-gray-200 font-medium">
                          {itemToDisplay.name}
                        </p>
                        <p className="text-gray-400 text-sm">
                          Quantity: {itemToDisplay.quantity}
                        </p>
                      </div>
                      <span className="text-lg font-bold text-white">
                        $
                        {(itemToDisplay.price * itemToDisplay.quantity).toFixed(
                          2
                        )}
                      </span>
                    </div>

                    {/* Navigation Buttons */}
                    {totalShippingItems > 1 && (
                      <div className="absolute top-1/2 -translate-y-1/2 flex justify-between w-full px-2">
                        <button
                          onClick={prevItem}
                          disabled={!canGoPrev}
                          className={`p-2 rounded-full bg-gray-700 transition-opacity ${
                            canGoPrev
                              ? "opacity-100 hover:bg-gray-600"
                              : "opacity-30 cursor-not-allowed"
                          }`}
                        >
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                        </button>
                        <button
                          onClick={nextItem}
                          disabled={!canGoNext}
                          className={`p-2 rounded-full bg-gray-700 transition-opacity ${
                            canGoNext
                              ? "opacity-100 hover:bg-gray-600"
                              : "opacity-30 cursor-not-allowed"
                          }`}
                        >
                          <svg
                            className="w-5 h-5 text-white"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </div>
                    )}
                  </>
                )}
                {totalShippingItems === 0 && (
                  <p className="text-gray-400 text-center">
                    Your cart is empty.
                  </p>
                )}

                <p className="text-sm text-gray-500 mt-4 text-center">
                  Showing item {safeStartIndex + 1} of {totalShippingItems}
                </p>
              </div>

              {/* Continue Shopping TEXT LINK */}
              <Link
                to="/electronics"
                className="w-full mt-4 text-center text-orange-500 text-sm font-semibold hover:text-orange-400 transition-colors block"
              >
                Continue Shopping
              </Link>
            </div>

            {/* Payment Method */}
            <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <h3 className="font-bold text-xl text-white mb-4">
                3. PAYMENT METHOD
              </h3>
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-orange-500 rounded-full">
                  <UserCircleIcon className="w-6 h-6 text-white" />
                </div>
                <p className="text-gray-200 font-medium">
                  Pay with M-Pesa or Cash on Delivery
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-xl p-6 sticky top-24">
              <h3 className="font-bold text-lg text-white mb-4 border-b border-gray-700 pb-3">
                Order Summary
              </h3>

              <div className="space-y-3 pb-4">
                <div className="flex justify-between items-center text-gray-300">
                  <span>Items ({cart.length})</span>
                  <span className="font-medium">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between items-center text-gray-300">
                  <span>Shipping & Handling</span>
                  <span className="font-medium">
                    ${deliveryFees.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between items-center text-gray-300">
                  <span>Estimated Tax</span>
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