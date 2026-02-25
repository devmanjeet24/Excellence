const express = require("express");
const router = express.Router();
const authCOntroller = require("../controller/authcontroller");


router.post("/signup", authCOntroller.signup);

router.post("/login", authCOntroller.login);

router.post("/logout", authCOntroller.logout);

module.exports = router;