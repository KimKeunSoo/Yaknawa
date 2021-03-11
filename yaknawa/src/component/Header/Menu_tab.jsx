import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import logo from '../../style/img/yaknawa-logo-final.png';
import Search from '../Action/Search';
import Button from '@material-ui/core/Button';
import '../../style/css/style.css';

const Menu_tab = (props) => {
    return (
        <Grid container spacing={1}>
            <Grid item lg={2}>
            <Link to="/" className="link-black link-nonunderline"><img src={logo} alt="No img" className="logo-header" /></Link>
            </Grid>
            <Grid item lg={4} className="go-bottom">
                <ul className="ul-horizon text-lg">
                    <li className="li-horizon li-space-lg">
                        <Link to="/" className="link-black link-nonunderline">홈</Link>
                    </li>
                    <li className="li-horizon li-space-lg">
                        <Link to="/priceform" className="link-black link-nonunderline">약값 비교</Link>
                    </li>
                    <li className="li-horizon li-space-lg">
                        <Link to="/mpay" className="link-black link-nonunderline">병원별 진료비</Link>
                    </li>
                </ul>
            </Grid>
            <Grid item lg={4} className="go-bottom">
                <Search />
            </Grid>
            <Grid item lg={2} className="share-btn-position">
                <Link to="/share" className="link-nonunderline position-right ">
                    <Button variant="contained" color="primary" className="share-btn ">
                        약값공유
                    </Button>
                </Link>
            </Grid>
        </Grid>

    );
}

export default Menu_tab;