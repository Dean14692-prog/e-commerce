import React, { useState, useEffect } from "react";
import { ClockIcon } from "@heroicons/react/24/solid";

const FlashSales = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2025-12-31T23:59:59") - +new Date();
    let timeLeft = { hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-red-600 p-4 rounded-md text-white flex items-center justify-between mt-4 mx-[66px]">
      <h3 className="font-bold text-xl">Flash Sales | Live Now</h3>
      <div className="flex items-center space-x-2 text-sm">
        <ClockIcon className="h-5 w-5 text-white" />
        <p>Time Left:</p>
        <div className="flex items-center space-x-1">
          <span className="font-mono bg-white text-black px-2 py-1 rounded-md">
            {String(timeLeft.hours).padStart(2, "0")}h
          </span>
          <span className="font-mono bg-white text-black px-2 py-1 rounded-md">
            {String(timeLeft.minutes).padStart(2, "0")}m
          </span>
          <span className="font-mono bg-white text-black px-2 py-1 rounded-md">
            {String(timeLeft.seconds).padStart(2, "0")}s
          </span>
        </div>
      </div>
      <button className="text-sm font-semibold hover:underline">See All</button>
    </div>
  );
};

export default FlashSales;


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