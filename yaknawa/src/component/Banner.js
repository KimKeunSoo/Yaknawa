import React, { PureComponent } from 'react';
import './component_css/Banner.css';
import logo from './component_img/yaknawa-logo2.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

class Banner extends PureComponent{
    constructor(props){
        super(props);
        this.state={
            title:'광고배너'
        }
    }

    render(){
        const {title} = this.state;
        return(
            <div className="Banner">
                {title}
            </div>
        );
    }
}

export default Banner;