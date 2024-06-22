var express = require('express');
var router = express.Router();
var productsController = require("../controller/productsController")

router.get("/add" , productsController.add);
router.get("/search" , productsController.search);
router.get("/edit/:id" , productsController.edit)
router.get("/:id" , productsController.products);


router.post("/add" , productsController.addStore);
router.post("/edit/:id" , productsController.editStore);
router.post("/borrar/:id" , productsController.borrar)

module.exports = router;

