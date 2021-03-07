import React, { useState, useRef } from "react";
import Header from '../component/Header/Header_home';
import Footer from '../component/Footer/Footer';
import { Link } from 'react-router-dom';
import Img from '../style/img/priceformImg.png';
import Grid from '@material-ui/core/Grid';
import Search from '../component/Action/Search';
import Card from '../component/Body/Card';
import '../style/css/style.css';

const Priceform = (props) => {
    const pills = "의약품 이름";
    const low = "최저가";
    const high = "최고가";
    return (
        <div>
            <Header/>
            <div className="body">
                <p className="position-center text-md">본 서비스는 서울 특별시 위주의 서비스로 제공됩니다.</p>
                <br />
                <Grid container>
                    <Grid item lg={3}></Grid>
                    <Grid item lg={6}>
                        <Search theme="pills" />
                    </Grid>
                    <Grid item lg={3}></Grid>
                </Grid>
                <br /><br /><br />
                <div className="position-center text-md">
                    <Link className="link-black link-nonunderline">보유중인 전체 의약품 보기</Link>
                </div>
                <br />
                <div className="position-center text-md">
                    <Link className="link-black link-nonunderline">찾으시는 약 가격이 없나요? 신청해주세요!</Link>
                </div>
                <br /><br /><br />
                <Grid container>
                    <Grid item lg={12}>
                        <img src={Img} alt="No img" className="priceform-img" />
                    </Grid>
                </Grid>
                <br /><br /><br />
                <div className="left-space-lg padding-left-md text-md">
                    <strong>실시간 의약품 가격보기</strong>
                </div>
                <br/>
                <Grid container spacing={3} className="padding-left-lg padding-right-lg">
                    <Grid item lg={4}>
                        <Card pills={pills} low={low} high={high} /><br />
                        <Card pills={pills} low={low} high={high} />
                    </Grid>
                    <Grid item lg={4}>
                        <Card pills={pills} low={low} high={high} /><br />
                        <Card pills={pills} low={low} high={high} />
                    </Grid>
                    <Grid item lg={4}>
                        <Card pills={pills} low={low} high={high} /><br />
                        <Card pills={pills} low={low} high={high} />
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </div>

    );
}

export default Priceform;