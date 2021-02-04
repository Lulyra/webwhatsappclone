import express from 'express';
import User from '../../models/User.js';
import bcrypt from "bcrypt"
import validateRegisterInput from '../../validation/register.js';
import hashedPassword from "../../validation/hashPassword.js"
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';

dotenv.config()


const router = express.Router();

// @route POST api/users/
// @desc  Register a new user.
// @access Public
router.post('/', (req, res) => {
  // Validation
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  return User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
    res.status(400).json({ email: 'Email already exists.' });
    }
    const { name, email, password } = req.body;

    const newUser = new User({ name, email, password });

    hashedPassword(10, newUser.password)
    .then( hashPassword => {
      newUser.password = hashPassword
      newUser
      .save()
      .then(user => res.json(user))
      .then(err => res.json(err))
    })
  });
});

// @route POST api/users/login
// @desc  Login User / Returning JWT Token
// @access Public
router.post("/login", (req, res) => {
  
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    bcrypt.compare(password, user.password)
    .then(isMatch => {
      if (isMatch) {
        const payload = {
          id: user.id,
          name: user.name,
        }
        jwt.sign(
          payload,
          process.env.secretOrKey,
          { expiresIn: "1d"},
          (err, token) => {
            res.json({ success: true, token: `Bearer ${token}`})
          }
        )
      } else {
        return res.status(400).json({password: "Password incorrect."})
      }
    })
  })

})

export default router;
