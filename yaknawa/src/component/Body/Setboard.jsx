import React, { useState, useEffect } from "react";
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

const Setboard = () => {
    const boardList=["여드름", "탈모", "비만", "영양제", "피임", "발기부전"];

    return (
        <Grid container spacing={2}>
            <Grid item lg={5} className="background-set-gray">

            </Grid>
            <Grid item lg={2}>

            </Grid>
            <Grid item lg={5} className="background-set-gray">
                              
            </Grid>
        </Grid>
    );
}

export default Setboard;