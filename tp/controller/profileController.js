const db = require("../database/models")
const bcrypt = require("bcryptjs");
const {validationResult} = require("express-validator");


const profileController = {

    profile : function (req ,res) {
        
        let idUser = req.params.id
        
        db.User.findByPk(idUser, 
            
            {include : [
                
                {association : "product" }, 
                
                {association : "comment" }
            ]}
                  )
      
                  .then(function(usuario){
                    //console.log("USUARIO: " ,  JSON.stringify(usuario, null, 4));
                    res.render("profile" , {usuario:usuario})
                })

                .catch(function (err) {
                console.log(err)
            })
      

    } ,

    profileEdit : function (req ,res) {
        let id = req.params.perfil
        
        db.User.findByPk(id)

        .then(function (user) {
            res.render("profile-edit" ,{user : user} )
        })
        
        .catch(function (error) {
            console.log(error);
        });
        
    },

    profileEditStore : function (req , res) {
       
        const resultValidation = validationResult(req);

         if (!resultValidation.isEmpty()) {

            //console.log("resultValidation:", JSON.stringify(resultValidation, null, 4));
            return res.render("profile-edit", {user : user} , {
                errors: resultValidation.mapped(),
                oldData: req.body
            })

        } else {


        let id = req.params.perfil

        let profileEdit = {

            nombre : req.body.usuario,
            email : req.body.email,
            contraseña : req.body.contraseña,
            fecha_de_nacimiento : req.body.fecha_de_nacimiento,
            dni : req.body.documento,
            foto_de_perfil : req.body.foto_perfil

        }

        db.User.update(profileEdit, { where: { id_usuarios: id } })
       
        .then(function (data) {
            res.redirect(`/profile/${id}`);
        })
        .catch(function (error) {
            console.log(error);
        });
    }},

    login : function (req ,res) {
            res.render("login")
    } ,

    loginStore :  function (req ,res) {

         const resultValidation = validationResult(req);

         if (!resultValidation.isEmpty()) {

            //console.log("resultValidation:", JSON.stringify(resultValidation, null, 4));
            return res.render("login", {
                errors: resultValidation.mapped(),
                oldData: req.body
            })

        } else {

            db.User.findOne({
                where : [{
                    email : req.body.email
                }]
            })
            .then(function (user) {
                req.session.user = user;
               // console.log("user : " , JSON.stringify(user, null, 4))
                if(req.body.checkbox != undefined){
                    res.cookie('user', req.session.user.id_usuarios, { maxAge: 1000 * 60 * 100})
                }
                res.redirect("/")

            })
            .catch(function (err) {
                console.log(err)
            })

        }
            
    } ,

    register : function (req ,res) {
        res.render("register")
    },

    registerStore : function (req ,res) {

        const resultValidation = validationResult(req);

        if (!resultValidation.isEmpty()) {
            //.log("resultValidation:", JSON.stringify(resultValidation, null, 4));
            return res.render("register", {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        } else {

            const usuario_agregado = {
                
                nombre: req.body.name,
                email: req.body.email,
                contraseña: bcrypt.hashSync(req.body.password, 10),
                fecha_de_nacimiento: req.body.fecha_de_nacimiento,
                dni: req.body.dni,
                foto_de_perfil: req.body.foto_de_perfil
                
            };

            db.User.create(usuario_agregado)
                .then(function (usuario_agregado) {
                    return res.redirect("/profile/login");
                })
                .catch(function (err) {
                    console.log("Error al guardar el usuario", err);
                });
        }


    },

    logout : function (req , res) {
        
        req.session.destroy()
        res.clearCookie("user");
        res.redirect("/profile/login")

    }

    
};

module.exports = profileController;