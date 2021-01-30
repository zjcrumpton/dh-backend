const User = require("../models/user");
const passport = require("passport");

exports.createUser = (req, res, next) =>
  passport.authenticate("signup", async (req, res, next) => {
    res.json({
      message: "Signup successful",
      user: req.user,
    });
  })(req, res, next);

exports.login = (req, res, next) => {};
