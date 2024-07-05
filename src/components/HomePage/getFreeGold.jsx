import React from "react";
import MoneyPhone from "../../../src/assets/images/3D_Money_Phone.svg";

const GetFreegold = () => {

  return (
    <div className="flex justify-between bg-[#FBFBFB] rounded-lg shadow-md border border-2px mt-0 mb-4 p-4 h-[170px] overflow-hidden relative pt-5">
      <div className="p-0 relative">
        <div className="font-sans text-lg font-medium mb-2 leading-tight text-left">
          Get Free Gold
        </div>
        <div className="font-sans text-sm font-normal leading-tight text-left text-yellow-400">
          Referral Rewards
        </div>
      </div>

      <img
        alt="gold-bar"
        src={MoneyPhone}
        className="object-contain absolute end-0 bottom-0 max-h-[120px]"
      />
    </div>
  );
};

export default GetFreegold;
