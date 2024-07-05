export const defaultGoldPricePerGram = 8127.42;

export const STORE_KEY_COLLECTIONS = "STORE_INVESTMENT_COLLECTIONS"
export const STORE_KEY_GOLD_PRICE = "STORE_GOLD_PRICE_PER_GRAM"
export const STORE_KEY_ACTIVE_COLLECTION_CARD_INDEX = "STORE_KEY_ACTIVE_COLLECTION_CARD_INDEX"

const defaultInvestmentCollection = {
    collectionName: "Personal Savings",
    weightInMilligrams: 10460,
    goldPrice: defaultGoldPricePerGram,
    totalPrice: 85000,
    buyingAt: new Date().valueOf(), // timestamp 1529496965572
    investingCycle: "monthly", // monthly, yearly
    periodInDays: 0,
}

export const currencyFormatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
});

export const getInvestmentCollection = () => {
    let collections = []
    const value = localStorage.getItem(STORE_KEY_COLLECTIONS)
    if (value) {
        try {
            const parseValue = JSON.parse(value)
            if (parseValue && Array.isArray(parseValue)) {
                collections = parseValue
            }
        } catch (e) {
            collections = []
        }
    }
    if (collections.length === 0) {
        collections = [
            defaultInvestmentCollection // set default value
        ]
    }
    return collections
}

export const setInvestmentCollection = (item) => {
    const collections = getInvestmentCollection()
    collections.unshift(item)
    localStorage.setItem(STORE_KEY_COLLECTIONS, JSON.stringify(collections))
    return collections
}

export const getSetGoldPrice = (price = 0) => {
    let goldPrice = defaultGoldPricePerGram
    const value = localStorage.getItem(STORE_KEY_GOLD_PRICE)
    if (value && !isNaN(parseInt(value))) {
        goldPrice = parseFloat(value)
    }
    if (price > 0) {
        localStorage.setItem(STORE_KEY_GOLD_PRICE, `${price}`)
        goldPrice = price
    }
    return goldPrice
}

export const getSetActiveCollectionIndex = (newIndex) => {
    let index = 0
    const value = localStorage.getItem(STORE_KEY_ACTIVE_COLLECTION_CARD_INDEX)
    if (value && !isNaN(parseInt(value))) {
        index = parseInt(value)
        const collections = getInvestmentCollection()
        if (index >= collections.length) {
            index = 0
        }
    }
    if ( newIndex >=0 ) {
        localStorage.setItem(STORE_KEY_ACTIVE_COLLECTION_CARD_INDEX, `${newIndex}`)
        index = newIndex
    }
    return index
}



export const calculatePrice = (price, pricePerGram = defaultGoldPricePerGram, withSlug = true) => {

    const grams = price / pricePerGram; // Calculate the amount of gold in grams

    if (grams < 0.001) {
        // If the amount is less than 1 milligram
        const milligrams = (grams * 1000).toFixed(2);
        return withSlug ? `${milligrams}mg` : milligrams;
    } else if (grams >= 1000) {
        // If the amount is 1 kilogram or more
        const kilograms = (grams / 1000).toFixed(2);
        return withSlug ? `${kilograms}kg` : kilograms;
    } else if (grams < 1) {
        // If the amount is less than 1 gram but more than 1 milligram
        let milligrams = (grams * 1000).toFixed(2);
        return withSlug ? `${milligrams}mg` : milligrams;
    } else {
        // Otherwise, keep it in grams
        return withSlug ? `${grams.toFixed(2)}g` : grams.toFixed(2);
    }
}
