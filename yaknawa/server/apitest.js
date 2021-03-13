const express = require("express");
const axios = require("axios");
const app = express();
const key = "2zQAcm2%2BVmtroO3itoBrWenseAnOsgAogptiahQoummZ3oqZB7cf9bF9MeRQ%2FgQFTtZBlKBef%2FYCV4ny6IWCyg%3D%3D";

const currentPut = async (region, npayKorNm) => {
  const numOfRows = 5;
  var pageNo = 1;
  let response;
  const list = [];
  for (pageNo; ; pageNo++) {
    //console.log(`cycle${pageNo}`);
    try {
      response = await axios.get(
        `http://apis.data.go.kr/B551182/nonPaymentDamtInfoService/getNonPaymentItemHospList2?ServiceKey=${key}&pageNo=${pageNo}&numOfRows=${numOfRows}&sgguCd=${region}&searchWrd=${encodeURIComponent(npayKorNm)}`);
    } catch (e) {
      console.log("no data");
      return e;
    }
    console.log(response.data.response.body.items.item);
    console.log(Array.isArray(response.data.response.body.items.item));
    if (response.data.response.body.items.item) {
      if (Array.isArray(response.data.response.body.items.item)) {
        response.data.response.body.items.item.map((data) => {
          list.push({
            adtEndDd: data.adtEndDd,
            adtFrDd: data.adtFrDd,
            minPrc: data.minPrc,
            maxPrc: data.maxPrc,
            yadmNm: data.yadmNm,
            clCdNm: data.clCdNm
          })
        })
      } else {
        let item = response.data.response.body.items.item;
        list.push({
          adtEndDd: item.adtEndDd,
          adtFrDd: item.adtFrDd,
          minPrc: item.minPrc,
          maxPrc: item.maxPrc,
          yadmNm: item.yadmNm,
          clCdNm: item.clCdNm
        })
      }
    }
    else {
      break;
    }
  }

  return list;
};

app.get("/select/:region/:main/:sub", (req, res) => {
  const region = req.params.region;
  const main = req.params.main;
  const sub = req.params.sub;
  const npayKorNm = `${main}/${sub}`;
  //console.log(region, main, sub);
  //console.log(npayKorNm);
  currentPut(region, npayKorNm).then((response) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    //console.log("data"+response);
    // console.log(response);
    res.json(response);
  }).catch(err => {
    console.log('withoutTryCatch - 실패결과', err.message)
  })
});

app.listen(4000, () => {
  console.log("서버가 연결되었습니다.");
});