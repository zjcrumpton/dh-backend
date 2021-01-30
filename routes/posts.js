const express = require("express");
const router = express.Router();
const passport = require("passport");
const User = require("../models/user");
const postsController = require("../controllers/postsController");

require("../auth/auth");

router.get("/", postsController.getPosts);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  postsController.createPost
);

module.exports = router;
