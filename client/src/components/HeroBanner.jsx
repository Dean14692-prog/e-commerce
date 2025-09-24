import React, { useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { banners } from "../data/bannerData";

const HeroBanner = () => {
  const [currentBanner, setCurrentBanner] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length);
  };

  const goToNext = () => {
    setCurrentBanner((prev) => (prev + 1) % banners.length);
  };

  const {
    heading,
    subheading,
    description,
    buttonText,
    image,
    alt,
    bgClass,
    textPosition,
  } = banners[currentBanner];

  // Helper for text alignment
  const textAlignmentClass =
    textPosition === "center"
      ? "items-center text-center"
      : "items-start text-left";

  return (
    <div
      className={`relative ${bgClass} p-8 rounded-md text-white overflow-hidden h-auto md:h-[400px] flex flex-col md:flex-row`}
    >
      {/* Background elements for Blender banner - Specific to banner ID 3 */}
      {banners[currentBanner].id === 3 && (
        <>
          <div className="absolute right-0 top-0 h-full w-1/3 bg-green-700 clip-path-polygon-[15%_0%,_100%_0%,_100%_100%,_0%_100%] hidden md:block">
            <div
              className="absolute inset-0 opacity-10 bg-no-repeat bg-right-bottom"
              style={{
                backgroundImage: `url('https://ke.jumia.is/cms/Homepage/2023/wk39/ME-Blender_HP_Desktop.png')`,
                backgroundSize: "20%",
              }}
            ></div>
          </div>
        </>
      )}

      {/* Navigation Buttons */}
      <button
        onClick={goToPrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 p-2 bg-black bg-opacity-30 rounded-full text-white hover:bg-opacity-50 transition-all"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 p-2 bg-black bg-opacity-30 rounded-full text-white hover:bg-opacity-50 transition-all"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>

      {/* Banner Text Content */}
      <div
        className={`relative z-10 flex flex-col justify-center h-full w-full md:w-2/3 ${textAlignmentClass} text-center md:text-left`}
      >
        {heading}
        {subheading && <div className="mt-2">{subheading}</div>}
        {description && <div className="mt-2">{description}</div>}
        {buttonText && (
          <button className="mt-6 py-2 px-6 rounded-md font-semibold text-sm bg-white text-black hover:opacity-90 transition-opacity self-center md:self-start">
            {buttonText}
          </button>
        )}
      </div>

      {/* Image Container */}
      <div className="relative md:absolute inset-y-0 right-0 w-full md:w-1/3">
        <img
          src={image}
          alt={alt}
          className="h-full w-full object-cover object-right"
        />
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={`h-2 w-2 rounded-full ${
              currentBanner === index ? "bg-white" : "bg-gray-400"
            } transition-colors`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
