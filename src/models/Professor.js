const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const ProfSchema = new Schema({
  _id: {
    type: String
  },
  id_user: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  classes_modules : {
    type : Array
  }
});
module.exports = Prof = mongoose.model("Prof", ProfSchema,"Prof");