const db = require("../database/models")

const indexController = {
    
    home : function (req, res) {
       
     db.Product.findAll(

        {include: [{association: "user"}], order: [["createdAt" , "DESC"]]}
     )
        .then(function(productos) { 
            console.log(JSON.stringify(productos, null, 4));
            return res.render("index", { productos: productos });
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    }


module.exports = indexController;