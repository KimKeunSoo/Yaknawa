import React, { PureComponent } from 'react';
import './component_css/Search.css';
import logo from './component_img/yaknawa-logo2.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class Search extends PureComponent {

    constructor(props) {
        super(props);
        this.click_alert = this.click_alert.bind(this);
    }

    click_alert() {
        alert("click");
    }

    //엔터로 submit
    
    render() {
        return (
            <div className="search-form">
                <form onSubmit={this.click_alert}>
                    <input className="search-box" type="text" placeholder="관심있는 내용을 검색해보세요"></input>
                </form>
            </div>
        );
    }
}


export default Search;



