const express = require('express');
const { statistics } = require('../Controllers/statistics');

const router = express.Router();

router.get('/s', statistics);

module.exports = router;