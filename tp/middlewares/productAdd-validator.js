const { body } = require("express-validator");
const db = require("../database/models")
const bcryptjs = require('bcryptjs');

const productAddValidations = [
    body("imagen")
        .notEmpty()
        .withMessage('Este campo es obligatorio'),

    body("nombre_producto")
        .notEmpty()
        .withMessage('Este campo es obligatorio'),

    body("descripcion")
        .notEmpty()
        .withMessage('Este campo es obligatorio')
];

module.exports = productAddValidations;