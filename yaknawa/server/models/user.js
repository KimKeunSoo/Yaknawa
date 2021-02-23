const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  // 1. ID
  id: {
    type: String,
    required: true,
  },
  // 2. password
  password: {
    type: String,
    required: true,
  },
  // 3. 생년월일
  birthDay: {
    type: Date,
  },
  // 4. 성별
  sex: {},
  // 5. 관심 의약품
  interestedM: {},
  // 6. 닉네임
  nickName: {
    type: String,
    required: true,
  },
  // 7. 이메일 주소
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
