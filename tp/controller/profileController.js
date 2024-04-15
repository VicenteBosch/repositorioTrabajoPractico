const autos = require("../db/index");

const controller = {

    profile : function (req ,res) {
        res.render("profile" , {"autos" : autos})
    } ,

    profileEdit : function (req ,res) {
        res.render("profile-edit" , {"autos" : autos })
    }
};

module.exports = controller;