const cron = require('cron');
const CryptoData = require('../Models/coin');
const fetchCryptoData = require('../Services/api');

const COINS_LIST = ['bitcoin', 'matic-network', 'ethereum'];

const scheduleCryptoDataFetch = () => {
    const job = new cron.CronJob('0 */2 * * *', async () => {
        try {
            for (const coin of COINS_LIST) {
                const coinData = await fetchCryptoData(coin);
                await CryptoData.create({ coin, ...coinData });
                console.log(`Data for ${coin} has been saved successfully.`);
            }
        } catch (err) {
            console.error("Error in scheduled fetch job:", err);
        }
    });

    job.start();
};

module.exports = scheduleCryptoDataFetch;
