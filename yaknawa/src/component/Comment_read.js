import React, { PureComponent } from 'react';
import './component_css/Join_us.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

class Commentread extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="comment">
                <Container fluid className="body-commentread-item">
                    <Row>
                        <Col lg={12}>
                            <div className="item-left commentread-body-title">
                                댓글제목
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={12}>
                            댓글내용
                        </Col>
                    </Row>
                    <Row>
                       
                        <Col lg={12} className="item-left">
                            <div className="item-sub-lable">등록시간 / 좋아요 수 / <Link className="item-sub-lable">대댓글</Link></div>
                        </Col>
                    </Row>
                </Container>
               
            </div>
        );
    }
}

export default Commentread;