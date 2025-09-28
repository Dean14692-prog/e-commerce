// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   MagnifyingGlassIcon,
//   UserCircleIcon,
//   QuestionMarkCircleIcon,
//   ShoppingCartIcon,
//   UserIcon,
//   CubeIcon,
//   HeartIcon,
// } from "@heroicons/react/24/outline";

// const Navbar = () => {
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   return (
//     <nav className="bg-white shadow-sm sticky top-0 z-50">
//       <div className="container mx-auto px-4 py-2 flex items-center justify-between">
//         {/* Logo and Search Bar */}
//         <div className="flex-grow flex items-center">
//           <Link to="/" className="flex items-center space-x-1">
//             <span className="text-orange-500 font-extrabold text-2xl">
//               JUMIA
//             </span>
//           </Link>
//           <div className="flex-1 max-w-lg mx-8 hidden lg:block">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search products, brands and categories"
//                 className="w-full pl-4 pr-12 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//               />
//               <button className="absolute inset-y-0 right-0 flex items-center px-4 text-white bg-orange-500 rounded-r-md">
//                 Search
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Right-side links and icons */}
//         <div className="flex items-center space-x-6">
//           {/* Account Dropdown Section */}
//           <div
//             className="relative"
//             onMouseEnter={() => setIsDropdownOpen(true)}
//             onMouseLeave={() => setIsDropdownOpen(false)}
//           >
//             <button className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors focus:outline-none">
//               <UserCircleIcon className="h-6 w-6" />
//               <span className="hidden md:inline">Account</span>
//             </button>

//             {isDropdownOpen && (
//               <div className="absolute right-0 top-full w-48 bg-white border border-gray-200 rounded-md shadow-lg py-1">
//                 {/* Sign Up Link Styled as a Button */}
//                 <div className="p-2">
//                   <Link
//                     to="/signup"
//                     className="block text-center w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-600 transition-colors"
//                   >
//                     Sign Up
//                   </Link>
//                 </div>

//                 {/* Dropdown Links with Icons */}
//                 <Link
//                   to="/login"
//                   className="group flex items-center space-x-2 px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors rounded-md"
//                 >
//                   <UserIcon className="h-5 w-5 text-gray-500 group-hover:text-orange-500 transition-colors" />
//                   <span className="group-hover:text-orange-500 transition-colors">
//                     My Account
//                   </span>
//                 </Link>

//                 <Link
//                   to="/orders"
//                   className="group flex items-center space-x-2 px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors rounded-md"
//                 >
//                   <CubeIcon className="h-5 w-5 text-gray-500 group-hover:text-orange-500 transition-colors" />
//                   <span className="group-hover:text-orange-500 transition-colors">
//                     Orders
//                   </span>
//                 </Link>

//                 <Link
//                   to="/wishlist"
//                   className="group flex items-center space-x-2 px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors rounded-md"
//                 >
//                   <HeartIcon className="h-5 w-5 text-gray-500 group-hover:text-orange-500 transition-colors" />
//                   <span className="group-hover:text-orange-500 transition-colors">
//                     Wishlist
//                   </span>
//                 </Link>
//               </div>
//             )}
//           </div>

//           {/* Help Link */}
//           <Link
//             to="/help"
//             className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors"
//           >
//             <QuestionMarkCircleIcon className="h-6 w-6" />
//             <span className="hidden md:inline">Help</span>
//           </Link>

//           {/* Cart Link */}
//           <Link
//             to="/cart"
//             className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors"
//           >
//             <ShoppingCartIcon className="h-6 w-6" />
//             <span className="hidden md:inline">Cart</span>
//           </Link>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from "react";

// Helper components for Icons (kept separate for cleaner JSX)
const SearchIcon = () => (
  <svg
    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    />
  </svg>
);

const ShoppingCartIcon = ({ count }) => (
  <>
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5M17 17a2 2 0 102 2 2 2 0 00-2-2zm-8 0a2 2 0 102 2 2 2 0 00-2-2z"
      />
    </svg>
    {count > 0 && (
      <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
        {count}
      </span>
    )}
  </>
);

const Navbar = ({
  searchTerm,
  setSearchTerm,
  cartItemsCount,
  onCartClick,
}) => {
  return (
    <header className="bg-[#1a2037] border-b border-gray-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
              ElectroStore
            </h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <SearchIcon />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-600 text-white placeholder-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
            </div>
          </div>

          {/* Cart Button */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onCartClick}
              className="relative p-2 text-gray-300 hover:text-orange-400 transition-colors"
            >
              <ShoppingCartIcon count={cartItemsCount} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;