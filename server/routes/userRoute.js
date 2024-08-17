const express = require("express");
const { createUser, getUserById } = require("../controller/userController");
const { loginUser } = require("../controller/userController");

const router = express.Router();

router.post("/createUser", createUser);
router.post("/loginUser", loginUser);
router.post("/getUserById", getUserById);

module.exports = router;
