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
//정보수정 화면 이동
app.get('/modify',(req,res)=>res.json({username:'mindol8'}));
//회사 문의하기 화면 이동
app.get('./askbc',(req,res)=>{});
//공지사항 화면 이동
app.get('./noticeall',(req,res)=>{});
//인기글 화면 이동
app.get('./noticehot',(req,res)=>{});
//게시글 화면 이동
app.get('./noticetheme',(req,res)=>res.json({theme:["여드름","탈모","비만","영양제","피임","발기부전"]}));
app.listen(port,()=>console.log(`Listening on port ${port}`));