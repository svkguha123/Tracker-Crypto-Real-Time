import axios from "axios";

export const getCoinPrices = (id, days, priceType) => {
    const myPrice = axios.get(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
        .then((responce) => {
            console.log("prices>>>", responce.data.prices);
            return responce.data[priceType];
            
        })
        .catch((error) => {
            console.log("ERROR>>", error);
            
        })
        return myPrice;
}