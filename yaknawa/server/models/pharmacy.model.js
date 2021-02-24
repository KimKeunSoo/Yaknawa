const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pharmacySchema = new Schema({
  // 1. 약국 이름
  pharmacyName: {
    type: String,
  },
  // 2. 약국 주소
  address: {
    type: String,
  },
});

module.exports = mongoose.model("Pharmacy", pharmacySchema);
