import React from 'react';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import '../../style/css/style.css';

const User_tab = (props) => {
    //세션안에값 받아서 상황따라 처리
    const userType = window.sessionStorage.getItem('role');
   //const userType = "user";
    var userCondition="";
    var userRole="";
    if(userType === "admin"){
        //관리자
        userCondition=<Link to="/logout" className="link-black link-nonunderline">로그아웃</Link>;
        userRole=<Link to="/admin" className="link-black link-nonunderline">관리</Link>;
    }
    else if(userType === "user"){
         //로그인상태
         userCondition=<Link to="/logout" className="link-black link-nonunderline">로그아웃</Link>;
         userRole=<Link to="/modify" className="link-black link-nonunderline">정보수정</Link>;
    }else{
         //로그아웃상태
         userCondition=<Link to="/login" className="link-black link-nonunderline">로그인</Link>;
         userRole=<Link to="/joinus" className="link-black link-nonunderline">회원가입</Link>;
    }
    return (
        <Grid container spacing={2}>
            <Grid item lg={8}></Grid>
            <Grid item lg={4}>
                <div className="position-right size-half-quarter">
                    <ul className="ul-horizon text-sm">
                        <li className="li-horizon li-space-sm">
                            {userCondition}
                        </li>
                        <li className="li-horizon li-space-sm">
                            {userRole}
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