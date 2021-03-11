const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.config");
const userSchema = new mongoose.Schema(
  {
    // 1. ID
    username: {
      type: String,
      required: true,
      trim: true, // 문자열 앞뒤에 빈칸이 있는 경우 빈칸 제거
      unique: true,
    },
    // 2. password
    password: {
      type: String,
      required: true,
    },
    // 3. 생년월일
    birthday: {
      type: Date,
    },
    // 4. 성별
    sex: {
      type: String,
    },
    // 5. 관심 의약품
    interestedM: {
      type: String,
    },
    // 6. 닉네임
    nickname: {
      type: String,
      required: true,
    },
    // 7. 이메일 주소
    email: {
      type: String,
      required: true,
      trim: true,
    },
    // 8. 사용자 권한
    role: {
      type: Number,
      default: 0,
    },
    // 9. 토큰
    token: {
      type: String,
    },
    tokenExp: {
      type: Number,
    },
  },
  { versionKey: false } // versionKey default 삭제
);

//save 메소드가 실행되기전에 비밀번호를 암호화하는 로직을 짜야한다
userSchema.pre("save", function (next) {
  let user = this;

  //model 안의 paswsword가 변환될때만 암호화
  if (user.isModified("password")) {
    bcrypt.genSalt(saltRounds, function (err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function (err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    next();
  }
});

//plainPassword를 암호화해서 현재 비밀번호화 비교
userSchema.methods.comparePassword = function (plainPassword) {
  return bcrypt
    .compare(plainPassword, this.password)
    .then((isMatch) => isMatch)
    .catch((err) => err);
};

//token 생성
userSchema.methods.generateToken = function () {
  const token = jwt.sign(
    this._id.toHexString(),
    authConfig.secret
    // , {
    //   expiresIn: 864000, //24시간의 토큰 발급 기한
    // }
  );
  this.token = token;
  return this.save() // 토큰 해당 user정보값에 저장
    .then((user) => user)
    .catch((err) => err);
};

userSchema.statics.findByToken = function (token) {
  let user = this;
  //secretToken을 통해 user의 id값을 받아오고 해당 아이디를 통해 Db에 접근해서 유저의 정보를 가져온다
  //jwt.verify(토큰, "지정해둔 특정 문자")를 넣어서  decoded된 값을 통해 _id를 db와 조회해서 값을 넘겨준다.
  return jwt.verify(token, authConfig.secret, function (err, decoded) {
    return user
      .findOne({ _id: decoded, token: token })
      .then((user) => user)
      .catch((err) => err);
  });
};

module.exports = mongoose.model("User", userSchema);
