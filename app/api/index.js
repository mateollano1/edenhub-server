const router = require('express').Router();
const endpoints = require('./endpoints');

router.use('/api', endpoints);

module.exports = router;