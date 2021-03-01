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

class Modify extends PureComponent {
    constructor(props) {
        super(props);
        this.url = 'http://localhost:8080';
        this.state = {
            username: null,
            medi_itme1: "의약품1",
            medi_item2: "의약품2"
        };
    }

    componentDidMount() {
        //백엔드 서버와 비동기 요청
        fetch(`${this.url}/modify`)
            .then(res => res.json())
            .then(data => this.setState({ username: data.username }));
    }

    render() {
        const { username,medi_item2,medi_itme1 } = this.state;
        console.log(username);
        return (
            <div className="modify">
                <Header />
                <body className="modify-body">
                    <Container fluid>
                        <Row>
                            <Col lg={2}></Col>
                            <Col lg={8}>
                                <div className="body-title">
                                    <strong>정보 수정</strong>
                                </div>

                                <Container fluid className="body-item">
                                    <Row className="medi">
                                        <Col lg={1}></Col>
                                        <Col lg={2}>
                                            <div className="item-lable">관련 의약품</div>
                                        </Col>
                                        <Col lg={6}>
                                            <div>
                                                <select className="item-input item-select">
                                                    <option value={this.state.medi_itme1} selected>{this.state.medi_itme1}</option>
                                                    <option value={this.state.medi_item2}>{this.state.medi_item2}</option>
                                                </select>
                                            </div>
                                        </Col>
                                        <Col lg={2}>

                                        </Col>
                                        <Col lg={1}></Col>
                                    </Row>
                                    <br />
                                    <Row className="nickname">
                                        <Col lg={1}></Col>
                                        <Col lg={2}>
                                            <div className="item-lable">닉네임</div>
                                        </Col>
                                        <Col lg={6}>
                                            <div>
                                                <input type="text" placeholder={this.state.username} className="item-input" disabled></input>
                                            </div>
                                        </Col>
                                        <Col lg={2}>
                                            <div>
                                                <Button variant="secondary" className="id-check">
                                                    수정
                                                </Button>
                                            </div>
                                        </Col>
                                        <Col lg={1}></Col>
                                    </Row>
                                    <br />
                                    <Row className="pw">
                                        <Col lg={1}></Col>
                                        <Col lg={2}>
                                            <div className="item-lable">새 비밀번호</div>
                                        </Col>
                                        <Col lg={6}>
                                            <div>
                                                <input type="password" placeholder="비밀번호를 입력해주세요" className="item-input" disabled></input>
                                            </div>
                                        </Col>
                                        <Col lg={2}>
                                            <div>
                                                <Button variant="secondary" className="id-check">
                                                    수정
                                                </Button>
                                            </div>
                                        </Col>
                                        <Col lg={1}></Col>
                                    </Row>
                                    <br />
                                    <Row className="pw-check">
                                        <Col lg={1}></Col>
                                        <Col lg={2}>
                                            <div className="item-lable">비밀번호 확인</div>
                                        </Col>
                                        <Col lg={6}>
                                            <div>
                                                <input type="password" placeholder="비밀번호를 한번 더 입력해주세요" className="item-input" disabled></input>
                                            </div>
                                        </Col>
                                        <Col lg={2}>

                                        </Col>
                                        <Col lg={1}></Col>
                                    </Row>
                                    <br />
                                </Container>

                                <div className="commit-btn">
                                    <Button variant="success">
                                        수정하기
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

export default Modify;