const { body } = require("express-validator");
const db = require("../database/models")
const bcryptjs = require('bcryptjs');

const editValidations = [
    body('fotoNuevo')
        .notEmpty()
        .withMessage('Este campo es obligatorio'),

    body('nombreNuevo')
        .notEmpty()
        .withMessage('Este campo es obligatorio'),

    body('descripcionNuevo')
        .notEmpty()
        .withMessage('Este campo es obligatorio')
];

module.exports = editValidations;