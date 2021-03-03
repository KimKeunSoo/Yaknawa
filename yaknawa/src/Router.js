import React, { PureComponent } from 'react';
import { Route} from 'react-router-dom';
import Home from './display/Home';
import Htu from './display/Htu';
import Dop from './display/Dop';
import Tos from './display/Tos';
import Priceform from './display/Priceform';
import Share from './display/Share';
import Login from './display/Login';
import JoinUs from './display/Join_us';
import Modify from './display/Modify';
import Noticeall from './display/Noticeboard_all';
import Noticeboard from './display/Noticeboard';
import Askbc from './display/Askbc';
class Router extends PureComponent {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/htu" component={Htu} />
                <Route exact path="/dop" component={Dop} />
                <Route exact path="/tos" component={Tos} />
                <Route exact path="/priceform" component={Priceform} />
                <Route exact path="/share" component={Share} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/joinus" component={JoinUs} />
                <Route exact path="/modify" component={Modify} />
                <Route exact path="/noticeall" component={Noticeall} />
                <Route  path="/noticeboard/:theme" component={Noticeboard} />
                <Route exact path="/noticeboard" component={Noticeboard} />
                <Route exact path="/askbc" component={Askbc} />
            </div>
        );
    }
}

export default Router;