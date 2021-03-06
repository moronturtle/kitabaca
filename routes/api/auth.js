const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");
const auth = require("../../middleware/auth");

//UserModel
const User = require("../../models/User");

// @route POST api/auth
// @des  Auth user
// @access Public

router.post("/", (req, res) => {
  const { email, password } = req.body;

  //simple validation
  if (!email || !password) {
    return res.status(400).json({ msg: "pls entes all fields" });
  }

  //check if existing user
  User.findOne({ email }).then(user => {
    if (!user) return res.status(400).json({ msg: "user does not exist" });

    //Validate Password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (!isMatch)
        return res.status(400).json({ msg: "invalid password/credentials" });
      jwt.sign(
        { id: user.id },
        config.get("jwtSecret"),
        { expiresIn: 3600 },
        (err, token) => {
          if (err) throw err;

          res.json({
            token,
            user: {
              name: user.name,
              id: user.id,
              email: user.email
            }
          });
        }
      );
    });
  });
});

// @route Get api/auth/user
// @des  Get user data
// @access Private

router.get("/user", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then(user => res.json(user));
});

module.exports = router;
