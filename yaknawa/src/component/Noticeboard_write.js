import React, { PureComponent } from 'react';
import './component_css/Join_us.css';
import Header from "./Header_ver2";
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

class Noticewrite extends PureComponent {
    constructor(props) {
        super(props);
        this.url = 'http://localhost:8080';
        this.state = {
            theme: "게시판명"
        }
    }

    componentDidMount() {
        //백엔드 서버와 비동기 요청
        fetch(`${this.url}/noticewrite`)
            .then(res => res.json()
            )
        //.then(data => {                this.setState({ theme: data.theme })            });
    }

    render() {
        const { theme } = this.state;
        console.log(theme);
        return (
            <div className="noticewrite">
                <Header />
                <body className="noticewrite-body">
                    <Container fluid>
                        <Row>
                            <Col lg={2}></Col>
                            <Col lg={8}>
                                <span className="body-title body-title-left">
                                    <strong>"{this.state.theme}" &gt; 글쓰기</strong>
                                </span>
                                <Form className="body-item">
                                    <Container fluid className="noticewrite-box">
                                        <Row>
                                            <Col lg={3}>
                                                <Form.Group controlId="exampleForm.SelectCustomSizeLg">
                                                    <Form.Control as="select" size="lg">
                                                        <option selected>게시판1</option>
                                                        <option>게시판2</option>
                                                        <option>게시판3</option>
                                                        <option>게시판4</option>
                                                        <option>게시판5</option>
                                                    </Form.Control>
                                                </Form.Group>
                                            </Col>
                                            <Col lg={9}>
                                                <InputGroup className="mb-3" size="lg">
                                                    <FormControl
                                                        placeholder="제목을 입력하세요"
                                                    />
                                                </InputGroup>
                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={12}>
                                                <Form.Group controlId="exampleForm.ControlTextarea1" >
                                                    <Form.Control as="textarea" rows={15} placeholder="내용을 입력하세요" className="write-textarea" />
                                                </Form.Group>

                                            </Col>
                                        </Row>
                                        <Row>
                                            <Col lg={2} className="item-mid">
                                                이미지자리
                                            </Col>
                                            <Col lg={10}>
                                                <div className="mb-3">
                                                    <Form.File id="formcheck-api-regular">
                                                        <Form.File.Input />
                                                    </Form.File>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Container>
                                    <Container fluid className="write-body-btn">
                                        <Row>
                                            <Col lg={10}>

                                            </Col>
                                            <Col lg={2} className="item-right">
                                                <Button variant="success" className="noticewrite-btn">
                                                    등록
                                                 </Button>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Form>
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

export default Noticewrite;