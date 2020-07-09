const router = require('express').Router();
const company = require('./company');
const products = require('./product');
const purchase = require('./purchase');

router.use("/companies", company);
router.use("/products", products);
router.use("/purchase", purchase);


module.exports = router;