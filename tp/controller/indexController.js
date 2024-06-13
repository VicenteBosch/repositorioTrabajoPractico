const db = require("../database/models")

const indexController = {
    home : function (req, res) {
       res.render("index")
    }
}

module.exports = indexController;