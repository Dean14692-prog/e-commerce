

import React, { createContext, useState, useMemo, useContext } from "react";
// NOTE: Link is removed from here. It should be imported from 'react-router-dom' in the components that use it (Electronics.jsx, CartPage.jsx, etc.).

// Initializing the Context
const ElectronicsContext = createContext();

const initialUserAddress = {
  fullName: "Dennis Ngui",
  addressSummary:
    "Nairobi | CBD - Luthuli/Afya Centre/ R. Ngala | +254 796073063",

  // Detailed Data for Editing
  firstName: "Dennis",
  lastName: "Ngui",
  phone: "796073063",
  additionalPhone: "796073063",
  address: "Nairobi",
  additionalInfo: "",
  region: "Nairobi",
  city: "CBD - Luthuli/Afya Centre/ R. Ngala",
};

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

// Grouping components for easier export/import
export const Components = {
  UserCircleIcon,
  UserIcon,
  CubeIcon,
  HeartIcon,
  ShoppingCartIcon,
  // Note: ProductCard and ListProductCard are defined below and exported separately
};

// ... [The rest of the initialProducts, deliveryFees, and context setup remains the same]
const initialProducts = [
  {
    id: 1,
    name: "iPhone 15 Pro Max",
    price: 1199,
    originalPrice: 1299,
    image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400",
    rating: 4.8,
    reviews: 1250,
    category: "phones",
    description: "6.7-inch Super Retina XDR display with ProMotion technology",
    inStock: true,
    discount: 8,
  },
  {
    id: 2,
    name: 'MacBook Pro 16"',
    price: 2499,
    originalPrice: 2699,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400",
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
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
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
    image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=400",
    rating: 4.6,
    reviews: 456,
    category: "tv",
    inStock: false,
    description: "4K Ultra HD Smart TV with HDR",
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
    image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=400",
    rating: 4.5,
    reviews: 1890,
    category: "accessories",
    description: "RGB Backlit, Cherry MX Blue switches",
    inStock: true,
    discount: 20,
  },
];
const deliveryFees = 6.01;

// ----------------------------------------------------------------------
// CONTEXT PROVIDER
// ----------------------------------------------------------------------

export const ElectronicsProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [showFilters, setShowFilters] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // NEW STATE for customer details
  const [userAddress, setUserAddress] = useState(initialUserAddress);

  const products = initialProducts;

  const categories = useMemo(() => {
    return [
      { id: "all", name: "All Products", count: products.length },
      ...[
        "phones",
        "laptops",
        "headphones",
        "tv",
        "tablets",
        "accessories",
      ].map((catId) => ({
        id: catId,
        name: catId.charAt(0).toUpperCase() + catId.slice(1),
        count: products.filter((p) => p.category === catId).length,
      })),
    ];
  }, [products]);

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

  const wishlistProducts = products.filter((product) =>
    favorites.includes(product.id)
  );

  const orderTotal = cartTotal + deliveryFees;

  const contextValue = {
    // Data
    products,
    cart,
    favorites,
    viewMode,
    searchTerm,
    selectedCategory,
    priceRange,
    showFilters,
    isDropdownOpen,
    categories,
    filteredProducts,
    cartTotal,
    cartItemsCount,
    wishlistProducts,
    deliveryFees,
    orderTotal,
    userAddress, // <-- Added
    // Functions
    setCart,
    setFavorites,
    setViewMode,
    setSearchTerm,
    setSelectedCategory,
    setPriceRange,
    setShowFilters,
    setIsDropdownOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleFavorite,
    setUserAddress, // <-- Added
    // Components (now included in contextValue for useElectronics hook)
    ...Components,
  };

  return (
    <ElectronicsContext.Provider value={contextValue}>
      {children}
    </ElectronicsContext.Provider>
  );
};

// Hook for easy context access
export const useElectronics = () => useContext(ElectronicsContext);

// ----------------------------------------------------------------------
// COMPONENT CARDS (Exported Separately)
// ----------------------------------------------------------------------

export const ProductCard = ({ product }) => {
  const { addToCart, toggleFavorite, favorites } = useElectronics();

  return (
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
};

export const ListProductCard = ({ product }) => {
  const { addToCart, toggleFavorite, favorites } = useElectronics();
  return (
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
};