const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const dbConfig = require("./config/db.config");

const app = express();

//cors는 서버 포트와 다르게 함, 근수's 컴퓨터에서 돌아감
var corsOptions = {
  origin: "http://localhost:8081",
};

// Express 앱을 만들기 위해 body-parser와 cors를 app.use를 사용해서 추가함
app.use(cors(corsOptions));
// Body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./models");
const Role = db.role;

//db연결
db.mongoose
  //mongodb://아이디:비밀번호@Host:Port/admin => root권한으로 계정생성해둠
  .connect(`mongodb://minseok:qwe123@${dbConfig.HOST}:${dbConfig.PORT}/admin`, {
    dbName: dbConfig.DB,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connect to MongoDB.");
    initial();
  })
  .catch((err) => {
    console.error("Connection error", err);
    process.exit();
  });

function initial() {
  //첫 빈 db에서 만들때 사용할 권한들 설정함. 지금은 user, moderator, admin 이 세가지 권한만 설정함.
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "moderator",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'moderator' to roles collection");
      });

      new Role({
        name: "admin",
      }).save((err) => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}

//routes
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);

// 포트 설정(8080), 서버 열기, 이거는 근수's 컴퓨터에서 열림
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
