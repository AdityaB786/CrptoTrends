const express = require('express');
const { getDeviation } = require('../Controllers/deviation');

const router = express.Router();

router.get('/', getDeviation);

module.exports = router;