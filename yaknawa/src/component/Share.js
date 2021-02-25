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

class Share extends PureComponent {
    constructor(props) {
        super(props);
        this.url = 'http://localhost:8080';
    }

    componentDidMount() {
        //백엔드 서버와 비동기 요청
        fetch(`${this.url}/share`)
            .then(res => res.json())
        //.then(data => this.setState({ username: data.username }));
    }

    render() {
        return (
            <div className="Share">
                <Header />
                <body className="share-body">
                    <Container fluid>
                        <Row>
                            <Col lg={2}></Col>
                            <Col lg={8}>
                                <div className="body-title">
                                    <strong>약값공유</strong>
                                </div>
                                <div className="body-info">
                                    필수사항<sup>*</sup>
                                </div>
                                <Container fluid className="body-item">
                                    <Row className="name">
                                        <Col lg={1}></Col>
                                        <Col lg={2}>
                                            <div className="item-lable">약국이름<sup>*</sup></div>
                                        </Col>
                                        <Col lg={6}>
                                            <div>
                                                <input type="text" placeholder="약국이름을 입력해주세요" className="item-input"  autoFocus></input>
                                            </div>
                                        </Col>
                                        <Col lg={2}>
                                           
                                        </Col>
                                        <Col lg={1}></Col>
                                    </Row>
                                    <br />
                                    <Row className="address">
                                        <Col lg={1}></Col>
                                        <Col lg={2}>
                                            <div className="item-lable">주소<sup>*</sup></div>
                                        </Col>
                                        <Col lg={6}>
                                            
                                            <span> 
                                                <input type="text" placeholder="ex)서울특별시" className="item-input addr-input"></input>
                                                <input type="text" placeholder="ex)강남구" className="item-input addr-input"></input>
                                                <input type="text" placeholder="ex)청담동" className="item-input addr-input"></input>
                                                </span>
                                        </Col>
                                        <Col lg={2}>

                                        </Col>
                                        <Col lg={1}></Col>
                                    </Row>
                                    <br />
                                    <Row className="category">
                                        <Col lg={1}></Col>
                                        <Col lg={2}>
                                            <div className="item-lable">약종류</div>
                                        </Col>
                                        <Col lg={6}>
                                            <div>
                                                <input type="text" placeholder="약 종류를 입력해 주세요" className="item-input"></input>
                                            </div>
                                        </Col>
                                        <Col lg={2}>
                                            
                                        </Col>
                                        <Col lg={1}></Col>
                                    </Row>
                                    <br />
                                    <Row className="medi-name">
                                        <Col lg={1}></Col>
                                        <Col lg={2}>
                                            <div className="item-lable">약이름<sup>*</sup></div>
                                        </Col>
                                        <Col lg={6}>
                                            <div>
                                                <input type="text" placeholder="약이름을 입력해주세요" className="item-input"></input>
                                            </div>
                                        </Col>
                                        <Col lg={2}>
                                        </Col>
                                        <Col lg={1}></Col>
                                    </Row>
                                    <br />
                                    <Row className="num">
                                        <Col lg={1}></Col>
                                        <Col lg={2}>
                                            <div className="item-lable">수량(정)<sup>*</sup></div>
                                        </Col>
                                        <Col lg={6}>
                                            <div>
                                                <input type="text" placeholder="수량을 입력해주세요" className="item-input"></input>
                                            </div>
                                        </Col>
                                        <Col lg={2}>
                                        </Col>
                                        <Col lg={1}></Col>
                                    </Row>
                                    <br />
                                    <Row className="price">
                                        <Col lg={1}></Col>
                                        <Col lg={2}>
                                            <div className="item-lable">가격<sup>*</sup></div>
                                        </Col>
                                        <Col lg={6}>
                                            <div>
                                                <input type="text" placeholder="총 가격을 입력해주세요" className="item-input"></input>
                                            </div>
                                        </Col>
                                        <Col lg={2}>
                                        </Col>
                                        <Col lg={1}></Col>
                                    </Row>
                                    <br />
                                    <Row className="review">
                                        <Col lg={1}></Col>
                                        <Col lg={2}>
                                            <div className="item-lable">약국리뷰</div>
                                        </Col>
                                        <Col lg={6}>
                                            <div>
                                                <textarea placeholder="200자 이내로 기입해주세요" maxlength="200" className="review-textarea"></textarea>
                                            </div>
                                        </Col>
                                        <Col lg={2}>
                                        </Col>
                                        <Col lg={1}></Col>
                                    </Row>
                                    <br />
                                    <Row className="recipt">
                                        <Col lg={1}></Col>
                                        <Col lg={2}>
                                            <div className="item-lable">영수증 첨부</div>
                                        </Col>
                                        <Col lg={6}>
                                            <span>
                                                <input type="file" className="item-input file-input"></input>                                              
                                            </span>
                                        </Col>
                                        <Col lg={2}>

                                        </Col>
                                        <Col lg={1}></Col>
                                    </Row>
                                </Container>
                                
                                <div className="commit-btn">
                                    <Button variant="success">
                                        등록하기
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

export default Share;