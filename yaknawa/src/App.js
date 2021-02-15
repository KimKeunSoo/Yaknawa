import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./component/Header";
import Footer from './component/Footer';
//import Button from 'react-bootstrap/Button';


class App extends React.Component {
  //component 초기설정
  constructor(props){
    super(props);
    this.state={
      username:null
    };
  }

  //component 만들고 첫 렌더링 마치고 실행 다른 자바스크립트 라이브러리나 프레임워크의 함수 호출, 이벤트 등록, setTimeout, setInterval, 네트워크 요청 등 비동기 작업 처리
  componentDidMount() {
    //백엔드 서버와 비동기 요청
    fetch('http://localhost:8080/')
        .then(res=>res.json())
        .then(data=>this.setState({username:data.username}));
}

//component 모양 정의
  render(){
    const {username} = this.state;
    return (
      <div className="App">
        <Header/>
        <header className="App-header">
          {username ? `Hello ${username}`: ''}
        </header>
        <Footer/>
      </div>
        
    );
  }
 
}

export default App;
