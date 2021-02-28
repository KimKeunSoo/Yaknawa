import React, { PureComponent } from 'react';
import './backoffice_css/Admin.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

class Admin_link extends PureComponent {
    constructor(props) {
        super(props);
    }
    

    render() {
        return (
            <div className="Admin_link">
                <Container fluid className="body-item item-center link-body ">
                    <Row className="costom-row">
                        <Col lg={4} className="costom-col">
                            <Button variant="secondary" className="costom-btn">회원 정보</Button>
                        </Col>
                        <Col lg={4} className="costom-col">
                            <Button variant="secondary" className="costom-btn ">게시판 관리</Button>
                        </Col>
                        <Col lg={4} className="costom-col">
                            <Button variant="secondary" className="costom-btn">광고 배너</Button>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Admin_link;