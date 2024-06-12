const {body} = require("express-validator");
const db= require("../database/models")
const bcryptjs = require('bcryptjs');

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
        .custom(function(value, {req}){

                return db.User.findOne({

                    where: {email: value}
                })
                .then(function (user) {

                    if (user) {
                        throw new Error("El mail ingresado ya existe, intente con otro")
                    }
                    
                })
                .catch(function (error) {
                        
                        console.log(error);

                    }
                )


        })
    ,
    
    body("password")
        .notEmpty()
        .withMessage("Debes completar contraseña")
        .isLength({min:4}).withMessage("La contraseña debe tener almenos 4 caracteres")

]

module.exports = registerValidtions;