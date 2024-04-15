const autos = require("../db/index");

const controller = {

    search : function (req ,res) {
        res.render("search-results" , {"autos" : autos})
    } 

};

module.exports = controller;