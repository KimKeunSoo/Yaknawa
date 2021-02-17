import React,{PureComponent} from 'react';
//import logo from './logo.svg';
import './css/login.css';
import Header from "./component/Header";
import Footer from './component/Footer';
import Search from './component/Search';
///import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Login extends PureComponent{
    constructor(props) {
        super(props);
        this.state = {
          username: null
        };
      }
    
      //component 만들고 첫 렌더링 마치고 실행 다른 자바스크립트 라이브러리나 프레임워크의 함수 호출, 이벤트 등록, setTimeout, setInterval, 네트워크 요청 등 비동기 작업 처리
      componentDidMount() {
        //백엔드 서버와 비동기 요청
        fetch('http://localhost:8080/loogin')
          .then(res => res.json())
          .then(data => this.setState({ username: data.username }));
      }

      render(){
        return(
            <div className="Login">
                <Header/>
                <Footer/>
            </div>
        );
      }
}

export default Login;