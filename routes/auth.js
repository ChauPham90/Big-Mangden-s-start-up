const express = require("express");
const router = express.Router();
const {
  signUp,
  signIn,
  signOut,
  requireSignin,
} = require("../controllers/auth");
const { userSignupValidator } = require("../validator");

router.post("/signup", userSignupValidator, signUp);
router.post("/", signIn);
router.get("/signout", signOut);

module.exports = router;
