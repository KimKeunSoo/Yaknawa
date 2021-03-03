import React from 'react';
import '../../style/css/style.css';
import Grid from '@material-ui/core/Grid';
import LicenseTab from './License_tab';
import logo from '../../style/img/yaknawa-logo-final.png';
const Footer = (props) => {
    return (
        <div className="footer">
            <Grid container spacing={3}>
            <Grid item lg={2}>
                <img src={logo} alt="No img" className="logo-header" />
            </Grid>
            <Grid item lg={9} className="license-space">
                <LicenseTab/>
                <br/>
                <div className="text-sm license-text">
                본 사이트에서 제공되는 모든 정보는 참여자에 의한 정보이며, 서비스 이용에 따른 최종 책임은 이용자에게 있습니다.
                     
                     Copyright&#169;2020 약나와. All Rights Reserved.
                </div>
            </Grid>
            
        </Grid>
        </div>
      );
}

export default Footer;