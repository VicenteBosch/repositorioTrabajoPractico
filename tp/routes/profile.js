var express = require('express');
var router = express.Router();
let profileController = require("../controller/profileController");
const registerValidtions = require('../middlewares/register-validator');

router.get("/" , profileController.profile);
router.get("/edit" , profileController.profileEdit);
router.get("/login" , profileController.login);
router.get("/register" , profileController.register)
router.post("/register" , registerValidtions, profileController.store);

module.exports = router;