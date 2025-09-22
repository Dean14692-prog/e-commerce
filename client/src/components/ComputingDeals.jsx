import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const products = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw2dAVNmBhqVvNPAs7LJHnumSH3pHdoWP0bg&s",
    name: "Starlink Standard Kit: Hi...",
    currentPrice: "KSh 45,000",
    originalPrice: "KSh 60,000",
    discount: "-36%",
  },
  {
    image: "https://picsum.photos/seed/product2/200/200",
    name: "GUEETON 2.4G Bluetooth...",
    currentPrice: "KSh 380",
    originalPrice: "KSh 590",
    discount: "-36%",
  },
  {
    image: "https://picsum.photos/seed/product3/200/200",
    name: "GUEETON 128GB Metal...",
    currentPrice: "KSh 557",
    originalPrice: "KSh 929",
    discount: "-40%",
  },
  {
    image: "https://picsum.photos/seed/product4/200/200",
    name: "HP 8GB RAM, 500GB H...",
    currentPrice: "KSh 17,999",
    originalPrice: "KSh 25,000",
    discount: "-28%",
  },
  {
    image: "https://picsum.photos/seed/product5/200/200",
    name: "Lenovo Chromebook - 4...",
    currentPrice: "KSh 6,300",
    originalPrice: "KSh 19,000",
    discount: "-67%",
  },
  {
    image: "https://picsum.photos/seed/product6/200/200",
    name: "GUEETON Ultra-thin Wir...",
    currentPrice: "KSh 378",
    originalPrice: "KSh 1,506",
    discount: "-76%",
  },
  {
    image: "https://picsum.photos/seed/product7/200/200",
    name: "Another Computing Deal",
    currentPrice: "KSh 1,200",
    originalPrice: "KSh 2,000",
    discount: "-40%",
  },
  {
    image: "https://picsum.photos/seed/product8/200/200",
    name: "Mechanical Keyboard RGB",
    currentPrice: "KSh 5,000",
    originalPrice: "KSh 8,000",
    discount: "-37.5%",
  },
];

const ComputingDeals = () => {
  const scrollContainerRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft } = scrollContainerRef.current;
      const cardWidth = 200 + 16;
      const scrollAmount =
        direction === "left" ? -cardWidth * 2 : cardWidth * 2;
      scrollContainerRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleCardClick = (product) => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedProduct(null);
  };

  return (
    <div className="ml-11 mr-11 p-4 bg-transparent overflow-x-hidden">
      <div className="max-w-7xl mx-auto rounded-lg overflow-hidden">
        {/* Header */}
        <div
          className="flex justify-between items-center px-4 py-3 text-white"
          style={{ backgroundColor: "#f65512" }}
        >
          <h2 className="text-xl font-bold">Kenya @ 2025 | Computing Deals</h2>
          <a href="#" className="flex items-center text-sm">
            See All <FaChevronRight className="ml-1" />
          </a>
        </div>

        {/* Products */}
        <div className="relative bg-white">
          <div
            ref={scrollContainerRef}
            className="flex py-4 space-x-4 px-16 overflow-x-scroll scrollbar-hide"
          >
            {products.map((product, index) => (
              <div
                key={index}
                className="group flex-shrink-0 w-48 bg-white rounded-md transition duration-300 ease-in-out hover:shadow-lg cursor-pointer"
                onClick={() => handleCardClick(product)}
              >
                <div className="relative h-80 rounded-md overflow-hidden">
                  <div className="absolute top-2 left-2 bg-white text-black text-xs font-bold px-2 py-1 rounded z-10">
                    {product.discount}
                  </div>
                  <div className="h-64 bg-gray-50">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="py-2 px-2 text-left">
                    <h3 className="text-xs font-medium text-gray-800 truncate group-hover:text-[#1A2037] transition duration-300">
                      {product.name}
                    </h3>
                    <div className="flex flex-col items-start">
                      <p className="text-sm font-bold text-gray-900 group-hover:text-[#1A2037] transition duration-300">
                        {product.currentPrice}
                      </p>
                      <p className="text-xs text-gray-500 line-through group-hover:text-[#1A2037] transition duration-300">
                        {product.originalPrice}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll buttons */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md z-10 ml-2"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md z-10 mr-2"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Modal. */}
      {showModal && selectedProduct && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50 overflow-y-auto">
          <div className="bg-white rounded-lg max-w-7xl w-full mx-4 my-8 relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl"
            >
              &times;
            </button>

            {/* Navigation Links */}
            <div className="p-6 bg-gray-100 border-b border-gray-200">
              <nav className="text-sm flex items-center space-x-1">
                <a href="#" className="text-blue-600 hover:underline">
                  Home
                </a>
                <span className="text-gray-400">/</span>
                <a href="#" className="text-blue-600 hover:underline">
                  Grocery
                </a>
                <span className="text-gray-400">/</span>
                <a href="#" className="text-blue-600 hover:underline">
                  Food Cupboard
                </a>
                <span className="text-gray-400">/</span>
                <a href="#" className="text-blue-600 hover:underline">
                  Sugar & Flour
                </a>
                <span className="text-gray-400">/</span>
                <a href="#" className="text-blue-600 hover:underline">
                  Maize - Corn Flour
                </a>
                <span className="text-gray-400">/</span>
                <a href="#" className="text-blue-600 hover:underline">
                  Single Pack Maize - Corn Flour
                </a>
                <span className="text-gray-400">/</span>
                <span className="text-gray-500 truncate">
                  {selectedProduct.name}
                </span>
              </nav>
            </div>

            <div className="flex">
              {/* Left Column - Product Image and Thumbnails */}
              <div className="w-1/3 p-6 border-r border-gray-200">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-auto object-contain rounded-lg"
                />
                <div className="flex justify-center mt-4 space-x-2">
                  <img
                    src={selectedProduct.image}
                    alt="thumbnail"
                    className="w-16 h-16 object-cover rounded cursor-pointer border-2 border-orange-500"
                  />
                  <img
                    src="https://picsum.photos/seed/thumb2/64/64"
                    alt="thumbnail"
                    className="w-16 h-16 object-cover rounded cursor-pointer"
                  />
                  <img
                    src="https://picsum.photos/seed/thumb3/64/64"
                    alt="thumbnail"
                    className="w-16 h-16 object-cover rounded cursor-pointer"
                  />
                </div>
              </div>

              {/* Middle Column - Product Details */}
              <div className="w-1/3 p-6">
                <div className="flex items-center space-x-2">
                  <span className="bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                    Official Store
                  </span>
                  <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                    WHOLESALE
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mt-2">
                  {selectedProduct.name}
                </h2>
                <div className="flex items-center text-sm text-gray-500 mt-1">
                  Brand: <span className="text-blue-500 ml-1">Pembe</span>
                  <span className="ml-2">|</span>
                  <span className="text-blue-500 ml-2">
                    Similar products from Pembe
                  </span>
                </div>
                <div className="flex items-center mt-2">
                  <div className="flex text-yellow-400">
                    <span className="text-xl">★</span>
                    <span className="text-xl">★</span>
                    <span className="text-xl">★</span>
                    <span className="text-xl">★</span>
                    <span className="text-xl">☆</span>
                  </div>
                  <span className="ml-2 text-sm text-gray-500">
                    (1714 verified ratings)
                  </span>
                </div>
                <div className="mt-4 border-t border-gray-200 pt-4">
                  <p className="text-4xl font-bold text-gray-900">
                    {selectedProduct.currentPrice}
                    <span className="ml-2 text-lg text-gray-500 line-through">
                      {selectedProduct.originalPrice}
                    </span>
                    <span className="ml-2 text-lg text-red-500 font-bold">
                      {selectedProduct.discount}
                    </span>
                  </p>
                  <p className="text-sm text-gray-600 mt-2">Few units left</p>
                  <p className="text-sm text-gray-600 mt-1">
                    + shipping from KSh 90 to CBD - UON/Globe/Koja/River Road
                  </p>
                </div>
                <button className="mt-6 bg-[#f65512] text-white py-3 px-6 rounded-lg font-bold hover:bg-opacity-90 transition w-full">
                  Add to cart
                </button>
                <div className="mt-6">
                  <h3 className="text-lg font-semibold">PROMOTIONS</h3>
                  <p className="text-sm text-blue-500 mt-2">
                    Exclusive Deals | Call 0711011011 To Order
                  </p>
                  <p className="text-sm text-blue-500 mt-1">
                    Easy and safer payments via the JumiaPay App.
                  </p>
                </div>
              </div>

              {/* Right Column - Delivery & Seller Info */}
              <div className="w-1/3 p-6 border-l border-gray-200">
                <div className="bg-gray-100 p-4 rounded-lg">
                  <h3 className="text-sm font-semibold text-gray-700">
                    DELIVERY & RETURNS
                  </h3>
                  <div className="mt-4">
                    <div className="flex justify-between items-center text-sm">
                      <p>Choose your location</p>
                      <a href="#" className="text-blue-500">
                        Details
                      </a>
                    </div>
                    <select className="mt-2 w-full p-2 border rounded">
                      <option>Nairobi</option>
                    </select>
                    <select className="mt-2 w-full p-2 border rounded">
                      <option>CBD - UON/Globe/Koja/Riveri</option>
                    </select>
                  </div>
                  <div className="mt-4 border-t border-gray-200 pt-4">
                    <h4 className="text-md font-semibold">
                      SELLER INFORMATION
                    </h4>
                    <p className="text-sm mt-1">Jumia</p>
                    <p className="text-sm text-green-600">100% Seller Score</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComputingDeals;