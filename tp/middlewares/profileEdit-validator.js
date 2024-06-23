const {body} = require("express-validator");
const db= require("../database/models")
const bcryptjs = require('bcryptjs');


const pofileEditValidations = [
    body("usuario")
        .notEmpty()
        .withMessage("Debes completar tu nombre").bail()
    ,

    body("email")
        .notEmpty()
        .withMessage("debes completar tu email")
        .isEmail()
        .withMessage("Debes escribir un formato de correo valido")
       
    ,
    
    body("contraseña")
        .notEmpty()
        .withMessage("Debes completar contraseña")
        .isLength({min:4}).withMessage("La contraseña debe tener almenos 4 caracteres")
    


]



module.exports = pofileEditValidations