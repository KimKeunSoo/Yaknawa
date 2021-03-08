import React, { useState, useRef } from "react";
import Header from '../component/Header/Header';
import Footer from '../component/Footer/Footer';
import setTitle from '../services/set-title';
import '../style/css/style.css';

const Home = (props)=>{
    setTitle("개인정보처리방침");
    return(
        <div>
            <Header/>
            <Footer/>
        </div>
     
    );
}

export default Home;