const mongoose = require("mongoose");

const shareSchema = new mongoose.Schema(
  {
    // 1. 약국 이름
    pharmacyName: {
      type: String,
      required: true,
    },
    // 2. 약 이름
    medicineName: {
      type: String,
      required: true,
    },
    // 3. 수량(정)
    volume: {
      type: Number,
      required: true,
    },
    // 4. 구매 가격
    purchasePrice: {
      type: Number,
      required: true,
    },
    // 5. 구매 일자
    purchaseDate: {
      type: Date,
      required: true,
    },
    // 6. 작성자 ID
    writer: {
      type: String,
      required: true,
    },
    // 7. 약국 리뷰
    review: {
      type: String,
    },
    // 8. 영수증 첨부
    receiptPath: {},
  },
  { versionKey: false } // versionKey default 삭제
);

module.exports = mongoose.model("Share", shareSchema);
