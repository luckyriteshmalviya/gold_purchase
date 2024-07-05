import React, { useContext, useState } from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";
import { calculatePrice } from "../../context/invest.utls";
import { InfoIcon } from "../svg-icons/icons";
import classNames from "classnames";
import AppContext from "../../context/context";

const AmountForBuyComponent = () => {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");
  const [collectionName, setCollectionName] = useState({
    value: "",
    changed: false,
  });
  const [hasInteracted, setHasInteracted] = useState(false);
  const appCtx = useContext(AppContext);

  const handleAmountChange = (event) => {
    let value = event.target.value;
    if (value.includes("-")) {
      value = value.replace("-", "");
    }
    const floatValue = parseFloat(value);
    const intValue = parseInt(value);

    if (isNaN(floatValue)) {
      setAmount("");
    } else {
      setAmount(value.includes(".") ? floatValue : intValue);
    }

    if (!hasInteracted) {
      setHasInteracted(true);
    }
  };

  const amountValid = parseFloat(amount) >= 20;

  const handleContinueClick = () => {
    if (amountValid && (collectionName.value.length || "") > 5) {
      appCtx.updateContext({
        buyDetails: {
          amount,
          collectionName: collectionName.value,
        },
      });
      navigate("/pre-purchase-info");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 pb-20">
      <div className={"flex flex-col items-center justify-center pb-10"}>
        <h1 className="text-lg font-medium mb-4 mt-0">
          Future Investment Target
        </h1>
        <div className="flex items-center border-b-2 border-gray-500 py-2 max-w-80">
          <input
            type="text"
            className="bg-transparent border-none w-full text-gray-400 text-center mr-3 py-1 px-2 leading-tight text-4xl focus:outline-none no-arrows appearance-none font-extralight"
            placeholder="Collection Name"
            aria-label="CollectionName"
            value={collectionName.value}
            maxLength={20}
            onChange={(e) => {
              const regex = /^[a-zA-Z\s]*$/;
              if (regex.test(e.target.value)) {
                setCollectionName((prevState) => ({
                  ...prevState,
                  value: e.target.value,
                  changed: true,
                }));
              }
            }}
          />
        </div>
        {collectionName.changed && (collectionName.value || "").length < 6 && (
          <span className="text-red-500 mt-3">
            The collection name{" "}
            {(collectionName.value || "").length < 6
              ? " must be at least 5 characters long."
              : " is required"}
          </span>
        )}
      </div>

      <h1 className="text-lg font-medium mb-4">How much do you want to buy?</h1>
      <div className="flex items-center border-b-2 border-gray-500 py-2 max-w-52">
        <span className="text-3xl mr-2 text-gray-400 font-light">₹</span>
        <input
          type="number"
          className="bg-transparent border-none w-full text-gray-400 text-center mr-3 py-1 px-2 leading-tight text-4xl focus:outline-none no-arrows appearance-none font-extralight"
          placeholder="0.00"
          aria-label="Amount"
          value={amount}
          onChange={handleAmountChange}
        />
      </div>
      {hasInteracted && !amountValid && (
        <span className="text-red-500 mt-3">
          The minimum value should be ₹20
        </span>
      )}
      {amountValid && (
        <div className="px-4">
          <div className="flex items-center p-4 bg-blue-50 border w-full rounded-md border-blue-200 mt-10">
            <InfoIcon className="text-blue-500 mr-2" />

            <div className="text-sm">
              <p className="font-medium">
                You’ll approximately get{" "}
                <span className="font-bold">
                  {calculatePrice(parseFloat(amount), appCtx.goldPricePerGram)}
                </span>{" "}
                gold.
              </p>
              <p className="text-gray-600">
                The buying price may fluctuate and is different to the selling
                price of gold.
              </p>
            </div>
          </div>
        </div>
      )}
      <div className="w-[95%] max-w-3xl mx-auto md:py-10 md:pb-3 left-0 right-0 bottom-20 z-20 py-4">
        <Button
          text="Continue"
          color="bg-black"
          textColor="text-white"
          onClick={handleContinueClick}
          className={classNames({
            "disabled:opacity-65":
              !amountValid || (collectionName.value || "").length < 6,
          })}
          disabled={!amountValid || (collectionName.value || "").length < 6}
        />
      </div>
    </div>
  );
};

export default AmountForBuyComponent;
