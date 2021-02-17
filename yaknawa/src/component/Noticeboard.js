import React, { PureComponent } from 'react';
import './component_css/Noticeboard.css';
//import logo from './component_img/yaknawa-logo2.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
//import Table from 'react-bootstrap/Table';

class Noticeboard extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            title: '인기게시글'//여기서 게시판명 받아와서 삽입
            , n_title: '게시글 제목'
            , date: '글쓴날짜'
        };
    }
    render() {
        const { title, n_title, date } = this.state;
        return (
            <div className="Noticeboard">
                <div className="Noticeboard-theme">
                    <span className="Noticeboard-title">
                        <strong>{this.state.title}</strong>
                    </span>
                    <a className="Noticeboard-addi">
                        더보기+
                    </a>
                </div>
                
                <div className="Noticeboard-table">
                    <div className="Noticeboard-item">
                        <a className="item-title">
                            {this.state.n_title}
                        </a>
                        <span className="item-date">
                            {this.state.date}
                        </span>
                    </div>
                    <div className="Noticeboard-item">
                        <a className="item-title">
                            {this.state.n_title}
                        </a>
                        <span className="item-date">
                            {this.state.date}
                        </span>
                    </div>
                    <div className="Noticeboard-item">
                        <a className="item-title">
                            {this.state.n_title}
                        </a>
                        <span className="item-date">
                            {this.state.date}
                        </span>
                    </div>
                    <div className="Noticeboard-item">
                        <a className="item-title">
                            {this.state.n_title}
                        </a>
                        <span className="item-date">
                            {this.state.date}
                        </span>
                    </div>
                    <div className="Noticeboard-item">
                        <a className="item-title">
                            {this.state.n_title}
                        </a>
                        <span className="item-date">
                            {this.state.date}
                        </span>
                    </div>
                </div>
            </div>
        );
    }

}

export default Noticeboard;



