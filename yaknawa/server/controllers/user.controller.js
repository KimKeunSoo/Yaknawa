//routes/user.routes.js에 사용될거임

//아무 권한없이 들어갈 수 있을때 메시지 반환
exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};
//사용자권한이 있을때 메시지 반환
exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};
//관리자 권한이 있을때 메시지 반환
exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};
//수정자 권한이 있을때 메시지 반환
exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};
