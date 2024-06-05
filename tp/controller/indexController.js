const db = require("../database/models")

const indexController = {

    home : function (req ,res) {
        res.render("index" ,  {"autos" : autos})
    } 

}

module.exports = indexController;