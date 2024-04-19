var express = require('express');
var router = express.Router();
productsController = require("../controller/productsController")

router.get("/:id" , productsController.products);
router.get("/add" , productsController.productsAdd);
router.get("/search" , productsController.search);

module.exports = router;