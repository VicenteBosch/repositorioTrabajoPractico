const {body} = require("express-validator");
const db= require("../database/models")
const bcryptjs = require('bcryptjs');

const commentValidations = [
    body("texto")
        .notEmpty()
        .withMessage('Este campo es obligatorio')
        .isLength({min:4}).withMessage("El comentario debe tener almenos 4 caracteres")
];

module.exports = commentValidations;