var express = require('express');
var router = express.Router();

let productsController = require("../controller/productsController");
let productAddValidations = require("../middlewares/productAdd-validator");
let editValidations = require("../middlewares/productEdit-validator");
let commentValidations = require("../middlewares/comment-validator")

router.get("/add" , productsController.add);
router.get("/search" , productsController.search);
router.get("/edit/:id" , productsController.edit);
router.get("/:id" , productsController.products);

router.post("/add" , productAddValidations , productsController.addStore);
router.post("/edit/:id" , editValidations , productsController.editStore);
router.post("/borrar/:id" , productsController.borrar);
router.post("/comentario/:id" , commentValidations , productsController.comentario);

module.exports = router;
