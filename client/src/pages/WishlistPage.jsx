import React from "react";
import { Link } from "react-router-dom"; 
import { useElectronics, ListProductCard } from "./ElectronicsContext"; 

const WishlistPage = () => {
  const { wishlistProducts } = useElectronics();

  return (
    <div className="min-h-screen bg-[#1a2037] p-8">
      <div className="max-w-7xl mx-auto">
        <Link
          to="/electronics"
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
          <span className="font-semibold">Back to Shopping</span>
        </Link>

        <div className="flex justify-between items-end mb-8 border-b border-gray-700 pb-4">
          <h2 className="text-3xl font-bold text-white">
            My Wishlist ({wishlistProducts.length}
            {wishlistProducts.length === 1 ? " item" : " items"})
          </h2>
        </div>

        {wishlistProducts.length === 0 ? (
          <div className="bg-gray-800 p-8 rounded-lg text-center">
            <h3 className="text-xl font-semibold text-gray-400">
              Your wishlist is empty. 💔
            </h3>
            <p className="text-gray-400 mt-2">
              Click the heart icon on any product to add it here.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Using the ListProductCard for a clean wishlist view */}
            {wishlistProducts.map((product) => (
              <ListProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
