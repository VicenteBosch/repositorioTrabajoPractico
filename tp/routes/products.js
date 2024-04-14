var express = require('express');
var router = express.Router();
productsController = require("../controller/productsController")


router.get("/" , productsController.products);
router.get("/add" , productsController.productsAdd);

module.exports = router;