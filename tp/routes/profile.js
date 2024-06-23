var express = require('express');
var router = express.Router();
let profileController = require("../controller/profileController");
const registerValidtions = require('../middlewares/register-validator');
const loginValidations = require("../middlewares/login-validator")
const profileEditValidtions = require("../middlewares/profileEdit-validator")



router.get("/login" , profileController.login);
router.get("/register" , profileController.register)
router.get("/:id" , profileController.profile);
router.get("/edit/:perfil" , profileController.profileEdit);


router.post("/register" , registerValidtions, profileController.registerStore);
router.post("/login" , loginValidations, profileController.loginStore);
router.post("/logout" , profileController.logout);
router.post("/edit/:id" , profileEditValidtions , profileController.profileEditStore )


module.exports = router;