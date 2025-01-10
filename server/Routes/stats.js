const express = require('express');
const { getStats } = require('../Controllers/stats');

const router = express.Router();

router.get('/', getStats);

module.exports = router;