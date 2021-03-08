const jwt = require("jsonwebtoken");
const config = require("../config/auth.config.js");
const db = require("../models");
const User = db.user;
const Role = db.role;

//token이 제공되는지 확인하여 legal한지 확인
verifyToken = (req, res, next) => {
  //HTTP 헤더의 x-access-token을 가져옴
  let token = req.headers["x-access-token"];
  //토큰값이 없다면, 없다고 메시지 응답
  if (!token) {
    return res.status(403).send({ message: "No token provided!" });
  }

  //받은 토큰값이 DB에서 보낸 token값이 맞는지 확인
  jwt.verify(token, config.secret, (err, decoded) => {
    //아니다?
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    //에러 조건 무사히 넘기면, decoded의 고유 object id 값을 넘김
    req.userId = decoded.id;
    next();
  });
};

//user가 가지고 있는 roles가 가지고 있는 권한인지 아닌지를 확인함, 밑에 2개 동일
isAdmin = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    Role.find(
      {
        _id: { $in: user.roles },
      },
      (err, roles) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "admin") {
            next();
            return;
          }
        }

        res.status(403).send({ message: "Require Admin Role!" });
        return;
      }
    );
  });
};

isModerator = (req, res, next) => {
  User.findById(req.userId).exec((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }

    Role.find(
      {
        _id: { $in: user.roles },
      },
      (err, roles) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }

        for (let i = 0; i < roles.length; i++) {
          if (roles[i].name === "moderator") {
            next();
            return;
          }
        }

        res.status(403).send({ message: "Require Moderator Role!" });
        return;
      }
    );
  });
};

const authJwt = {
  verifyToken,
  isAdmin,
  isModerator,
};
module.exports = authJwt;
