const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const crypto = require("crypto");
const config = require("../config/auth.config");
const bodyParser = require("body-parser");

const User = new Schema(
  {
    //1.아이디
    username: {
      type: String,
      trim: true,
      unique: true,
    },
    //2.패스워드
    password: String,
    //3.성별
    gender: String,
    //4.생일
    birthday: Date,
    //5.이메일
    email: {
      type: String,
      trim: true,
    },
    //6.닉네임
    nickname: {
      type: String,
      trim: true,
    },
    //7.관심 의약품
    interestedM: String,
    //8.사용자 권한
    admin: { type: Boolean, default: false },
  },
  { versionKey: false }
);

// crypto.createHmac('sha1', 'secret')
//              .update('passwssord')
//              .digest('base64')

// 새로운 사용자 document 생성
User.statics.create = function (
  username,
  password,
  gender,
  birthday,
  email,
  nickname,
  interestedM
) {
  const encrypted = crypto
    .createHmac("sha1", config.secret)
    .update(password)
    .digest("base64");

  const user = new this({
    username,
    password: encrypted,
    gender,
    birthday,
    email,
    nickname,
    interestedM,
  });

  // Promise로 반환
  return user.save();
};

// username으로 DB에 검색
User.statics.findOneByUsername = function (username) {
  return this.findOne({
    username,
  }).exec();
};

// 사용자 document의 비밀번호 검증
User.methods.verify = function (password) {
  const encrypted = crypto
    .createHmac("sha1", config.secret)
    .update(password)
    .digest("base64");
  console.log(this.password === encrypted);

  return this.password === encrypted;
};

User.methods.assignAdmin = function () {
  this.admin = true;
  return this.save();
};

module.exports = mongoose.model("User", User);
