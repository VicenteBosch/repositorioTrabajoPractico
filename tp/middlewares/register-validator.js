const {body} = require("express-validator");


const registerValidtions = [
    body("name")
        .notEmpty()
        .withMessage("Debes completar tu nombre").bail()
    ,

    body("email")
        .notEmpty()
        .withMessage("debes completar tu email")
        .isEmail()
        .withMessage("Debes escribir un formato de correo valido")
    ,
    
    body("password")
        .notEmpty()
        .withMessage("Debes completar contraseña")
        .isLength({min:4}).withMessage("La contraseña debe tener almenos 4 caracteres")

]

module.exports = registerValidtions;