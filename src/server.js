require('dotenv').config({path:'.env'});
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const users = require("./routes/api/users");
const professors = require("./routes/api/professors");
const students = require("./routes/api/students");

const app = express();
const cors = require("cors");

app.use ( cors());
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL, {
     useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api/professors", professors);  
app.use("/api/students", students);  

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(` ->>>>> Server up and running on port ${port} !`));