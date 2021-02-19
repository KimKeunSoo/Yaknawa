import React,{PureComponent} from 'react';
import {Route} from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import PriceForm from './component/PriceForm';
import Joinus from './component/Join_us';
import Share from './component/Share';
class Router extends PureComponent {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/priceform" component={PriceForm}/>
                <Route exact path="/joinus" component={Joinus}/>
                <Route exact path="/share" component={Share}/>
            </div>
        );
    }
}

export default Router;