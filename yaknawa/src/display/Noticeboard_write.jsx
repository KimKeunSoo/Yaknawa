import React, { useState, useRef } from "react";
import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';

import '../style/css/style.css';

const NoticeWrite = (props) => {

    const theme = props.match.params.theme;

    return (
        <div>
            <Header />
            <div className="body">
                <div className="text-lg space-left-lg"><strong>"{theme}게시판" &gt; 글쓰기</strong></div>
                <div className="upperline share-body padding-left-lg right-space-lg ">
                    <div className="outline-all size-full">
                        <form className="padding-left-md padding-right-md padding-top-lg padding-bottom-lg ">
                            <TextField id="standard-basic" placeholder="제목을 입력하세요" className="size-full" size="large" />
                            <div className="top-space-sm">
                                <textarea placeholder="내용을 입력하세요" maxLength="500"
                                    className="textarea-resizenone size-full textarea-size-lg  textarea-onfocus">
                                </textarea>
                            </div>

                            <TextField
                                type="file"
                                className="size-full"                            
                                variant="outlined"
                            />
                            <div className="position-right top-space-sm bottom-space-lg">
                                <Button variant="contained" color="primary" className="share-btn right-space-lg ">
                                    등록하기
                                </Button>
                            </div>
                            <br/><br/>
                        </form>
                    </div>

                </div>

            </div>

            <Footer />
        </div>

    );
}

export default NoticeWrite;