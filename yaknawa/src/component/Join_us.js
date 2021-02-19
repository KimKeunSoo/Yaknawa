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

class Join_us extends PureComponent {
    constructor(props) {
        super(props);
        this.url = 'http://localhost:8080';
    }

    componentDidMount() {
        //백엔드 서버와 비동기 요청
        fetch(`${this.url}/joinus`)
            .then(res => res.json())
        //.then(data => this.setState({ username: data.username }));
    }

    render() {
        //const gender={1:'남자', 2:'여자', 3:'선택안함'};
        return (
            <div className="Join_us">
                <Header />
                <body className="join_us-body">
                    <Container fluid>
                        <Row>
                            <Col lg={2}></Col>
                            <Col lg={8}>
                                <div className="body-title">
                                    <strong>회원가입</strong>
                                </div>
                                <div className="body-info">
                                    필수사항<sup>*</sup>
                                </div>
                                <Container fluid className="body-item">
                                    <Row className="id">
                                        <Col lg={1}></Col>
                                        <Col lg={2}>
                                            <div className="item-lable">아이디<sup>*</sup></div>
                                        </Col>
                                        <Col lg={6}>
                                            <div>
                                                <input type="text" placeholder="아이디를 입력해주세요" className="item-input"  autoFocus></input>
                                            </div>
                                        </Col>
                                        <Col lg={2}>
                                            <div>
                                                <Button variant="success" className="id-check">
                                                    중복확인
                                                </Button>
                                            </div>
                                        </Col>
                                        <Col lg={1}></Col>
                                    </Row>
                                    <br />
                                    <Row className="pw">
                                        <Col lg={1}></Col>
                                        <Col lg={2}>
                                            <div className="item-lable">패스워드<sup>*</sup></div>
                                        </Col>
                                        <Col lg={6}>
                                            <div>
                                                <input type="password" placeholder="비밀번호를 입력해주세요" className="item-input"></input>
                                            </div>
                                        </Col>
                                        <Col lg={2}>

                                        </Col>
                                        <Col lg={1}></Col>
                                    </Row>
                                    <br />
                                    <Row className="pw-check">
                                        <Col lg={1}></Col>
                                        <Col lg={2}>
                                            <div className="item-lable">패스워드확인<sup>*</sup></div>
                                        </Col>
                                        <Col lg={6}>
                                            <div>
                                                <input type="password" placeholder="비밀번호를 한번 더 입력해주세요" className="item-input"></input>
                                            </div>
                                        </Col>
                                        <Col lg={2}>

                                        </Col>
                                        <Col lg={1}></Col>
                                    </Row>
                                    <br />
                                    <Row className="birthday">
                                        <Col lg={1}></Col>
                                        <Col lg={2}>
                                            <div className="item-lable">생년월일</div>
                                        </Col>
                                        <Col lg={6}>
                                            <div>
                                                <input type="text" placeholder="yyyy/mm/dd" className="item-input"></input>
                                            </div>
                                        </Col>
                                        <Col lg={2}>

                                        </Col>
                                        <Col lg={1}></Col>
                                    </Row>
                                    <br />
                                    <Row className="gender">
                                        <Col lg={1}></Col>
                                        <Col lg={2}>
                                            <div className="item-lable">성별</div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="checkbox-form">
                                                <Form>
                                                    {['checkbox'].map((type) => (
                                                        <div key={`inline-${type}`} className="mb-3">
                                                            <Form.Check inline label="남자" type={type} id={`inline-${type}-1`} className="checkbox-item" />
                                                            <Form.Check inline label="여자" type={type} id={`inline-${type}-2`} className="checkbox-item"/>
                                                            <Form.Check
                                                                inline
                                                                checked
                                                                label="선택안함"
                                                                type={type}
                                                                id={`inline-${type}-3`}
                                                                className="checkbox-item"/>
                                                        </div>
                                                    ))}
                                                </Form>
                                            </div>
                                        </Col>
                                        <Col lg={2}>

                                        </Col>
                                        <Col lg={1}></Col>
                                    </Row>
                                    <br/>
                                    <Row className="medi">
                                        <Col lg={1}></Col>
                                        <Col lg={2}>
                                            <div className="item-lable">관심의약품</div>
                                        </Col>
                                        <Col lg={6}>
                                            <div>
                                                <input type="text" placeholder="ex)프로페시아" className="item-input"></input>
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
                                            <div className="item-lable">닉네임<sup>*</sup></div>
                                        </Col>
                                        <Col lg={6}>
                                            <div>
                                                <input type="text" placeholder="닉네임을 입력해주세요" className="item-input"></input>
                                            </div>
                                        </Col>
                                        <Col lg={2}>
                                            <div>
                                                <Button variant="success" className="id-check">
                                                    중복확인
                                                </Button>
                                            </div>
                                        </Col>
                                        <Col lg={1}></Col>
                                    </Row>
                                    <br />
                                    <Row className="email">
                                        <Col lg={1}></Col>
                                        <Col lg={2}>
                                            <div className="item-lable">이메일<sup>*</sup></div>
                                        </Col>
                                        <Col lg={6}>
                                            <div>
                                                <input type="text" placeholder="이메일을 입력해주세요" className="item-input"></input>
                                            </div>
                                        </Col>
                                        <Col lg={2}>
                                        </Col>
                                        <Col lg={1}></Col>
                                    </Row>
                                </Container>
                                <div className="body-footer">
                                    본인은 <strong>만 14세 이상</strong>이며 <Link className="addi-alert">이용약관</Link>,<Link className="addi-alert">개인정보 수집 및 이용</Link>,
                                    <Link className="addi-alert">개인정보 제공</Link> 내용을 확인 하였으며 <strong>동의합니다.</strong>
                                </div>
                                <div className="commit-btn">
                                    <Button variant="success">
                                        가입하기
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

export default Join_us;