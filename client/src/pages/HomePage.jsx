import React, { useState, useEffect } from "react";
import {
  Search,
  ShoppingCart,
  User,
  HelpCircle,
  MessageCircle,
  ChevronDown,
} from "lucide-react";

export default function JumiaHomepage() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 3,
    minutes: 0,
    seconds: 53,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const categories = [
    { icon: "🏪", name: "Official Stores" },
    { icon: "📱", name: "Phones & Tablets" },
    { icon: "📺", name: "TVs & Audio" },
    { icon: "🏠", name: "Appliances" },
    { icon: "💄", name: "Health & Beauty" },
    { icon: "🏢", name: "Home & Office" },
    { icon: "👕", name: "Fashion" },
    { icon: "💻", name: "Computing" },
    { icon: "🎮", name: "Gaming" },
    { icon: "🛒", name: "Supermarket" },
    { icon: "👶", name: "Baby Products" },
    { icon: "➕", name: "Other categories" },
  ];

  const flashSalesProducts = [
    { discount: "-65%", color: "text-orange-500" },
    { discount: "-14%", color: "text-orange-500" },
    { discount: "-27%", color: "text-orange-500" },
    { discount: "-45%", color: "text-orange-500" },
    { discount: "-25%", color: "text-orange-500" },
    { discount: "-18%", color: "text-orange-500" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Top Bar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 py-2">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <span className="text-orange-500">🔥 Sell on Jumia</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-bold">JUMIA</span>
              <span className="text-gray-500">⭐</span>
              <span className="text-gray-500">🏧 PAY</span>
              <span className="text-gray-500">🚚 DELIVERY</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="text-2xl font-bold">
                <span className="text-black">JUMIA</span>
                <span className="text-orange-500 ml-1">⭐</span>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative flex">
                <input
                  type="text"
                  placeholder="Search products, brands and categories"
                  className="flex-1 px-4 py-2 border border-gray-300 focus:outline-none focus:border-orange-500"
                />
                <button className="px-6 bg-orange-500 text-white hover:bg-orange-600 font-medium">
                  Search
                </button>
              </div>
            </div>

            {/* Header Actions */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1 cursor-pointer hover:text-orange-500">
                <User className="w-4 h-4" />
                <span className="text-sm">Account</span>
                <ChevronDown className="w-3 h-3" />
              </div>
              <div className="flex items-center space-x-1 cursor-pointer hover:text-orange-500">
                <HelpCircle className="w-4 h-4" />
                <span className="text-sm">Help</span>
                <ChevronDown className="w-3 h-3" />
              </div>
              <div className="flex items-center space-x-1 cursor-pointer hover:text-orange-500">
                <ShoppingCart className="w-4 h-4" />
                <span className="text-sm">Cart</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-0">
        <div className="flex gap-0">
          {/* Left Sidebar */}
          <div className="w-80 bg-white">
            <ul className="border-r">
              {categories.map((category, index) => (
                <li key={index} className="border-b border-gray-100">
                  <div className="flex items-center space-x-3 px-4 py-3 cursor-pointer hover:bg-orange-50 hover:text-orange-500">
                    <span className="text-base">{category.icon}</span>
                    <span className="text-sm text-gray-700">
                      {category.name}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 bg-red-600 relative">
            {/* Hero Banner */}
            <div className="h-80 flex items-center justify-center relative">
              <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                <div className="w-16 h-16 bg-white bg-opacity-40 rounded-full flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
              </div>

              {/* Banner Navigation Dots */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-white bg-opacity-50"></div>
                <div className="w-2 h-2 rounded-full bg-white bg-opacity-50"></div>
                <div className="w-2 h-2 rounded-full bg-white bg-opacity-50"></div>
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                <div className="w-2 h-2 rounded-full bg-white bg-opacity-50"></div>
                <div className="w-2 h-2 rounded-full bg-white bg-opacity-50"></div>
                <div className="w-2 h-2 rounded-full bg-white bg-opacity-50"></div>
                <div className="w-2 h-2 rounded-full bg-white bg-opacity-50"></div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-80 space-y-0">
            {/* WhatsApp */}
            <div className="bg-green-500 text-white px-6 py-6 flex items-center space-x-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-green-500" />
              </div>
              <div>
                <div className="font-bold text-lg">WhatsApp</div>
                <div className="text-sm opacity-90">Chat To Order</div>
              </div>
            </div>

            {/* China Town */}
            <div className="bg-black text-white px-6 py-6 flex items-center space-x-4">
              <div className="w-10 h-10 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-black font-bold">🏮</span>
              </div>
              <div>
                <div className="font-bold text-lg">CHINA TOWN</div>
                <div className="text-sm opacity-90">NOW ON JUMIA</div>
              </div>
            </div>

            {/* Sell on Jumia */}
            <div className="bg-orange-500 text-white px-6 py-6 flex items-center space-x-4">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <span className="text-orange-500 font-bold text-lg">💰</span>
              </div>
              <div>
                <div className="font-bold text-lg">SELL ON JUMIA</div>
                <div className="text-sm opacity-90">Millions Of Visitors</div>
              </div>
            </div>

            {/* Advertisement Space */}
            <div className="bg-gray-100 h-64 flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4 flex items-center justify-center shadow-sm">
                  <svg
                    className="w-8 h-8 text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Flash Sales Section */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-red-600 text-white">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center space-x-3">
              <span className="text-yellow-300 text-xl">⚡</span>
              <h2 className="text-xl font-bold">Flash Sales | Live Now</h2>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <span className="font-bold">
                  Time Left: {String(timeLeft.hours).padStart(2, "0")}h :{" "}
                  {String(timeLeft.minutes).padStart(2, "0")}m :{" "}
                  {String(timeLeft.seconds).padStart(2, "0")}s
                </span>
              </div>
              <button className="text-white hover:underline font-bold">
                See All &gt;
              </button>
            </div>
          </div>

          <div className="px-6 pb-4">
            <div className="grid grid-cols-6 gap-1">
              {flashSalesProducts.map((product, index) => (
                <div
                  key={index}
                  className="bg-white text-black p-3 hover:shadow-lg cursor-pointer"
                >
                  <div className="relative mb-3">
                    <div className="w-full h-32 bg-gray-100 rounded mb-2 flex items-center justify-center">
                      <div className="w-16 h-16 bg-gray-200 rounded"></div>
                    </div>
                    <span className="absolute top-1 left-1 bg-orange-500 text-white text-xs px-2 py-1 rounded">
                      {product.discount}
                    </span>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-500 mb-1">KSh 2,500</div>
                    <div className="text-orange-500 font-bold">KSh 1,750</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
