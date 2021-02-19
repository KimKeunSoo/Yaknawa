const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');

const port = process.env.PORT || 8080;

app.use(cors());
app.use(bodyparser.json());
//처음 실행화면 랜딩
app.use('/',(req,res)=>res.json({username:'mindol8'}));
//로그인화면 이동
app.get('/login',(req,res)=>res.json({username:'mindol8'}));
//가격포럼 화면 이동
app.get('/priceform',(req,res)=>{});
//회원가입 화면 이동
app.get('./joinus',(req,res)=>{});

app.listen(port,()=>console.log(`Listening on port ${port}`));
