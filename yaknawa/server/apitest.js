const express = require("express");
const axios = require("axios");
const app = express();

const currentPut = async () => {
  let response;
  try {
    response = await axios.get(
      "http://apis.data.go.kr/B551182/nonPaymentDamtInfoService/getNonPaymentItemCodeList2?pageNo=1&numOfRows=10&ServiceKey=13%2Fi%2FswRnU0uXKofAMZROl5DssosxilqkLdDlmcJxYJ264VmNxzUs3LpT7C6mClEI%2FKx8ntQ95kUk%2BMJuSD80g%3D%3D");
  } catch (e) {
    console.log(e);
  }
  return response;
};

app.get("/", (req, res) => {
  currentPut().then((response) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.json(response.data.response.body);
  });
}); //node서버에서 프론트서버로 데이터를 보내기 위한 코드

app.listen(4000, () => {
  console.log("서버가 연결되었습니다.");
});