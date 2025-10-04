

import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { useElectronics } from "./ElectronicsContext";

const InvoicePage = () => {
  const { cart, cartTotal, deliveryFees, userAddress } = useElectronics();

  // MOCK INVOICE GENERATION LOGIC
  const estimatedTaxes = cartTotal * 0.05;
  const finalOrderTotal = cartTotal + deliveryFees + estimatedTaxes;

  // Custom Invoice ID generator (memoized so it only generates once)
  const invoiceId = useMemo(() => {
    const now = new Date();
    // YY (e.g., 25)
    const year = now.getFullYear().toString().slice(-2);
    // MM (e.g., 10)
    const month = (now.getMonth() + 1).toString().padStart(2, "0");
    // DD (e.g., 04)
    const day = now.getDate().toString().padStart(2, "0");

    // Generate a 3-digit random number (000 - 999) with padding
    const randomNumber = Math.floor(Math.random() * 1000);
    const uniqueRandom = randomNumber.toString().padStart(3, "0");

    // Final Format: DMYYMMDDRandomNumberN (e.g., DM251004123N)
    return `DM${year}${month}${day}${uniqueRandom}N`;
  }, []);

  // Date formatting
  const invoiceDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  // Handle case where cart is somehow empty (preventing invoice generation)
  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#1a2037] p-8 text-white flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-4">No Order Placed</h2>
        <p className="text-gray-400 mb-6">
          Your cart is empty. Please return to shopping to place an order.
        </p>
        <Link
          to="/electronics"
          className="text-orange-500 hover:text-orange-400 font-semibold"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  // ALERT REMOVED: Function is now empty
  const handlePayNow = () => {
    // This function is now empty. The navigation to /payment is handled by the <Link> component.
  };

  return (
    <div className="min-h-screen bg-[#1a2037] p-8">
      <div className="max-w-4xl mx-auto bg-gray-900 border border-gray-700 rounded-lg shadow-2xl p-8">
        {/* Invoice Header */}
        <div className="border-b border-orange-500 pb-4 mb-6 flex justify-between items-center">
          <h1 className="text-4xl font-extrabold text-white">INVOICE</h1>
          <div className="text-right">
            {/* Displaying the custom unique ID */}
            <p className="text-lg font-bold text-orange-500">{invoiceId}</p>
            <p className="text-sm text-gray-400">Date: {invoiceDate}</p>
          </div>
        </div>

        {/* Customer Details */}
        <div className="grid grid-cols-2 gap-4 mb-8 text-gray-300">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Billed To:
            </h3>
            {/* Full Name */}
            <p className="text-white">{userAddress.fullName}</p>
            {/* Email */}
            <p>{userAddress.email || "N/A"}</p>
            {/* Main Phone (Used for Billing contact, similar to shipping for simplicity) */}
            <p>
              {userAddress.phone ? `Phone: +254${userAddress.phone}` : "N/A"}
            </p>
            {/* Additional Phone */}
            {userAddress.additionalPhone && (
              <p className="text-sm text-gray-400">
                Alt. Phone: +254{userAddress.additionalPhone}
              </p>
            )}
          </div>
          <div className="ml-50">
            <h3 className="text-xl font-semibold text-white mb-2">Ship To:</h3>
            {/* 🟢 MODIFIED: Added person and phone to Ship To */}
            {/* Person's Name */}
            <p className="text-white font-medium">{userAddress.fullName}</p>
            {/* Location (Address) */}
            <p>{userAddress.email || "N/A"}</p>
            {/* Location (City, Region) */}
            <p>
              {userAddress.city || "N/A"}, {userAddress.region || "N/A"}
            </p>
            {/* Phone Number */}
            <p className="mt-1">
              {userAddress.phone ? `+254${userAddress.phone}` : "N/A"}
            </p>
            {/* Additional Info */}
            {userAddress.additionalInfo && (
              <p className="text-sm text-gray-400 mt-2">
                Note: {userAddress.additionalInfo}
              </p>
            )}
            {/* 🟢 END MODIFIED SECTION */}
          </div>
        </div>

        {/* Itemized List */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-white border-b border-gray-700 pb-2 mb-4">
            Order Items
          </h3>
          <div className="space-y-3">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center text-gray-300 border-b border-gray-800 pb-2"
              >
                <div className="flex-grow">
                  <p className="text-white font-medium">{item.name}</p>
                  <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                </div>
                <span className="font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Totals Summary */}
        <div className="flex justify-end">
          <div className="w-full sm:w-80 space-y-2 text-white">
            <div className="flex justify-between">
              <span className="text-gray-400">Subtotal:</span>
              <span className="font-medium">${cartTotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Shipping:</span>
              <span className="font-medium">${deliveryFees.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Tax (5%):</span>
              <span className="font-medium">${estimatedTaxes.toFixed(2)}</span>
            </div>
            <div className="flex justify-between pt-3 border-t border-gray-700">
              <span className="text-2xl font-bold text-orange-500">TOTAL:</span>
              <span className="text-3xl font-extrabold text-orange-500">
                ${finalOrderTotal.toFixed(2)}
              </span>
            </div>
          </div>
        </div>

        {/* Payment Button */}
        <Link to="/payment">
          <button
            onClick={handlePayNow}
            className="w-full py-4 mt-8 rounded-xl font-extrabold text-xl transition-all duration-200 shadow-xl bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white hover:shadow-green-500/25 transform hover:scale-[1.01]"
          >
            {/* M-Pesa Icon (Mocked with a simple cash icon) */}
            <svg
              className="w-6 h-6 inline mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m4 2h.01M17 13h-4m4 0a2 2 0 012-2V9a2 2 0 00-2-2M5 7h.01"
              />
            </svg>
            Pay Now (M-Pesa)
          </button>
        </Link>
      </div>
    </div>
  );
};

export default InvoicePage;