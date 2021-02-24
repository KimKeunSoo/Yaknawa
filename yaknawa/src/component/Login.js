import React, { PureComponent } from 'react';
import './component_css/Join_us.css';
import Header from "./Header_ver2";
import Footer from './Footer';
import logo from './component_img/yaknawa-logo2.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';

class Login extends React.Component {
    //component 초기설정
    constructor(props) {
        super(props);
        this.state = {
            username: null
        };
        this.url = 'http://localhost:8080';
    }

    //component 만들고 첫 렌더링 마치고 실행 다른 자바스크립트 라이브러리나 프레임워크의 함수 호출, 이벤트 등록, setTimeout, setInterval, 네트워크 요청 등 비동기 작업 처리
    componentDidMount() {
        //백엔드 서버와 비동기 요청
        fetch(`${this.url}/login`)
            .then(res => res.json())
            .then(data => this.setState({ username: data.username }));
    }

    //component 모양 정의
    render() {
        const { username } = this.state;
        return (
            <div className="Login">
                <Header />
                <body className="Login-body">
                    <Container fluid>
                        <Row>
                            <Col lg={2}></Col>
                            <Col lg={8}>
                                <div className="body-title">
                                    <strong>로그인</strong>
                                </div>
                                
                                <Container fluid className="body-item">
                                    <Row className="login-id">
                                        <Col lg={3}></Col>
                                        <Col lg={2}>
                                            <div className="item-lable login-label"><strong>아이디</strong></div>
                                        </Col>
                                        <Col lg={4}>
                                            <div>
                                                <input type="text" placeholder="아이디를 입력해주세요" className="item-input"  autoFocus></input>
                                            </div>
                                        </Col>
                                        <Col lg={3}>
                                           
                                        </Col>
                                       
                                    </Row>
                                    <Row className="login-pw">
                                        <Col lg={3}></Col>
                                        <Col lg={2}>
                                            <div className="item-lable login-label"><strong>비밀번호</strong></div>
                                        </Col>
                                        <Col lg={4}>
                                            <div>
                                                <input type="password" placeholder="비밀번호를 입력해주세요" className="item-input"></input>
                                            </div>
                                        </Col>
                                        <Col lg={3}>

                                        </Col>
                                        
                                    </Row>
                                    <br />
                                    <Row className="find-info">
                                        <Col lg={7}></Col>
                                        <Col lg={2}>
                                            <div>
                                                <Link>아이디 찾기</Link> | <Link>비밀번호찾기</Link>
                                            </div>
                                        </Col>
                                        <Col lg={3}>

                                        </Col>
                                        
                                    </Row>
                                    <br/>
                                    <Row className="login-commit">
                                        <Col lg={3}></Col>                                       
                                        <Col lg={6}>
                                            <div>
                                                <input type="submit" className="item-input" value="로그인" ></input>
                                            </div>
                                        </Col>
                                        <Col lg={3}>

                                        </Col>
                                        
                                    </Row>
                                    <Row className="login-join_us">
                                        <Col lg={3}></Col>                                       
                                        <Col lg={6}>
                                            <div>
                                                <input type="button" className="item-input" value="회원가입"></input>
                                            </div>
                                        </Col>
                                        <Col lg={3}>

                                        </Col>                                        
                                    </Row>
                                </Container>
                                   
                            </Col>
                            <Col lg={2}></Col>
                        </Row>
                    </Container>
                </body>
                <Footer />
            </div>
        );
    }

}

export default Login;




