import React, {useContext} from "react";
import {AccessPointNetworkIcon} from "../svg-icons/icons";
import {currencyFormatter} from "../../context/invest.utls";
import AppContext from "../../context/context";

const GoldPriceLiveStatus = () => {
  const appCtx = useContext(AppContext)
    const activeCollection = appCtx.getActiveCollection()
    const activeCollectionGoldPrice = activeCollection ? activeCollection.goldPrice : appCtx.goldPricePerGram
  return (
    <div className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md border border-2px mt-0 mb-6">
      <div className="flex flex-col">
        <span className="text-pink-400 font-semibold flex text-sm items-center">
          Live{" "}
          <span>
            <AccessPointNetworkIcon className={"text-pink-400 fill-current ml-2 mt-0"}/>
          </span>
        </span>
        <span className="text-black text-xs md:text-sm mt-1">Gold Prices Per Gram</span>
      </div>
      <div className="flex flex-col items-center">
        <div className="justify-between w-full">
          <span className="text-gray-400 mr-2 text-sm">Buy</span>
        </div>
        <div className="justify-between w-full">
          <span className="font-semibold text-gray-900 text-sm">{currencyFormatter.format(activeCollectionGoldPrice)}</span>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="justify-between w-full mt-0">
          <span className="text-gray-400 mr-2 text-sm">Sell</span>
        </div>
        <div className="justify-between w-full mt-0">
          <span className="font-semibold text-gray-900 text-sm">{currencyFormatter.format(appCtx.goldPricePerGram)}</span>
        </div>
      </div>
    </div>
  );
};

export default GoldPriceLiveStatus;
