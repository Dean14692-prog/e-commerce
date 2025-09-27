import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  UserCircleIcon,
  QuestionMarkCircleIcon,
  ShoppingCartIcon,
  UserIcon,
  CubeIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo and Search Bar */}
        <div className="flex-grow flex items-center">
          <Link to="/" className="flex items-center space-x-1">
            <span className="text-orange-500 font-extrabold text-2xl">
              JUMIA
            </span>
          </Link>
          <div className="flex-1 max-w-lg mx-8 hidden lg:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products, brands and categories"
                className="w-full pl-4 pr-12 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <button className="absolute inset-y-0 right-0 flex items-center px-4 text-white bg-orange-500 rounded-r-md">
                Search
              </button>
            </div>
          </div>
        </div>

        {/* Right-side links and icons */}
        <div className="flex items-center space-x-6">
          {/* Account Dropdown Section */}
          <div
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <button className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors focus:outline-none">
              <UserCircleIcon className="h-6 w-6" />
              <span className="hidden md:inline">Account</span>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 top-full w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1">
                {/* Sign Up Link Styled as a Button */}
                <div className="p-2">
                  <Link
                    to="/signup"
                    className="block text-center w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-600 transition-colors"
                  >
                    Sign Up
                  </Link>
                </div>

                {/* Dropdown Links with Icons */}
                <Link
                  to="/login"
                  className="group flex items-center space-x-2 px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors rounded-md"
                >
                  <UserIcon className="h-5 w-5 text-gray-500 group-hover:text-orange-500 transition-colors" />
                  <span className="group-hover:text-orange-500 transition-colors">
                    My Account
                  </span>
                </Link>

                <Link
                  to="/orders"
                  className="group flex items-center space-x-2 px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors rounded-md"
                >
                  <CubeIcon className="h-5 w-5 text-gray-500 group-hover:text-orange-500 transition-colors" />
                  <span className="group-hover:text-orange-500 transition-colors">
                    Orders
                  </span>
                </Link>

                <Link
                  to="/wishlist"
                  className="group flex items-center space-x-2 px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors rounded-md"
                >
                  <HeartIcon className="h-5 w-5 text-gray-500 group-hover:text-orange-500 transition-colors" />
                  <span className="group-hover:text-orange-500 transition-colors">
                    Wishlist
                  </span>
                </Link>
              </div>
            )}
          </div>

          {/* Help Link */}
          <Link
            to="/help"
            className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors"
          >
            <QuestionMarkCircleIcon className="h-6 w-6" />
            <span className="hidden md:inline">Help</span>
          </Link>

          {/* Cart Link */}
          <Link
            to="/cart"
            className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors"
          >
            <ShoppingCartIcon className="h-6 w-6" />
            <span className="hidden md:inline">Cart</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
