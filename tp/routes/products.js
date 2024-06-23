const express = require('express');
const router = express.Router();

const productsController = require("../controller/productsController");
const productAddValidations = require("../middlewares/productAdd-validator");
const editValidations = require("../middlewares/productEdit-validator");
const commentValidations = require("../middlewares/comment-validator");

router.get("/add", productsController.add);
router.get("/search", productsController.search);
router.get("/:id", productsController.products);
router.get("/edit/:id", productsController.editProduct);

router.post("/add", productAddValidations, productsController.addStore);
router.post("/edit/:id", editValidations, productsController.editProductStore);
router.post("/borrar/:id", productsController.borrar);
router.post("/comentario/:id", commentValidations, productsController.comentario);

module.exports = router;
