import React, { useState, useRef } from "react";
import Button from '@material-ui/core/Button';
import '../../style/css/style.css';

const CommentWrite = (props) => {

    return (
        <div>
            <div className="top-space-sm">
                <textarea placeholder="댓글을 입력하세요" maxLength="100"
                    className="textarea-resizenone size-full textarea-size-md  textarea-onfocus">
                </textarea>
            </div>
            <Button variant="contained" color="primary" className="right-space-lg ">
                    등록
                </Button>
               &nbsp;
                <Button variant="contained" color="second" className=" left-space-lg ">
                                    취소
                                </Button>
        </div>

    );
}

export default CommentWrite;