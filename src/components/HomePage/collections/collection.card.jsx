import React from "react";
import {ArrowRightIcon} from "../../svg-icons/icons";
import goldBarImage from "../../../assets/images/gold-bar.png";
import Button from "../../Button";
import {calculatePrice, currencyFormatter} from "../../../context/invest.utls";

const CollectionCard = React.memo((props) => {
  const data = props.data || {};

  return (
    <>
      <div className="flex bg-[#2b2b2b] rounded-[8px] p-[20px] justify-between w-full">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col mb-5">
            <h1 className="text-white font-medium text-base sm:text-lg md:text-xl mb-1">
              {data.collectionName}
            </h1>
            <h2 className="text-white">
              <span className={"text-[12px] sm:text-[16px]"}>{calculatePrice(data.totalPrice, data.goldPrice)}</span>
              <span className={"text-[12px] sm:text-[14px] ml-1"}>of Gold</span>
            </h2>

            <h2 className="text-white font-medium mt-4 text-base sm:text-lg md:text-xl mb-1">
              Investing
            </h2>
            <h2 className="text-white text-[12px] sm:text-[16px]">{currencyFormatter.format(data.totalPrice)} yearly</h2>
          </div>

          <div className={"mt-auto"}>
            <Button
              onClick={() => props.viewDialog()}
              className="!border-white px-4 whitespace-nowrap !h-8"
              text="Quick View"
              icon={<ArrowRightIcon />}
              iconPosition="after"
              color="bg-transparent"
              textColor="text-white"
            />
          </div>
        </div>

        <div className="flex w-32 md:w-36">
          <img alt="gold-bar" src={goldBarImage} className="object-contain" />
        </div>
      </div>
    </>
  );
});

export default CollectionCard;
