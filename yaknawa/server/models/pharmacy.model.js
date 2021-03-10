const mongoose = require("mongoose");

const pharmacySchema = new mongoose.Schema(
  {
    // 1. 약국 이름
    pharmacyName: {
      type: String,
    },
    // 2. 약국 주소
    address: {
      type: String,
    },
  },
  { versionKey: false } // versionKey default 삭제
);

module.exports = mongoose.model("Pharmacy", pharmacySchema);
