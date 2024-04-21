var express = require('express');
var router = express.Router();
var productsController = require("../controller/productsController")

router.get("/:id" , productsController.products);
router.get("/add" , productsController.add);
router.get("/search" , productsController.search);

module.exports = router;