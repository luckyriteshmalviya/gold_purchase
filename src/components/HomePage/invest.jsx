import React from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import {AutoInvestIcon, BuyGoldIcon} from "../svg-icons/icons";

const Invest = () => {
  const navigate = useNavigate();


  const handleBuyGoldClick = () => {
    navigate("/buy");
  };

  const handleAutoInvestClick = () => {
    console.log("Auto Invest button clicked");
  };

  return (
    <div className="flex mt-0 !mb-6 pb-4 md:pb-12 gap-6 mx-auto">
      <Button
        text="Buy Gold"
        icon={<BuyGoldIcon/>}
        color="bg-[#2b2b2b]"
        textColor="text-white"
        onClick={handleBuyGoldClick}
        iconPosition="before"
      />

      <Button
        text="Auto Invest"
        icon={<AutoInvestIcon/>}
        color="bg-white"
        textColor="text-black"
        className={""}
        disabled
        onClick={handleAutoInvestClick}
        iconPosition="before"
      />
    </div>
  );
};
export default Invest;
