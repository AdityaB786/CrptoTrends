const CryptoData = require('../Models/coin');

const deviate = async (req, res) => {
    const { coin } = req.query;

    if (!coin) {
        return res.status(400).json({ error: "Coin parameter is required" });
    }

    try {
        const cryptoData = await CryptoData.find({ coin }).sort({ timestamp: -1 }).limit(100);
        
        if (cryptoData.length < 2) {
            return res.status(400).json({ error: "Insufficient data to perform calculation" });
        }

        const prices = cryptoData.map(entry => entry.price);
        const total = prices.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        const average = total / prices.length;
        
        const variance = prices.reduce((accumulator, currentValue) => accumulator + Math.pow(currentValue - average, 2), 0) / prices.length;
        const standardDeviation = Math.sqrt(variance);

        res.json({ deviation: standardDeviation.toFixed(2) });
    } catch (err) {
        res.status(500).json({ error: "Something went wrong on the server" });
    }
};

module.exports = { deviate };
