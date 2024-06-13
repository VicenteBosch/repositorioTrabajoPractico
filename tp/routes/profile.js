var express = require('express');
var router = express.Router();
let profileController = require("../controller/profileController");
const registerValidtions = require('../middlewares/register-validator');
const loginValidations = require("../middlewares/login-validator")

router.get("/" , profileController.profile);
router.get("/edit" , profileController.profileEdit);
router.get("/login" , profileController.login);
router.get("/register" , profileController.register)



router.post("/register" , registerValidtions, profileController.registerStore);
router.post("/login" , loginValidations, profileController.loginStore);


module.exports = router;