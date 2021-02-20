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

class Noticeall extends PureComponent {
    constructor(props) {
        super(props);
        this.url = 'http://localhost:8080';
        
    }

    componentDidMount() {
        //백엔드 서버와 비동기 요청
        fetch(`${this.url}/Noticeall`)
            .then(res => res.json())
        //.then(data => this.setState({ username: data.username }));
    }

    render() {
        return (
            <div className="noticeall">
                <Header />
                <body className="noticeall-body">
                    <Container fluid>
                        <Row>
                            <Col lg={2}></Col>
                            <Col lg={8}>
                                <div className="body-title">
                                    <strong>공지사항</strong>
                                </div>                                
                                <Table className="body-item notice-table">
                                              <tr className="table-head">
                                                  <th>
                                                      순번
                                                  </th>
                                                  <th colSpan="3">
                                                      내용
                                                  </th>
                                                  <th>
                                                      글쓴이
                                                  </th>
                                                  <th>
                                                      등록일
                                                  </th>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      1
                                                  </td>
                                                  <td colSpan="3"> 
                                                      asdfasdfasdfasdfasdfasdf
                                                  </td>
                                                  <td>
                                                      nickname
                                                  </td>
                                                  <td>
                                                      today
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      2
                                                  </td>
                                                  <td colSpan="3">
                                                      asdfasdfasdfasdfasdfasdf
                                                  </td>
                                                  <td>
                                                      nickname
                                                  </td>
                                                  <td>
                                                      today
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      3
                                                  </td>
                                                  <td colSpan="3">
                                                      asdfasdfasdfasdfasdfasdf
                                                  </td>
                                                  <td>
                                                      nickname
                                                  </td>
                                                  <td>
                                                      today
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      4
                                                  </td>
                                                  <td colSpan="3">
                                                      asdfasdfasdfasdfasdfasdf
                                                  </td>
                                                  <td>
                                                      nickname
                                                  </td>
                                                  <td>
                                                      today
                                                  </td>
                                              </tr>
                                              <tr>
                                                  <td>
                                                      5
                                                  </td>
                                                  <td colSpan="3">
                                                      asdfasdfasdfasdfasdfasdf
                                                  </td>
                                                  <td>
                                                      nickname
                                                  </td>
                                                  <td>
                                                      today
                                                  </td>
                                              </tr>
                                          </Table>
                                
                                                   
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

export default Noticeall;