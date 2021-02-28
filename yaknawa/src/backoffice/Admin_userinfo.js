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

class Admin_userinfo extends PureComponent {
    constructor(props) {
        super(props);
        this.state={
            nickname:'닉네임',
            email:'abc@def.com'
        }
        console.log(this.props.history);
    }
    
    clickinfo(e){
        e.preventDefault();
        const MySwal = withReactContent(Swal);
        MySwal.fire({
            title: <p>회원정보수정</p>,
            html:
            <Form>
                <InputGroup className="mb-3">
                <FormControl
                placeholder="닉네임"
                aria-label="닉네임"
                disabled
                />
                &nbsp;
                <Button variant="secondary">수정</Button>
            </InputGroup>
            <InputGroup className="mb-3">
                <FormControl
                placeholder="abc@def.com"
                aria-label="이메일"
                disabled
                />
                &nbsp;
                <Button variant="secondary">수정</Button>
            </InputGroup>
            </Form>,
            showCancelButton: true,
            confirmButtonText: "수정",
            cancelButtonColor: '#d33',
            cancelButtonText:"취소"            
          });
    
    }

    render() {
        const {nickname,email} = this.state;
        return (
            <div className="Admin_userinfo">
                <Header/>
                <body className="admin-body">
                <Container fluid>
                        <Row>
                            <Col lg={2}></Col>
                            <Col lg={8}>
                                <div className="body-title">
                                    <strong>회원 정보</strong>
                                </div>
                                <Adminlink/>
                                
                                <Container fluid className="body-item item-center nospace-top">
                                    <Row className="body-underline">
                                    <Col lg={5} >
                                            닉네임
                                        </Col>
                                        <Col lg={5}>
                                            이메일
                                        </Col>
                                        <Col lg={2}>
                                           
                                        </Col>
                                    </Row>
                                    <Row className="item-start">
                                        <Col lg={5}>
                                            {this.state.nickname}
                                        </Col>
                                        <Col lg={5}>
                                            {this.state.email}
                                        </Col>
                                        <Col lg={2}>
                                            <Button variant="secondary" onClick={this.clickinfo}>수정</Button>
                                        </Col>
                                    </Row>
                                    <br/>
                                    <Row>
                                        <Col lg={5}>
                                            {this.state.nickname}
                                        </Col>
                                        <Col lg={5}>
                                            {this.state.email}
                                        </Col>
                                        <Col lg={2}>
                                            <Button variant="secondary" onClick={this.clickinfo}>수정</Button>
                                        </Col>
                                    </Row>
                                    <br/>
                                    <Row>
                                        <Col lg={5}>
                                            {this.state.nickname}
                                        </Col>
                                        <Col lg={5}>
                                            {this.state.email}
                                        </Col>
                                        <Col lg={2}>
                                            <Button variant="secondary" onClick={this.clickinfo}>수정</Button>
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

export default Admin_userinfo;