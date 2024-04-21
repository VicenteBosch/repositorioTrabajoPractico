const autos = require("../db/index");

const controller = {

    products : function (req ,res) {
       let productID = req.params.id;
       let resultado = []
       for (let i = 0; i < autos.productos.length; i++) {
           if (productID==autos.productos[i].producto) {
               resultado.push(autos.productos[i]);
           }
       } if (resultado.length === 0) {
           return res.send("no existente");
       } else {
           return res.render ( "product" , { "resultado" : resultado} )
       }
    } ,

    productsAdd : function (req ,res) {
        return res.render("product-add" ,  {"autos" : autos})
    } ,

    search : function (req ,res) {
        return res.render("search-results" ,  {"autos" : autos})
    }

}

module.exports = controller;