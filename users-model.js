const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    trim: true,
    minLength: 3,
    maxLength: 20,
    required: true,
  },
  name: {
    type: String,
    required: true,
    trim: true,
  },
  profilepicture: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  hisaab: {
    type: Array,
  },
});

module.exports = mongoose.model("user",userSchema)
