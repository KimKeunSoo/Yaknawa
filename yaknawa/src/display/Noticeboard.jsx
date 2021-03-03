import React, { useState, useRef } from "react";
import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';
import Grid from '@material-ui/core/Grid';
import Boardcard from '../component/Body/Board_card';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';


import '../style/css/style.css';

const Noticeboard = (props) => {
    const form = useRef();
    const title = "게시글 제목";
    const uptime = "업로드 시간";
    const content = "게시글";
    const thumb = "좋아요수";
    const click = "조회수";
    const theme = props.match.params.theme;
    console.log(theme);
 
    return (
        <div>
            <Header />
            <div className="body">
                <div className="position-center text-lg"><strong>{theme} 게시판</strong></div>
                <Button variant="contained" color="primary" className="position-right share-btn right-space-lg">
                        글쓰기
                </Button>
                <div className="upperline share-body left-space-lg right-space-lg ">
                    <div className="upperline underline padding-top-sm padding-bottom-sm position-center">
                        <Grid container>                            
                            <Grid item lg={2}>
                                <Link to="/noticeboard/여드름" className="position-center link-black link-nonunderline text-md">여드름</Link>
                            </Grid>
                            <Grid item lg={2}>
                                <Link to="/noticeboard/탈모" className="position-center link-black link-nonunderline text-md">탈모</Link>
                            </Grid>
                            <Grid item lg={2}>
                                <Link to="/noticeboard/비만" className="position-center link-black link-nonunderline text-md">비만</Link>
                            </Grid>
                            <Grid item lg={2}>
                                <Link to="/noticeboard/영양제" className="position-center link-black link-nonunderline text-md">영양제</Link>
                            </Grid>
                            <Grid item lg={2}>
                                <Link to="/noticeboard/피임" className="position-center link-black link-nonunderline text-md">피임</Link>
                            </Grid>
                            <Grid item lg={2}>
                                <Link to="/noticeboard/발기부전" className="position-center link-black link-nonunderline text-md">발기부전</Link>
                            </Grid>

                        </Grid>

                    </div>
                    <Grid container className="top-space-xs" spacing={0}>
                        <Grid item lg={6} className="board-card-body">
                            <Boardcard title={title} uptime={uptime} content={content} thumb={thumb} click={click} />
                            <Boardcard title={title} uptime={uptime} content={content} thumb={thumb} click={click} />
                            <Boardcard title={title} uptime={uptime} content={content} thumb={thumb} click={click} />
                            <Boardcard title={title} uptime={uptime} content={content} thumb={thumb} click={click} />
                        </Grid>
                        <Grid item lg={6} className="board-card-body">
                            <Boardcard title={title} uptime={uptime} content={content} thumb={thumb} click={click} />
                            <Boardcard title={title} uptime={uptime} content={content} thumb={thumb} click={click} />
                            <Boardcard title={title} uptime={uptime} content={content} thumb={thumb} click={click} />
                            <Boardcard title={title} uptime={uptime} content={content} thumb={thumb} click={click} />
                        </Grid>
                    </Grid>
                </div>
            </div>

            <Footer />
        </div>

    );
}

export default Noticeboard;