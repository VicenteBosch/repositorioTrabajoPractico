const autos = require("../db/index");

const controller = {

    products : function (req ,res) {
        res.render("product" ,  {"autos" : autos })
    } ,

    productsAdd : function (req ,res) {
        res.render("product-add" ,  {"autos" : autos})
    } ,

    search : function (req ,res) {
        let buscador = req.query.search;
        let resultado = []
        for (let i = 0; i < autos.productos.length; i++) {
            if (buscador==autos.productos[i].producto) {
                resultado.push(autos.productos[i]);
            }
        } if (resultado.length === 0) {
            return res.send("no existente");
        } else {
            return res.render ( "search-results" , { "resultado" : resultado} )
        }
    }
}

module.exports = controller;