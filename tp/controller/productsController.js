const db = require("../database/models");
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
            console.log(JSON.stringify(auto, null, 4));
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
                          
        let autoNuevo = {
            nombre_archivo_imagen: req.body.imagen,
            nombre_producto: req.body.nombre_producto,
            descripcion_producto: req.body.descripcion,
            id_usuarios: req.session.user.id_usuarios 
        };
    
        db.Product.create(autoNuevo)
            .then(function (autoNuevo) {
                
                return res.redirect("/");
            })
            .catch(function (err) {
                console.log("Error al guardar el usuario", err);
            });
    },
    
    

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

    }
 
}

module.exports = productsController;