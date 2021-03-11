import React, { useState, useEffect } from "react";
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

const Banner = () => {

    const creatList = (nickname, email, birthday, gender, blacklist) => {
        return { nickname, email, birthday, gender, blacklist };
    }
    const userList = [
        creatList("닉네임", "이메일", "생년월일", "성별", "블랙리스트여부"),
        creatList("닉네임", "이메일", "생년월일", "성별", "블랙리스트여부"),
        creatList("닉네임", "이메일", "생년월일", "성별", "블랙리스트여부")
    ];


    return (
        <Grid container spacing={5}>
            <Grid item lg={6} className="background-set-gray">

            </Grid>
            <Grid item lg={6}>
                <div className="form-control">
                    <label className="size-big position-left form-label">1번 배너</label>
                    <TextField
                        type="file"
                        className="size-full"
                        name="recipt"
                    />
                </div>
                <div className="form-control">
                    <label className="size-big position-left form-label">2번 배너</label>
                    <TextField
                        type="file"
                        className="size-full"
                        name="recipt"
                    />
                </div>
                <div className="form-control">
                    <label className="size-big position-left form-label">3번 배너</label>
                    <TextField
                        type="file"
                        className="size-full"
                        name="recipt"
                    />
                </div>
            </Grid>
        </Grid>
    );
}

export default Banner;