const db = require("../database/models/index")
const autos = require("../db/index");
const controller = {

    home : function (req ,res) {
        res.render("index" ,  {"autos" : autos})
    } 

}

module.exports = controller;