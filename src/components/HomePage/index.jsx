import React from "react";
import AppHeader from "../layouts/header";
import Collections from "./collections";
import Invest from "./invest";
import GrowthChart from "./growthChart";
import GoldPriceLiveStatus from "./liveStatus";
import GetFreegold from "./getFreeGold";

const HomePage = () => {
  return (
    <div className="flex-1 overflow-y-auto px-4 container-xl mx-auto pb-20">
      <AppHeader />
      <Collections />
      <GoldPriceLiveStatus />
      <Invest />
      <GrowthChart />
      <GetFreegold />
    </div>
  );
};

export default HomePage;
