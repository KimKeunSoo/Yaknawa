import React from 'react';
import './component_css/Footer.css';
import logo from './component_img/yaknawa-logo2.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => (
    <div className="footer">
        <Container fluid>
            <Row>
                <Col lg={2} className="logo-container">
                    <a href="/">
                        <img src={logo} alt="No img" className="logo">
                        </img>
                    </a>
                </Col>
                <Col lg={8}>
                    <ul className="footer-ul">
                        <li className="footer-li">
                            <a>커뮤니티 이용안내</a>
                        </li>
                        <li className="footer-li-mid">
                            <a>이용약관</a>
                        </li>
                        <li className="footer-li">
                            <a>개인정보처리방침</a>
                        </li>
                    </ul>
                    <br/>
                    <div className="license">
                        본 사이트에서 제공되는 모든 정보는 참여자에 의한 정보이며, 서비스 이용에 따른 최종 책임은 이용자에게 있습니다. Copyright&#169;2020 약나와. All Rights Reserved.
                    </div>
                </Col>
            </Row>
        </Container>

    </div>
)

export default Footer;



