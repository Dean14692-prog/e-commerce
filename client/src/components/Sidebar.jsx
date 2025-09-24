// import React, { useState, useEffect, useRef } from "react";
// import { ChevronRightIcon } from "@heroicons/react/20/solid";
// import { categoriesData } from "../data/categoriesData";

// const Sidebar = ({ heroBannerRef }) => {
//   const [activeCategory, setActiveCategory] = useState(null);
//   const [popupPos, setPopupPos] = useState({
//     top: 0,
//     left: 0,
//     width: 0,
//     height: 0,
//   });

//   useEffect(() => {
//     const updatePos = () => {
//       if (heroBannerRef?.current) {
//         const rect = heroBannerRef.current.getBoundingClientRect();
//         setPopupPos({
//           top: Math.max(rect.top, 0),
//           left: rect.left,
//           width: rect.width,
//           height: rect.height,
//         });
//       }
//     };

//     updatePos();
//     window.addEventListener("resize", updatePos);
//     window.addEventListener("scroll", updatePos, { passive: true });

//     let ro;
//     if (heroBannerRef?.current && typeof ResizeObserver !== "undefined") {
//       ro = new ResizeObserver(updatePos);
//       ro.observe(heroBannerRef.current);
//     }

//     return () => {
//       window.removeEventListener("resize", updatePos);
//       window.removeEventListener("scroll", updatePos);
//       if (ro) ro.disconnect();
//     };
//   }, [heroBannerRef]);

//   return (
//     <aside className="relative w-1/6 h-[400px] p-4 bg-white rounded-md shadow-sm z-30 ml-10">
//       <ul className="text-sm text-gray-700">
//         {categoriesData.map((category) => (
//           <li
//             key={category.name}
//             className="relative"
//             onMouseEnter={() => setActiveCategory(category)}
//           >
//             <div className="flex items-center justify-between cursor-pointer group py-1 px-2 rounded-md hover:bg-gray-50 transition-colors">
//               <div className="flex items-center space-x-2">
//                 <category.icon className="h-5 w-5 text-gray-500 group-hover:text-orange-500" />
//                 <span className="group-hover:text-orange-500">
//                   {category.name}
//                 </span>
//               </div>
//               {Object.keys(category.megaMenu).length > 0 && (
//                 <ChevronRightIcon className="h-4 w-4 text-gray-400 group-hover:text-orange-500" />
//               )}
//             </div>
//           </li>
//         ))}
//       </ul>

//       {/* Mega-menu popup */}
//       {activeCategory &&
//         activeCategory.megaMenu &&
//         Object.keys(activeCategory.megaMenu).length > 0 && (
//           <div
//             className="fixed bg-white rounded-md shadow-lg border border-gray-200 z-50 overflow-hidden"
//             style={{
//               top: `${popupPos.top}px`,
//               left: `${popupPos.left}px`,
//               width: `${popupPos.width}px`,
//               height: `400px`, // Hardcoded height
//             }}
//             onMouseEnter={() => setActiveCategory(activeCategory)}
//             onMouseLeave={() => setActiveCategory(null)}
//           >
//             <div className="h-full p-6 overflow-y-auto">
//               <div className="grid grid-cols-4 gap-x-8 gap-y-4 h-full">
//                 {Object.entries(activeCategory.megaMenu).map(
//                   ([header, items], index) => (
//                     <div key={index}>
//                       <h3 className="font-bold text-gray-800 uppercase mb-2">
//                         {header}
//                       </h3>
//                       <ul className="space-y-1">
//                         {items.map((item, itemIndex) => (
//                           <li key={itemIndex}>
//                             <a
//                               href="#"
//                               className="block text-gray-600 hover:text-orange-500 transition-colors cursor-pointer"
//                               onClick={(e) => e.preventDefault()}
//                             >
//                               {item}
//                             </a>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   )
//                 )}
//               </div>
//             </div>
//           </div>
//         )}
//     </aside>
//   );
// };

// export default Sidebar;

import React, { useState, useEffect, useRef } from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { categoriesData } from "../data/categoriesData";

const Sidebar = ({ heroBannerRef }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [popupPos, setPopupPos] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updatePos = () => {
      if (heroBannerRef?.current) {
        const rect = heroBannerRef.current.getBoundingClientRect();
        setPopupPos({
          top: Math.max(rect.top, 0),
          left: rect.left,
          width: rect.width,
          height: rect.height,
        });
      }
    };

    updatePos();
    window.addEventListener("resize", updatePos);
    window.addEventListener("scroll", updatePos, { passive: true });

    let ro;
    if (heroBannerRef?.current && typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(updatePos);
      ro.observe(heroBannerRef.current);
    }

    return () => {
      window.removeEventListener("resize", updatePos);
      window.removeEventListener("scroll", updatePos);
      if (ro) ro.disconnect();
    };
  }, [heroBannerRef]);

  return (
    <aside className="relative w-full md:w-1/6 h-fit md:h-[400px] p-4 bg-white rounded-md shadow-sm z-30 md:ml-10">
      <ul className="text-sm text-gray-700">
        {categoriesData.map((category) => (
          <li
            key={category.name}
            className="relative"
            onMouseEnter={() => setActiveCategory(category)}
          >
            <div className="flex items-center justify-between cursor-pointer group py-1 px-2 rounded-md hover:bg-gray-50 transition-colors">
              <div className="flex items-center space-x-2">
                <category.icon className="h-5 w-5 text-gray-500 group-hover:text-orange-500" />
                <span className="group-hover:text-orange-500">
                  {category.name}
                </span>
              </div>
              {Object.keys(category.megaMenu).length > 0 && (
                <ChevronRightIcon className="h-4 w-4 text-gray-400 group-hover:text-orange-500" />
              )}
            </div>
          </li>
        ))}
      </ul>

      {/* Mega-menu popup */}
      {activeCategory &&
        activeCategory.megaMenu &&
        Object.keys(activeCategory.megaMenu).length > 0 && (
          <div
            className="absolute md:fixed bg-white rounded-md shadow-lg border border-gray-200 z-50 overflow-hidden"
            style={{
              top: window.innerWidth < 768 ? "100%" : `${popupPos.top}px`,
              left: window.innerWidth < 768 ? "0" : `${popupPos.left}px`,
              width: window.innerWidth < 768 ? "100%" : `${popupPos.width}px`,
              height: `400px`, // Hardcoded height
            }}
            onMouseEnter={() => setActiveCategory(activeCategory)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <div className="h-full p-6 overflow-y-auto">
              <div className="grid grid-cols-4 gap-x-8 gap-y-4 h-full">
                {Object.entries(activeCategory.megaMenu).map(
                  ([header, items], index) => (
                    <div key={index}>
                      <h3 className="font-bold text-gray-800 uppercase mb-2">
                        {header}
                      </h3>
                      <ul className="space-y-1">
                        {items.map((item, itemIndex) => (
                          <li key={itemIndex}>
                            <a
                              href="#"
                              className="block text-gray-600 hover:text-orange-500 transition-colors cursor-pointer"
                              onClick={(e) => e.preventDefault()}
                            >
                              {item}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        )}
    </aside>
  );
};

export default Sidebar;