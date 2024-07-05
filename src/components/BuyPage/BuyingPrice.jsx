import React, {useContext} from "react";
import {AccessPointNetworkIcon} from "../svg-icons/icons";
import AppContext from "../../context/context";
import {currencyFormatter} from "../../context/invest.utls";

const BuyingPriceCard = () => {

  const appCtx = useContext(AppContext)

  return (
    <div className="bg-white all-sides-shadow px-4 py-0 rounded-lg my-0 flex-col flex-shrink relative z-20">
      <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md border border-2px mt-0 mb-6">
        <div className="flex flex-col">
          <span className="text-yellow-400 font-semibold">Buying Price </span>
          <span className="text-sm font-bold mt-1">{currencyFormatter.format(appCtx.goldPricePerGram)} price per gram</span>
        </div>
        <div className="flex flex-col">
          <span className="text-pink-400 font-semibold flex text-sm items-center">
            Live{" "}
            <span>
              <AccessPointNetworkIcon className="text-pink-400 fill-current ml-2 mt-0"/>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BuyingPriceCard;
