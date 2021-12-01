const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const middlewares = require("../middlewares/auth.js");

//create user

router.post("/", userController.createUser);

//login
router.post("/login", userController.login);

//Get all users
router.get("/", middlewares.verifyTokenAndAdmin, userController.getUsers);

module.exports = router;
