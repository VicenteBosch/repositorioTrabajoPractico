var express = require('express');
var router = express.Router();
searchController = require("../controller/searchController")


router.get("/" , searchController.search)


module.exports = router;