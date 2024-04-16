var express = require('express');
var router = express.Router();
profileController = require("../controller/profileController");

router.get("/" , profileController.profile);
router.get("/edit" , profileController.profileEdit);
router.get("/login" , profileController.login);
router.get("/register" , profileController.register);

module.exports = router;