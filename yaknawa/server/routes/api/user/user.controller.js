const db = require("../../../models");
const User = db.user;
/* 
    GET /api/user/list
*/

exports.list = (req, res) => {
  // admin이 아닐시 거절
  if (!req.decoded.admin) {
    return res.status(403).json({
      message: "관리자 권한이 없습니다.",
    });
  }

  User.find({}, "-password") //사용자 목록 가져오기
    .exec()
    .then((users) => {
      res.json({ users });
    });
};

/*
    POST /api/user/assign-admin/:username
*/
exports.assignAdmin = (req, res) => {
  // admin이 아닐시 거절
  if (!req.decoded.admin) {
    return res.status(403).json({
      message: "관리자 권한이 없습니다.",
    });
  }
  //요청 받은 사용자 아이디로 정보값 가져오기
  User.findOneByUsername(req.params.username)
    .then((user) => {
      if (!user) throw new Error("user not found");
      user.assignAdmin();
    })
    .then(
      res.json({
        success: true,
      })
    )
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};
