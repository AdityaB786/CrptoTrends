const axios = require('axios');

const api = async (coinId) => {
    try {
        const url = `https://api.coingecko.com/api/v3/simple/price?ids=${coinId}&vs_currencies=usd&include_market_cap=true&include_24hr_change=true`;
        const response = await axios.get(url);
        const coinDetails = response.data[coinId];
        return {
            price: coinDetails.usd,
            marketCap: coinDetails.usd_market_cap,
            change24h: coinDetails.usd_24h_change
        };
    } catch (err) {
        console.error(`Failed to fetch data for ${coinId}`, err);
        throw err;
    }
};

module.exports = api;
