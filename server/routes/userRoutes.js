const express = require("express");
const {registerUser, loginUser, getUserDetails} = require("../controllers/userConttroller");
const {isAuthenticatedUser} = require("../middlewares/auth");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);

router.route("/me").get(isAuthenticatedUser, getUserDetails);

module.exports = router;