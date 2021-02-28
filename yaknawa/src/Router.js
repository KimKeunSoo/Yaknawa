import React,{PureComponent} from 'react';
import {Route} from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import PriceForm from './component/PriceForm';
import Joinus from './component/Join_us';
import Share from './component/Share';
import Modify from './component/Modify';
import Askbc from './component/Ask_by_company';
import Noticeall from './component/Noticeboard_all';
import Noticehot from './component/Noticeboard_hot';
import Noticetheme from './component/Noticeboard_theme';
import Noticewrite from './component/Noticeboard_write';
import Noticeread from './component/Noticeboard_read';
//backoffice
import Admin_userinfo from './backoffice/Admin_userinfo';
import Admin_board from './backoffice/Admin_board';
import Admin_banner from './backoffice/Admin_banner';
import api from './component/Testapi.js';
class Router extends PureComponent {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/priceform" component={PriceForm}/>
                <Route exact path="/joinus" component={Joinus}/>
                <Route exact path="/share" component={Share}/>
                <Route exact path="/modify" component={Modify}/>
                <Route exact path="/askbc" component={Askbc}/>
                <Route exact path="/noticeall" component={Noticeall}/>
                <Route exact path="/noticehot" component={Noticehot}/>
                <Route exact path="/noticetheme" component={Noticetheme}/>
                <Route exact path="/noticewrite" component={Noticewrite}/>
                <Route exact path="/noticeread" component={Noticeread}/>
                <Route exact path="/adminuserinfo" component={Admin_userinfo}/>
                <Route exact path="/adminboard" component={Admin_board}/>
                <Route exact path="/adminbanner" component={Admin_banner}/>
                <Route exact path="/testapi" component={api}/>
            </div>
        );
    }
}

export default Router;