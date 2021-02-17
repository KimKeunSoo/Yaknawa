import React from 'react';
//import logo from './logo.svg';
import './css/App.css';
import Header from "./component/Header";
import Footer from './component/Footer';
import Search from './component/Search';
import Board from './component/Noticeboard';
import Rank from './component/Rank';
import Banner from './component/Banner';
///import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class App extends React.Component {
  //component 초기설정
  constructor(props) {
    super(props);
    this.state = {
      username: null
    };
  }

  //component 만들고 첫 렌더링 마치고 실행 다른 자바스크립트 라이브러리나 프레임워크의 함수 호출, 이벤트 등록, setTimeout, setInterval, 네트워크 요청 등 비동기 작업 처리
  componentDidMount() {
    //백엔드 서버와 비동기 요청
    fetch('http://localhost:8080/')
      .then(res => res.json())
      .then(data => this.setState({ username: data.username }));
  }

  //component 모양 정의
  render() {
    const { username } = this.state;
    return (
      <div className="App">
        <Header />
        <body className="App-body">
          <Container fluid className="search">
            <Row className="search-row">
              <Col lg={1}>

              </Col>
              <Col lg={10}>
              <Search/>
              </Col>
              <Col lg={1}>

              </Col>
            </Row>
          </Container>
          <Container fluid className="main-board"> 
            <Row>
              <Col lg={1}>

              </Col>
              <Col lg={7}>
                <Board/>
                <Row className="sub-board">
                  <Col lg={6}>
                    <Board/>
                  </Col>
                  <Col lg={6}>
                    <Board/>
                  </Col>
                </Row>
                <Row className="sub-board">
                  <Col lg={6}>
                    <Board/>
                  </Col>
                  <Col lg={6}>
                    <Board/>
                  </Col>
                </Row>
                <Row className="sub-board">
                  <Col lg={6}>
                    <Board/>
                  </Col>
                  <Col lg={6}>
                    <Board/>
                  </Col>
                </Row>
              </Col>
              <Col lg={3}>
                <Rank/>
                <Banner/>
              </Col>
              <Col lg={1}>

              </Col>
            </Row>
            
          </Container>
        </body>
        <Footer />
      </div>

    );
  }

}

export default App;
