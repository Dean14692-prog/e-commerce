// // src/components/MainContent.js

// import React from "react";
// import HeroBanner from "./HeroBanner";
// import FlashSales from "./FlashSale";

// const MainContent = () => {
//   return (
//     <section className="flex-1 space-y-4">
//       <HeroBanner />
//       <FlashSales />
//       {/* You would add more sections here like:
//       <OfficialStores />
//       <DealsOfTheDay />
//       <ProductGrid />
//       */}
//     </section>
//   );
// };

// export default MainContent;


import React from "react";
import HeroBanner from "./HeroBanner";
import FlashSales from "./FlashSale";

// Receive the ref as a prop
const MainContent = ({ heroBannerRef }) => {
  return (
    <section className="flex-1 space-y-4 mr-10" ref={heroBannerRef}>
      <HeroBanner />
    </section>
  );
};

export default MainContent;