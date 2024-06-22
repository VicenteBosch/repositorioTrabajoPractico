const {body} = require("express-validator");
const db= require("../database/models")
const bcryptjs = require('bcryptjs');

const commentValidations = [
    body("texto")
        .notEmpty()
        .withMessage('Este campo es obligatorio')


]
    
module.exports= commentValidations;