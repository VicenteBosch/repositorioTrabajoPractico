var express = require('express');
var router = express.Router();
let profileController = require("../controller/profileController");
const registerValidtions = require('../middlewares/register-validator');
const loginValidations = require("../middlewares/login-validator")


router.get("/edit" , profileController.profileEdit);
router.get("/login" , profileController.login);
router.get("/register" , profileController.register)
router.get("/:id" , profileController.profile);


router.post("/register" , registerValidtions, profileController.registerStore);
router.post("/login" , loginValidations, profileController.loginStore);
router.post("/logout" , profileController.logout);


module.exports = router;