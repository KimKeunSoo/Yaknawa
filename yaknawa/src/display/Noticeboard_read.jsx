import React, { useState, useRef } from "react";
import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';
import CommentRead from '../component/Body/Comment_read';
import CommentWrite from '../component/Body/Comment_write';
import { Link } from 'react-router-dom';


import '../style/css/style.css';

const NoticeRead = (props) => {
    const theme = props.match.params.theme;
    //게시글 고유 넘버
    const content = props.match.params.num;
    const title = "게시글 제목";
    const nickname="닉네임";
    const date = "게시일";
    const thumb = '좋아요 수';
    const comment = '댓글 수';
    return (
        <div>
            <Header />
            <div className="body">
                <div className="text-md space-left-lg ">[{theme} 게시판]</div>
                <div className="text-lg space-left-lg top-space-sm "><strong>{title}</strong></div>
                <div className="upperline underline share-body padding-left-lg right-space-lg ">
                   <div className="text-xs position-right set-gray">
                        {nickname}
                   </div><br/>
                   <div className="text-xs position-right set-gray">
                        {date}
                   </div>
                   <div className="text-md full-size">
                        게시글 내용  게시글 내용
                        게시글 내용<br/>

                        게시글 내용<br/>
                        게시글 내용<br/>
                        게시글 내용<br/>
                        게시글 내용<br/>

                   </div>
                   <div className="text-xs position-right set-gray">
                        {thumb} / {comment}
                   </div>
                </div>
                <div className="underline padding-left-lg padding-right-lg right-space-lg  padding-bottom-sm">
                <CommentWrite/>
                </div>
                <div className="underline padding-left-lg padding-right-lg right-space-lg padding-top-sm padding-bottom-sm">
                <CommentRead/>
                </div>
                
            </div>
            <Footer />
        </div>

    );
}

export default NoticeRead;