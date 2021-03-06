const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "글 제목을 입력해주세요"],
    },
    content: {
      type: String,
      required: [true, "글 내용을 입력해주세요"],
    },
    writer: {
      type: mongoose.Schema.Types.ObjectId, //User의 user.id와 post의 post.author를 연결
      required: true,
      ref: "User",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    imgPath: {
      type: String,
    },
  },
  { versionKey: false } // versionKey default 삭제
);

module.exports = mongoose.model("Board", boardSchema);
