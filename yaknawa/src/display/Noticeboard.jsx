import React, { useState, useRef } from "react";
import Grid from '@material-ui/core/Grid';
import Boardcard from '../component/Body/Board_card';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import setTitle from '../services/set-title';
import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/swiper.scss';


import '../style/css/style.css';



const Noticeboard = (props) => {
    const form = useRef();
    const title = "게시글 제목";
    const uptime = "업로드 시간";
    const content = "게시글";
    const thumb = "좋아요수";
    const click = "조회수";
    const theme = props.match.params.theme;
    //console.log(theme);
    setTitle(`게시판`);
    const themeLink = () => {
        const link = `/noticewrite/${theme}`;
        props.history.push(link);
    }
    const themeList = ["여드름", "탈모", "비만", "영양제", "피임", "발기부전"];
    const slide = [];

    themeList.map((item) => {
        slide.push(
            <SwiperSlide className={theme === `${item}` ? "underline-impact padding-top-sm padding-bottom-sm" : "underline padding-top-sm padding-bottom-sm"} >
                <Link to={`/noticeboard/${item}`} className="position-center link-black link-nonunderline text-md">{item}</Link>
            </SwiperSlide>
        );
    })


    return (

        <div className="body">
            <div className=" padding-bottom-sm position-center bottom-space-sm">
                <Swiper
                    spaceBetween={0}
                    slidesPerView={6}
                >
                    {theme !== "인기" ? slide : ""}
                </Swiper>
            </div>
            <Grid container>
                <Grid item lg={1}></Grid>
                <Grid item lg={9}>
                    <div className=" text-lg"><strong>{theme} 게시판</strong></div>
                </Grid>
                <Grid item lg={2}>
                    <div className="text-sm padding-right-lg">
                        <Button variant="contained" color="primary" className="share-btn" onClick={themeLink}>
                            글쓰기
                </Button></div>
                </Grid>
            </Grid>

            <div className="upperline boardpage-body left-space-lg right-space-lg ">

                <Grid container className="top-space-xs" >
                    <Grid item lg={6} className="board-card-body">
                        <Boardcard title={title} uptime={uptime} content={content} thumb={thumb} click={click} theme={theme} />
                        <Boardcard title={title} uptime={uptime} content={content} thumb={thumb} click={click} theme={theme} />
                        <Boardcard title={title} uptime={uptime} content={content} thumb={thumb} click={click} theme={theme} />
                        <Boardcard title={title} uptime={uptime} content={content} thumb={thumb} click={click} theme={theme} />
                    </Grid>
                    <Grid item lg={6} className="board-card-body">
                        <Boardcard title={title} uptime={uptime} content={content} thumb={thumb} click={click} theme={theme} />
                        <Boardcard title={title} uptime={uptime} content={content} thumb={thumb} click={click} theme={theme} />
                        <Boardcard title={title} uptime={uptime} content={content} thumb={thumb} click={click} theme={theme} />
                        <Boardcard title={title} uptime={uptime} content={content} thumb={thumb} click={click} theme={theme} />
                    </Grid>
                </Grid>
            </div>
        </div>



    );
}

export default Noticeboard;