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
