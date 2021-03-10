const db = require("../models");
const User = db.user;

authJwt = (req, res, next) => {
  let token = req.cookies.x_auth;
  //token을 찾으면  req.token에 token과 user 정보를 넣어준다.
  User.findByToken(token)
    .then((user) => {
      if (!user) return res.json({ isAuth: false, error: true });
      req.token = token;
      req.user = user;
      next();
    })
    .catch((err) => {
      throw err;
    });
};

module.exports = authJwt;
