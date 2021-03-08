const mongoose = require("mongoose");

const Role = mongoose.model(
  "Role",
  new mongoose.Schema(
    {
      name: String,
    },
    { versionKey: false }
  ) // versionKey default 삭제
);

module.exports = Role;
