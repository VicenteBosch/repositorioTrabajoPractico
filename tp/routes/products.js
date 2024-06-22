var express = require('express');
var router = express.Router();

let productsController = require("../controller/productsController");
var productAddValidations = require("../middlewares/productAdd-validator");
var editValidations = require("../middlewares/productEdit-validator");


router.get("/add" , productsController.add);
router.get("/search" , productsController.search);
router.get("/edit/:id" , productsController.edit)
router.get("/:id" , productsController.products);


router.post("/add" , productAddValidations , productsController.addStore);

router.post("/edit/:id" , editValidations , productsController.editStore);
router.post("/borrar/:id" , productsController.borrar)

module.exports = router;

