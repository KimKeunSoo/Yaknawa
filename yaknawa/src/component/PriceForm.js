import React, { PureComponent } from 'react';
import './component_css/PriceForm.css';
import Header from "./Header";
import Footer from './Footer';
import logo from './component_img/yaknawa-logo2.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

class PriceForm extends React.Component {
    //component 초기설정
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            searchData: '찾으시는 약 가격이 없나요? 신청해주세요!',
            item_name: '의약품 이름',
            item_price_low: '최저가',
            item_price_heigh: '최고가'
        };
        this.url = 'http://localhost:8080';
    }

    //component 만들고 첫 렌더링 마치고 실행 다른 자바스크립트 라이브러리나 프레임워크의 함수 호출, 이벤트 등록, setTimeout, setInterval, 네트워크 요청 등 비동기 작업 처리
    componentDidMount() {
        //백엔드 서버와 비동기 요청
        fetch(`${this.url}/priceform`)
            .then(res => res.json())
            .then(data => this.setState({ username: data.username }));
    }

    //component 모양 정의
    render() {
        const { username, searchData, item_name, item_price_heigh, item_price_low } = this.state;
        return (
            <div className="PriceForm">
                <Header />
                <body className="price-body">
                    <Container fluid>
                        <Row>
                            <Col lg={1}>

                            </Col>
                            <Col lg={10} className="body-main">
                                <div ClassName="guide">
                                    본 서비스는 서울 특별시 위주의 서비스로 제공됩니다.
                                 </div>
                                <Container fluid>
                                    <Row>
                                        <Col lg={3}></Col>
                                        <Col lg={6}>
                                            <div className="search-body">
                                                <form>
                                                    <input className="search-box" type="text" placeholder="약이름, 약국이름을 검색하세요."></input>
                                                    
                                                </form>
                                            </div>
                                        </Col>
                                        <Col lg={3}></Col>
                                    </Row>
                                </Container>
                                <br /><br />
                                <div ClassName="guide">
                                    <Link>보유중인 전체 의약품 보기</Link>
                                </div>
                                <br />
                                <div>
                                    {this.state.searchData}
                                </div>
                            </Col>
                            <Col lg={1}>

                            </Col>
                        </Row>
                    </Container>
                    <Container fluid className="img-body">
                        <Row>
                            <Col lg={1}></Col>
                            <Col lg={10}>
                                <div className="img-box">
                                    img
                                </div>
                            </Col>
                            <Col lg={1}></Col>
                        </Row>
                    </Container>
                    <Container fluid className="realtime-body">
                        <Row>
                            <Col lg={2}></Col>
                            <Col lg={8}>
                                <div className="realtime-box">
                                    <div className="realtime-title">
                                        <strong>실시간 의약품 가격보기</strong>
                                    </div>
                                    <Container fluid>
                                        <Row>
                                            <Col lg={4} className="realtime-item">
                                                <div className="item-name">
                                                    <strong>{this.state.item_name}</strong>
                                                </div>
                                                <div className="item-price">
                                                    {this.state.item_price_low} ~ {this.state.item_price_heigh}
                                                </div>
                                            </Col>
                                            <Col lg={4} className="realtime-item">
                                                <div className="item-name">
                                                    <strong>{this.state.item_name}</strong>
                                                </div>
                                                <div className="item-price">
                                                    {this.state.item_price_low} ~ {this.state.item_price_heigh}
                                                </div>
                                            </Col>
                                            <Col lg={4} className="realtime-item">
                                                <div className="item-name">
                                                    <strong>{this.state.item_name}</strong>
                                                </div>
                                                <div className="item-price">
                                                    {this.state.item_price_low} ~ {this.state.item_price_heigh}
                                                </div>
                                            </Col>


                                        </Row>
                                        <Row>
                                            <Col lg={4} className="realtime-item">
                                                <div className="item-name">
                                                    <strong>{this.state.item_name}</strong>
                                                </div>
                                                <div className="item-price">
                                                    {this.state.item_price_low} ~ {this.state.item_price_heigh}
                                                </div>
                                            </Col>
                                            <Col lg={4} className="realtime-item">
                                                <div className="item-name">
                                                    <strong>{this.state.item_name}</strong>
                                                </div>
                                                <div className="item-price">
                                                    {this.state.item_price_low} ~ {this.state.item_price_heigh}
                                                </div>
                                            </Col>
                                            <Col lg={4} className="realtime-item">
                                                <div className="item-name">
                                                    <strong>{this.state.item_name}</strong>
                                                </div>
                                                <div className="item-price">
                                                    {this.state.item_price_low} ~ {this.state.item_price_heigh}
                                                </div>
                                            </Col>
                                        </Row>

                                    </Container>
                                </div>
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

export default PriceForm;




