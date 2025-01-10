const express = require('express');
const { deviate } = require('../Controllers/deviate');

const router = express.Router();

router.get('/d', deviate);

module.exports = router;