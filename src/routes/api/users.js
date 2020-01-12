const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
var cors = require('cors')
const keys = require("../../config/keys");

 // Load input validation
const validateRegisterInput = require("../../validation/register");
const validateLoginInput = require("../../validation/login");
// Load User model
const User = require("../../models/User");

// @route POST api/users/register
// @desc Register user
// @access Public

router.post("/register", cors(), (req, res) => {
  // Form validation
const { errors, isValid } = validateRegisterInput(req.body);
// Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newUser = new User();
  var keys= Object.keys(req.body);

  for (var i = 0; i < keys.length; i++) {
    newUser[keys[i]] = req.body[keys[i]];
  }

User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {

// Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => console.log(err));
        });
      });
    }
  });
});

// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/login/:espace", cors(), (req, res) => {
  console.log( " ----> ", req.params.espace ," ::--->",req.body.espace )
  // Form validation
const { errors, isValid } = validateLoginInput(req.body);
// Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
const email = req.body.email;
  const password = req.body.password;

  console.log( email + " " + password );
  
// Find user by email
  User.findOne({ email }).then(user => {
    // Check if user exists
    if (!user) {
      return res.status(404).json({ emailnotfound: "Email not found" });
    }
// Check password
    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        // User matched
        // Create JWT Payload
        const payload = {
          id: user.id,
          name: user.name,
          role : user.role
        };
        
// Sign token
        jwt.sign(
          payload,
          keys.secretOrKey,
          {
            expiresIn: 31556926 // 1 year in seconds
          },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            });
          }
        );
      } else {
        return res
          .status(400)
          .json({ passwordincorrect: "Password incorrect" });
      }
    });
  });
});

router.get( "/listStudents/:id_class", async ( req, res) =>{
  console.log(" ----------------" );
  let id_class= req.params.id_class;
  database.collection("Student").find( { id_class}).toArray( (err, data )=>{
      if ( err)
          throw err;
      console.log( data );
      res.json( data );
  })
})



//Students apis
router.get("/studentsList", (req,res) =>{
  User.find({role : "student"})
  .then(students => res.status(200).json(students))
  .catch(err => res.status(400).json(err))
})
module.exports = router;