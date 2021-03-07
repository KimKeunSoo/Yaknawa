import React, { useState, useRef } from 'react';
import Input from "react-validation/build/input";
import Form from "react-validation/build/form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../../style/css/style.css';



const Menu_tab = (props) => {
    const theme = props.theme;
    //게시판검색
    const onSubmitBoard = (e) => {
        e.preventDefault();
        alert(data);
    }
    //약이름, 약국검색
    const onSubmitPills = (e) => {
        e.preventDefault();
        alert("pills");
    }

    const [data, setData] = useState("");
    const form = useRef();
    const searchData = (e) => {
        const data = e.target.value;
        setData(data);
    }

    const searchBoard = <div className="search-form">
        <div className="position-left search-icon-box">
            <FontAwesomeIcon icon={faSearch} className="set-gray position-center"/>
        </div>       
        <Form onSubmit={onSubmitBoard} ref={form}>
            <Input
                type="text"
                className="search-box"
                name="search_board_box"
                placeholder="관심있는 내용을 검색해보세요"
                value={data}
                onChange={searchData}
            />
        </Form>
    </div>;
    const searchPills = <div className="search-form">
         <div className="position-left search-icon-box">
            <FontAwesomeIcon icon={faSearch} className="set-gray position-center"/>
        </div>   
        <Form onSubmit={onSubmitPills} ref={form}>
            <Input
                type="text"
                className="search-box"
                name="search_pills_box"
                placeholder="약이름, 약국이름을 검색하세요"
                value={data}
                onChange={searchData}
            />
        </Form>
    </div>;
    const searchReturn = theme === "pills" ? searchPills : searchBoard;

    return (
        searchReturn
    );
}

export default Menu_tab;