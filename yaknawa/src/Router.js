import React,{PureComponent} from 'react';
import {Route} from 'react-router-dom';
import Home from './component/Home';
import Login from './component/Login';
import PriceForm from './component/PriceForm';
class Router extends PureComponent {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={Login}/>
                <Route exact path="/priceform" component={PriceForm}/>
            </div>
        );
    }
}

export default Router;