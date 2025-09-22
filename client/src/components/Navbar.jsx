
import React from "react";
import {
  MagnifyingGlassIcon, 
  UserCircleIcon,
  QuestionMarkCircleIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo and Search Bar */}
        <div className="flex-grow flex items-center">
          <a href="#" className="flex items-center space-x-1">
            <span className="text-orange-500 font-extrabold text-2xl">
              JUMIA
            </span>
            <span className="text-sm font-semibold text-gray-700 hidden sm:inline">
              .co.ke
            </span>
          </a>
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
          <a
            href="#"
            className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors"
          >
            <UserCircleIcon className="h-6 w-6" />
            <span className="hidden md:inline">Account</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors"
          >
            <QuestionMarkCircleIcon className="h-6 w-6" />
            <span className="hidden md:inline">Help</span>
          </a>
          <a
            href="#"
            className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors"
          >
            <ShoppingCartIcon className="h-6 w-6" />
            <span className="hidden md:inline">Cart</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
