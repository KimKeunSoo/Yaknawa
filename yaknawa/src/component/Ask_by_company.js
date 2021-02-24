import React, { PureComponent } from 'react';
import './component_css/Join_us.css';
import Header from "./Header_ver2";
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

class Askbc extends PureComponent {
    constructor(props) {
        super(props);
        this.url = 'http://localhost:8080';
        this.state={
            email:'email@mail.com',
            nickname:'nickname'
        };
    }

    componentDidMount() {
        //백엔드 서버와 비동기 요청
        fetch(`${this.url}/joinus`)
            .then(res => res.json())
        //.then(data => this.setState({ username: data.username }));
    }

    render() {
        const {email,nickname} = this.state;
        return (
            <div className="Askbc">
                <Header />
                <body className="join_us-body">
                    <Container fluid>
                        <Row>
                            <Col lg={2}></Col>
                            <Col lg={8}>
                                <div className="body-title">
                                    <strong>문의하기</strong>
                                </div>                                
                                <Container fluid className="body-item">
                                    <Row className="company-name">
                                        <Col lg={1}></Col>
                                        <Col lg={2}>
                                            <div className="item-lable">제목</div>
                                        </Col>
                                        <Col lg={6}>
                                            <div>
                                                <input type="text" placeholder="제목을 입력해주세요" className="item-input"  autoFocus></input>
                                            </div>
                                        </Col>
                                        <Col lg={2}>
                                           
                                        </Col>
                                        <Col lg={1}></Col>
                                    </Row>
                                    <br />
                                
                                    <Row className="ask">
                                        <Col lg={1}></Col>
                                        <Col lg={2}>
                                            <div className="item-lable">문의내용</div>
                                        </Col>
                                        <Col lg={6}>
                                            <div>
                                                <textarea placeholder="문의내용을 기입해주세요" maxlength="700" className="ask-input"></textarea>
                                            </div>
                                        </Col>
                                        <Col lg={2}>
                                        </Col>
                                        <Col lg={1}></Col>
                                    </Row>
                                
                                   
                                </Container>
                                
                                <div className="commit-btn">
                                    <Button variant="success">
                                        문의하기
                                    </Button>
                                </div>                                
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

export default Askbc;