const express = require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv"); 
const statsRoutes = require('./Routes/stats');
const deviationRoutes = require('./Routes/deviation');
const fetchCryptoJob = require('./Jobs/crypto');

dotenv.config();
const app = express();
app.use(express.json());

// Routes
app.use('/stats', statsRoutes);
app.use('/deviation', deviationRoutes);
fetchCryptoJob();

// Start Background Job
mongoose.set('strictQuery', false);
const mongoURL = `mongodb+srv://mongodb:${process.env.MONGODB_PASSWORD}@cluster01.6ch3n.mongodb.net/`
mongoose.connect(mongoURL)
    .then(() => {
        console.log("Database connected");
    }).catch((error) => {
        console.log(error);
    });

// Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));