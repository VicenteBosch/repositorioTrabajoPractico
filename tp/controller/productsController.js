const controller = {

    products : function (req ,res) {
        res.render("product")
    } ,

    productsAdd : function (req ,res) {
        res.render("product-add")
    }
}

module.exports = controller;