import React from 'react'
import CardButtons from '../components/CardButtons'
import Sidebar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import ComputingDeals from "../components/ComputingDeals"

const HomePage = () => {
  return (
    <div>
      <div className="container mx-auto px-4 mt-4 flex space-x-4">
        <Sidebar />
        <MainContent />
      </div>
      <ComputingDeals />
      <CardButtons />
      <ComputingDeals />
      <ComputingDeals />
    </div>
  );
}

export default HomePage
