import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";

const ChevronLeftIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);

const ChevronRightIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.5}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

// ========================
// SAMPLE DATA
// ========================

const products = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw2dAVNmBhqVvNPAs7LJHnumSH3pHdoWP0bg&s",
    name: "Starlink Standard Kit: Hi...",
    currentPrice: "KSh 45,000",
    originalPrice: "KSh 60,000",
    discount: "-36%",
    brand: "Starlink",
    features: [
      "High-speed, low-latency broadband internet",
      "Easy self-install kit",
      "Weather-resistant dish",
      "Ideal for rural and remote areas",
    ],
    specifications: {
      "Key Features": [
        "Brand: Starlink",
        "Type: High-Speed Internet Kit",
        "Connectivity: Satellite",
        "Weather Resistant: Yes",
      ],
      "What's in the Box": "Starlink Dish, Router, Mount, Power cable",
    },
    customerFeedback: {
      ratings: "4.8/5",
      verifiedRatings: 1714,
      reviews: [
        {
          rating: "5/5",
          comment: "Amazing speed, easy to set up!",
          date: "12-09-2025",
          author: "John Doe",
        },
        {
          rating: "4/5",
          comment: "Great service, but a bit pricey.",
          date: "15-09-2025",
          author: "Jane Smith",
        },
        {
          rating: "5/5",
          comment: "A great product overall!",
          date: "10-09-2025",
          author: "Peter Jones",
        },
        {
          rating: "5/5",
          comment: "Fantastic. Highly recommend.",
          date: "09-09-2025",
          author: "Sarah Miller",
        },
      ],
    },
  },
  {
    image: "https://picsum.photos/seed/product2/200/200",
    name: "GUEETON 2.4G Bluetooth...",
    currentPrice: "KSh 380",
    originalPrice: "KSh 590",
    discount: "-36%",
    brand: "GUEETON",
    features: [
      "2.4G wireless and Bluetooth 5.0 connectivity",
      "Ergonomic design",
      "Silent clicks",
      "Rechargeable battery",
    ],
    specifications: {
      "Key Features": [
        "Brand: GUEETON",
        "Type: Wireless Mouse",
        "Connectivity: 2.4G & Bluetooth",
        "Battery: Rechargeable",
      ],
      "What's in the Box": "Wireless Mouse, USB receiver, Charging cable",
    },
    customerFeedback: {
      ratings: "4.1/5",
      verifiedRatings: 31,
      reviews: [
        {
          rating: "4/5",
          comment: "I like it",
          date: "08-09-2025",
          author: "Mary",
        },
        {
          rating: "5/5",
          comment: "I love what I bought",
          date: "03-09-2025",
          author: "Judith",
        },
        {
          rating: "3/5",
          comment: "It's okay, nothing special.",
          date: "01-09-2025",
          author: "Tom",
        },
      ],
    },
  },
  {
    image: "https://picsum.photos/seed/product3/200/200",
    name: "GUEETON 128GB Metal...",
    currentPrice: "KSh 557",
    originalPrice: "KSh 929",
    discount: "-40%",
    brand: "GUEETON",
    features: ["128GB storage", "USB 3.0", "Metal casing", "Portable design"],
    specifications: {
      "Key Features": [
        "Brand: GUEETON",
        "Type: USB Flash Drive",
        "Capacity: 128GB",
        "Material: Metal",
      ],
      "What's in the Box": "128GB USB Flash Drive",
    },
    customerFeedback: {
      ratings: "4.5/5",
      verifiedRatings: 50,
      reviews: [
        {
          rating: "5/5",
          comment: "Fast and reliable. Great value.",
          date: "10-09-2025",
          author: "Alex",
        },
        {
          rating: "4/5",
          comment: "Good speed for the price.",
          date: "09-09-2025",
          author: "Brian",
        },
        {
          rating: "4/5",
          comment: "Works perfectly.",
          date: "08-09-2025",
          author: "Chris",
        },
      ],
    },
  },
  {
    image: "https://picsum.photos/seed/product4/200/200",
    name: "HP 8GB RAM, 500GB H...",
    currentPrice: "KSh 17,999",
    originalPrice: "KSh 25,000",
    discount: "-28%",
    brand: "HP",
    features: ["8GB RAM", "500GB HDD", "Intel Core i5", "Windows 10"],
    specifications: {
      "Key Features": [
        "Brand: HP",
        "Type: Laptop",
        "RAM: 8GB",
        "Storage: 500GB HDD",
      ],
      "What's in the Box": "HP Laptop, Power adapter",
    },
    customerFeedback: {
      ratings: "4.2/5",
      verifiedRatings: 120,
      reviews: [
        {
          rating: "4/5",
          comment: "Good laptop for the price.",
          date: "11-09-2025",
          author: "David",
        },
        {
          rating: "4/5",
          comment: "Satisfied with my purchase.",
          date: "10-09-2025",
          author: "Frank",
        },
      ],
    },
  },
  {
    image: "https://picsum.photos/seed/product5/200/200",
    name: "Lenovo Chromebook - 4...",
    currentPrice: "KSh 6,300",
    originalPrice: "KSh 19,000",
    discount: "-67%",
    brand: "Lenovo",
    features: ["4GB RAM", "11.6-inch display", "Chrome OS", "Lightweight"],
    specifications: {
      "Key Features": [
        "Brand: Lenovo",
        "Type: Chromebook",
        "RAM: 4GB",
        "OS: Chrome OS",
      ],
      "What's in the Box": "Lenovo Chromebook, Charger",
    },
    customerFeedback: {
      ratings: "4.0/5",
      verifiedRatings: 80,
      reviews: [
        {
          rating: "4/5",
          comment: "Perfect for students. Very fast.",
          date: "14-09-2025",
          author: "Emily",
        },
        {
          rating: "5/5",
          comment: "Love the battery life.",
          date: "13-09-2025",
          author: "George",
        },
        {
          rating: "3/5",
          comment: "Could be faster.",
          date: "12-09-2025",
          author: "Hannah",
        },
      ],
    },
  },
  {
    image: "https://picsum.photos/seed/product6/200/200",
    name: "GUEETON Ultra-thin Wir...",
    currentPrice: "KSh 378",
    originalPrice: "KSh 1,506",
    discount: "-76%",
    brand: "GUEETON",
    features: [
      "Ultra-thin design",
      "Silent clicks",
      "Wireless connectivity",
      "Ergonomic feel",
    ],
    specifications: {
      "Key Features": [
        "Brand: GUEETON",
        "Type: Wireless Mouse",
        "Design: Ultra-thin",
        "Features: Silent clicks",
      ],
      "What's in the Box": "Wireless Mouse, USB receiver",
    },
    customerFeedback: {
      ratings: "4.3/5",
      verifiedRatings: 1714,
      reviews: [
        {
          rating: "5/5",
          comment: "Good package and good quality",
          date: "11-09-2025",
          author: "Irene",
        },
        {
          rating: "5/5",
          comment: "This is the best",
          date: "15-09-2025",
          author: "Brian",
        },
      ],
    },
  },
  {
    image: "https://picsum.photos/seed/product7/200/200",
    name: "Another Computing Deal",
    currentPrice: "KSh 1,200",
    originalPrice: "KSh 2,000",
    discount: "-40%",
    brand: "Generic",
    features: ["High performance", "Durable build", "Affordable"],
    specifications: {
      "Key Features": [
        "Brand: Generic",
        "Type: Electronic Accessory",
        "Performance: High",
        "Durability: High",
      ],
      "What's in the Box": "Accessory unit",
    },
    customerFeedback: {
      ratings: "3.8/5",
      verifiedRatings: 25,
      reviews: [
        {
          rating: "4/5",
          comment: "It works as expected.",
          date: "05-09-2025",
          author: "Peter",
        },
      ],
    },
  },
  {
    image: "https://picsum.photos/seed/product8/200/200",
    name: "Mechanical Keyboard RGB",
    currentPrice: "KSh 5,000",
    originalPrice: "KSh 8,000",
    discount: "-37.5%",
    brand: "Gamers",
    features: [
      "RGB backlighting",
      "Mechanical switches",
      "Durable keycaps",
      "Ergonomic layout",
    ],
    specifications: {
      "Key Features": [
        "Brand: Gamers",
        "Type: Mechanical Keyboard",
        "Features: RGB lighting",
        "Switches: Mechanical",
      ],
      "What's in the Box": "Mechanical keyboard",
    },
    customerFeedback: {
      ratings: "4.6/5",
      verifiedRatings: 90,
      reviews: [
        {
          rating: "5/5",
          comment: "Great keyboard for gaming!",
          date: "02-09-2025",
          author: "Michael",
        },
      ],
    },
  },
];

// ========================
// UTILITY FUNCTIONS
// ========================

const renderStars = (ratingString) => {
  if (!ratingString) return "No ratings yet";

  const [rating] = ratingString.split("/");
  const filledStars = Math.round(parseFloat(rating));
  const stars = [];

  for (let i = 0; i < 5; i++) {
    stars.push(
      <span
        key={i}
        className={`text-xl transition-colors duration-300 ${
          i < filledStars ? "text-amber-400" : "text-slate-300"
        }`}
      >
        ★
      </span>
    );
  }

  return <div className="flex items-center">{stars}</div>;
};

const getRatingSummary = (reviews) => {
  const totalReviews = reviews.length;
  const ratingsCount = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };

  reviews.forEach((review) => {
    const rating = parseInt(review.rating.split("/")[0], 10);
    if (ratingsCount[rating] !== undefined) {
      ratingsCount[rating]++;
    }
  });

  return Object.keys(ratingsCount)
    .reverse()
    .map((rating) => {
      const count = ratingsCount[rating];
      const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
      return {
        rating: parseInt(rating, 10),
        count,
        percentage: Math.round(percentage),
      };
    });
};

// ========================
// PRODUCT DETAIL COMPONENT
// ========================

const ProductDetailPage = ({ product }) => {
  if (!product) {
    return null;
  }

  const ratingSummary = getRatingSummary(product.customerFeedback.reviews);

  return (
    <div className="">
      <div className="flex flex-col lg:flex-row border-b border-slate-200/60 pb-10 mb-10">
        {/* Left Column - Product Images */}
        <div className="w-full lg:w-1/3 p-6 border-r lg:border-r border-slate-200/60">
          <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200/40">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto object-contain rounded-xl transform hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Thumbnail Images */}
          <div className="flex justify-center mt-6 space-x-3">
            <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl p-0.5 shadow-lg">
              <img
                src={product.image}
                alt="thumbnail"
                className="w-full h-full object-cover rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>

        {/* Middle Column - Product Details */}
        <div className="w-full lg:w-1/3 p-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mt-3 leading-tight">
            {product.name}
          </h2>

          {/* Brand Info */}
          <div className="flex items-center text-sm text-slate-600 mt-3">
            Brand:
            <span className="text-blue-600 ml-2 font-semibold hover:text-blue-700 transition-colors cursor-pointer">
              {product.brand}
            </span>
            <span className="ml-3 text-slate-400">|</span>
            <span className="text-blue-600 ml-3 hover:text-blue-700 transition-colors cursor-pointer">
              Similar products from {product.brand}
            </span>
          </div>

          {/* Ratings */}
          <div className="flex items-center mt-4">
            {renderStars(product.customerFeedback.ratings)}
            <span className="ml-3 text-sm text-slate-600 bg-slate-100 px-2 py-1 rounded-full">
              ({product.customerFeedback.verifiedRatings} verified ratings)
            </span>
          </div>

          {/* Pricing */}
          <div className="mt-6 bg-gradient-to-r from-slate-50 to-white border border-slate-200/50 rounded-2xl p-6 shadow-md">
            <div className="flex items-baseline space-x-3">
              <p className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
                {product.currentPrice}
              </p>
              <span className="text-l text-slate-500 line-through">
                {product.originalPrice}
              </span>
              <span className="text-l text-red-600 font-bold bg-red-50 px-3 py-1 rounded-full border border-red-200">
                {product.discount}
              </span>
            </div>
            <div className="mt-3 space-y-1">
              <p className="text-sm text-amber-700 font-semibold bg-amber-50 inline-block px-2 py-1 rounded-lg">
                Few units left
              </p>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className="mt-8 w-full bg-orange-600 text-white py-4 px-8 rounded-2xl font-bold cursor-pointer">
            <div className="flex items-center justify-center space-x-2">
              <span>Add to cart</span>
            </div>
          </button>

          {/* Promotions */}
          <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 rounded-2xl p-6 shadow-md">
            <h3 className="text-lg font-bold text-slate-800 mb-3">
              PROMOTIONS
            </h3>
            <div className="space-y-2">
              <p className="text-sm text-blue-700 font-medium bg-blue-100 px-3 py-2 rounded-lg">
                Exclusive Deals | Call 0711011011 To Order
              </p>
              <p className="text-sm text-blue-700 font-medium bg-blue-100 px-3 py-2 rounded-lg">
                Easy and safer payments via the JumiaPay App.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Delivery & Seller Info */}
        <div className="w-full lg:w-1/3 p-6 border-l lg:border-l border-slate-200/60">
          <div className="bg-gradient-to-br from-slate-50 via-white to-slate-50 p-6 rounded-2xl shadow-lg border border-slate-200/40">
            <h3 className="text-sm font-bold text-slate-700 mb-4 uppercase tracking-wider">
              DELIVERY & RETURNS
            </h3>

            {/* Location Selection */}
            <div className="mt-4">
              <div className="flex justify-between items-center text-sm mb-3">
                <p className="font-medium text-slate-700">
                  Choose your location
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
                >
                  Details
                </a>
              </div>
              <select className="mt-2 w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all shadow-sm">
                <option>Nairobi</option>
              </select>
              <select className="mt-3 w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all shadow-sm">
                <option>CBD - UON/Globe/Koja/Riveri</option>
              </select>
            </div>

            {/* Seller Information */}
            <div className="mt-6 border-t border-slate-200 pt-6">
              <h4 className="text-md font-bold text-slate-800 mb-2 uppercase tracking-wider">
                SELLER INFORMATION
              </h4>
              <p className="text-lg font-semibold text-slate-800 mb-1">Jumia</p>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                <p className="text-sm text-emerald-700 font-bold">
                  100% Seller Score
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ======================== */}
      {/* PRODUCT DETAILS SECTION */}
      {/* ======================== */}
      <div className="p-6 border-b border-slate-200/60 mb-8">
        <h3 className="text-2xl font-bold text-slate-800 mb-4">
          Product details
        </h3>
        <div className="bg-gradient-to-r from-slate-50 to-white p-6 rounded-2xl border border-slate-200/40 shadow-sm">
          <p className="text-slate-700 leading-relaxed">
            Crafted from carefully selected materials & finished brilliantly,
            this elegant product gets you that head turning performance that you
            have always wanted at all occasions. This astonishing device is for
            users who desire to make a statement. So make the most of your
            experience with elegance and style that keeps you noticed every
            time.
          </p>

          {/* Features List */}
          <h4 className="font-bold text-slate-800 mt-6 mb-3">Features</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {product.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-sm border border-slate-200/40"
              >
                <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                <span className="text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ======================== */}
      {/* SPECIFICATIONS SECTION */}
      {/* ======================== */}
      <div className="p-6 border-b border-slate-200/60 mb-8">
        <h3 className="text-2xl font-bold text-slate-800 mb-6">
          Specifications
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Key Features */}
          <div className="bg-gradient-to-br from-slate-50 via-white to-slate-50 p-6 rounded-2xl shadow-lg border border-slate-200/40">
            <h4 className="font-bold text-slate-800 mb-4 uppercase tracking-wider">
              KEY FEATURES
            </h4>
            <div className="space-y-3">
              {product.specifications["Key Features"].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 text-slate-700"
                >
                  <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* What's in the Box */}
          <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 rounded-2xl shadow-lg border border-blue-200/40">
            <h4 className="font-bold text-slate-800 mb-4 uppercase tracking-wider">
              WHAT'S IN THE BOX
            </h4>
            <p className="text-slate-700 leading-relaxed">
              {product.specifications["What's in the Box"]}
            </p>
          </div>
        </div>
      </div>

      {/* ======================== */}
      {/* CUSTOMER FEEDBACK SECTION */}
      {/* ======================== */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-slate-800 mb-6">
          Customer Feedback
        </h3>
        <div className="flex flex-col md:flex-row md:space-x-8">
          {/* Review Summary Column */}
          <div className="w-full md:w-1/2 md:pr-6">
            {/* Overall Rating */}
            <div className="bg-gradient-to-br from-amber-50 via-white to-orange-50 p-6 rounded-2xl shadow-lg border border-amber-200/40 mb-6">
              <div className="flex items-center space-x-6 mb-4">
                <div className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  {product.customerFeedback.ratings}
                </div>
                <div className="flex flex-col">
                  {renderStars(product.customerFeedback.ratings)}
                  <span className="text-sm text-slate-600 mt-1 bg-slate-100 px-2 py-1 rounded-full inline-block w-fit">
                    {product.customerFeedback.verifiedRatings} verified ratings
                  </span>
                </div>
              </div>
            </div>

            {/* Rating Breakdown */}
            <div className="bg-gradient-to-br from-slate-50 via-white to-slate-50 p-6 rounded-2xl shadow-lg border border-slate-200/40">
              <h4 className="text-lg font-bold text-slate-800 mb-4">
                Reviews Summary
              </h4>
              <div className="space-y-3">
                {ratingSummary.map((summary) => (
                  <div
                    key={summary.rating}
                    className="flex items-center space-x-3"
                  >
                    <span className="w-16 text-sm text-slate-700 font-semibold">
                      {summary.rating} star
                    </span>
                    <div className="flex-1 bg-slate-200 rounded-full h-3 overflow-hidden shadow-inner">
                      <div
                        className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full transition-all duration-500 shadow-sm"
                        style={{ width: `${summary.percentage}%` }}
                      ></div>
                    </div>
                    <span className="w-12 text-right text-sm text-slate-700 font-semibold bg-slate-100 px-2 py-1 rounded-full">
                      {summary.percentage}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Customer Reviews Column */}
          <div className="w-full md:w-1/2 md:pl-6 md:border-l md:border-slate-200/60">
            <div className="space-y-4">
              {product.customerFeedback.reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-white via-slate-50 to-white p-6 rounded-2xl shadow-lg border border-slate-200/40 hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="flex items-center mb-3">
                    {renderStars(review.rating)}
                  </div>
                  <p className="text-slate-800 font-semibold mb-2 leading-relaxed">
                    {review.comment}
                  </p>
                  <p className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full inline-block">
                    {review.date} by {review.author}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ========================
// PRODUCT CARD COMPONENT
// ========================

const ProductCard = ({ product, onClick }) => (
  <div
    className="group flex-shrink-0 w-60 rounded-lg transition-all duration-500 ease-out hover:shadow-2xl hover:scale-[1.02] cursor-pointer border border-slate-200/50 backdrop-blur-sm overflow-hidden"
    onClick={() => onClick(product)}
  >
    {/* Product Image Section */}
    <div className="h-40 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      <img
        src={product.image}
        alt={product.name}
        className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700 relative z-10"
      />
    </div>

    {/* Product Info Section */}
    <div className="p-3 bg-gradient-to-t from-white to-slate-50">
      <h3 className="text-sm font-bold text-slate-800 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors duration-300">
        {product.name}
      </h3>
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <p className="text-lg font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
            {product.currentPrice}
          </p>
          <p className="text-sm text-slate-500 line-through">
            {product.originalPrice}
          </p>
        </div>
        <div className="text-l text-red-600 font-bold bg-red-50 px-2 py-1 rounded-lg border border-red-200 flex-shrink-0 ml-2">
          {product.discount}
        </div>
      </div>
    </div>
  </div>
);

const ScrollButton = ({ direction, onClick }) => (
  <button
    onClick={onClick}
    className={`absolute ${
      direction === "left" ? "left-4" : "right-4"
    } top-1/2 transform -translate-y-1/2 p-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-xl z-10 border border-slate-200/50 hover:bg-white hover:scale-110 transition-all duration-300 group`}
  >
    {direction === "left" ? (
      <ChevronLeftIcon className="text-slate-600 group-hover:text-orange-600" />
    ) : (
      <ChevronRightIcon className="text-slate-600 group-hover:text-orange-600" />
    )}
  </button>
);

// ========================
// HEADER SECTION COMPONENT
// ========================

const HeaderSection = () => (
  <div className="bg-orange-500 p-2 relative overflow-hidden">
    <div className="relative flex justify-between items-center">
      <div className="flex items-center space-x-3">
        <h2 className="text-xl font-bold text-white tracking-wide">
          Computing Deals
        </h2>
      </div>
      {/* <a href="#" className="flex items-center text-white px-2 py-2 ">
        See All <ChevronRightIcon className="ml-2" />
      </a> */}
      <Link to="/electronics" className="flex items-center text-white px-2 py-2">
        See All <ChevronRightIcon className="ml-2" />
      </Link>
    </div>
  </div>
);

// ========================
// PRODUCT CAROUSEL COMPONENT
// ========================

const ProductCarousel = ({ products, onProductClick }) => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { scrollLeft } = scrollContainerRef.current;
      const cardWidth = 240 + 24; // card width + margin
      const scrollAmount =
        direction === "left" ? -cardWidth * 2 : cardWidth * 2;

      scrollContainerRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-white to-slate-50 py-4">
      <div
        ref={scrollContainerRef}
        className="flex py-6 space-x-6 px-20 overflow-x-scroll scrollbar-hide"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {products.map((product, index) => (
          <ProductCard key={index} product={product} onClick={onProductClick} />
        ))}
      </div>

      {/* Scroll Navigation Buttons */}
      <ScrollButton direction="left" onClick={() => scroll("left")} />
      <ScrollButton direction="right" onClick={() => scroll("right")} />
    </div>
  );
};

// ========================
// MODAL COMPONENT
// ========================

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex justify-center items-start pt-8">
      <div className="relative bg-gradient-to-br from-white via-slate-50 to-white w-full max-w-7xl h-fit rounded-lg shadow-2xl border border-slate-200/50 mx-4">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-500 hover:text-slate-800 z-50 p-3 rounded-lg bg-white/90 backdrop-blur-sm shadow-xl border border-slate-200/50 hover:scale-110 transition-all duration-300"
        >
          <CloseIcon />
        </button>
        {children}
      </div>
    </div>
  );
};

// ========================
// MAIN APP COMPONENT
// ========================

const App = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  return (
    <div className="font-roboto antialiased text-slate-800 ml-11 mr-11 bg-transparent p-3 relative">
      <div className="max-w-7xl mx-auto rounded-lg overflow-hidden shadow-2xl border border-slate-200/50 backdrop-blur-sm">
        <HeaderSection />
        <ProductCarousel products={products} onProductClick={handleCardClick} />
      </div>
      <Modal isOpen={!!selectedProduct} onClose={closeModal}>
        <ProductDetailPage product={selectedProduct} />
      </Modal>
    </div>
  );
};

export default App;




// import React, { useRef, useState } from "react";
// import { Link } from "react-router-dom";
// const ChevronLeftIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="h-5 w-5"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2.5}
//       d="M15 19l-7-7 7-7"
//     />
//   </svg>
// );

// const ChevronRightIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="h-5 w-5"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2.5}
//       d="M9 5l7 7-7 7"
//     />
//   </svg>
// );

// const CloseIcon = () => (
//   <svg
//     xmlns="http://www.w3.org/2000/svg"
//     className="h-6 w-6"
//     fill="none"
//     viewBox="0 0 24 24"
//     stroke="currentColor"
//   >
//     <path
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth={2.5}
//       d="M6 18L18 6M6 6l12 12"
//     />
//   </svg>
// );

// // ========================
// // SAMPLE DATA
// // ========================

// const products = [
//   {
//     image:
//       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw2dAVNmBhqVvNPAs7LJHnumSH3pHdoWP0bg&s",
//     name: "Starlink Standard Kit: Hi...",
//     currentPrice: "KSh 45,000",
//     originalPrice: "KSh 60,000",
//     discount: "-36%",
//     brand: "Starlink",
//     features: [
//       "High-speed, low-latency broadband internet",
//       "Easy self-install kit",
//       "Weather-resistant dish",
//       "Ideal for rural and remote areas",
//     ],
//     specifications: {
//       "Key Features": [
//         "Brand: Starlink",
//         "Type: High-Speed Internet Kit",
//         "Connectivity: Satellite",
//         "Weather Resistant: Yes",
//       ],
//       "What's in the Box": "Starlink Dish, Router, Mount, Power cable",
//     },
//     customerFeedback: {
//       ratings: "4.8/5",
//       verifiedRatings: 1714,
//       reviews: [
//         {
//           rating: "5/5",
//           comment: "Amazing speed, easy to set up!",
//           date: "12-09-2025",
//           author: "John Doe",
//         },
//         {
//           rating: "4/5",
//           comment: "Great service, but a bit pricey.",
//           date: "15-09-2025",
//           author: "Jane Smith",
//         },
//         {
//           rating: "5/5",
//           comment: "A great product overall!",
//           date: "10-09-2025",
//           author: "Peter Jones",
//         },
//         {
//           rating: "5/5",
//           comment: "Fantastic. Highly recommend.",
//           date: "09-09-2025",
//           author: "Sarah Miller",
//         },
//       ],
//     },
//   },
//   {
//     image: "https://picsum.photos/seed/product2/200/200",
//     name: "GUEETON 2.4G Bluetooth...",
//     currentPrice: "KSh 380",
//     originalPrice: "KSh 590",
//     discount: "-36%",
//     brand: "GUEETON",
//     features: [
//       "2.4G wireless and Bluetooth 5.0 connectivity",
//       "Ergonomic design",
//       "Silent clicks",
//       "Rechargeable battery",
//     ],
//     specifications: {
//       "Key Features": [
//         "Brand: GUEETON",
//         "Type: Wireless Mouse",
//         "Connectivity: 2.4G & Bluetooth",
//         "Battery: Rechargeable",
//       ],
//       "What's in the Box": "Wireless Mouse, USB receiver, Charging cable",
//     },
//     customerFeedback: {
//       ratings: "4.1/5",
//       verifiedRatings: 31,
//       reviews: [
//         {
//           rating: "4/5",
//           comment: "I like it",
//           date: "08-09-2025",
//           author: "Mary",
//         },
//         {
//           rating: "5/5",
//           comment: "I love what I bought",
//           date: "03-09-2025",
//           author: "Judith",
//         },
//         {
//           rating: "3/5",
//           comment: "It's okay, nothing special.",
//           date: "01-09-2025",
//           author: "Tom",
//         },
//       ],
//     },
//   },
//   {
//     image: "https://picsum.photos/seed/product3/200/200",
//     name: "GUEETON 128GB Metal...",
//     currentPrice: "KSh 557",
//     originalPrice: "KSh 929",
//     discount: "-40%",
//     brand: "GUEETON",
//     features: ["128GB storage", "USB 3.0", "Metal casing", "Portable design"],
//     specifications: {
//       "Key Features": [
//         "Brand: GUEETON",
//         "Type: USB Flash Drive",
//         "Capacity: 128GB",
//         "Material: Metal",
//       ],
//       "What's in the Box": "128GB USB Flash Drive",
//     },
//     customerFeedback: {
//       ratings: "4.5/5",
//       verifiedRatings: 50,
//       reviews: [
//         {
//           rating: "5/5",
//           comment: "Fast and reliable. Great value.",
//           date: "10-09-2025",
//           author: "Alex",
//         },
//         {
//           rating: "4/5",
//           comment: "Good speed for the price.",
//           date: "09-09-2025",
//           author: "Brian",
//         },
//         {
//           rating: "4/5",
//           comment: "Works perfectly.",
//           date: "08-09-2025",
//           author: "Chris",
//         },
//       ],
//     },
//   },
//   {
//     image: "https://picsum.photos/seed/product4/200/200",
//     name: "HP 8GB RAM, 500GB H...",
//     currentPrice: "KSh 17,999",
//     originalPrice: "KSh 25,000",
//     discount: "-28%",
//     brand: "HP",
//     features: ["8GB RAM", "500GB HDD", "Intel Core i5", "Windows 10"],
//     specifications: {
//       "Key Features": [
//         "Brand: HP",
//         "Type: Laptop",
//         "RAM: 8GB",
//         "Storage: 500GB HDD",
//       ],
//       "What's in the Box": "HP Laptop, Power adapter",
//     },
//     customerFeedback: {
//       ratings: "4.2/5",
//       verifiedRatings: 120,
//       reviews: [
//         {
//           rating: "4/5",
//           comment: "Good laptop for the price.",
//           date: "11-09-2025",
//           author: "David",
//         },
//         {
//           rating: "4/5",
//           comment: "Satisfied with my purchase.",
//           date: "10-09-2025",
//           author: "Frank",
//         },
//       ],
//     },
//   },
//   {
//     image: "https://picsum.photos/seed/product5/200/200",
//     name: "Lenovo Chromebook - 4...",
//     currentPrice: "KSh 6,300",
//     originalPrice: "KSh 19,000",
//     discount: "-67%",
//     brand: "Lenovo",
//     features: ["4GB RAM", "11.6-inch display", "Chrome OS", "Lightweight"],
//     specifications: {
//       "Key Features": [
//         "Brand: Lenovo",
//         "Type: Chromebook",
//         "RAM: 4GB",
//         "OS: Chrome OS",
//       ],
//       "What's in the Box": "Lenovo Chromebook, Charger",
//     },
//     customerFeedback: {
//       ratings: "4.0/5",
//       verifiedRatings: 80,
//       reviews: [
//         {
//           rating: "4/5",
//           comment: "Perfect for students. Very fast.",
//           date: "14-09-2025",
//           author: "Emily",
//         },
//         {
//           rating: "5/5",
//           comment: "Love the battery life.",
//           date: "13-09-2025",
//           author: "George",
//         },
//         {
//           rating: "3/5",
//           comment: "Could be faster.",
//           date: "12-09-2025",
//           author: "Hannah",
//         },
//       ],
//     },
//   },
//   {
//     image: "https://picsum.photos/seed/product6/200/200",
//     name: "GUEETON Ultra-thin Wir...",
//     currentPrice: "KSh 378",
//     originalPrice: "KSh 1,506",
//     discount: "-76%",
//     brand: "GUEETON",
//     features: [
//       "Ultra-thin design",
//       "Silent clicks",
//       "Wireless connectivity",
//       "Ergonomic feel",
//     ],
//     specifications: {
//       "Key Features": [
//         "Brand: GUEETON",
//         "Type: Wireless Mouse",
//         "Design: Ultra-thin",
//         "Features: Silent clicks",
//       ],
//       "What's in the Box": "Wireless Mouse, USB receiver",
//     },
//     customerFeedback: {
//       ratings: "4.3/5",
//       verifiedRatings: 1714,
//       reviews: [
//         {
//           rating: "5/5",
//           comment: "Good package and good quality",
//           date: "11-09-2025",
//           author: "Irene",
//         },
//         {
//           rating: "5/5",
//           comment: "This is the best",
//           date: "15-09-2025",
//           author: "Brian",
//         },
//       ],
//     },
//   },
//   {
//     image: "https://picsum.photos/seed/product7/200/200",
//     name: "Another Computing Deal",
//     currentPrice: "KSh 1,200",
//     originalPrice: "KSh 2,000",
//     discount: "-40%",
//     brand: "Generic",
//     features: ["High performance", "Durable build", "Affordable"],
//     specifications: {
//       "Key Features": [
//         "Brand: Generic",
//         "Type: Electronic Accessory",
//         "Performance: High",
//         "Durability: High",
//       ],
//       "What's in the Box": "Accessory unit",
//     },
//     customerFeedback: {
//       ratings: "3.8/5",
//       verifiedRatings: 25,
//       reviews: [
//         {
//           rating: "4/5",
//           comment: "It works as expected.",
//           date: "05-09-2025",
//           author: "Peter",
//         },
//       ],
//     },
//   },
//   {
//     image: "https://picsum.photos/seed/product8/200/200",
//     name: "Mechanical Keyboard RGB",
//     currentPrice: "KSh 5,000",
//     originalPrice: "KSh 8,000",
//     discount: "-37.5%",
//     brand: "Gamers",
//     features: [
//       "RGB backlighting",
//       "Mechanical switches",
//       "Durable keycaps",
//       "Ergonomic layout",
//     ],
//     specifications: {
//       "Key Features": [
//         "Brand: Gamers",
//         "Type: Mechanical Keyboard",
//         "Features: RGB lighting",
//         "Switches: Mechanical",
//       ],
//       "What's in the Box": "Mechanical keyboard",
//     },
//     customerFeedback: {
//       ratings: "4.6/5",
//       verifiedRatings: 90,
//       reviews: [
//         {
//           rating: "5/5",
//           comment: "Great keyboard for gaming!",
//           date: "02-09-2025",
//           author: "Michael",
//         },
//       ],
//     },
//   },
// ];

// // ========================
// // UTILITY FUNCTIONS
// // ========================

// const renderStars = (ratingString) => {
//   if (!ratingString) return "No ratings yet";

//   const [rating] = ratingString.split("/");
//   const filledStars = Math.round(parseFloat(rating));
//   const stars = [];

//   for (let i = 0; i < 5; i++) {
//     stars.push(
//       <span
//         key={i}
//         className={`text-xl transition-colors duration-300 ${
//           i < filledStars ? "text-amber-400" : "text-slate-300"
//         }`}
//       >
//         ★
//       </span>
//     );
//   }

//   return <div className="flex items-center">{stars}</div>;
// };

// const getRatingSummary = (reviews) => {
//   const totalReviews = reviews.length;
//   const ratingsCount = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };

//   reviews.forEach((review) => {
//     const rating = parseInt(review.rating.split("/")[0], 10);
//     if (ratingsCount[rating] !== undefined) {
//       ratingsCount[rating]++;
//     }
//   });

//   return Object.keys(ratingsCount)
//     .reverse()
//     .map((rating) => {
//       const count = ratingsCount[rating];
//       const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
//       return {
//         rating: parseInt(rating, 10),
//         count,
//         percentage: Math.round(percentage),
//       };
//     });
// };

// // ========================
// // PRODUCT DETAIL COMPONENT
// // ========================

// const ProductDetailPage = ({ product }) => {
//   if (!product) {
//     return null;
//   }

//   const ratingSummary = getRatingSummary(product.customerFeedback.reviews);

//   return (
//     <div className="">
//       <div className="flex flex-col lg:flex-row border-b border-slate-200/60 pb-10 mb-10">
//         {/* Left Column - Product Images */}
//         <div className="w-full lg:w-1/3 p-6 border-r lg:border-r border-slate-200/60">
//           <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200/40">
//             <img
//               src={product.image}
//               alt={product.name}
//               className="w-full h-auto object-contain rounded-xl transform hover:scale-105 transition-transform duration-500"
//             />
//           </div>

//           {/* Thumbnail Images */}
//           <div className="flex justify-center mt-6 space-x-3">
//             <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-xl p-0.5 shadow-lg">
//               <img
//                 src={product.image}
//                 alt="thumbnail"
//                 className="w-full h-full object-cover rounded-xl cursor-pointer hover:scale-105 transition-transform duration-300"
//               />
//             </div>
//           </div>
//         </div>

//         {/* Middle Column - Product Details */}
//         <div className="w-full lg:w-1/3 p-6">
//           <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent mt-3 leading-tight">
//             {product.name}
//           </h2>

//           {/* Brand Info */}
//           <div className="flex items-center text-sm text-slate-600 mt-3">
//             Brand:
//             <span className="text-blue-600 ml-2 font-semibold hover:text-blue-700 transition-colors cursor-pointer">
//               {product.brand}
//             </span>
//             <span className="ml-3 text-slate-400">|</span>
//             <span className="text-blue-600 ml-3 hover:text-blue-700 transition-colors cursor-pointer">
//               Similar products from {product.brand}
//             </span>
//           </div>

//           {/* Ratings */}
//           <div className="flex items-center mt-4">
//             {renderStars(product.customerFeedback.ratings)}
//             <span className="ml-3 text-sm text-slate-600 bg-slate-100 px-2 py-1 rounded-full">
//               ({product.customerFeedback.verifiedRatings} verified ratings)
//             </span>
//           </div>

//           {/* Pricing */}
//           <div className="mt-6 bg-gradient-to-r from-slate-50 to-white border border-slate-200/50 rounded-2xl p-6 shadow-md">
//             <div className="flex items-baseline space-x-3">
//               <p className="text-xl font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
//                 {product.currentPrice}
//               </p>
//               <span className="text-l text-slate-500 line-through">
//                 {product.originalPrice}
//               </span>
//               <span className="text-l text-red-600 font-bold bg-red-50 px-3 py-1 rounded-full border border-red-200">
//                 {product.discount}
//               </span>
//             </div>
//             <div className="mt-3 space-y-1">
//               <p className="text-sm text-amber-700 font-semibold bg-amber-50 inline-block px-2 py-1 rounded-lg">
//                 Few units left
//               </p>
//             </div>
//           </div>

//           {/* Add to Cart Button */}
//           <button className="mt-8 w-full bg-orange-600 text-white py-4 px-8 rounded-2xl font-bold cursor-pointer">
//             <div className="flex items-center justify-center space-x-2">
//               <span>Add to cart</span>
//             </div>
//           </button>

//           {/* Promotions */}
//           <div className="mt-8 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200/50 rounded-2xl p-6 shadow-md">
//             <h3 className="text-lg font-bold text-slate-800 mb-3">
//               PROMOTIONS
//             </h3>
//             <div className="space-y-2">
//               <p className="text-sm text-blue-700 font-medium bg-blue-100 px-3 py-2 rounded-lg">
//                 Exclusive Deals | Call 0711011011 To Order
//               </p>
//               <p className="text-sm text-blue-700 font-medium bg-blue-100 px-3 py-2 rounded-lg">
//                 Easy and safer payments via the JumiaPay App.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Right Column - Delivery & Seller Info */}
//         <div className="w-full lg:w-1/3 p-6 border-l lg:border-l border-slate-200/60">
//           <div className="bg-gradient-to-br from-slate-50 via-white to-slate-50 p-6 rounded-2xl shadow-lg border border-slate-200/40">
//             <h3 className="text-sm font-bold text-slate-700 mb-4 uppercase tracking-wider">
//               DELIVERY & RETURNS
//             </h3>

//             {/* Location Selection */}
//             <div className="mt-4">
//               <div className="flex justify-between items-center text-sm mb-3">
//                 <p className="font-medium text-slate-700">
//                   Choose your location
//                 </p>
//                 <Link
//                   to="#"
//                   className="text-blue-600 hover:text-blue-700 font-semibold transition-colors"
//                 >
//                   Details
//                 </Link>
//               </div>
//               <select className="mt-2 w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all shadow-sm">
//                 <option>Nairobi</option>
//               </select>
//               <select className="mt-3 w-full p-3 border border-slate-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all shadow-sm">
//                 <option>CBD - UON/Globe/Koja/Riveri</option>
//               </select>
//             </div>

//             {/* Seller Information */}
//             <div className="mt-6 border-t border-slate-200 pt-6">
//               <h4 className="text-md font-bold text-slate-800 mb-2 uppercase tracking-wider">
//                 SELLER INFORMATION
//               </h4>
//               <p className="text-lg font-semibold text-slate-800 mb-1">Jumia</p>
//               <div className="flex items-center space-x-2">
//                 <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
//                 <p className="text-sm text-emerald-700 font-bold">
//                   100% Seller Score
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ======================== */}
//       {/* PRODUCT DETAILS SECTION */}
//       {/* ======================== */}
//       <div className="p-6 border-b border-slate-200/60 mb-8">
//         <h3 className="text-2xl font-bold text-slate-800 mb-4">
//           Product details
//         </h3>
//         <div className="bg-gradient-to-r from-slate-50 to-white p-6 rounded-2xl border border-slate-200/40 shadow-sm">
//           <p className="text-slate-700 leading-relaxed">
//             Crafted from carefully selected materials & finished brilliantly,
//             this elegant product gets you that head turning performance that you
//             have always wanted at all occasions. This astonishing device is for
//             users who desire to make a statement. So make the most of your
//             experience with elegance and style that keeps you noticed every
//             time.
//           </p>

//           {/* Features List */}
//           <h4 className="font-bold text-slate-800 mt-6 mb-3">Features</h4>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//             {product.features.map((feature, index) => (
//               <div
//                 key={index}
//                 className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-sm border border-slate-200/40"
//               >
//                 <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
//                 <span className="text-slate-700">{feature}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* ======================== */}
//       {/* SPECIFICATIONS SECTION */}
//       {/* ======================== */}
//       <div className="p-6 border-b border-slate-200/60 mb-8">
//         <h3 className="text-2xl font-bold text-slate-800 mb-6">
//           Specifications
//         </h3>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Key Features */}
//           <div className="bg-gradient-to-br from-slate-50 via-white to-slate-50 p-6 rounded-2xl shadow-lg border border-slate-200/40">
//             <h4 className="font-bold text-slate-800 mb-4 uppercase tracking-wider">
//               KEY FEATURES
//             </h4>
//             <div className="space-y-3">
//               {product.specifications["Key Features"].map((item, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center space-x-2 text-slate-700"
//                 >
//                   <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
//                   <span>{item}</span>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* What's in the Box */}
//           <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 rounded-2xl shadow-lg border border-blue-200/40">
//             <h4 className="font-bold text-slate-800 mb-4 uppercase tracking-wider">
//               WHAT'S IN THE BOX
//             </h4>
//             <p className="text-slate-700 leading-relaxed">
//               {product.specifications["What's in the Box"]}
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* ======================== */}
//       {/* CUSTOMER FEEDBACK SECTION */}
//       {/* ======================== */}
//       <div className="p-6">
//         <h3 className="text-2xl font-bold text-slate-800 mb-6">
//           Customer Feedback
//         </h3>
//         <div className="flex flex-col md:flex-row md:space-x-8">
//           {/* Review Summary Column */}
//           <div className="w-full md:w-1/2 md:pr-6">
//             {/* Overall Rating */}
//             <div className="bg-gradient-to-br from-amber-50 via-white to-orange-50 p-6 rounded-2xl shadow-lg border border-amber-200/40 mb-6">
//               <div className="flex items-center space-x-6 mb-4">
//                 <div className="text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
//                   {product.customerFeedback.ratings}
//                 </div>
//                 <div className="flex flex-col">
//                   {renderStars(product.customerFeedback.ratings)}
//                   <span className="text-sm text-slate-600 mt-1 bg-slate-100 px-2 py-1 rounded-full inline-block w-fit">
//                     {product.customerFeedback.verifiedRatings} verified ratings
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Rating Breakdown */}
//             <div className="bg-gradient-to-br from-slate-50 via-white to-slate-50 p-6 rounded-2xl shadow-lg border border-slate-200/40">
//               <h4 className="text-lg font-bold text-slate-800 mb-4">
//                 Reviews Summary
//               </h4>
//               <div className="space-y-3">
//                 {ratingSummary.map((summary) => (
//                   <div
//                     key={summary.rating}
//                     className="flex items-center space-x-3"
//                   >
//                     <span className="w-16 text-sm text-slate-700 font-semibold">
//                       {summary.rating} star
//                     </span>
//                     <div className="flex-1 bg-slate-200 rounded-full h-3 overflow-hidden shadow-inner">
//                       <div
//                         className="bg-gradient-to-r from-orange-500 to-red-500 h-3 rounded-full transition-all duration-500 shadow-sm"
//                         style={{ width: `${summary.percentage}%` }}
//                       ></div>
//                     </div>
//                     <span className="w-12 text-right text-sm text-slate-700 font-semibold bg-slate-100 px-2 py-1 rounded-full">
//                       {summary.percentage}%
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Customer Reviews Column */}
//           <div className="w-full md:w-1/2 md:pl-6 md:border-l md:border-slate-200/60">
//             <div className="space-y-4">
//               {product.customerFeedback.reviews.map((review, index) => (
//                 <div
//                   key={index}
//                   className="bg-gradient-to-br from-white via-slate-50 to-white p-6 rounded-2xl shadow-lg border border-slate-200/40 hover:shadow-xl transition-shadow duration-300"
//                 >
//                   <div className="flex items-center mb-3">
//                     {renderStars(review.rating)}
//                   </div>
//                   <p className="text-slate-800 font-semibold mb-2 leading-relaxed">
//                     {review.comment}
//                   </p>
//                   <p className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full inline-block">
//                     {review.date} by {review.author}
//                   </p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// // ========================
// // PRODUCT CARD COMPONENT
// // ========================

// const ProductCard = ({ product, onClick }) => (
//   <div
//     className="group flex-shrink-0 w-60 rounded-lg transition-all duration-500 ease-out hover:shadow-2xl hover:scale-[1.02] cursor-pointer border border-slate-200/50 backdrop-blur-sm overflow-hidden"
//     onClick={() => onClick(product)}
//   >
//     {/* Product Image Section */}
//     <div className="h-40 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
//       <img
//         src={product.image}
//         alt={product.name}
//         className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700 relative z-10"
//       />
//     </div>

//     {/* Product Info Section */}
//     <div className="p-3 bg-gradient-to-t from-white to-slate-50">
//       <h3 className="text-sm font-bold text-slate-800 mb-2 line-clamp-2 group-hover:text-orange-600 transition-colors duration-300">
//         {product.name}
//       </h3>
//       <div className="flex items-center justify-between">
//         <div className="flex flex-col">
//           <p className="text-lg font-bold bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">
//             {product.currentPrice}
//           </p>
//           <p className="text-sm text-slate-500 line-through">
//             {product.originalPrice}
//           </p>
//         </div>
//         <div className="text-l text-red-600 font-bold bg-red-50 px-2 py-1 rounded-lg border border-red-200 flex-shrink-0 ml-2">
//           {product.discount}
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const ScrollButton = ({ direction, onClick }) => (
//   <button
//     onClick={onClick}
//     className={`absolute ${
//       direction === "left" ? "left-4" : "right-4"
//     } top-1/2 transform -translate-y-1/2 p-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-xl z-10 border border-slate-200/50 hover:bg-white hover:scale-110 transition-all duration-300 group`}
//   >
//     {direction === "left" ? (
//       <ChevronLeftIcon className="text-slate-600 group-hover:text-orange-600" />
//     ) : (
//       <ChevronRightIcon className="text-slate-600 group-hover:text-orange-600" />
//     )}
//   </button>
// );

// // ========================
// // HEADER SECTION COMPONENT
// // ========================

// const HeaderSection = () => (
//   <div className="bg-orange-500 p-2 relative overflow-hidden">
//     <div className="relative flex justify-between items-center">
//       <div className="flex items-center space-x-3">
//         <h2 className="text-xl font-bold text-white tracking-wide">
//           Computing Deals
//         </h2>
//       </div>
//       <Link to="#" className="flex items-center text-white px-2 py-2 ">
//         See All <ChevronRightIcon className="ml-2" />
//       </Link>
//     </div>
//   </div>
// );

// // ========================
// // PRODUCT CAROUSEL COMPONENT
// // ========================

// const ProductCarousel = ({ products, onProductClick }) => {
//   const scrollContainerRef = useRef(null);

//   const scroll = (direction) => {
//     if (scrollContainerRef.current) {
//       const { scrollLeft } = scrollContainerRef.current;
//       const cardWidth = 240 + 24; // card width + margin
//       const scrollAmount =
//         direction === "left" ? -cardWidth * 2 : cardWidth * 2;

//       scrollContainerRef.current.scrollTo({
//         left: scrollLeft + scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div className="relative bg-gradient-to-b from-white to-slate-50 py-4">
//       <div
//         ref={scrollContainerRef}
//         className="flex py-3 space-x-6 px-4 overflow-x-scroll scrollbar-hide"
//         style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
//       >
//         {products.map((product, index) => (
//           <ProductCard key={index} product={product} onClick={onProductClick} />
//         ))}
//       </div>

//       {/* Scroll Navigation Buttons */}
//       <ScrollButton direction="left" onClick={() => scroll("left")} />
//       <ScrollButton direction="right" onClick={() => scroll("right")} />
//     </div>
//   );
// };

// // ========================
// // MODAL COMPONENT
// // ========================

// const Modal = ({ isOpen, onClose, children }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex justify-center items-start pt-8">
//       <div className="relative bg-gradient-to-br from-white via-slate-50 to-white w-full max-w-7xl h-fit rounded-lg shadow-2xl border border-slate-200/50 mx-4">
//         {/* Close Button */}
//         <button
//           onClick={onClose}
//           className="absolute top-6 right-6 text-slate-500 hover:text-slate-800 z-50 p-3 rounded-lg bg-white/90 backdrop-blur-sm shadow-xl border border-slate-200/50 hover:scale-110 transition-all duration-300"
//         >
//           <CloseIcon />
//         </button>
//         {children}
//       </div>
//     </div>
//   );
// };

// // ========================
// // MAIN APP COMPONENT
// // ========================

// const App = () => {
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   const handleCardClick = (product) => {
//     setSelectedProduct(product);
//   };

//   const closeModal = () => {
//     setSelectedProduct(null);
//   };

//   return (
//     <div className="font-sans antialiased text-slate-800 min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-white p-3 relative">
//       <div className="max-w-7xl mx-auto rounded-lg overflow-hidden shadow-2xl border border-slate-200/50 backdrop-blur-sm">
//         {/* Header Section */}
//         <HeaderSection />

//         {/* Product Carousel */}
//         <ProductCarousel products={products} onProductClick={handleCardClick} />
//       </div>

//       {/* Product Detail Modal */}
//       <Modal isOpen={!!selectedProduct} onClose={closeModal}>
//         <ProductDetailPage product={selectedProduct} />
//       </Modal>
//     </div>
//   );
// };

// export default App;