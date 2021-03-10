const jwt = require("jsonwebtoken");
const db = require("../../../models");
const User = db.user;
/*
    POST /api/auth/register
    {
        username,
        password
    }
*/
// 회원가입
exports.register = (req, res) => {
  const {
    username,
    password,
    gender,
    birthday,
    email,
    nickname,
    interestedM,
  } = req.body;
  let newUser = null;

  // 새로운 사용자 생성
  const create = (user) => {
    if (user) {
      throw new Error("이미 사용하는 아이디입니다.");
    } else {
      return User.create(
        username,
        password,
        gender,
        birthday,
        email,
        nickname,
        interestedM
      ); //model에 있는 create 메소드 불러오기
    }
  };

  // 사용자 수 체크, 새DB시작했는데 1명이라면 admin 자격을 주기 위해서
  const count = (user) => {
    newUser = user;
    return User.count({}).exec();
  };

  //count가 1이면 admin 자격 줌
  const assign = (count) => {
    if (count === 1) {
      return newUser.assignAdmin();
    } else {
      // if not, return a promise that returns false
      return Promise.resolve(false);
    }
  };

  // 성공 응답 전송
  const respond = (isAdmin) => {
    res.json({
      message: "회원가입이 완료되었습니다.",
      admin: isAdmin ? true : false,
    });
  };

  // 에러가 있으면 에러 전송(아이디 중복)
  const onError = (error) => {
    res.status(409).json({
      message: error.message,
    });
  };

  // 아이디 중복 체크
  User.findOneByUsername(username)
    .then(create)
    .then(count)
    .then(assign)
    .then(respond)
    .catch(onError);
};

/*
    POST /api/auth/login
    {
        username,
        password
    }
*/
//로그인
exports.login = (req, res) => {
  const { username, password } = req.body;
  const secret = req.app.get("jwt-secret");

  // 사용자 정보 확인 & jwt 토큰 생성
  const check = (user) => {
    if (!user) {
      // 사용자 정보가 없다면
      throw new Error("아이디가 존재하지 않습니다.");
    } else {
      // 사용자 정보가 있다면, 비밀번호 확인
      if (user.verify(password)) {
        // 비밀번호가 맞다면, jwt 토큰을 비동기적으로 만들어야 돼서 promise 생성
        const p = new Promise((resolve, reject) => {
          //jwt.sign(payload, secret, options, [callback])
          jwt.sign(
            {
              _id: user._id,
              username: user.username,
              admin: user.admin,
            },
            "jwt-secret",
            {
              expiresIn: "7d",
              subject: "userInfo",
            },
            (err, token) => {
              if (err) reject(err);
              resolve(token);
            }
          );
        });
        return p;
      } else {
        throw new Error("비밀번호가 다릅니다.");
      }
    }
  };

  // 로그인성공메시지와 token 응답
  const respond = (token) => {
    res.json({
      message: "로그인이 완료되었습니다.",
      token,
    });
  };

  // 에러 발생
  const onError = (error) => {
    res.status(403).json({
      message: error.message,
    });
  };

  // 사용자 탐색
  User.findOneByUsername(username).then(check).then(respond).catch(onError);
};

/*
    GET /api/auth/check
*/
//만약에 토큰 검증에 실패 될 땐, 미들웨어에서 next() 함수가 실행되지 않기때문에,
//이 check 함수 내부에서는 토큰이 검증실패했을때를 고려하지 않아도 됨
exports.check = (req, res) => {
  res.json({
    success: true,
    info: req.decoded,
  });
};
