import React, { PureComponent } from 'react';
import './backoffice_css/Admin.css';
import Header from '../component/Header_ver2';
import Footer from '../component/Footer';
import Adminlink from './Admin_link';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';

class Admin_board extends PureComponent {
    constructor(props) {
        super(props);
        this.state={
           
        }
        //console.log(this.props.history);
    }


    render() {
      
        return (
            <div className="Admin_board">
                <Header/>
                <body className="admin-body">
                <Container fluid>
                        <Row>
                            <Col lg={2}></Col>
                            <Col lg={8}>
                                <div className="body-title">
                                    <strong>게시판 관리</strong>
                                </div>
                                <Adminlink/>                                
                                <Container fluid className="item-center half-space-top bordered costom-container">
                                    <Row className="costom-row">
                                        <Col lg={12} className="costom-col board-item-list">
                                            탈모
                                        </Col>
                                    </Row>      
                                    <Row className="costom-row">
                                        <Col lg={12} className="costom-col board-item-list">
                                            비만
                                        </Col>
                                    </Row>     
                                    <Row className="costom-row">
                                        <Col lg={12} className="costom-col board-item-list">
                                            비타민
                                        </Col>
                                    </Row>     
                                    <Row className="costom-row">
                                        <Col lg={12} className="costom-col board-item-list">
                                            여드름
                                        </Col>
                                    </Row>     
                                    <Row className="costom-row">
                                        <Col lg={12} className="costom-col board-item-list">
                                            피임
                                        </Col>
                                    </Row>     
                                    <Row className="costom-row">
                                        <Col lg={12} className="costom-col board-item-list">
                                            발기부전
                                        </Col>
                                    </Row> 

                                </Container>
                                <Container fluid className="item-center half-space-top">
                                    <Row classsName="costom-row">
                                        <Col lg={10} className="costom-col">
                                            <input type="text" className="item-full size-big"></input>
                                        </Col>
                                        <Col lg={2} className="costom-col">
                                            <Button variant="secondary" className="costom-btn">추가</Button>    
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                            <Col lg={2}></Col>
                        </Row>
                    </Container>
                </body>
                <Footer/>
            </div>
        );
    }
}

export default Admin_board;