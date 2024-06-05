var express = require('express');
var router = express.Router();
var productsController = require("../controller/productsController")

router.get("/add" , productsController.add);
router.get("/search" , productsController.search);
router.get("/:id" , productsController.products);

module.exports = router;