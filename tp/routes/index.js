var express = require('express');
var router = express.Router();
indexController = require("../controller/indexController")

router.get('/' , indexController.home);

module.exports = router;
