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
                <img src={logo} alt="No img" className="logo-header" />
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
                        <Link to="/" className="link-black link-nonunderline">비급여 진료비</Link>
                    </li>
                </ul>
            </Grid>
            <Grid item lg={5} className="go-bottom">
                <Search/>
            </Grid>
            <Grid item lg={1} className="share-btn-position">
                <Link to="/share" className="link-nonunderline position-right ">
                    <Button variant="contained" color="primary" className="share-btn right-space-lg">
                        약값공유
                    </Button>
                </Link>
            </Grid>
        </Grid>

    );
}

export default Menu_tab;