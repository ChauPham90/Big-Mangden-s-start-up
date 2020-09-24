const express = require("express");
const router = express.Router();
const { userById } = require("../controllers/user");
const { userSignupValidator } = require("../validator");

const { requireSignin, isAuth, isAdmin } = require("../controllers/auth");

router.get("/secret/:userId", requireSignin, isAdmin, isAuth, (req, res) => {
  res.json({ user: req.profile });
});

router.param("userId", userById);

module.exports = router;
