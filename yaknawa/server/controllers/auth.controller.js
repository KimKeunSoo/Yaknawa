const config = require("../config/auth.config");
const db = require("../models");
const User = db.user;
const Role = db.role;

//로그인을 할때 token값을 생성하고 server가 갖고 client에게 건내주기 위해 jsonwebtoken 사용
var jwt = require("jsonwebtoken");
//비밀번호 암호화해서 저장하기위해 bcryptjs 사용
var bcrypt = require("bcryptjs");

//회원가입. username은 id, password는 pw, 등등 보면 알 수 있음.
exports.signup = (req, res) => {
  //user객체 생성
  const user = new User({
    //User schema를 가져와서 그 틀로 user 객체에 저장
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 8), //hash함수로 만듬
    birthday: req.body.birthday,
    sex: req.body.sex,
    interestedM: req.body.interestedM,
    nickname: req.body.nickname,
    email: req.body.email,
  });

  //user를 DB에 저장하는 부분
  user.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    //user의 권한이 있다면,(무조건 있게 만들어야겠지)
    if (req.body.roles) {
      //DB에는 권한이 총 3가지 저장되어있음(user, moderator, admin)
      Role.find(
        {
          name: { $in: req.body.roles },
        }, //해당 권한을 찾고
        (err, roles) => {
          //해당 값을 roles 변수에 저장, err메시지면 err 핸들링
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          //DB에 저장된 권한 3개중 해당 권한의 _id값을 찾아서 user객체의 roles 에 저장!
          user.roles = roles.map((role) => role._id);
          //마지막으로 user 객체를 DB에 저장!
          user.save((err) => {
            if (err) {
              res.status(500).send({ message: err });
              return;
            }
            //response의 message로 성공 메시지 보냄(응답 메시지)
            res.send({ message: "User was registered successfully!" });
          });
        }
      );
    }
    //만약 권한이 없다? 즉 회원가입 그냥해서 넘기면!
    else {
      //그냥 일반 사용자니까 user의 권한을 가지고 온다. role 객체 가지고옴
      Role.findOne({ name: "user" }, (err, role) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        //user객체의 roles에 일반 사용자 권한의 _id값 저장!
        user.roles = [role._id];
        //DB에 user 객체 저장!
        user.save((err) => {
          if (err) {
            res.status(500).send({ message: err });
            return;
          }
          //성공 메시지 응답함!
          res.send({ message: "User was registered successfully!" });
        });
      });
    }
  });
};

//로그인 부분.
exports.signin = (req, res) => {
  //DB에 저장된 id탐색, DB에는 _id랑 햇갈릴수도 있어서 username이라고 저장함. 그래서 body의 username으로 DB에 검색해본다.
  User.findOne({
    username: req.body.username,
  })
    .populate("roles", "-__v")
    .exec((err, user) => {
      if (err) {
        res.status(500).send({ message: err });
        return;
      }

      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }

      console.log(user);
      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        user.password
      );

      if (!passwordIsValid) {
        return res.status(401).send({
          accessToken: null,
          message: "Invalid Password!",
        });
      }

      var token = jwt.sign({ id: user.id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });

      var authorities = [];

      for (let i = 0; i < user.roles.length; i++) {
        authorities.push("ROLE_" + user.roles[i].name.toUpperCase());
      }
      res.status(200).send({
        id: user._id,
        username: user.username,
        email: user.email,
        nickname: user.nickname,
        roles: authorities,
        accessToken: token,
      });
    });
};
