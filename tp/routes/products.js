var express = require('express');
var router = express.Router();
productsController = require("../controller/productsController")


router.get("/" , productController.product);
router.get("/add" , productController.productAdd);

module.exports = router;