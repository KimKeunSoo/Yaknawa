import React, { PureComponent } from 'react';
import './component_css/Join_us.css';
import Header from "./Header_ver2";
import Footer from './Footer';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

class Noticehot extends PureComponent {
    constructor(props) {
        super(props);
        this.url = 'http://localhost:8080';

    }

    componentDidMount() {
        //백엔드 서버와 비동기 요청
        fetch(`${this.url}/noticehot`)
            .then(res => res.json())
        //.then(data => this.setState({ username: data.username }));
    }

    render() {
        return (
            <div className="noticehot">
                <Header />
                <body className="noticehot-body">
                    <Container fluid>
                        <Row>
                            <Col lg={2}></Col>
                            <Col lg={8}>
                                <span className="body-title body-title-left">
                                    <strong>인기 게시글</strong>
                                    <span className="write-board">
                                    <Link to="/noticewrite">
                                        <Button variant="success">
                                            글쓰기
                                        </Button>
                                    </Link>
                                    </span>
                                    
                                </span>
                                <Container fluid className="body-item body-item-board">
                                    <Row>
                                        <Col lg={6} className="board-item-left board-item-top board-item">
                                            <div className="board-item-title">
                                                <strong>글 제목</strong>
                                            </div>
                                            <div className="board-item-body">
                                                글 내용
                                            </div>
                                            <span className="board-item-footer">
                                                조회수/좋아요수
                                                <span className="board-item-uptime">글 등록시간</span>
                                            </span>
                                        </Col>
                                        <Col lg={6} className="board-item-top board-item">
                                        <div className="board-item-title">
                                                <strong>글 제목</strong>
                                            </div>
                                            <div className="board-item-body">
                                                글 내용
                                            </div>
                                            <span className="board-item-footer">
                                                조회수/좋아요수
                                                <span className="board-item-uptime">글 등록시간</span>
                                            </span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={6} className="board-item-left board-item">
                                            <div className="board-item-title">
                                                <strong>글 제목</strong>
                                            </div>
                                            <div className="board-item-body">
                                                글 내용
                                            </div>
                                            <span className="board-item-footer">
                                                조회수/좋아요수
                                                <span className="board-item-uptime">글 등록시간</span>
                                            </span>
                                        </Col>
                                        <Col lg={6} className="board-item">
                                        <div className="board-item-title">
                                                <strong>글 제목</strong>
                                            </div>
                                            <div className="board-item-body">
                                                글 내용
                                            </div>
                                            <span className="board-item-footer">
                                                조회수/좋아요수
                                                <span className="board-item-uptime">글 등록시간</span>
                                            </span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={6} className="board-item-left board-item">
                                            <div className="board-item-title">
                                                <strong>글 제목</strong>
                                            </div>
                                            <div className="board-item-body">
                                                글 내용
                                            </div>
                                            <span className="board-item-footer">
                                                조회수/좋아요수
                                                <span className="board-item-uptime">글 등록시간</span>
                                            </span>
                                        </Col>
                                        <Col lg={6} className="board-item">
                                        <div className="board-item-title">
                                                <strong>글 제목</strong>
                                            </div>
                                            <div className="board-item-body">
                                                글 내용
                                            </div>
                                            <span className="board-item-footer">
                                                조회수/좋아요수
                                                <span className="board-item-uptime">글 등록시간</span>
                                            </span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={6} className="board-item-left board-item">
                                            <div className="board-item-title">
                                                <strong>글 제목</strong>
                                            </div>
                                            <div className="board-item-body">
                                                글 내용
                                            </div>
                                            <span className="board-item-footer">
                                                조회수/좋아요수
                                                <span className="board-item-uptime">글 등록시간</span>
                                            </span>
                                        </Col>
                                        <Col lg={6} className="board-item">
                                        <div className="board-item-title">
                                                <strong>글 제목</strong>
                                            </div>
                                            <div className="board-item-body">
                                                글 내용
                                            </div>
                                            <span className="board-item-footer">
                                                조회수/좋아요수
                                                <span className="board-item-uptime">글 등록시간</span>
                                            </span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={6} className="board-item-left board-item">
                                            <div className="board-item-title">
                                                <strong>글 제목</strong>
                                            </div>
                                            <div className="board-item-body">
                                                글 내용
                                            </div>
                                            <span className="board-item-footer">
                                                조회수/좋아요수
                                                <span className="board-item-uptime">글 등록시간</span>
                                            </span>
                                        </Col>
                                        <Col lg={6} className="board-item">
                                        <div className="board-item-title">
                                                <strong>글 제목</strong>
                                            </div>
                                            <div className="board-item-body">
                                                글 내용
                                            </div>
                                            <span className="board-item-footer">
                                                조회수/좋아요수
                                                <span className="board-item-uptime">글 등록시간</span>
                                            </span>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col lg={6} className="board-item-left board-item">
                                            <div className="board-item-title">
                                                <strong>글 제목</strong>
                                            </div>
                                            <div className="board-item-body">
                                                글 내용
                                            </div>
                                            <span className="board-item-footer">
                                                조회수/좋아요수
                                                <span className="board-item-uptime">글 등록시간</span>
                                            </span>
                                        </Col>
                                        <Col lg={6} className="board-item">
                                        <div className="board-item-title">
                                                <strong>글 제목</strong>
                                            </div>
                                            <div className="board-item-body">
                                                글 내용
                                            </div>
                                            <span className="board-item-footer">
                                                조회수/좋아요수
                                                <span className="board-item-uptime">글 등록시간</span>
                                            </span>
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

export default Noticehot;