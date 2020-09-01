const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

//UserModel
const User = require("../../models/User.js");

// @route Get api/users
// @des get users
// @access Public

router.post("/", (req, res) => {
  const { name, email, password } = req.body;

  //validation
  if (!name || !email || !password) {
    return res.status(400).json({ msg: "pls enter all fields" });
  }

  // check existing user
  User.findOne({ email }).then(user => {
    if (user) return res.status(400).json({ msg: "user already exist" });

    const newUser = new User({
      name,
      email,
      password
    });

    //create salt and hash
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser.save().then(user => {
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
  });
});

module.exports = router;
