const db = require("../database/models")
const bcrypt = require("bcryptjs");
const {validationResult} = require("express-validator");


const profileController = {

    profile : function (req ,res) {
        res.render("profile" , {"autos" : autos})
    } ,

    profileEdit : function (req ,res) {
        res.render("profile-edit" , {"autos" : autos })
    },

    login : function (req ,res) {
        res.render("login" , {"autos" : autos})
    } ,

    register : function (req ,res) {

        res.render("register")

    },

    store : function (req ,res) {

        const resultValidation = validationResult(req);

        if (!resultValidation.isEmpty()) {
            console.log("resultValidation:", JSON.stringify(resultValidation, null, 4));
            return res.render("register", {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        } else {

            const usuario_agregado = {
                
                nombre: req.body.name,
                email: req.body.email,
                contraseña: bcrypt.hashSync(req.body.password, 10)
                
            };

            db.User.create(usuario_agregado)
                .then(function (usuario_agregado) {
                    return res.redirect("/login");
                })
                .catch(function (err) {
                    console.log("Error al guardar el usuario", err);
                });
        }


    }

    
};

module.exports = profileController;