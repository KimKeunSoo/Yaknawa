import React, { PureComponent } from 'react';
import './component_css/Join_us.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

class Comment extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="comment">
                <Container fluid>
                    <Row>
                        <Col lg={12}>
                            <Form>
                                <Form.Group controlId="exampleForm.ControlTextarea1" >
                                    <Form.Control as="textarea" rows={3} placeholder="댓글을 입력하세요" className="write-textarea" />
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={10}>                        
                        </Col>
                        <Col lg={2}>
                        <Button variant="success" className="commnet-btn">
                                등록
                                                 </Button>
                                                 &nbsp;
                                                 <Button variant="secondary" className="commnet-btn">
                                취소
                                                 </Button>
                          
                        </Col>
                       
                    </Row>
                </Container>

            </div>
        );
    }
}

export default Comment;