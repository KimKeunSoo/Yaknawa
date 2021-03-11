import React, { useState, useRef } from "react";
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import '../../style/css/style.css';

const CommentWrite = (props) => {

    return (
        <div>
            <div className="top-space-sm">
                <textarea placeholder="댓글을 입력하세요" maxLength="100"
                    className="textarea-resizenone size-full textarea-size-md  textarea-onfocus">
                </textarea>
            </div>
            <Grid container spacing={2}>
                <Grid item lg={10}></Grid>
                <Grid item lg={1}>
                <Button variant="contained" color="primary" className="size-full share-btn set-white">
                    등록
                </Button>        
               
                </Grid>
                <Grid item lg={1}> <Button variant="contained" color="second" className="size-full">
                    취소
                                </Button></Grid>
            </Grid>
              
            

        </div>

    );
}

export default CommentWrite;