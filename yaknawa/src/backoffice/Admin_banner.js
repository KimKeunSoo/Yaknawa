import React, { PureComponent } from 'react';
import './backoffice_css/Admin.css';
import Header from '../component/Header_ver2';
import Footer from '../component/Footer';
import Adminlink from './Admin_link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import { Link } from 'react-router-dom';

class Admin_banner extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {

        }
        //console.log(this.props.history);
    }


    render() {

        return (
            <div className="Admin_banner">
                <Header />
                <body className="admin-body">
                    <Container fluid>
                        <Row>
                            <Col lg={2}></Col>
                            <Col lg={8}>
                                <div className="body-title">
                                    <strong>광고 배너</strong>
                                </div>
                                <Adminlink />
                                <Container fluid className="body-item item-center nospace-top">
                                    <Row>
                                        <Col lg={6} className="costom-col">
                                            <div className="banner-item">

                                            </div>
                                            <div className="banner-item">

                                            </div>
                                            <div className="banner-item">

                                            </div>
                                        </Col>
                                        <Col lg={6} className="costom-col">
                                            <Form>
                                                <Form.File
                                                    id="custom-file-translate-html1"
                                                    label="1번 배너"
                                                    data-browse="파일 선택"
                                                    custom
                                                    className="banner-file"
                                                />
                                                   <Form.File
                                                    id="custom-file-translate-html2"
                                                    label="2번 배너"
                                                    data-browse="파일 선택"
                                                    custom
                                                    className="banner-file"
                                                />
                                                   <Form.File
                                                    id="custom-file-translate-html3"
                                                    label="3번 배너"
                                                    data-browse="파일 선택"
                                                    custom
                                                    className="banner-file"
                                                />
                                            </Form>
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

export default Admin_banner;