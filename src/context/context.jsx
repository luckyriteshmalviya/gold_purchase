import {createContext} from "react";
import {defaultGoldPricePerGram} from "./invest.utls";

const AppContext = createContext({
    goldPricePerGram: defaultGoldPricePerGram,
    investments: [],
    autoInvestments: [],
    buyDetails: null,
    updateContext: (arg = {}) => null,
    goldPurchase: () => null,
})

export default AppContext