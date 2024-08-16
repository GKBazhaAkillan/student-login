const express = require("express");
const { createUser } = require("../controller/userController");
const {loginUser} = require ("../controller/userController")

const router = express.Router();

router.post("/createUser", createUser);
router.post("/loginUser",loginUser);



module.exports = router;
