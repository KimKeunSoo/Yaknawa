const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
  // 헤더나 url에서 토큰값 읽어오기
  const token = req.headers["x-access-token"] || req.query.token;

  // 토큰이 존재하지 않는다면,
  // if (!token) {
  //   return res.status(403).json({
  //     success: false,
  //     message: "로그인할 수 없습니다.(토큰 없음.)",
  //   });
  // }

  // 토큰을 해석하는 Promise
  const p = new Promise((resolve, reject) => {
    jwt.verify(token, req.app.get("jwt-secret"), (err, decoded) => {
      if (err) reject(err);
      resolve(decoded);
    });
  });

  // 인증이 실패한다면 에러메시지 리턴
  const onError = (error) => {
    res.status(403).json({
      success: false,
      message: error.message,
    });
  };

  // promise 실행
  p.then((decoded) => {
    req.decoded = decoded;
    next();
  }).catch(onError);
};

module.exports = authMiddleware;
