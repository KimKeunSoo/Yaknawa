import React, { PureComponent } from 'react';
import './component_css/Rank.css';
import logo from './component_img/yaknawa-logo2.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
//import { Swiper, SwiperSlide } from 'swiper/react';
//import '../../node_modules/swiper/swiper.scss';

class Rank extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            item_name: '약이름',
            price_low: '최저가',
            price_high: '최고가',
        }
    }
    render() {
        const { item_name, price_high, price_low } = this.state;
        return (
            <div className="Rank">
                <div className="Rank-title">
                    <strong>실시간 의약품 가격보기</strong>
                </div>
                <div className="Rank-item">
                    <div className="item-name">
                        <strong>{this.state.item_name}</strong>
                    </div>
                    <div className="item-body">
                        <span>
                            {this.state.price_low} ~ {this.state.price_high}
                        </span>
                        <a className="item-choice">
                            선택
                        </a>
                    </div>                  

                </div>
                <div className="Rank-item">
                    <div className="item-name">
                        <strong>{this.state.item_name}</strong>
                    </div>
                    <div className="item-body">
                        <span>
                            {this.state.price_low} ~ {this.state.price_high}
                        </span>
                        <a className="item-choice">
                            선택
                        </a>
                    </div>                  

                </div>
                <div className="Rank-item">
                    <div className="item-name">
                        <strong>{this.state.item_name}</strong>
                    </div>
                    <div className="item-body">
                        <span>
                            {this.state.price_low} ~ {this.state.price_high}
                        </span>
                        <a className="item-choice">
                            선택
                        </a>
                    </div>                  

                </div>
                <div className="Rank-item">
                    <div className="item-name">
                        <strong>{this.state.item_name}</strong>
                    </div>
                    <div className="item-body">
                        <span>
                            {this.state.price_low} ~ {this.state.price_high}
                        </span>
                        <a className="item-choice">
                            선택
                        </a>
                    </div>                  

                </div>
                <div className="Rank-item">
                    <div className="item-name">
                        <strong>{this.state.item_name}</strong>
                    </div>
                    <div className="item-body">
                        <span>
                            {this.state.price_low} ~ {this.state.price_high}
                        </span>
                        <a className="item-choice">
                            선택
                        </a>
                    </div>                  

                </div>
                <div className="Rank-item">
                    <div className="item-name">
                        <strong>{this.state.item_name}</strong>
                    </div>
                    <div className="item-body">
                        <span>
                            {this.state.price_low} ~ {this.state.price_high}
                        </span>
                        <a className="item-choice">
                            선택
                        </a>
                    </div>                  

                </div>
            </div>
        );
    }
}

export default Rank;