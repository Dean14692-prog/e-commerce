

import React, { useRef } from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import FlashSales from './components/FlashSale';
import CardButtons from './components/CardButtons';
import ComputingDeals from './components/ComputingDeals';

const App = () => {
  const heroBannerRef = useRef(null);

  return (
    <div className="min-h-screen font-sans bg-[#1a2037]">
      <Navbar />
      <div className="container mx-auto px-4 mt-4 flex space-x-4">
        <Sidebar heroBannerRef={heroBannerRef} />
        <MainContent heroBannerRef={heroBannerRef} />
      </div>
      <div>
        <ComputingDeals />
        {/* <FlashSales /> */}
        <CardButtons />
        <ComputingDeals />
        <ComputingDeals />
        <ComputingDeals />
        <ComputingDeals />
        <ComputingDeals />
        <ComputingDeals />
        <ComputingDeals />
      </div>
    </div>
  );
};

export default App;