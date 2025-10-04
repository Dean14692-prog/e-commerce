import React from "react";
import { Link } from "react-router-dom"; // <-- FIX: Import Link from react-router-dom
import { useElectronics } from "./ElectronicsContext";

const CartPage = () => {
  const { cart, cartItemsCount, cartTotal, removeFromCart, updateQuantity } =
    useElectronics();

  return (
    <div className="min-h-screen bg-[#1a2037] p-8">
      <div className="max-w-7xl mx-auto">
        <Link
          to="/electronics" // Navigates back to the main shopping page
          className="flex items-center text-gray-400 hover:text-orange-500 transition-colors mb-6"
        >
          {/* Back Arrow SVG */}
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
          <span className="font-semibold">Continue Shopping</span>
        </Link>

        <div className="flex justify-between items-end mb-8 border-b border-gray-700 pb-4">
          <h2 className="text-3xl font-bold text-white">
            Your Shopping Cart ({cartItemsCount}
            {cartItemsCount === 1 ? " item" : " items"})
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Column: Cart Items List */}
          <div className="flex-grow space-y-4">
            {cart.length === 0 ? (
              <div className="bg-gray-800 p-8 rounded-lg text-center border border-gray-700">
                <h3 className="text-xl font-semibold text-gray-400">
                  Your cart is empty. Start adding some awesome electronics!
                </h3>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex p-4 bg-gray-800 border border-gray-700 rounded-lg shadow-xl hover:shadow-2xl transition-shadow"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
                  />

                  <div className="flex-grow ml-4">
                    <h4 className="font-semibold text-lg text-white mb-1">
                      {item.name}
                    </h4>
                    <p className="text-sm text-gray-400 mb-3 line-clamp-2">
                      {item.description}
                    </p>

                    <div className="flex items-center space-x-4">
                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="flex items-center text-red-400 hover:text-red-500 text-sm font-medium transition-colors"
                      >
                        {/* Trash Icon SVG */}
                        <svg
                          className="w-4 h-4 mr-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        Remove
                      </button>
                      <p className="text-sm text-green-400">In Stock</p>
                    </div>
                  </div>

                  <div className="flex flex-col items-end justify-between ml-4">
                    <div className="text-xl font-bold text-white mb-2">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center space-x-0 bg-gray-700 rounded-lg overflow-hidden border border-gray-600">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="p-2 w-8 h-8 flex items-center justify-center hover:bg-gray-600 text-gray-300 transition-colors"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M20 12H4"
                          />
                        </svg>
                      </button>
                      <span className="px-3 py-2 text-white text-sm border-l border-r border-gray-600 w-10 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="p-2 w-8 h-8 flex items-center justify-center hover:bg-gray-600 text-gray-300 transition-colors"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4v16m8-8H4"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Right Column: Cart Summary */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-xl p-6 sticky top-24">
              <h3 className="font-bold text-lg text-white mb-4 border-b border-gray-700 pb-3">
                CART SUMMARY
              </h3>

              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-300">Subtotal</span>
                <span className="text-xl font-bold text-white">
                  ${cartTotal.toFixed(2)}
                </span>
              </div>

              <Link
                to="/checkout" // <-- CHANGE: Navigates to the new Checkout Summary page
                disabled={cart.length === 0}
                className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg block text-center ${
                  cart.length > 0
                    ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white hover:shadow-orange-500/25"
                    : "bg-gray-600 text-gray-400 cursor-not-allowed pointer-events-none" // pointer-events-none to truly disable the Link
                }`}
              >
                Checkout (${cartTotal.toFixed(2)})
              </Link>

              <Link
                to="/electronics"
                className="w-full text-orange-500 hover:text-orange-400 mt-4 text-sm font-semibold transition-colors py-2 border border-orange-500 rounded-xl block text-center"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
