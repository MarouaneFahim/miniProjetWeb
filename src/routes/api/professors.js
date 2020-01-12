const express = require("express");
const router = express.Router();
var cors = require('cors')


// Load User model
const Prof = require("../../models/Professor");

// @route POST api/users/register
// @desc Register user
// @access Public
{/*
router.post("/register", cors(), (req, res) => {
  // Form validation
const { errors, isValid } = validateRegisterInput(req.body);
// Check validation
  if (!isValid) {
    return res.status(400).json(errors);
  }
  Prof.findOne({ id_pro: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    } else {
      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
      });
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
*/}
// @route POST api/users/login
// @desc Login user and return JWT token
// @access Public
router.post("/home", (req, res) => {
    console.log( req.body)
  console.log( " ::--->",req.body.id_user )


const id_user = req.body.id_user;

  console.log( id_user );
  
// Find user by email
Prof.findOne({ id_user }).then(professor => {
    // Check if user exists
    if (!professor) {
        console.log( "**",id_user,"**")
      return res.status(404).json({ success : false, idnotfound: "id not found" });
    }
    else{
        console.log( 'success for ', id_user )
        console.log( 'professor ', professor)
        res.json( { success : true, 
                    classes_modules : professor.classes_modules})
    }

  });
});

module.exports = router;