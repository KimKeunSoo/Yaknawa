const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  // 1. ID
  id: {
    type: String,
    required: [true, "아이디를 입력하세요"],
    match: [/^.{3,15}$/, "3 ~ 15 글자를 입력하세요"], // 정규 표현식
    trim: true, // 문자열 앞뒤에 빈칸이 있는 경우 빈칸 제거
    unique: true,
  },
  // 2. password
  password: {
    type: String,
    required: [true, "패스워드를 입력하세요!"],
    select: false, // User model을 읽어올때, 비밀번호 값을 읽어오지 못하도록 설정
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
    required: [true, "이메일을 입력하세요"],
    match: [
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "유효한 이메일을 입력하세요",
    ],
    trim: true,
  },
});

module.exports = mongoose.model("User", userSchema);
