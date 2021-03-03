import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import '../../style/css/style.css';

const User_tab = (props) => {
    return (
        <Grid container spacing={2}>
            <Grid item lg={9}></Grid>
            <Grid item lg={3}>
                <div className="position-right size-half-quarter">
                    <ul className="ul-horizon text-sm">
                        <li className="li-horizon li-space-sm">
                            <Link to="/login" className="link-black link-nonunderline">로그인</Link>
                        </li>
                        <li className="li-horizon li-space-sm">
                            <Link to="/joinus" className="link-black link-nonunderline">회원가입</Link>
                        </li>
                        <li className="li-horizon li-space-sm">
                            <Link to="/noticeall" className="link-black link-nonunderline">공지사항</Link>
                        </li>
                        <li className="li-horizon li-space-sm">
                            <Link to="/askbc" className="link-black link-nonunderline">문의하기</Link>
                        </li>
                    </ul>
                </div>

            </Grid>
        </Grid>

    );
}
export default User_tab;