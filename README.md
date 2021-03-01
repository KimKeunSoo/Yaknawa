# 약나와 - YakNaWa

## 홈페이지 제작 프로젝트 (2021.02.15 ~ 2021.04. 04)

- Client : React - 담당 이민석
- Server : Express.js, mongodb - 담당 김근수



## 상황 보고 

![image-20210224014123073](README%20assets/image-20210224014123073.png)

2021.02.14 : ./yaknawa/server/server.js에 react연결해둔 상태



## 사용법

사용 모듈

- react // REST api build, 웹/앱 view
- express // nodejs 웹프레임워크
- mongoose // mongodb와 연결
- body-parser // parse the request & create `req.body` 역할
- cors // CORS를 사용하기 위해 Express 미들웨어 제공 
- jsonwebtoken // 정보 암호화(권한/토큰 부여) 
- bcryptjs //암호해싱해서 DB에 저장할때 씀
- sweetalert2, bootstrap
- axios // promise api 를 활용하는 http 비동기 통신
- react-validation validator // 유효한 email인지 확인

1. 다운
2. `npm install`
3. `npm start`



## 회의록

#### 2021년 02월 10일 14:30 ~ 16:30 

- 1차 회의, 프로젝트 시작 검토

#### 2021년 02월 13일 14:00 ~ 15:30

- 2차 회의, 프로젝트 세별화 및 결정

#### 2021년 02월 15일

- 프로젝트 시작

#### 2021년 02월 21일 15:30 ~ 16:30 회의록

##### 민석 할일

0. 최종 기획서 기반 최대한 똑같게 세세한 수정 (+ 문의하기 페이지)
1. 로그인 및 모든 페이지 틀 제작
2. 관리자 UI 페이지 제작
3. 비급여 페이지 테이블로 구현 알아보기(1차때 말이라도 할정도만 or 간단한 구현 선택)
4. 주변약국(지도 api) 기능 구현 알아보기, 요건 2차보고때 해도됨

##### 근수 할일

1. 원래 DB값 가져오기
2. DB Table 완성
3. 서울시 약국 DB 적용하기

##### 일요일 회의 일정은 근수가 토요일 확실히 미리 얘기해주기

#### 2021년 03월 01일 12:00 ~ 12:30 1차 보고

##### 대표 할일

1. 개발 용도 아닌 운영 용도 비급여진료비 데이터 신청
2. 비급여 디자인
3. 관리자 디자인

##### 민석 할일

1. 대표 의견 기반 수정
2. 지도 api 기능 flag까지 구현

##### 근수 할일(~03.14)

1. 로그인 기능 마저 구현
2. DB Table완성
3. 원래 DB값 가져와서 적용
4. 서울시 약국 DB 가져오기