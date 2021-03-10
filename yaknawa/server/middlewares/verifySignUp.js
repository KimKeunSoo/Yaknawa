const db = require("../models");
const User = db.user;

checkDuplicateUsername = (req, res, next) => {
  // 사용자 ID 중복 확인
  //DB에 요청받은 body의 username으로 ID 탐색
  User.findOne({
    username: req.body.username,
    //값이 있다면 user 변수에 저장
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    //사용자가 이미 있다면!
    if (user) {
      //아이디가 이미 있다는 메시지 전송
      res.status(400).send({ message: "Failed! ID is already in use!" });
      return;
    }
    next();
  });
};

checkDuplicateEmail = (req, res, next) => {
  // 사용자 email 중복 확인
  //DB에 요청받은 body의 email으로 email 탐색
  User.findOne({
    email: req.body.email,
    //값이 있다면 user 변수에 저장
  }).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    //이메일이 이미 있다면!
    if (user) {
      //이메일이 이미 있다는 메시지 전송
      res.status(400).send({ message: "Failed! Email is already in use!" });
      return;
    }

    next();
  });
};
// 사용자 권한 유무(타당성) 확인
// checkRolesExisted = (req, res, next) => {
//   // 요청의 body의 권한들이 만약 하나라도 존재한다면,
//   if (req.body.roles) {
//     //소유 권한 모두 탐색

//     // 해당 권한이 DB에 저장된 권한이 아니라면,

//     // 해당 권한 없음 메시지 전송
//     res.status(400).send({
//       message: `Failed! Role ${req.body.roles[i]} does not exist!`,
//     });
//     return;
//   }

//   next();
// };

const verifySignUp = {
  checkDuplicateUsername,
  checkDuplicateEmail,
  //checkRolesExisted,
};

module.exports = verifySignUp;
