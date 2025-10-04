// import React, { useState } from "react";
// const Link = ({ to, children, ...props }) => (
//   <a href={to} {...props}>
//     {children}
//   </a>
// );
// const UserCircleIcon = (props) => (
//   <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 3a9 9 0 11-18 0 9 9 0 0118 0z"
//     />
//   </svg>
// );
// const UserIcon = (props) => (
//   <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
//     />
//   </svg>
// );
// const CubeIcon = (props) => (
//   <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10m0-10l-8 4v10"
//     />
//   </svg>
// );
// const HeartIcon = (props) => (
//   <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//     />
//   </svg>
// );

// const ShoppingCartIcon = (props) => (
//   <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2}
//       d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.5 5m2.5-5h-2m2.5 5h2m-2.5 0l2.5-5m2.5 5h2M17 17a2 2 0 102 2 2 2 0 00-2-2zM9 17a2 2 0 102 2 2 2 0 00-2-2z"
//     />
//   </svg>
// );

// const Electronics = () => {
//   const [cart, setCart] = useState([]);
//   const [favorites, setFavorites] = useState([]);
//   const [viewMode, setViewMode] = useState("grid");
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("all");
//   const [priceRange, setPriceRange] = useState([0, 2000]);
//   const [showFilters, setShowFilters] = useState(false);
//   const [showCartPage, setShowCartPage] = useState(false);
//   const [showWishlistPage, setShowWishlistPage] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [showCheckoutSummaryPage, setShowCheckoutSummaryPage] = useState(false);
//   // MODIFIED STATE: For controlling the index of the first displayed item in the two-item shipment window
//   const [startDisplayIndex, setStartDisplayIndex] = useState(0);

//   const products = [
//     {
//       id: 1,
//       name: "iPhone 15 Pro Max",
//       price: 1199,
//       originalPrice: 1299,
//       image:
//         "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",
//       rating: 4.8,
//       reviews: 1250,
//       category: "phones",
//       description:
//         "6.7-inch Super Retina XDR display with ProMotion technology",
//       inStock: true,
//       discount: 8,
//     },
//     {
//       id: 2,
//       name: 'MacBook Pro 16"',
//       price: 2499,
//       originalPrice: 2699,
//       image:
//         "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
//       rating: 4.9,
//       reviews: 890,
//       category: "laptops",
//       description: "M3 Pro chip, 18GB RAM, 512GB SSD",
//       inStock: true,
//       discount: 7,
//     },
//     {
//       id: 3,
//       name: "Sony WH-1000XM5",
//       price: 349,
//       originalPrice: 399,
//       image:
//         "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
//       rating: 4.7,
//       reviews: 2340,
//       category: "headphones",
//       description: "Industry-leading noise canceling headphones",
//       inStock: true,
//       discount: 13,
//     },
//     {
//       id: 4,
//       name: 'Samsung 55" OLED TV',
//       price: 1299,
//       originalPrice: 1499,
//       image:
//         "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400",
//       rating: 4.6,
//       reviews: 456,
//       category: "tv",
//       description: "4K Ultra HD Smart TV with HDR",
//       inStock: false,
//       discount: 13,
//     },
//     {
//       id: 5,
//       name: 'iPad Pro 12.9"',
//       price: 1099,
//       originalPrice: 1199,
//       image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
//       rating: 4.8,
//       reviews: 734,
//       category: "tablets",
//       description: "M2 chip, 256GB, Wi-Fi + Cellular",
//       inStock: true,
//       discount: 8,
//     },
//     {
//       id: 6,
//       name: "Gaming Mechanical Keyboard",
//       price: 159,
//       originalPrice: 199,
//       image:
//         "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400",
//       rating: 4.5,
//       reviews: 1890,
//       category: "accessories",
//       description: "RGB Backlit, Cherry MX Blue switches",
//       inStock: true,
//       discount: 20,
//     },
//   ];

//   const categories = [
//     { id: "all", name: "All Products", count: products.length },
//     {
//       id: "phones",
//       name: "Smartphones",
//       count: products.filter((p) => p.category === "phones").length,
//     },
//     {
//       id: "laptops",
//       name: "Laptops",
//       count: products.filter((p) => p.category === "laptops").length,
//     },
//     {
//       id: "headphones",
//       name: "Headphones",
//       count: products.filter((p) => p.category === "headphones").length,
//     },
//     {
//       id: "tv",
//       name: "TVs",
//       count: products.filter((p) => p.category === "tv").length,
//     },
//     {
//       id: "tablets",
//       name: "Tablets",
//       count: products.filter((p) => p.category === "tablets").length,
//     },
//     {
//       id: "accessories",
//       name: "Accessories",
//       count: products.filter((p) => p.category === "accessories").length,
//     },
//   ];

//   const addToCart = (product) => {
//     const existingItem = cart.find((item) => item.id === product.id);
//     if (existingItem) {
//       setCart(
//         cart.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         )
//       );
//     } else {
//       setCart([...cart, { ...product, quantity: 1 }]);
//     }
//   };

//   const removeFromCart = (productId) => {
//     setCart(cart.filter((item) => item.id !== productId));
//   };

//   const updateQuantity = (productId, newQuantity) => {
//     if (newQuantity <= 0) {
//       removeFromCart(productId);
//     } else {
//       setCart(
//         cart.map((item) =>
//           item.id === productId ? { ...item, quantity: newQuantity } : item
//         )
//       );
//     }
//   };

//   const toggleFavorite = (productId) => {
//     if (favorites.includes(productId)) {
//       setFavorites(favorites.filter((id) => id !== productId));
//     } else {
//       setFavorites([...favorites, productId]);
//     }
//   };

//   const filteredProducts = products.filter((product) => {
//     const matchesSearch = product.name
//       .toLowerCase()
//       .includes(searchTerm.toLowerCase());
//     const matchesCategory =
//       selectedCategory === "all" || product.category === selectedCategory;
//     const matchesPrice =
//       product.price >= priceRange[0] && product.price <= priceRange[1];
//     return matchesSearch && matchesCategory && matchesPrice;
//   });

//   const cartTotal = cart.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );
//   const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

//   // Hardcoded placeholders for demonstration based on the image
//   const deliveryFees = 6.01; // $6.01
//   const orderTotal = cartTotal + deliveryFees;

//   const ProductCard = ({ product }) => (
//     <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg hover:shadow-2xl hover:border-orange-500/50 transition-all duration-300 group overflow-hidden flex flex-col">
//       <div className="relative overflow-hidden">
//         <img
//           src={product.image}
//           alt={product.name}
//           className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
//         />
//         {product.discount > 0 && (
//           <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
//             -{product.discount}%
//           </div>
//         )}
//         {!product.inStock && (
//           <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
//             <span className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold">
//               Out of Stock
//             </span>
//           </div>
//         )}
//         <button
//           onClick={() => toggleFavorite(product.id)}
//           className="absolute top-4 right-4 p-2 rounded-full bg-gray-800/80 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform"
//         >
//           {/* Heart Icon SVG */}
//           <svg
//             className={`w-5 h-5 ${
//               favorites.includes(product.id)
//                 ? "fill-red-500 text-red-500"
//                 : "text-gray-400"
//             }`}
//             fill={favorites.includes(product.id) ? "currentColor" : "none"}
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//             />
//           </svg>
//         </button>
//       </div>

//       <div className="p-4 flex flex-col flex-grow">
//         <h3 className="font-bold text-base text-white mb-2 line-clamp-2">
//           {product.name}
//         </h3>
//         <p className="text-gray-400 text-sm mb-2 line-clamp-1">
//           {product.description}
//         </p>

//         <div className="flex items-center mb-2">
//           <div className="flex items-center">
//             {[...Array(5)].map((_, i) => (
//               <svg
//                 key={i}
//                 className={`w-3 h-3 ${
//                   i < Math.floor(product.rating)
//                     ? "fill-yellow-400 text-yellow-400"
//                     : "text-gray-300"
//                 }`}
//                 fill="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//               </svg>
//             ))}
//             <span className="ml-2 text-xs text-gray-400">
//               ({product.reviews})
//             </span>
//           </div>
//         </div>

//         <div className="flex items-center justify-between mb-3 mt-auto">
//           <div className="flex items-center space-x-2">
//             <span className="text-xl font-bold text-white">
//               ${product.price}
//             </span>
//             {product.originalPrice > product.price && (
//               <span className="text-sm text-gray-400 line-through">
//                 ${product.originalPrice}
//               </span>
//             )}
//           </div>
//         </div>

//         <button
//           onClick={() => addToCart(product)}
//           disabled={!product.inStock}
//           className={`w-full py-2.5 rounded-lg font-semibold transition-all duration-200 ${
//             product.inStock
//               ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
//               : "bg-gray-600 text-gray-400 cursor-not-allowed"
//           }`}
//         >
//           {product.inStock ? "Add to Cart" : "Out of Stock"}
//         </button>
//       </div>
//     </div>
//   );

//   const ListProductCard = ({ product }) => (
//     <div className="bg-gray-800 mb-2 border border-gray-700 rounded-lg shadow-lg hover:shadow-xl hover:border-orange-500/50 transition-all duration-300 overflow-hidden">
//       <div className="flex">
//         <div className="relative w-35 h-35 mt-10 ml-5">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="w-full h-full object-cover rounded-lg"
//           />
//           {product.discount > 0 && (
//             <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
//               -{product.discount}%
//             </div>
//           )}
//         </div>

//         <div className="flex-1 p-6">
//           <div className="flex justify-between items-start mb-4">
//             <div>
//               <h3 className="font-bold text-xl text-white mb-2">
//                 {product.name}
//               </h3>
//               <p className="text-gray-400 mb-3">{product.description}</p>

//               <div className="flex items-center mb-3">
//                 <div className="flex items-center">
//                   {[...Array(5)].map((_, i) => (
//                     <svg
//                       key={i}
//                       className={`w-4 h-4 ${
//                         i < Math.floor(product.rating)
//                           ? "fill-yellow-400 text-yellow-400"
//                           : "text-gray-300"
//                       }`}
//                       fill="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                     </svg>
//                   ))}
//                   <span className="ml-2 text-sm text-gray-400">
//                     ({product.reviews})
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <button
//               onClick={() => toggleFavorite(product.id)}
//               className="p-2 rounded-full hover:bg-gray-700 transition-colors"
//             >
//               {/* Heart Icon SVG */}
//               <svg
//                 className={`w-6 h-6 ${
//                   favorites.includes(product.id)
//                     ? "fill-red-500 text-red-500"
//                     : "text-gray-400"
//                 }`}
//                 fill={favorites.includes(product.id) ? "currentColor" : "none"}
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
//                 />
//               </svg>
//             </button>
//           </div>

//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-3">
//               <span className="text-3xl font-bold text-white">
//                 ${product.price}
//               </span>
//               {product.originalPrice > product.price && (
//                 <span className="text-xl text-gray-400 line-through">
//                   ${product.originalPrice}
//                 </span>
//               )}
//             </div>

//             <button
//               onClick={() => addToCart(product)}
//               disabled={!product.inStock}
//               className={`px-8 py-3 rounded-xl font-semibold transition-all duration-200 ${
//                 product.inStock
//                   ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
//                   : "bg-gray-600 text-gray-400 cursor-not-allowed"
//               }`}
//             >
//               {product.inStock ? "Add to Cart" : "Out of Stock"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );

//   // Filter products for the wishlist
//   const wishlistProducts = products.filter((product) =>
//     favorites.includes(product.id)
//   );

//   // RENDER WISHLIST PAGE
//   if (showWishlistPage) {
//     return (
//       <div className="min-h-screen bg-[#1a2037] p-8">
//         <div className="max-w-7xl mx-auto">
//           <button
//             onClick={() => setShowWishlistPage(false)}
//             className="flex items-center text-gray-400 hover:text-orange-500 transition-colors mb-6"
//           >
//             {/* Back Arrow SVG */}
//             <svg
//               className="w-5 h-5 mr-2"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M10 19l-7-7m0 0l7-7m-7 7h18"
//               />
//             </svg>
//             <span className="font-semibold">Back to Shopping</span>
//           </button>

//           <div className="flex justify-between items-end mb-8 border-b border-gray-700 pb-4">
//             <h2 className="text-3xl font-bold text-white">
//               My Wishlist ({wishlistProducts.length}
//               {wishlistProducts.length === 1 ? "item" : "items"})
//             </h2>
//           </div>

//           {wishlistProducts.length === 0 ? (
//             <div className="bg-gray-800 p-8 rounded-lg text-center">
//               <h3 className="text-xl font-semibold text-gray-400">
//                 Your wishlist is empty. 💔
//               </h3>
//               <p className="text-gray-400 mt-2">
//                 Click the heart icon on any product to add it here.
//               </p>
//             </div>
//           ) : (
//             <div className="space-y-6">
//               {/* Using the ListProductCard for a clean wishlist view */}
//               {wishlistProducts.map((product) => (
//                 <ListProductCard key={product.id} product={product} />
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     );
//   }

//   // RENDER CHECKOUT SUMMARY PAGE (MODIFIED RENDER BLOCK)
//   if (showCheckoutSummaryPage) {
//     const totalShippingItems = cart.length;
//     // Max index for a 2-item display. If items=6, max=4 (to show 4 & 5). If items=1, max=0.
//     const maxStartIndex = totalShippingItems > 1 ? totalShippingItems - 2 : 0;

//     // Safety clamp the index, ensuring it's within [0, maxStartIndex]
//     const safeStartIndex = Math.min(
//       Math.max(startDisplayIndex, 0),
//       maxStartIndex
//     );

//     // Non-looping Navigation functions
//     const nextItem = () => {
//       // Move one step forward, but never past the maxStartIndex
//       setStartDisplayIndex((prevIndex) =>
//         Math.min(prevIndex + 1, maxStartIndex)
//       );
//     };

//     const prevItem = () => {
//       // Move one step back, but never below 0
//       setStartDisplayIndex((prevIndex) => Math.max(prevIndex - 1, 0));
//     };

//     // Visibility checks for non-looping behavior:
//     // Show Prev only if the first item is not index 0
//     const canGoPrev = safeStartIndex > 0;
//     // Show Next only if the first item is not the maximum possible starting index
//     const canGoNext = safeStartIndex < maxStartIndex;

//     // Logic to select the items to display (max 2 items)
//     const itemsToDisplay = [];
//     if (totalShippingItems > 0) {
//       // First item is always the safe start index
//       itemsToDisplay.push(cart[safeStartIndex]);

//       // Second item, only if available (i.e., less than total items)
//       if (safeStartIndex + 1 < totalShippingItems) {
//         itemsToDisplay.push(cart[safeStartIndex + 1]);
//       }
//     }

//     return (
//       <div className="min-h-screen bg-[#1a2037] p-8">
//         <div className="max-w-6xl mx-auto">
//           <div className="flex items-center justify-between mb-8">
//             <h1 className="text-3xl font-bold text-white flex items-center">
//               <span className="text-orange-500 mr-2">JUMIA</span>
//               <span className="text-white">|</span>
//               <span className="ml-2">Place your order</span>
//             </h1>
//             <div className="flex items-center space-x-4 text-sm">
//               <button className="text-gray-400 hover:text-orange-500 flex items-center">
//                 <svg
//                   className="w-5 h-5 mr-1"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.505A9.764 9.764 0 015 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
//                   />
//                 </svg>
//                 Need Help? Contact us
//               </button>
//               <span className="text-gray-500">|</span>
//               <span className="text-gray-400 flex items-center">
//                 <svg
//                   className="w-5 h-5 mr-1"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
//                   />
//                 </svg>
//                 Easy Returns
//               </span>
//               <span className="text-gray-500">|</span>
//               <span className="text-gray-400 flex items-center">
//                 <svg
//                   className="w-5 h-5 mr-1"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8z"
//                   />
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
//                   />
//                 </svg>
//                 Secure Payments
//               </span>
//             </div>
//           </div>

//           <div className="flex gap-8">
//             {/* Left Column: Details */}
//             <div className="flex-grow space-y-6">
//               {/* Customer Address */}
//               <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
//                 <h3 className="font-bold text-xl text-white mb-4 flex justify-between items-center">
//                   1. CUSTOMER ADDRESS
//                   <button className="text-orange-500 text-sm font-semibold hover:text-orange-400 transition-colors">
//                     Change
//                   </button>
//                 </h3>
//                 <p className="text-gray-300">Dennis Ngui</p>
//                 <p className="text-gray-400 text-sm mt-1">
//                   Nairobi | Nairobi - CBD - Luthuli/Ailya Central R. Ngai's |
//                   +254 7395073063
//                 </p>
//               </div>

//               {/* Delivery Details */}
//               <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
//                 <h3 className="font-bold text-xl text-white mb-4 flex justify-between items-center">
//                   2. DELIVERY DETAILS
//                   <button className="text-orange-500 text-sm font-semibold hover:text-orange-400 transition-colors">
//                     Change
//                   </button>
//                 </h3>
//                 <div className="border-b border-gray-700 pb-4 mb-4">
//                   <p className="text-gray-300 font-medium flex justify-between items-center">
//                     Pick-up Station
//                     <span className="text-sm text-gray-400">
//                       Delivery between 08 October and 09 October
//                     </span>
//                   </p>
//                   <div className="ml-4 mt-2 p-3 bg-gray-700/50 rounded-lg border border-gray-600">
//                     <p className="text-white font-semibold">
//                       Skyevshop Nyeri Station
//                     </p>
//                     <p className="text-gray-400 text-sm">
//                       Skyevshop Nyeri Station - Hamwa building Gakere rd
//                       Opposite Naivas Smkt, Next to haso petrol station | Nyeri
//                       - Nyeri Town
//                     </p>
//                   </div>
//                 </div>

//                 {/* Shipment (UPDATED SECTION for 2 items and non-looping scroll) */}
//                 <div className="space-y-4">
//                   <p className="text-gray-300 font-medium">
//                     Shipment 1/1{" "}
//                     <span className="text-xs text-orange-400 ml-2">
//                       Fulfilled by Jumia
//                     </span>
//                   </p>
//                   <p className="text-gray-400 text-sm mb-4">
//                     Pick-up Station: Delivery between 08 October and 09 October
//                   </p>

//                   {/* Horizontal Two-Item Display with Navigation */}
//                   <div className="relative group p-4 border border-gray-700 rounded-lg">
//                     <div
//                       className={`flex ${
//                         itemsToDisplay.length > 1
//                           ? "space-x-4"
//                           : "justify-center"
//                       }`}
//                     >
//                       {itemsToDisplay.map((item, index) => (
//                         // Item Container (Increased Height)
//                         <div key={item.id} className="flex-1">
//                           <div className="flex items-start p-6 bg-gray-700/50 rounded-lg h-full">
//                             <img
//                               src={item.image}
//                               alt={item.name}
//                               className="w-20 h-20 object-cover rounded-md border border-gray-600 flex-shrink-0" // Increased size
//                             />
//                             <div className="ml-4 flex-grow">
//                               <p className="text-base font-semibold text-white line-clamp-2">
//                                 {item.name}
//                               </p>
//                               <p className="text-sm text-gray-400 mt-1">
//                                 Qty: {item.quantity} | ${item.price} each
//                               </p>
//                               <div className="flex items-center mt-2">
//                                 <span className="text-orange-400 text-sm font-semibold">
//                                   JUMIA EXPRESS
//                                 </span>
//                                 <span className="ml-3 text-lg font-bold text-white">
//                                   ${(item.price * item.quantity).toFixed(2)}
//                                 </span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       ))}
//                     </div>

//                     {/* Navigation Arrows on Hover (Only show if more than two items exist) */}
//                     {totalShippingItems > 2 && (
//                       <>
//                         {/* Previous Button (Left) */}
//                         <button
//                           onClick={prevItem}
//                           // Hidden when at start (safeStartIndex === 0), visible otherwise on hover
//                           className={`absolute left-0 top-1/2 transform -translate-y-1/2 -ml-3 transition-opacity p-2 rounded-full bg-gray-800/80 hover:bg-gray-600 text-white z-10 ${
//                             canGoPrev
//                               ? "opacity-0 group-hover:opacity-100"
//                               : "hidden"
//                           }`}
//                           aria-label="Previous item"
//                         >
//                           <svg
//                             className="w-5 h-5"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M15 19l-7-7 7-7"
//                             />
//                           </svg>
//                         </button>

//                         {/* Next Button (Right) */}
//                         <button
//                           onClick={nextItem}
//                           // Hidden when at end (safeStartIndex === maxStartIndex), visible otherwise on hover
//                           className={`absolute right-0 top-1/2 transform -translate-y-1/2 -mr-3 transition-opacity p-2 rounded-full bg-gray-800/80 hover:bg-gray-600 text-white z-10 ${
//                             canGoNext
//                               ? "opacity-0 group-hover:opacity-100"
//                               : "hidden"
//                           }`}
//                           aria-label="Next item"
//                         >
//                           <svg
//                             className="w-5 h-5"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M9 5l7 7-7 7"
//                             />
//                           </svg>
//                         </button>
//                       </>
//                     )}
//                   </div>

//                   {/* Item Index Indicator (Non-looping) */}
//                   {totalShippingItems > 1 && (
//                     <div className="text-center text-gray-400 text-sm mt-4">
//                       Showing items{" "}
//                       <span className="font-semibold text-white">
//                         {safeStartIndex + 1}
//                         {itemsToDisplay.length === 2
//                           ? ` & ${safeStartIndex + 2}`
//                           : ""}
//                       </span>{" "}
//                       of {totalShippingItems}
//                     </div>
//                   )}
//                   {totalShippingItems === 1 && (
//                     <div className="text-center text-gray-400 text-sm mt-4">
//                       Showing 1 of 1 item
//                     </div>
//                   )}

//                   <button
//                     onClick={() => {
//                       setShowCheckoutSummaryPage(false);
//                       setShowCartPage(true);
//                     }}
//                     className="text-orange-500 text-sm font-semibold hover:text-orange-400 transition-colors mt-4 block"
//                   >
//                     Modify cart
//                   </button>
//                 </div>
//               </div>

//               {/* Payment Method */}
//               <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
//                 <h3 className="font-bold text-xl text-white mb-4 flex justify-between items-center">
//                   3. PAYMENT METHOD
//                   <button className="text-orange-500 text-sm font-semibold hover:text-orange-400 transition-colors">
//                     Change
//                   </button>
//                 </h3>
//                 <div className="flex justify-between items-center border-b border-gray-700 pb-3 mb-3">
//                   <p className="text-white font-semibold">
//                     Pay Now With Bank Card
//                   </p>
//                   <svg
//                     className="w-6 h-6 text-blue-500"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M10 6L6 10l4 4"
//                     />
//                   </svg>
//                 </div>
//                 <p className="text-gray-400 text-sm">
//                   Pay now fast and securely with JumiaPay, Mastercard or Visa
//                 </p>
//               </div>

//               <button
//                 onClick={() => {
//                   setShowCheckoutSummaryPage(false);
//                   setShowCartPage(false);
//                 }}
//                 className="flex items-center text-orange-500 hover:text-orange-400 transition-colors text-sm font-semibold"
//               >
//                 {/* Back Arrow SVG */}
//                 <svg
//                   className="w-4 h-4 mr-1"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M10 19l-7-7m0 0l7-7m-7 7h18"
//                   />
//                 </svg>
//                 Go back & continue shopping
//               </button>
//             </div>

//             {/* Right Column: Order Summary */}
//             <div className="lg:w-80 flex-shrink-0">
//               <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-xl p-6 sticky top-24">
//                 <h3 className="font-bold text-lg text-white mb-4 border-b border-gray-700 pb-3">
//                   Order summary
//                 </h3>

//                 <div className="space-y-3 pb-4 border-b border-gray-700">
//                   <div className="flex justify-between items-center text-gray-300">
//                     <span>Item's total ({cartItemsCount})</span>
//                     <span className="font-medium">${cartTotal.toFixed(2)}</span>
//                   </div>
//                   <div className="flex justify-between items-center text-gray-300">
//                     <span>Delivery fees</span>
//                     <span className="font-medium">
//                       ${deliveryFees.toFixed(2)}
//                     </span>
//                   </div>
//                 </div>

//                 <div className="flex justify-between items-center my-4">
//                   <span className="text-xl font-bold text-white">Total</span>
//                   <span className="text-2xl font-bold text-white">
//                     ${orderTotal.toFixed(2)}
//                   </span>
//                 </div>

//                 <div className="mb-4">
//                   <div className="flex space-x-2">
//                     <input
//                       type="text"
//                       placeholder="Enter code here"
//                       className="flex-grow p-2.5 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500"
//                     />
//                     <button className="px-4 py-2.5 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-500 transition-colors">
//                       APPLY
//                     </button>
//                   </div>
//                 </div>

//                 <button
//                   onClick={() =>
//                     alert("Order Confirmed! (This is a mock checkout)")
//                   }
//                   className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-orange-500/25"
//                 >
//                   Confirm order
//                 </button>

//                 <p className="text-xs text-gray-400 mt-3 text-center">
//                   By proceeding, you are automatically accepting the
//                   <a href="#" className="text-orange-500 hover:underline ml-1">
//                     Terms & Conditions
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // RENDER CART PAGE
//   if (showCartPage) {
//     return (
//       <div className="min-h-screen bg-[#1a2037] p-8">
//         <div className="max-w-7xl mx-auto">
//           <button
//             onClick={() => setShowCartPage(false)}
//             className="flex items-center text-gray-400 hover:text-orange-500 transition-colors mb-6"
//           >
//             {/* Back Arrow SVG */}
//             <svg
//               className="w-5 h-5 mr-2"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M10 19l-7-7m0 0l7-7m-7 7h18"
//               />
//             </svg>
//             <span className="font-semibold">Continue Shopping</span>
//           </button>

//           <div className="flex justify-between items-end mb-8 border-b border-gray-700 pb-4">
//             <h2 className="text-3xl font-bold text-white">
//               Cart ({cartItemsCount}
//               {cartItemsCount === 1 ? "item" : "items"})
//             </h2>
//           </div>

//           <div className="flex flex-col lg:flex-row gap-8">
//             {/* Left Column: Cart Items */}
//             <div className="flex-grow space-y-4">
//               {cart.length === 0 ? (
//                 <div className="bg-gray-800 p-8 rounded-lg text-center">
//                   <h3 className="text-xl font-semibold text-gray-400">
//                     Your cart is empty.
//                   </h3>
//                 </div>
//               ) : (
//                 cart.map((item) => (
//                   <div
//                     key={item.id}
//                     className="flex p-4 mb-2 bg-gray-800 border border-gray-700 rounded-lg shadow-lg"
//                   >
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="w-24 h-24 object-cover rounded-lg flex-shrink-0"
//                     />

//                     <div className="flex-grow ml-4">
//                       <h4 className="font-semibold text-lg text-white mb-1">
//                         {item.name}
//                       </h4>
//                       <p className="text-sm text-gray-400 mb-3">
//                         {item.description.substring(0, 50)}...
//                       </p>

//                       <div className="flex items-center space-x-4">
//                         {/* Remove Button */}
//                         <button
//                           onClick={() => removeFromCart(item.id)}
//                           className="flex items-center text-red-400 hover:text-red-500 text-sm font-medium transition-colors"
//                         >
//                           {/* Trash Icon SVG */}
//                           <svg
//                             className="w-4 h-4 mr-1"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
//                             />
//                           </svg>
//                           Remove
//                         </button>
//                         <p className="text-sm text-green-400">In Stock</p>
//                       </div>
//                     </div>

//                     <div className="flex flex-col items-end justify-between">
//                       <div className="text-xl font-bold text-white mb-2">
//                         ${(item.price * item.quantity).toFixed(2)}
//                       </div>

//                       {/* Quantity Controls */}
//                       <div className="flex items-center space-x-0 bg-gray-700 rounded-lg overflow-hidden">
//                         <button
//                           onClick={() =>
//                             updateQuantity(item.id, item.quantity - 1)
//                           }
//                           className="p-2 hover:bg-gray-600 rounded-l-lg text-gray-300"
//                         >
//                           <svg
//                             className="w-4 h-4"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M20 12H4"
//                             />
//                           </svg>
//                         </button>
//                         <span className="px-3 py-2 text-white text-sm border-l border-r border-gray-600">
//                           {item.quantity}
//                         </span>
//                         <button
//                           onClick={() =>
//                             updateQuantity(item.id, item.quantity + 1)
//                           }
//                           className="p-2 hover:bg-gray-600 rounded-r-lg text-gray-300"
//                         >
//                           <svg
//                             className="w-4 h-4"
//                             fill="none"
//                             stroke="currentColor"
//                             viewBox="0 0 24 24"
//                           >
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               strokeWidth={2}
//                               d="M12 4v16m8-8H4"
//                             />
//                           </svg>
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))
//               )}
//             </div>

//             <div className="lg:w-80 flex-shrink-0">
//               <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-xl p-6 sticky top-24">
//                 <h3 className="font-bold text-lg text-white mb-4 border-b border-gray-700 pb-3">
//                   CART SUMMARY
//                 </h3>

//                 <div className="flex justify-between items-center mb-6">
//                   <span className="text-gray-300">Subtotal</span>
//                   <span className="text-xl font-bold text-white">
//                     ${cartTotal.toFixed(2)}
//                   </span>
//                 </div>

//                 <button
//                   onClick={() => setShowCheckoutSummaryPage(true)}
//                   className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-orange-500/25"
//                 >
//                   Checkout (${cartTotal.toFixed(2)})
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }

//   // RENDER MAIN PAGE
//   return (
//     <div className="min-h-screen bg-[#1a2037]">
//       <header className="bg-[#1a2037] border-b border-gray-700 shadow-lg sticky top-0 z-50">
//         <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             <div className="flex items-center">
//               <h1 className="text-2xl font-bold bg-orange-500 bg-clip-text text-transparent">
//                 ElectroStore
//               </h1>
//             </div>

//             <div className="flex-1 max-w-md mx-8">
//               <div className="relative">
//                 <svg
//                   className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth={2}
//                     d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
//                   />
//                 </svg>
//                 <input
//                   type="text"
//                   placeholder="Search products..."
//                   value={searchTerm}
//                   onChange={(e) => setSearchTerm(e.target.value)}
//                   className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-600 text-white placeholder-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
//                 />
//               </div>
//             </div>

//             {/* START OF NEW NAVBAR ICONS SECTION */}
//             <div className="flex items-center space-x-6">
//               {/* Account Dropdown Section */}
//               <div
//                 className="relative"
//                 onMouseEnter={() => setIsDropdownOpen(true)}
//                 onMouseLeave={() => setIsDropdownOpen(false)}
//               >
//                 <button className="flex items-center space-x-1 text-white hover:text-orange-400 transition-colors focus:outline-none">
//                   <UserCircleIcon className="h-6 w-6" />
//                   <span className="hidden md:inline">Account</span>
//                 </button>

//                 {isDropdownOpen && (
//                   <div
//                     className="absolute right-0 top-full w-48 border border-gray-600 rounded-md shadow-xl py-1"
//                     style={{ backgroundColor: "#2A2F47", zIndex: 60 }} // Added z-index to ensure it is above the sticky header
//                   >
//                     {/* Sign Up Link Styled as a Button */}
//                     <div className="p-2">
//                       <Link
//                         to="/signup"
//                         className="block text-center w-full bg-orange-500 text-white font-bold py-2 px-4 rounded-md hover:bg-orange-600 transition-colors"
//                       >
//                         Sign Up
//                       </Link>
//                     </div>

//                     {/* Dropdown Links with Icons */}
//                     <Link
//                       to="/login"
//                       className="group flex items-center space-x-2 px-4 py-2 text-white hover:text-orange-400 transition-colors rounded-md"
//                       // Inline styles are often used in React for dynamic styling but for Tailwind this is non-standard.
//                       // Leaving them as they were provided for minimal change but note that the hover styles in the original snippet were flawed React inline syntax.
//                       onMouseEnter={(e) =>
//                         (e.currentTarget.style.backgroundColor = "#3A4058")
//                       }
//                       onMouseLeave={(e) =>
//                         (e.currentTarget.style.backgroundColor = "transparent")
//                       }
//                     >
//                       <UserIcon className="h-5 w-5 text-gray-300 group-hover:text-orange-400 transition-colors" />
//                       <span className="group-hover:text-orange-400 transition-colors">
//                         My Account
//                       </span>
//                     </Link>

//                     <Link
//                       to="/orders"
//                       className="group flex items-center space-x-2 px-4 py-2 text-white hover:text-orange-400 transition-colors rounded-md"
//                       onMouseEnter={(e) =>
//                         (e.currentTarget.style.backgroundColor = "#3A4058")
//                       }
//                       onMouseLeave={(e) =>
//                         (e.currentTarget.style.backgroundColor = "transparent")
//                       }
//                     >
//                       <CubeIcon className="h-5 w-5 text-gray-300 group-hover:text-orange-400 transition-colors" />
//                       <span className="group-hover:text-orange-400 transition-colors">
//                         Orders
//                       </span>
//                     </Link>

//                     <button // Changed from Link to button for custom logic
//                       onClick={() => {
//                         setIsDropdownOpen(false); // Close dropdown
//                         setShowWishlistPage(true); // Navigate to Wishlist
//                       }}
//                       className="group flex items-center space-x-2 w-full text-left px-4 py-2 text-white hover:text-orange-400 transition-colors rounded-md"
//                       onMouseEnter={(e) =>
//                         (e.currentTarget.style.backgroundColor = "#3A4058")
//                       }
//                       onMouseLeave={(e) =>
//                         (e.currentTarget.style.backgroundColor = "transparent")
//                       }
//                     >
//                       <HeartIcon className="h-5 w-5 text-gray-300 group-hover:text-orange-400 transition-colors" />
//                       <span className="group-hover:text-orange-400 transition-colors">
//                         Wishlist ({wishlistProducts.length})
//                       </span>
//                     </button>
//                   </div>
//                 )}
//               </div>

//               <button
//                 onClick={() => setShowCartPage(true)}
//                 className="flex items-center space-x-1 text-white hover:text-orange-400 transition-colors"
//               >
//                 <div className="relative">
//                   <ShoppingCartIcon className="h-6 w-6" />
//                   {cartItemsCount > 0 && (
//                     <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
//                       {cartItemsCount}
//                     </span>
//                   )}
//                 </div>
//                 <span className="hidden md:inline">Cart</span>
//               </button>
//             </div>
//             {/* END OF NEW NAVBAR ICONS SECTION */}
//           </div>
//         </div>
//       </header>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Sidebar Filters */}
//           <div className="lg:w-64">
//             <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-1 sticky top-24">
//               <div className="flex items-center justify-between mb-6">
//                 <h2 className="text-lg font-semibold text-white">Filters</h2>
//                 <button
//                   onClick={() => setShowFilters(!showFilters)}
//                   className="lg:hidden p-2 hover:bg-gray-700 rounded-lg text-gray-300"
//                 >
//                   {/* Filter Icon SVG */}
//                   <svg
//                     className="w-5 h-5"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
//                     />
//                   </svg>
//                 </button>
//               </div>

//               <div
//                 className={`space-y-6 ${
//                   showFilters ? "block" : "hidden lg:block"
//                 }`}
//               >
//                 {/* Categories */}
//                 <div>
//                   <h3 className="font-semibold text-white mb-3">Categories</h3>
//                   <div className="space-y-2">
//                     {categories.map((category) => (
//                       <button
//                         key={category.id}
//                         onClick={() => setSelectedCategory(category.id)}
//                         className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
//                           selectedCategory === category.id
//                             ? "bg-orange-500 text-white"
//                             : "text-gray-300 hover:bg-gray-700"
//                         }`}
//                       >
//                         <div className="flex justify-between items-center">
//                           <span>{category.name}</span>
//                           <span className="text-sm">({category.count})</span>
//                         </div>
//                       </button>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Price Range */}
//                 <div>
//                   <h3 className="font-semibold text-white mb-3">Price Range</h3>
//                   <div className="space-y-3">
//                     <div className="flex items-center justify-between">
//                       <span className="text-sm text-gray-300">
//                         ${priceRange[0]}
//                       </span>
//                       <span className="text-sm text-gray-300">
//                         ${priceRange[1]}
//                       </span>
//                     </div>
//                     <input
//                       type="range"
//                       min="0"
//                       max="2000"
//                       value={priceRange[1]}
//                       onChange={(e) =>
//                         setPriceRange([priceRange[0], parseInt(e.target.value)])
//                       }
//                       className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider-orange"
//                       style={{
//                         background: `linear-gradient(to right, #f97316 0%, #f97316 ${
//                           (priceRange[1] / 2000) * 100
//                         }%, #4b5563 ${
//                           (priceRange[1] / 2000) * 100
//                         }%, #4b5563 100%)`,
//                       }}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Main Content (Products) */}
//           <div className="flex-1">
//             {/* Controls */}
//             <div className="flex items-center justify-between mb-6">
//               <div className="flex items-center space-x-4">
//                 <span className="text-gray-300">Browse our products</span>
//               </div>

//               <div className="flex items-center space-x-4">
//                 <div className="flex items-center space-x-2 bg-gray-800 border border-gray-600 rounded-lg shadow p-1">
//                   <button
//                     onClick={() => setViewMode("grid")}
//                     className={`p-2 rounded transition-colors ${
//                       viewMode === "grid"
//                         ? "bg-orange-500 text-white"
//                         : "text-gray-300 hover:bg-gray-700"
//                     }`}
//                   >
//                     {/* Grid Icon SVG */}
//                     <svg
//                       className="w-5 h-5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
//                       />
//                     </svg>
//                   </button>
//                   <button
//                     onClick={() => setViewMode("list")}
//                     className={`p-2 rounded transition-colors ${
//                       viewMode === "list"
//                         ? "bg-orange-500 text-white"
//                         : "text-gray-300 hover:bg-gray-700"
//                     }`}
//                   >
//                     {/* List Icon SVG */}
//                     <svg
//                       className="w-5 h-5"
//                       fill="none"
//                       stroke="currentColor"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M4 6h16M4 10h16M4 14h16M4 18h16"
//                       />
//                     </svg>
//                   </button>
//                 </div>
//               </div>
//             </div>

//             {/* Products Grid/List */}
//             {filteredProducts.length === 0 ? (
//               <div className="text-center py-12">
//                 <div className="text-6xl mb-4">🔍</div>
//                 <h3 className="text-xl font-semibold text-white mb-2">
//                   No products found
//                 </h3>
//                 <p className="text-gray-400">
//                   Try adjusting your search or filters
//                 </p>
//               </div>
//             ) : (
//               <div
//                 className={
//                   viewMode === "grid"
//                     ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-1"
//                     : "space-y-6"
//                 }
//               >
//                 {filteredProducts.map((product) =>
//                   viewMode === "grid" ? (
//                     <ProductCard key={product.id} product={product} />
//                   ) : (
//                     <ListProductCard key={product.id} product={product} />
//                   )
//                 )}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Electronics;


import React, { useState } from "react";
const Link = ({ to, children, ...props }) => (
  <a href={to} {...props}>
    {children}
  </a>
);
const UserCircleIcon = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 3a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
const UserIcon = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);
const CubeIcon = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10m0-10l-8 4v10"
    />
  </svg>
);
const HeartIcon = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
    />
  </svg>
);

const ShoppingCartIcon = (props) => (
  <svg {...props} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.5 5m2.5-5h-2m2.5 5h2m-2.5 0l2.5-5m2.5 5h2M17 17a2 2 0 102 2 2 2 0 00-2-2zM9 17a2 2 0 102 2 2 2 0 00-2-2z"
    />
  </svg>
);

const Electronics = () => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [showFilters, setShowFilters] = useState(false);
  // State that controls whether to display the Cart page or the main shop page
  const [showCartPage, setShowCartPage] = useState(false);
  const [showWishlistPage, setShowWishlistPage] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showCheckoutSummaryPage, setShowCheckoutSummaryPage] = useState(false);
  const [startDisplayIndex, setStartDisplayIndex] = useState(0);

  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro Max",
      price: 1199,
      originalPrice: 1299,
      image:
        "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",
      rating: 4.8,
      reviews: 1250,
      category: "phones",
      description:
        "6.7-inch Super Retina XDR display with ProMotion technology",
      inStock: true,
      discount: 8,
    },
    {
      id: 2,
      name: 'MacBook Pro 16"',
      price: 2499,
      originalPrice: 2699,
      image:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
      rating: 4.9,
      reviews: 890,
      category: "laptops",
      description: "M3 Pro chip, 18GB RAM, 512GB SSD",
      inStock: true,
      discount: 7,
    },
    {
      id: 3,
      name: "Sony WH-1000XM5",
      price: 349,
      originalPrice: 399,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
      rating: 4.7,
      reviews: 2340,
      category: "headphones",
      description: "Industry-leading noise canceling headphones",
      inStock: true,
      discount: 13,
    },
    {
      id: 4,
      name: 'Samsung 55" OLED TV',
      price: 1299,
      originalPrice: 1499,
      image:
        "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400",
      rating: 4.6,
      reviews: 456,
      category: "tv",
      description: "4K Ultra HD Smart TV with HDR",
      inStock: false,
      discount: 13,
    },
    {
      id: 5,
      name: 'iPad Pro 12.9"',
      price: 1099,
      originalPrice: 1199,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400",
      rating: 4.8,
      reviews: 734,
      category: "tablets",
      description: "M2 chip, 256GB, Wi-Fi + Cellular",
      inStock: true,
      discount: 8,
    },
    {
      id: 6,
      name: "Gaming Mechanical Keyboard",
      price: 159,
      originalPrice: 199,
      image:
        "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400",
      rating: 4.5,
      reviews: 1890,
      category: "accessories",
      description: "RGB Backlit, Cherry MX Blue switches",
      inStock: true,
      discount: 20,
    },
  ];

  const categories = [
    { id: "all", name: "All Products", count: products.length },
    {
      id: "phones",
      name: "Smartphones",
      count: products.filter((p) => p.category === "phones").length,
    },
    {
      id: "laptops",
      name: "Laptops",
      count: products.filter((p) => p.category === "laptops").length,
    },
    {
      id: "headphones",
      name: "Headphones",
      count: products.filter((p) => p.category === "headphones").length,
    },
    {
      id: "tv",
      name: "TVs",
      count: products.filter((p) => p.category === "tv").length,
    },
    {
      id: "tablets",
      name: "Tablets",
      count: products.filter((p) => p.category === "tablets").length,
    },
    {
      id: "accessories",
      name: "Accessories",
      count: products.filter((p) => p.category === "accessories").length,
    },
  ];

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);
    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      setCart(
        cart.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const toggleFavorite = (productId) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter((id) => id !== productId));
    } else {
      setFavorites([...favorites, productId]);
    }
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || product.category === selectedCategory;
    const matchesPrice =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const cartItemsCount = cart.reduce((total, item) => total + item.quantity, 0);

  // Hardcoded placeholders for demonstration based on the image
  const deliveryFees = 6.01; // $6.01
  const orderTotal = cartTotal + deliveryFees;

  const ProductCard = ({ product }) => (
    <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg hover:shadow-2xl hover:border-orange-500/50 transition-all duration-300 group overflow-hidden flex flex-col">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.discount > 0 && (
          <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
            -{product.discount}%
          </div>
        )}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <span className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold">
              Out of Stock
            </span>
          </div>
        )}
        <button
          onClick={() => toggleFavorite(product.id)}
          className="absolute top-4 right-4 p-2 rounded-full bg-gray-800/80 backdrop-blur-sm shadow-lg hover:scale-110 transition-transform"
        >
          {/* Heart Icon SVG */}
          <svg
            className={`w-5 h-5 ${
              favorites.includes(product.id)
                ? "fill-red-500 text-red-500"
                : "text-gray-400"
            }`}
            fill={favorites.includes(product.id) ? "currentColor" : "none"}
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>

      <div className="p-4 flex flex-col flex-grow">
        <h3 className="font-bold text-base text-white mb-2 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-gray-400 text-sm mb-2 line-clamp-1">
          {product.description}
        </p>

        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`w-3 h-3 ${
                  i < Math.floor(product.rating)
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            ))}
            <span className="ml-2 text-xs text-gray-400">
              ({product.reviews})
            </span>
          </div>
        </div>

        <div className="flex items-center justify-between mb-3 mt-auto">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-white">
              ${product.price}
            </span>
            {product.originalPrice > product.price && (
              <span className="text-sm text-gray-400 line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
        </div>

        <button
          onClick={() => addToCart(product)}
          disabled={!product.inStock}
          className={`w-full py-2.5 rounded-lg font-semibold transition-all duration-200 ${
            product.inStock
              ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
              : "bg-gray-600 text-gray-400 cursor-not-allowed"
          }`}
        >
          {product.inStock ? "Add to Cart" : "Out of Stock"}
        </button>
      </div>
    </div>
  );

  const ListProductCard = ({ product }) => (
    <div className="bg-gray-800 mb-2 border border-gray-700 rounded-lg shadow-lg hover:shadow-xl hover:border-orange-500/50 transition-all duration-300 overflow-hidden">
      <div className="flex">
        <div className="relative w-35 h-35 mt-10 ml-5">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover rounded-lg"
          />
          {product.discount > 0 && (
            <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
              -{product.discount}%
            </div>
          )}
        </div>

        <div className="flex-1 p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="font-bold text-xl text-white mb-2">
                {product.name}
              </h3>
              <p className="text-gray-400 mb-3">{product.description}</p>

              <div className="flex items-center mb-3">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating)
                          ? "fill-yellow-400 text-yellow-400"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm text-gray-400">
                    ({product.reviews})
                  </span>
                </div>
              </div>
            </div>

            <button
              onClick={() => toggleFavorite(product.id)}
              className="p-2 rounded-full hover:bg-gray-700 transition-colors"
            >
              {/* Heart Icon SVG */}
              <svg
                className={`w-6 h-6 ${
                  favorites.includes(product.id)
                    ? "fill-red-500 text-red-500"
                    : "text-gray-400"
                }`}
                fill={favorites.includes(product.id) ? "currentColor" : "none"}
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                />
              </svg>
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <span className="text-3xl font-bold text-white">
                ${product.price}
              </span>
              {product.originalPrice > product.price && (
                <span className="text-xl text-gray-400 line-through">
                  ${product.originalPrice}
                </span>
              )}
            </div>

            <button
              onClick={() => addToCart(product)}
              disabled={!product.inStock}
              className={`px-8 py-3 rounded-xl font-semibold transition-all duration-200 ${
                product.inStock
                  ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white transform hover:scale-105 shadow-lg hover:shadow-orange-500/25"
                  : "bg-gray-600 text-gray-400 cursor-not-allowed"
              }`}
            >
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Filter products for the wishlist
  const wishlistProducts = products.filter((product) =>
    favorites.includes(product.id)
  );

  // RENDER WISHLIST PAGE
  if (showWishlistPage) {
    return (
      <div className="min-h-screen bg-[#1a2037] p-8">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => setShowWishlistPage(false)}
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
          </button>

          <div className="flex justify-between items-end mb-8 border-b border-gray-700 pb-4">
            <h2 className="text-3xl font-bold text-white">
              My Wishlist ({wishlistProducts.length}
              {wishlistProducts.length === 1 ? "item" : "items"})
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
  }

  // RENDER CHECKOUT SUMMARY PAGE
  if (showCheckoutSummaryPage) {
    const totalShippingItems = cart.length;
    // Max index for a 2-item display. If items=6, max=4 (to show 4 & 5). If items=1, max=0.
    const maxStartIndex = totalShippingItems > 1 ? totalShippingItems - 2 : 0;

    // Safety clamp the index, ensuring it's within [0, maxStartIndex]
    const safeStartIndex = Math.min(
      Math.max(startDisplayIndex, 0),
      maxStartIndex
    );

    // Non-looping Navigation functions
    const nextItem = () => {
      // Move one step forward, but never past the maxStartIndex
      setStartDisplayIndex((prevIndex) =>
        Math.min(prevIndex + 1, maxStartIndex)
      );
    };

    const prevItem = () => {
      // Move one step back, but never below 0
      setStartDisplayIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    // Visibility checks for non-looping behavior:
    // Show Prev only if the first item is not index 0
    const canGoPrev = safeStartIndex > 0;
    // Show Next only if the first item is not the maximum possible starting index
    const canGoNext = safeStartIndex < maxStartIndex;

    // Logic to select the items to display (max 2 items)
    const itemsToDisplay = [];
    if (totalShippingItems > 0) {
      // First item is always the safe start index
      itemsToDisplay.push(cart[safeStartIndex]);

      // Second item, only if available (i.e., less than total items)
      if (safeStartIndex + 1 < totalShippingItems) {
        itemsToDisplay.push(cart[safeStartIndex + 1]);
      }
    }

    return (
      <div className="min-h-screen bg-[#1a2037] p-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-3xl font-bold text-white flex items-center">
              <span className="text-orange-500 mr-2">JUMIA</span>
              <span className="text-white">|</span>
              <span className="ml-2">Place your order</span>
            </h1>
            <div className="flex items-center space-x-4 text-sm">
              <button className="text-gray-400 hover:text-orange-500 flex items-center">
                <svg
                  className="w-5 h-5 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.505A9.764 9.764 0 015 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Need Help? Contact us
              </button>
              <span className="text-gray-500">|</span>
              <span className="text-gray-400 flex items-center">
                <svg
                  className="w-5 h-5 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
                Easy Returns
              </span>
              <span className="text-gray-500">|</span>
              <span className="text-gray-400 flex items-center">
                <svg
                  className="w-5 h-5 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                Secure Payments
              </span>
            </div>
          </div>

          <div className="flex gap-8">
            {/* Left Column: Details */}
            <div className="flex-grow space-y-6">
              {/* Customer Address */}
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h3 className="font-bold text-xl text-white mb-4 flex justify-between items-center">
                  1. CUSTOMER ADDRESS
                  <button className="text-orange-500 text-sm font-semibold hover:text-orange-400 transition-colors">
                    Change
                  </button>
                </h3>
                <p className="text-gray-300">Dennis Ngui</p>
                <p className="text-gray-400 text-sm mt-1">
                  Nairobi | Nairobi - CBD - Luthuli/Ailya Central R. Ngai's |
                  +254 7395073063
                </p>
              </div>

              {/* Delivery Details */}
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h3 className="font-bold text-xl text-white mb-4 flex justify-between items-center">
                  2. DELIVERY DETAILS
                  <button className="text-orange-500 text-sm font-semibold hover:text-orange-400 transition-colors">
                    Change
                  </button>
                </h3>
                <div className="border-b border-gray-700 pb-4 mb-4">
                  <p className="text-gray-300 font-medium flex justify-between items-center">
                    Pick-up Station
                    <span className="text-sm text-gray-400">
                      Delivery between 08 October and 09 October
                    </span>
                  </p>
                  <div className="ml-4 mt-2 p-3 bg-gray-700/50 rounded-lg border border-gray-600">
                    <p className="text-white font-semibold">
                      Skyevshop Nyeri Station
                    </p>
                    <p className="text-gray-400 text-sm">
                      Skyevshop Nyeri Station - Hamwa building Gakere rd
                      Opposite Naivas Smkt, Next to haso petrol station | Nyeri
                      - Nyeri Town
                    </p>
                  </div>
                </div>

                {/* Shipment (UPDATED SECTION for 2 items and non-looping scroll) */}
                <div className="space-y-4">
                  <p className="text-gray-300 font-medium">
                    Shipment 1/1{" "}
                    <span className="text-xs text-orange-400 ml-2">
                      Fulfilled by Jumia
                    </span>
                  </p>
                  <p className="text-gray-400 text-sm mb-4">
                    Pick-up Station: Delivery between 08 October and 09 October
                  </p>

                  {/* Horizontal Two-Item Display with Navigation */}
                  <div className="relative group p-4 border border-gray-700 rounded-lg">
                    <div
                      className={`flex ${
                        itemsToDisplay.length > 1
                          ? "space-x-4"
                          : "justify-center"
                      }`}
                    >
                      {itemsToDisplay.map((item, index) => (
                        // Item Container (Increased Height)
                        <div key={item.id} className="flex-1">
                          <div className="flex items-start p-6 bg-gray-700/50 rounded-lg h-full">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-20 h-20 object-cover rounded-md border border-gray-600 flex-shrink-0" // Increased size
                            />
                            <div className="ml-4 flex-grow">
                              <p className="text-base font-semibold text-white line-clamp-2">
                                {item.name}
                              </p>
                              <p className="text-sm text-gray-400 mt-1">
                                Qty: {item.quantity} | ${item.price} each
                              </p>
                              <div className="flex items-center mt-2">
                                <span className="text-orange-400 text-sm font-semibold">
                                  JUMIA EXPRESS
                                </span>
                                <span className="ml-3 text-lg font-bold text-white">
                                  ${(item.price * item.quantity).toFixed(2)}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Navigation Arrows on Hover (Only show if more than two items exist) */}
                    {totalShippingItems > 2 && (
                      <>
                        {/* Previous Button (Left) */}
                        <button
                          onClick={prevItem}
                          // Hidden when at start (safeStartIndex === 0), visible otherwise on hover
                          className={`absolute left-0 top-1/2 transform -translate-y-1/2 -ml-3 transition-opacity p-2 rounded-full bg-gray-800/80 hover:bg-gray-600 text-white z-10 ${
                            canGoPrev
                              ? "opacity-0 group-hover:opacity-100"
                              : "hidden"
                          }`}
                          aria-label="Previous item"
                        >
                          <svg
                            className="w-5 h-5"
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

                        {/* Next Button (Right) */}
                        <button
                          onClick={nextItem}
                          // Hidden when at end (safeStartIndex === maxStartIndex), visible otherwise on hover
                          className={`absolute right-0 top-1/2 transform -translate-y-1/2 -mr-3 transition-opacity p-2 rounded-full bg-gray-800/80 hover:bg-gray-600 text-white z-10 ${
                            canGoNext
                              ? "opacity-0 group-hover:opacity-100"
                              : "hidden"
                          }`}
                          aria-label="Next item"
                        >
                          <svg
                            className="w-5 h-5"
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
                  </div>

                  {/* Item Index Indicator (Non-looping) */}
                  {totalShippingItems > 1 && (
                    <div className="text-center text-gray-400 text-sm mt-4">
                      Showing items{" "}
                      <span className="font-semibold text-white">
                        {safeStartIndex + 1}
                        {itemsToDisplay.length === 2
                          ? ` & ${safeStartIndex + 2}`
                          : ""}
                      </span>{" "}
                      of {totalShippingItems}
                    </div>
                  )}
                  {totalShippingItems === 1 && (
                    <div className="text-center text-gray-400 text-sm mt-4">
                      Showing 1 of 1 item
                    </div>
                  )}

                  <button
                    onClick={() => {
                      setShowCheckoutSummaryPage(false);
                      setShowCartPage(true);
                    }}
                    className="text-orange-500 text-sm font-semibold hover:text-orange-400 transition-colors mt-4 block"
                  >
                    Modify cart
                  </button>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-gray-800 border border-gray-700 rounded-lg p-6">
                <h3 className="font-bold text-xl text-white mb-4 flex justify-between items-center">
                  3. PAYMENT METHOD
                  <button className="text-orange-500 text-sm font-semibold hover:text-orange-400 transition-colors">
                    Change
                  </button>
                </h3>
                <div className="flex justify-between items-center border-b border-gray-700 pb-3 mb-3">
                  <p className="text-white font-semibold">
                    Pay Now With Bank Card
                  </p>
                  <svg
                    className="w-6 h-6 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6L6 10l4 4"
                    />
                  </svg>
                </div>
                <p className="text-gray-400 text-sm">
                  Pay now fast and securely with JumiaPay, Mastercard or Visa
                </p>
              </div>

              <button
                onClick={() => {
                  setShowCheckoutSummaryPage(false);
                  setShowCartPage(false);
                }}
                className="flex items-center text-orange-500 hover:text-orange-400 transition-colors text-sm font-semibold"
              >
                {/* Back Arrow SVG */}
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
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Go back & continue shopping
              </button>
            </div>

            {/* Right Column: Order Summary */}
            <div className="lg:w-80 flex-shrink-0">
              <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-xl p-6 sticky top-24">
                <h3 className="font-bold text-lg text-white mb-4 border-b border-gray-700 pb-3">
                  Order summary
                </h3>

                <div className="space-y-3 pb-4 border-b border-gray-700">
                  <div className="flex justify-between items-center text-gray-300">
                    <span>Item's total ({cartItemsCount})</span>
                    <span className="font-medium">${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between items-center text-gray-300">
                    <span>Delivery fees</span>
                    <span className="font-medium">
                      ${deliveryFees.toFixed(2)}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center my-4">
                  <span className="text-xl font-bold text-white">Total</span>
                  <span className="text-2xl font-bold text-white">
                    ${orderTotal.toFixed(2)}
                  </span>
                </div>

                <div className="mb-4">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      placeholder="Enter code here"
                      className="flex-grow p-2.5 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    />
                    <button className="px-4 py-2.5 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-500 transition-colors">
                      APPLY
                    </button>
                  </div>
                </div>

                <button
                  onClick={() =>
                    alert("Order Confirmed! (This is a mock checkout)")
                  }
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg hover:shadow-orange-500/25"
                >
                  Confirm order
                </button>

                <p className="text-xs text-gray-400 mt-3 text-center">
                  By proceeding, you are automatically accepting the
                  <a href="#" className="text-orange-500 hover:underline ml-1">
                    Terms & Conditions
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // RENDER CART PAGE (The dedicated page you requested)
  if (showCartPage) {
    return (
      <div className="min-h-screen bg-[#1a2037] p-8">
        <div className="max-w-7xl mx-auto">
          <button
            // Navigates back to the main shopping page
            onClick={() => setShowCartPage(false)}
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
          </button>

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

                <button
                  // Navigates to the Checkout Summary page
                  onClick={() => setShowCheckoutSummaryPage(true)}
                  disabled={cart.length === 0}
                  className={`w-full py-3 rounded-xl font-semibold transition-all duration-200 shadow-lg ${
                    cart.length > 0
                      ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white hover:shadow-orange-500/25"
                      : "bg-gray-600 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  Checkout (${cartTotal.toFixed(2)})
                </button>

                <button
                  onClick={() => setShowCartPage(false)}
                  className="w-full text-orange-500 hover:text-orange-400 mt-4 text-sm font-semibold transition-colors py-2 border border-orange-500 rounded-xl"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // RENDER MAIN PAGE
  return (
    <div className="min-h-screen bg-[#1a2037]">
      <header className="bg-[#1a2037] border-b border-gray-700 shadow-lg sticky top-0 z-50">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold bg-orange-500 bg-clip-text text-transparent">
                ElectroStore
              </h1>
            </div>

            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
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
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-600 text-white placeholder-gray-400 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                />
              </div>
            </div>

            {/* NAVBAR ICONS SECTION */}
            <div className="flex items-center space-x-6">
              {/* Account Dropdown Section */}
              <div
                className="relative"
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button className="flex items-center space-x-1 text-white hover:text-orange-400 transition-colors focus:outline-none">
                  <UserCircleIcon className="h-6 w-6" />
                  <span className="hidden md:inline">Account</span>
                </button>

                {isDropdownOpen && (
                  <div
                    className="absolute right-0 top-full w-48 border border-gray-600 rounded-md shadow-xl py-1"
                    style={{ backgroundColor: "#2A2F47", zIndex: 60 }}
                  >
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
                      className="group flex items-center space-x-2 px-4 py-2 text-white hover:text-orange-400 transition-colors rounded-md"
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "#3A4058")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "transparent")
                      }
                    >
                      <UserIcon className="h-5 w-5 text-gray-300 group-hover:text-orange-400 transition-colors" />
                      <span className="group-hover:text-orange-400 transition-colors">
                        My Account
                      </span>
                    </Link>

                    <Link
                      to="/orders"
                      className="group flex items-center space-x-2 px-4 py-2 text-white hover:text-orange-400 transition-colors rounded-md"
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "#3A4058")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "transparent")
                      }
                    >
                      <CubeIcon className="h-5 w-5 text-gray-300 group-hover:text-orange-400 transition-colors" />
                      <span className="group-hover:text-orange-400 transition-colors">
                        Orders
                      </span>
                    </Link>

                    <button // Changed from Link to button for custom logic
                      onClick={() => {
                        setIsDropdownOpen(false); // Close dropdown
                        setShowWishlistPage(true); // Navigate to Wishlist
                      }}
                      className="group flex items-center space-x-2 w-full text-left px-4 py-2 text-white hover:text-orange-400 transition-colors rounded-md"
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.backgroundColor = "#3A4058")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.backgroundColor = "transparent")
                      }
                    >
                      <HeartIcon className="h-5 w-5 text-gray-300 group-hover:text-orange-400 transition-colors" />
                      <span className="group-hover:text-orange-400 transition-colors">
                        Wishlist ({wishlistProducts.length})
                      </span>
                    </button>
                  </div>
                )}
              </div>

              {/* CART NAVIGATION BUTTON (This handles the click to the cart page) */}
              <button
                onClick={() => setShowCartPage(true)}
                className="flex items-center space-x-1 text-white hover:text-orange-400 transition-colors"
              >
                <div className="relative">
                  <ShoppingCartIcon className="h-6 w-6" />
                  {cartItemsCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {cartItemsCount}
                    </span>
                  )}
                </div>
                <span className="hidden md:inline">Cart</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className="lg:w-64">
            <div className="bg-gray-800 border border-gray-700 rounded-lg shadow-lg p-1 sticky top-24">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-white">Filters</h2>
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className="lg:hidden p-2 hover:bg-gray-700 rounded-lg text-gray-300"
                >
                  {/* Filter Icon SVG */}
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                  </svg>
                </button>
              </div>

              <div
                className={`space-y-6 ${
                  showFilters ? "block" : "hidden lg:block"
                }`}
              >
                {/* Categories */}
                <div>
                  <h3 className="font-semibold text-white mb-3">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                          selectedCategory === category.id
                            ? "bg-orange-500 text-white"
                            : "text-gray-300 hover:bg-gray-700"
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <span>{category.name}</span>
                          <span className="text-sm">({category.count})</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div>
                  <h3 className="font-semibold text-white mb-3">Price Range</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-300">
                        ${priceRange[0]}
                      </span>
                      <span className="text-sm text-gray-300">
                        ${priceRange[1]}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="2000"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([priceRange[0], parseInt(e.target.value)])
                      }
                      className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer slider-orange"
                      style={{
                        background: `linear-gradient(to right, #f97316 0%, #f97316 ${
                          (priceRange[1] / 2000) * 100
                        }%, #4b5563 ${
                          (priceRange[1] / 2000) * 100
                        }%, #4b5563 100%)`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content (Products) */}
          <div className="flex-1">
            {/* Controls */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <span className="text-gray-300">Browse our products</span>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 bg-gray-800 border border-gray-600 rounded-lg shadow p-1">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded transition-colors ${
                      viewMode === "grid"
                        ? "bg-orange-500 text-white"
                        : "text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    {/* Grid Icon SVG */}
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded transition-colors ${
                      viewMode === "list"
                        ? "bg-orange-500 text-white"
                        : "text-gray-300 hover:bg-gray-700"
                    }`}
                  >
                    {/* List Icon SVG */}
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 10h16M4 14h16M4 18h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid/List */}
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  No products found
                </h3>
                <p className="text-gray-400">
                  Try adjusting your search or filters
                </p>
              </div>
            ) : (
              <div
                className={
                  viewMode === "grid"
                    ? "grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-1"
                    : "space-y-6"
                }
              >
                {filteredProducts.map((product) =>
                  viewMode === "grid" ? (
                    <ProductCard key={product.id} product={product} />
                  ) : (
                    <ListProductCard key={product.id} product={product} />
                  )
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Electronics;
