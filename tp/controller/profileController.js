// const db = require("../database/models")

const profileController = {

    profile : function (req ,res) {
        res.render("profile" , {"autos" : autos})
    } ,

    profileEdit : function (req ,res) {
        res.render("profile-edit" , {"autos" : autos })
    },

    login : function (req ,res) {
        res.render("login" , {"autos" : autos})
    } ,

    register : function (req ,res) {
        res.render("register"  , {"autos" : autos})
    }
};

module.exports = profileController;