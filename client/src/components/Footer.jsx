import React, { useState } from "react";
import {
  ChevronUp,
  ShoppingCart,
  Truck,
  Shield,
  CreditCard,
  Headphones,
  Gift,
  Star,
  MapPin,
} from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 animate-pulse"></div>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20px 20px, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      {/* Glowing top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_20px_rgba(59,130,246,0.5)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Trust badges section */}
        <div className="mb-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Truck, text: "Free Shipping", subtext: "Orders over $50" },
            { icon: Shield, text: "Secure Payment", subtext: "256-bit SSL" },
            { icon: Gift, text: "Easy Returns", subtext: "30-day policy" },
            {
              icon: Headphones,
              text: "24/7 Support",
              subtext: "Live chat & phone",
            },
          ].map((badge, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-3 p-4 bg-slate-800/50 rounded-xl border border-slate-700 backdrop-blur-sm hover:border-blue-400 transition-all duration-300 group"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-lg flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-110 transition-transform duration-300">
                <badge.icon className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">{badge.text}</p>
                <p className="text-xs text-gray-400">{badge.subtext}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                <ShoppingCart className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                NeoMart
              </span>
            </div>
            <p className="text-gray-300 leading-relaxed max-w-md">
              The future of shopping is here. Discover cutting-edge products,
              seamless experiences, and next-generation technology at your
              fingertips.
            </p>

            {/* App download buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex items-center space-x-3 px-4 py-3 bg-black rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300 group">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <div className="w-5 h-5 bg-black rounded-sm"></div>
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-400">Download on the</p>
                  <p className="text-sm font-semibold">App Store</p>
                </div>
              </button>

              <button className="flex items-center space-x-3 px-4 py-3 bg-black rounded-lg border border-gray-700 hover:border-purple-400 transition-all duration-300 group">
                <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <div className="text-left">
                  <p className="text-xs text-gray-400">Get it on</p>
                  <p className="text-sm font-semibold">Google Play</p>
                </div>
              </button>
            </div>
          </div>

          {/* Shop section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-blue-400">Shop</h3>
            <ul className="space-y-3">
              {[
                "New Arrivals",
                "Best Sellers",
                "Sale Items",
                "Electronics",
                "Fashion",
                "Home & Garden",
                "Sports",
                "Beauty",
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <div className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <span className="text-sm">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-purple-400">
              Customer Care
            </h3>
            <ul className="space-y-3">
              {[
                "Help Center",
                "Track Order",
                "Returns & Exchanges",
                "Shipping Info",
                "Size Guide",
                "Contact Us",
                "Live Chat",
                "FAQ",
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <div className="w-1 h-1 bg-blue-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <span className="text-sm">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company section */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-cyan-400">Company</h3>
            <ul className="space-y-3">
              {[
                "About Us",
                "Careers",
                "Press",
                "Sustainability",
                "Affiliate Program",
                "Gift Cards",
                "Store Locator",
                "Wholesale",
              ].map((item, idx) => (
                <li key={idx}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-2 group"
                  >
                    <div className="w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                    <span className="text-sm">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter & Social section */}
        <div className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Newsletter */}
          <div className="p-8 bg-gradient-to-r from-slate-800/50 to-indigo-900/30 rounded-2xl border border-slate-700 backdrop-blur-sm">
            <div className="space-y-4">
              <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent flex items-center space-x-2">
                <Gift className="w-5 h-5 text-blue-400" />
                <span>Exclusive Deals & Updates</span>
              </h3>
              <p className="text-gray-300 text-sm">
                Be the first to know about flash sales, new arrivals, and
                exclusive member discounts.
              </p>
              <div className="flex gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 outline-none transition-all duration-300 text-white placeholder-gray-400 text-sm"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-400 hover:to-purple-400 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25 text-sm">
                  Subscribe
                </button>
              </div>
              <p className="text-xs text-gray-400">
                Get 15% off your first order when you subscribe!
              </p>
            </div>
          </div>

          {/* Social & Reviews */}
          <div className="space-y-6">
            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-3">
                {["Instagram", "Facebook", "Twitter", "YouTube", "TikTok"].map(
                  (social, idx) => (
                    <div
                      key={social}
                      className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center border border-slate-700 hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300 cursor-pointer group"
                    >
                      <div className="w-5 h-5 bg-gray-400 group-hover:bg-blue-400 transition-colors duration-300 rounded-sm"></div>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Customer Reviews */}
            <div className="p-4 bg-slate-800/50 rounded-xl border border-slate-700">
              <div className="flex items-center space-x-2 mb-2">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-300">4.9/5</span>
              </div>
              <p className="text-xs text-gray-400">
                Rated by 50,000+ customers
              </p>
              <p className="text-sm text-gray-300 mt-2">
                "Amazing shopping experience!"
              </p>
            </div>

            {/* Payment Methods */}
            <div>
              <h4 className="text-sm font-semibold mb-3 flex items-center space-x-2">
                <CreditCard className="w-4 h-4 text-green-400" />
                <span>We Accept</span>
              </h4>
              <div className="flex space-x-2">
                {[
                  "Visa",
                  "MC",
                  "Amex",
                  "PayPal",
                  "Apple Pay",
                  "Google Pay",
                ].map((method, idx) => (
                  <div
                    key={idx}
                    className="px-3 py-2 bg-slate-800 rounded border border-slate-700 text-xs text-gray-400"
                  >
                    {method}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400">
              <span>&copy; 2025 NeoMart. All rights reserved.</span>
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-purple-400 transition-colors duration-300"
              >
                Terms & Conditions
              </a>
              <a
                href="#"
                className="hover:text-cyan-400 transition-colors duration-300"
              >
                Cookie Policy
              </a>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-gray-400" />
                <span>United States</span>
              </div>
            </div>

            <button className="group flex items-center space-x-2 px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 hover:border-blue-400 transition-all duration-300">
              <span className="text-sm text-gray-400 group-hover:text-blue-400">
                Back to top
              </span>
              <ChevronUp className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transform group-hover:-translate-y-1 transition-all duration-300" />
            </button>
          </div>
        </div>
      </div>

      {/* Floating shopping icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 4 }, (_, i) => (
          <div
            key={i}
            className="absolute opacity-20 animate-bounce"
            style={{
              left: `${25 + i * 20}%`,
              top: `${20 + (i % 2) * 40}%`,
              animationDelay: `${i * 1.2}s`,
              animationDuration: "4s",
            }}
          >
            {i % 2 === 0 ? (
              <ShoppingCart className="w-6 h-6 text-blue-400" />
            ) : (
              <Gift className="w-6 h-6 text-purple-400" />
            )}
          </div>
        ))}
      </div>
    </footer>
  );
}
