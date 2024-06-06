const db = require ("../database/models");

const productsController = {

    products : function (req ,res) {
       let productID = req.params.id;
       let resultado = []
       for (let i = 0; i < autos.productos.length; i++) {
           if (productID==autos.productos[i].producto) {
               resultado.push(autos.productos[i]);
           }
       } if (resultado.length === 0) {
           return res.send("no exi");
       } else {
           return res.render ( "product" , { "resultado" : resultado} )
       }
    } ,

    add : function (req ,res) {
         res.render("product-add")
    } ,

    search : function(req,res){
        res.send("search")
    }
 
}

module.exports = productsController;

/*function (req ,res) {
    let searchID = req.query.search;
    let resultado = []
    for (let i = 0; i < autos.productos.length; i++) {
        if (searchID==autos.productos[i].producto) {
            resultado.push(autos.productos[i]);
        }
    } if (resultado.length === 0) {
        return res.send("no existente");
    } else {
        return res.render ( "search-results" , { "resultado" : resultado} )
    }
} */