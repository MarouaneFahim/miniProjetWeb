const mongoose = require("mongoose");
const Schema = mongoose.Schema;
// Create Schema
const StudentSchema = new Schema({
  _id:{
    type: String
  },
  name: {
    type: String
  },
  id_class: {
    type: String
  },
});
module.exports = Student = mongoose.model("Student", StudentSchema,"Student");