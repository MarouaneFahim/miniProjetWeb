const express = require("express");
const router = express.Router();
var cors = require('cors')

// Load User model
const Student = require("../../models/Student");

router.get( "/:id_class",  async ( req, res) =>{
  
  let id_class= req.params.id_class;
  console.log(" First ----------------",id_class );
 await Student.find({ id_class }).then( (students)=>{

      console.log( students );
      res.json( students );
  })
})

router.get( "/", async ( req, res) =>{
    console.log(" Home----------------" );
    console.log(" ----------------", req.params );
    let id_class= req.params.id_class;
    Student.findOne( { id_class}).toArray( (err, data )=>{
        if ( err) 
            throw err;
        console.log( data );
        res.json( data );
    })
  })

module.exports = router;