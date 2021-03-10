const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");
const cors = require("cors");
const dbConfig = require("./config/db.config");
const authConfig = require("./config/auth.config");
const app = express();

// Express 앱을 만들기 위해 cors와 body-parser를 app.use를 사용해서 추가함
// cors
app.use(
  cors({
    origin: true,
    credentials: true, //도메인이 다른경우 서로 쿠키등을 주고받을때 허용해준다고 함.
  })
);
//body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// 요청 로그를 console창에 출력하기 위해 morgan use
app.use(morgan("dev"));

// jwt에 사용될 secret key를 config한 것으로 설정
app.set("jwt-secret", authConfig.secret);

// 모든 api들 다 가져옴
app.use("/api", require("./routes/api"));

// 서버 열기
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

/* =======================
    몽고디비 연결 부분
==========================*/
mongoose.connect(dbConfig.ADDRESS, {
  dbName: dbConfig.DB,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on("error", console.error);
db.once("open", () => {
  console.log("Successfully connect to MongoDB.");
});
