import React, { PureComponent } from 'react';
import './component_css/Join_us.css';
import Header from "./Header_ver2";
import Footer from './Footer';
import Commentwrite from './Comment_write';
import Commentread from './Comment_read';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

class Noticeread extends PureComponent {
    constructor(props) {
        super(props);
        this.url = 'http://localhost:8080';
        this.state = {
            theme: "게시판명",
            title:'게시글 제목',
            body:'게시글 내용',
            nickname:'별명',
            date:'게시일'
        }
    }

    componentDidMount() {
        //백엔드 서버와 비동기 요청
        fetch(`${this.url}/noticeread`)
            .then(res => res.json()
            )
        //.then(data => {                this.setState({ theme: data.theme })            });
    }

    render() {
        const { theme,title,body,nickname,date } = this.state;
        console.log(theme);
        return (
            <div className="noticeread">
                <Header />
                <body className="noticeread-body">
                    <Container fluid>
                        <Row>
                            <Col lg={2}></Col>
                            <Col lg={8}>
                                <span className="body-title body-title-left">
                                    <div className="noticeread-theme">{this.state.theme}</div>
                                    <strong>{this.state.title}</strong>
                                </span>
                                <Container fluid className="body-theme-item">
                                    <Row>
                                        <Col lg={10}></Col>
                                        <Col lg={2} className="item-right">
                                            <div className="item-sub-lable">{this.state.nickname}</div>
                                            <div className="item-sub-lable">{this.state.date}</div>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={12}>
                                            {this.state.body}
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={10}></Col>
                                        <Col lg={2} className="item-right">
                                            <div className="item-sub-lable">좋아요 수 / 댓글 수</div>
                                        </Col>
                                    </Row>
                                </Container>
                                <Container fluid className="body-comment-item">
                                    <Commentwrite/>
                                </Container>
                                <Container fluid className="body-comment-item underline-bottom">
                                    <Commentread/>
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

export default Noticeread;