const db = require("../database/models");
const {validationResult} = require("express-validator");
const op = db.Sequelize.Op;
const bcrypt = require("bcryptjs");



const productsController = {

    products : function (req ,res) {
        let id = req.params.id

        db.Product.findByPk(id, {
            include: [
              {
                association: "comment",
                include: [
                  { association: "user"}
                ]
              },
              {
                association: "user"
              }
            ]
          })
        
        .then(function (auto){
            //console.log(JSON.stringify(auto, null, 4));
            res.render("product" , {auto : auto})
            
        })

        .catch(function(error) {
            console.log(error);
        });

    } ,

    add : function (req ,res) {
         res.render("product-add")
    } ,

    addStore : function (req ,res) {

        const resultValidation = validationResult(req);
                          
        if (!resultValidation.isEmpty()) {
            console.log("resultValidation:", JSON.stringify(resultValidation, null, 4));
            return res.render("product-add", {
                errors: resultValidation.mapped(),
                oldData: req.body
                
            })
        } else {
        
        let autoNuevo = {
            id_usuarios: req.session.user.id_usuarios,
            nombre_archivo_imagen: req.body.imagen,
            nombre_producto: req.body.nombre_producto,
            descripcion_producto: req.body.descripcion
            
        };
    
        db.Product.create(autoNuevo)
            .then(function (autoNuevo) {
                
                return res.redirect("/");
            })
            .catch(function (err) {
                console.log("Error al guardar el usuario", err);
            });
    }},
    
    

    search : function(req,res){
        
        let buscador = req.query.search;
    
        db.Product.findAll({
            where: {

            [op.or] : [ {nombre_producto: {[op.like]: "%" + buscador + "%"}} ,  {descripcion_producto: {[op.like]: "%" + buscador + "%"}} ]

            },

            order : [["createdAt" , "DESC"] ],

            include : [
                {association : "comment" ,
                    include: [{association : "user" }]
                },
                {association : "user"},

            ]
        })
        .then(function(productos) { 
            //console.log(JSON.stringify(productos, null, 4));
            if (productos.length > 0) {
                return res.render("search-results", { productos: productos });
            } else {
                return res.send("No hay resultados para su búsqueda.");
            }            
        })
        .catch(function(error) {
            console.log(error);
        });

    },

    edit : function (req,res) {

       res.render("product-edit")
    
    },

    editStore: function (req, res) {
        
        const resultValidation = validationResult(req);
        let idProducto = req.params.id;

        if (!resultValidation.isEmpty()) {

            console.log("resultValidation:", JSON.stringify(resultValidation, null, 4));

            return db.Product.findByPk(idProducto)
                .then(function (auto) {
                    res.render("product-edit", {
                        auto: auto,
                        errors: resultValidation.mapped(),
                        oldData: req.body
                    });
                })
                .catch(function (error) {
                    console.log(error);
                
                });
        } else {

            let autoEditar = {
                nombre_archivo_imagen: req.body.fotoNuevo,
                nombre_producto: req.body.nombreNuevo,
                descripcion_producto: req.body.descripcionNuevo
            };

            db.Product.update(autoEditar, { where: { id_producto: idProducto } })
                .then(function (data) {
                    res.redirect(`/products/edit/${idProducto}`);
                })
                .catch(function (error) {
                    console.log(error);
                    res.status(500).send("Error al actualizar el producto");
                });
        }
    },

    borrar: function (req, res) {
        let id = req.params.id;
    
            db.Comment.destroy({
                where: { id_producto: id }
            })
            .then(function ()  {
                return db.Product.destroy({
                    where: { id_producto: id }
                });
            })
            .then(function () {
                res.redirect('/');
            })
            .catch(function (error ) {
                
                console.error("Error al borrar el producto:", error);
                
            });
       

        
    }}
    
    
        
 


module.exports = productsController;