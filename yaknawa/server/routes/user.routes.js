const { authJwt } = require("../middlewares");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  //접속 허가 부분
  app.use(function (req, res, next) {
    //Access-Control-Request-Headers를 포함하는 요청의 응답에 사용됨
    res.header(
      "Access-Control-Allow-Headers",
      //access token을 응답으로 보내는데 사용(jsonwebtoken라이브러리로 토큰만들어서 보낼거)
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  //여기서부터는 헤더에 발급받은 토큰값이 있어야 제대로 get할수 있겠제잉

  //get으로 api/test/all 접근했을때 =>  "Public Content." 메시지 전송 아니면 unauthorized!"  전송하게됨
  app.get("/api/test/all", controller.allAccess);

  //get으로 api/test/user 에 접근했을때 만약 user의 권한이 있다면 => "User Content." 메시지 전송 아니면 unauthorized!"  전송하게됨
  app.get("/api/test/user", [authJwt.verifyToken], controller.userBoard);

  //get으로 api/test/mod 접근했을때 만약 moderator의 권한이 있다면 =>  "Moderator Content." 메시지 전송 아니면 unauthorized!"  전송하게됨
  app.get(
    "/api/test/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorBoard
  );
  //get으로 api/test/admin 접근했을때 만약 admin의 권한이 있다면 =>  "Admin Content." 메시지 전송 아니면 unauthorized!"  전송하게됨
  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};
