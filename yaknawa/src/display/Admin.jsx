import React, { useState, useRef } from "react";
import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';
import Grid from '@material-ui/core/Grid';
import Boardcard from '../component/Body/Board_card';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import setTitle from '../services/set-title';
import Userlist from '../component/Body/Userlist';
import Setboard from '../component/Body/Setboard';
import Banner from '../component/Body/Banner';
import '../style/css/style.css';

const Admin = (props) => {
    setTitle("관리자 페이지");
    const [theme,setTheme] = useState("회원정보");
    const [action,setAction] = useState(Userlist);
       
    const changeTheme=(e)=>{
        const dir = e.target.id;
        setTheme(dir);
        switch(dir){
            case "회원정보":
                setAction(Userlist);
                break;
            case "게시판 관리":
                setAction(Setboard);
                break;
            case "배너 관리":
                setAction(Banner);
                break;
        }
    }
    const themeList = ["회원정보", "게시판 관리", "배너 관리"];
    const slide = [];
    themeList.map((item) => {
        slide.push(
            <Grid item lg={4} className={theme === `${item}` ? "underline-impact padding-bottom-sm" : "underline padding-bottom-sm"} >
                <div onClick={changeTheme} id={item} className="link-cursor-pointer btn-noborder-transparent position-center link-black link-nonunderline text-md">{item}</div>
            </Grid>
        );
    })


    return (
        <div>
            <Header />
            <div className="body">
                <div className=" padding-bottom-sm position-center bottom-space-sm">
                     <Grid container>
                        {slide}
                     </Grid>
                </div>
                <Grid container>
                    <Grid item lg={1}></Grid>
                    <Grid item lg={9}>
                        <div className=" text-lg"><strong>{theme}</strong></div>
                    </Grid>
                    <Grid item lg={2}>
                        
                    </Grid>
                </Grid>
                <div className="upperline boardpage-body left-space-lg right-space-lg ">
                    {action}
                </div>
            </div>

            <Footer />
        </div>

    );
}

export default Admin;