import React, { useState, useRef } from "react";
import '../../style/css/style.css';

const CommentRead = (props) => {
    const title = "댓글 제목";
    const content = "댓글 내용";
    const uptime = "등록시간";
    const thumb = "좋아요 수";
    const comment = "대댓글 달기";
    return (
        <div>
            <div className="text-md">{title}</div>
            <div className="text-md">{content}</div>
            <div className="text-sm set-gray">{uptime} / {thumb} / {comment}</div>
        </div>

    );
}

export default CommentRead;