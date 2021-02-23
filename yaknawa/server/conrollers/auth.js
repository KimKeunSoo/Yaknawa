const User = require("../models//user");
const bcrypt = require("bcryptjs"); // password 암호화 알고리즘 라이브러리

const createUserData = async (userInput) => {
  // user를 객체화하고 Database에 저장하는 함수
  const user = await userWithEncodePassword(userInput); // input 을 인자로 넘겨주고, 암호화된 정보가 담긴 객체를 결과로 받음
  return user.save(); // mongoose 의 save() 메소드로 Users collection에 document 저장
};

const userWithEncodePassword = async ({
  // destructuring
  email,
  password,
  name,
  phone,
}) => {
  const hashedPassword = await bcrypt.hash(password, 12); // 비밀번호를 암호화 하는 함수

  const user = new User({
    // User schema 사용, document 생성
    email,
    password: hashedPassword,
    name,
    phone,
  });
  return user;
};

const errorGenerator = (message, statusCode = 500) => {
  // error handling
  const error = new Error(message);
  error.statusCode = statusCode;
  throw error; // error handling 하는 middleware로 throw
};

// 이메일만 중복 검사 test함
const signUp = async (req, res, next) => {
  // signUp 하는 로직
  try {
    const { email } = req.body; // POST 메소드로 들어온 요청의 데이터(body) 에서 email 을 destructuring 한다.
    const user = await User.findOne({ email }); // email 의 정보를 가지고 Users 콜렉션에서 조회한다.
    if (user) errorGenerator("email 중복입니다. 다시 입력해주세요.", 404); // 중복 될 시에 에러 발생시킴

    await createUserData(req.body); // 위에서 정의한 함수로 POST메소드로 들어온 데이터(body)를 보낸다.
    res.status(201).json({ message: "User created" }); // user가 생성되었다는 메세지를 응답으로 보낸다.
  } catch (err) {
    next(err); // 에러를 catch 해서 에러를 핸들링 하는 미들웨어에서 처리하도록 한다.
  }
};

module.exports = { signUp }; // signUp 함수를 module 로 내보낸다.
