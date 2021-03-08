const { verifySignUp } = require("../middlewares");
const controller = require("../controllers/auth.controller");

module.exports = function (app) {
  //정보 인증 부분
  app.use(function (req, res, next) {
    res.header(
      //Access-Control-Request-Headers를 포함하는 요청의 응답에 사용됨
      "Access-Control-Allow-Headers",
      //access token을 응답으로 보내는데 사용(jsonwebtoken라이브러리로 토큰만들어서 보낼거)
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  //post로 api/auth/signup 접근했을때 = 회원가입
  app.post(
    "/api/auth/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted,
    ],
    controller.signup
  );
  //post로 api/auth/signin 접근했을때 = 로그인
  app.post("/api/auth/signin", controller.signin);
};
