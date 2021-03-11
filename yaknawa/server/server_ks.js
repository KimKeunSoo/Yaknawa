const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const cors = require("cors");
const db = require("./models");
const User = db.user;
const { authJwt } = require("./middlewares");
const dbConfig = require("./config/db.config");
const app = express();

// Express 앱을 만들기 위해 cors와 body-parser를 app.use를 사용해서 추가함
// cors
app.use(
  cors({
    origin: true,
    credentials: true, //도메인이 다른경우 서로 쿠키등을 주고받을때 허용해준다고 함.
  })
);
//body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//cookieParser는 쿠키의 토큰값을 가져오기 위해 사용
app.use(cookieParser());

//db연결
mongoose
  .connect(dbConfig.ADDRESS, {
    dbName: dbConfig.DB,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

//회원가입
app.post("/api/user/register", (req, res) => {
  //post로 넘어온 데이터를 받아서 DB에 저장해준다
  const user = new User(req.body);
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

//로그인
app.post("/api/user/login", (req, res) => {
  //로그인을할때 아이디와 비밀번호를 받는다
  //받은 ID값을 DB에 검색
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) {
      return res.json({
        loginSuccess: false,
        message: "존재하지 않는 아이디입니다.",
      });
    }
    console.log(user);
    user
      .comparePassword(req.body.password)
      .then((isMatch) => {
        if (!isMatch) {
          return res.json({
            loginSuccess: false,
            message: "비밀번호가 일치하지 않습니다",
          });
        }
        //비밀번호가 일치하면 토큰을 생성한다
        //jwt 토큰 생성하는 메소드 실행
        user
          .generateToken()
          .then((user) => {
            //토큰이 생성되면 쿠키에 토큰을 저장하고 loginSuccess:true를 보내준다.
            res
              .cookie("x_auth", user.token)
              .status(200)
              .json({ loginSuccess: true, userId: user._id });
          })
          .catch((err) => {
            res.status(400).send(err);
          });
      })
      .catch((err) => res.json({ loginSuccess: false, err }));
  });
});

//auth 미들웨어를 가져온다, auth 미들웨어의 역할은 Token을 찾아서 검증.
app.get("/api/user/auth", authJwt, (req, res) => {
  //auth 미들웨어를 통과한 상태 이므로 req.user에 user값을 넣어줬으니까
  res.status(200).json({
    _id: req._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    username: req.user.username,
    email: req.user.email,
  });
});

//user_id를 찾아서(auth를 통해 user의 정보에 들어있다) db에있는 토큰값을 비워준다
app.post("/api/user/logout", authJwt, (req, res) => {
  User.findOneAndUpdate({ _id: req.user._id }, { token: "" }, (err, user) => {
    if (err) return res.json({ success: false, err });
    res.clearCookie("x_auth");
    return res.status(200).send({
      success: true,
    });
  });
});

// 포트 설정(8080), 서버 열기, 이거는 서버단을 실행하는 KS's 컴퓨터에서 열림
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
