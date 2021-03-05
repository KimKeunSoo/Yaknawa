import React from 'react';
import '../../style/css/style.css';
import UserTab from './User_tab';
import MenuTab from './Menu_tab';
const Header = (props) => {
 
    return (
        <div className="header underline">
            <UserTab/>
            <MenuTab/>
            <br/>
        </div>
      );
}

export default Header;