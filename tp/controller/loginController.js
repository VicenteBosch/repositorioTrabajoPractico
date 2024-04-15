const autos = require("../db/index");

const controller = {

    login : function (req ,res) {
        res.render("login" , {"autos" : autos})
    } ,

    register : function (req ,res) {
        res.render("register"  , {"autos" : autos})
    }

};

module.exports = controller;