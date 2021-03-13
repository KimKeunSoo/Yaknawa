import React from 'react';
import '../../style/css/style.css';
import UserTab from './User_tab';
import MenuTab from './Menu_tab';
import MenuTabHome from './Menu_tab_home';
const Header = (props) => {
    const condition = props.condition;

    return (
        <div className="header underline">
            <UserTab />
            {condition ? <MenuTabHome /> : <MenuTab />}
            <br />
        </div>
    );
}

export default Header;