import React, {useContext, useEffect} from "react";
import BuyHeaderComponent from "./BuyHeader";
import BuyingPriceCard from "./BuyingPrice";
import AmountForBuyComponent from "./AmountForBuy";
import {useNavigate} from "react-router-dom";
import AppContext from "../../context/context";
import {toast} from "react-toastify";

var showAlert = false
const BuyPage = () => {

    const navigate = useNavigate();
    const appCtx = useContext(AppContext)

    useEffect(() => {
        if (appCtx.buyDetails) {
            if (!showAlert) {
                showAlert = true
                toast.info("You already have a process in progress to buy gold. Please complete the process.")
            }
            navigate("/pre-purchase-info")
        }
        return () => {
            showAlert = false
        }
        // eslint-disable-next-line
    }, [appCtx.buyDetails])


  return (
    <>
      <BuyHeaderComponent />
      <BuyingPriceCard />
      <AmountForBuyComponent />
    </>
  );
};
export default BuyPage;
