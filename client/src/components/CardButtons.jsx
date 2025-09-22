import React from "react";
import { cardButtonsData } from "../data/cardButtonsData";

const CardButtons = () => {
  return (
    <div className="bg-transparent p-4 rounded-md shadow-sm mt-4 ml-16.5 mr-16.5">
      <div className="flex justify-between items-start flex-wrap -mx-2">
        {cardButtonsData.map((item, index) => (
          <a
            key={index}
            href="#" // Placeholder for navigation
            className="w-1/6 px-2 mb-4 flex flex-col items-center text-center group transition-all duration-300 transform hover:scale-105 hover:shadow-lg rounded-md"
          >
            <div className="relative w-28 h-28 rounded-full overflow-hidden border border-gray-200 shadow-sm flex items-center justify-center">
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-contain"
              />
              {item.badgeUrl && (
                <div className="absolute top-0 right-0 transform translate-x-1/4 -translate-y-1/4">
                  <img src={item.badgeUrl} alt="badge" className="w-8 h-8" />
                </div>
              )}
            </div>
            <p className="mt-2 text-sm font-semibold text-orange-400 group-hover:text-orange-500 transition-colors duration-300">
              {item.title}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default CardButtons;
