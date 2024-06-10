const db = require("../database/models")

const indexController = {

    home : function (req ,res) {
       db.Product.findAll()
       .then(function (data) {
            return res.send(data)
       }
       .catch(function (err) {
            return console.log(err)
       }),
        
    )}

}

module.exports = indexController;