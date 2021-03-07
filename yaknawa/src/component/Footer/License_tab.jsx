import React from 'react';
import { Link } from 'react-router-dom';
import '../../style/css/style.css';

const License_tab = (props) => {
    return (
        <ul className="ul-horizon text-sm">
            <li className="li-horizon li-space-sm">
                <Link to="/htu" className="link-black link-nonunderline li-license" >커뮤니티 이용안내</Link>
            </li>
            <li className="li-horizon li-space-sm border-left border-right">
                <Link to="/tos" className="link-black link-nonunderline">이용약관</Link>
            </li>
            <li className="li-horizon li-space-sm">
                <Link to="/dop" className="link-black link-nonunderline li-license">개인정보처리방침</Link>
            </li>
        </ul>

    );
}

export default License_tab;