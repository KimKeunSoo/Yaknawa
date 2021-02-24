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
            </div>
        );
    }
}

export default Router;