var express = require('express');
var router = express.Router();
loginController = require("../controller/loginController")


router.get("/" , loginController.login)
router.get("/register" , loginController.register)

module.exports = router;