import React from 'react';
import Grid from '@material-ui/core/Grid';
import '../../style/css/style.css';

const Realtimeprice = (props) => {
    const slide = [];
    for (let i = 0; i < 7; i++) {
        slide.push(
            <Grid container className="padding-left-sm bottom-space-sm">
                <Grid item lg={10}>
                    <p>의약품 이름 {i}</p>
                    10000원~13400원
                </Grid>
                <Grid item lg={2}>
                   <p>가격</p>
                </Grid>
            </Grid>
        )
    }

    return (
        <div className="outline-all padding-top-sm padding-right-sm padding-left-sm padding-bottom-sm">
            <div className="position-center text-md">
                실시간 의약품 가격 보기
            </div>
            
            <div className="top-space-lg">
                {slide}
            </div>
        </div>


    );
}

export default Realtimeprice;

