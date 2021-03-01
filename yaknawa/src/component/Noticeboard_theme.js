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

class Noticetheme extends PureComponent {
    constructor(props) {
        super(props);
        this.url = 'http://localhost:8080';
        this.state={
            theme:["여드름","탈모","비만","영양제","피임","발기부전"]
        }
    }

    componentDidMount() {
        //백엔드 서버와 비동기 요청
        fetch(`${this.url}/noticetheme`)
            .then(res => res.json())
            //.then(data => this.setState({ theme: data.theme }));
    }
    render() {
        const {theme} = this.state;
        return (
            <div className="noticetheme">
                <Header />
                <body className="noticetheme-body">
                    <Container fluid>
                        <Row>
                            <Col lg={2}></Col>
                            <Col lg={8}>
                                <span className="body-title body-title-left">
                                    <strong>{this.state.theme[0]} 게시글</strong>
                                    <span className="write-board">
                                    <Link to="/noticewrite">
                                        <Button variant="success">
                                            글쓰기
                                        </Button>
                                    </Link>
                                    </span>
                                    
                                </span>
                                <Container fluid className="body-theme-item body-item-board">
                                    <Row className="body-theme-list">
                                        <Col lg={2}>
                                            <div className="board-theme-itme"><strong>{this.state.theme[0]}</strong></div>
                                        </Col>
                                        <Col lg={2}>
                                        <div className="board-theme-itme"><strong>{this.state.theme[1]}</strong></div>
                                        </Col>
                                        <Col lg={2}>
                                        <div className="board-theme-itme"><strong>{this.state.theme[2]}</strong></div>
                                        </Col>
                                        <Col lg={2}>
                                        <div className="board-theme-itme"><strong>{this.state.theme[3]}</strong></div>
                                        </Col>
                                        <Col lg={2}>
                                        <div className="board-theme-itme"><strong>{this.state.theme[4]}</strong></div>
                                        </Col>
                                        <Col lg={2}>
                                        <div className="board-theme-itme"><strong>{this.state.theme[5]}</strong></div>
                                        </Col>
                                    </Row>
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

export default Noticetheme;