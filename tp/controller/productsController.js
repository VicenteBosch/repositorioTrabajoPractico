const autos = require("../db/index");

const controller = {

    products : function (req ,res) {
        res.render("product" ,  {"autos" : autos})
    } ,

    productsAdd : function (req ,res) {
        res.render("product-add" ,  {"autos" : autos})
    }
}

module.exports = controller;