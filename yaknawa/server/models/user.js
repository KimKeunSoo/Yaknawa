const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  // 1.
  id: {
    type: String,
    required: true,
  },
  // 2.
  password: {
    type: String,
    required: true,
  },
  // 3.
  birthDay: {
    type: Date,
  },
  // 4.
  sex: {},
  // 5.
  interestedM: {},
  // 6.
  nickName: {
    type: String,
    required: true,
  },
  // 7.
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema); // 4
