const CryptoData = require('../Models/coin');

const statistics = async (req, res) => {
    const { coin } = req.query;

    if (!coin) {
        return res.status(400).json({ error: "Coin parameter is missing" });
    }

    try {
        const latestRecord = await CryptoData.findOne({ coin }).sort({ timestamp: -1 });
        
        if (!latestRecord) {
            return res.status(404).json({ error: "Data not found for the specified coin" });
        }

        res.json({
            price: latestRecord.price,
            marketCap: latestRecord.marketCap,
            change24h: latestRecord.change24h
        });
    } catch (err) {
        res.status(500).json({ error: "An error occurred on the server" });
    }
};

module.exports = { statistics };
