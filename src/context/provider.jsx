import React, {useEffect, useState} from "react";
import AppContext from "./context";
import {
  calculatePrice,
  getInvestmentCollection, getSetActiveCollectionIndex,
  getSetGoldPrice,
  setInvestmentCollection
} from "./invest.utls";
import {toast} from "react-toastify";

const AppContextProvider = React.memo((props) => {
  const investments = getInvestmentCollection()
  const [state, setState] = useState({
    activeCollectionIndex: getSetActiveCollectionIndex(),
    goldPricePerGram: getSetGoldPrice(),
    investments: investments,
    autoInvestments: [],
    buyDetails: null
  });

  const updateContext = (arg = {}) => {
    setState((prevState) => {
      return {
        ...prevState,
        ...arg,
      };
    });
  }

  const goldPurchase = () => {
    if (!state.buyDetails) {
      toast.error("Invalid buying details. Please restart the process to purchase gold.")
      return
    }

    const latestInvestments = setInvestmentCollection({
      collectionName: state.buyDetails.collectionName,
      weightInMilligrams: calculatePrice(state.buyDetails.amount, false),
      goldPrice: getSetGoldPrice(),
      totalPrice: state.buyDetails.amount,
      buyingAt: new Date().valueOf(),
      investingCycle: "monthly",
      periodInDays: 0,
    })

    updateContext({
      buyDetails: null,
      activeCollectionIndex: getSetActiveCollectionIndex(0),
      investments: latestInvestments
    })
    toast.success("New investment plan purchased successfully. Thank you.")
  }

  const getActiveCollection = () => {
    if (state.investments.length > 0) {
      if (typeof state.investments[state.activeCollectionIndex] !== "undefined") {
        return state.investments[state.activeCollectionIndex]
      }
      return state.investments[0]
    }
    return null
  }

  const updateCollectionIndex = (index) => {
    updateContext({activeCollectionIndex: getSetActiveCollectionIndex(index)})
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const fluctuation = (Math.random() * 15 - 1).toFixed(2); // random fluctuation
      const newPrice = parseFloat((state.goldPricePerGram + parseFloat(fluctuation)).toFixed(2));
      getSetGoldPrice(newPrice)
      updateContext({
        goldPricePerGram: newPrice
      })
    }, 5000); // gold price random fluctuation in every 5 seconds

    return () => clearInterval(interval);

    // eslint-disable-next-line
  }, []);

  const ctxValues = {
    ...state,
    updateContext,
    goldPurchase,
    updateCollectionIndex,
    getActiveCollection,
  };

  return (
    <AppContext.Provider value={ctxValues}>
      {props.children}
    </AppContext.Provider>
  );
});

export default AppContextProvider;
