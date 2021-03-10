import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./display/Home";
import Htu from "./display/Htu";
import Dop from "./display/Dop";
import Tos from "./display/Tos";
import Priceform from "./display/Priceform";
import Share from "./display/Share";
import Login from "./display/Login";
import JoinUs from "./display/Join_us";
import Modify from "./display/Modify";
import Noticeall from "./display/Noticeboard_all";
import Noticeboard from "./display/Noticeboard";
import Askbc from "./display/Askbc";
import Noticewrite from "./display/Noticeboard_write";
import Noticeread from "./display/Noticeboard_read";
import ResultAll from "./display/Search_all";
import ResultPharmacy from "./display/Search_pharmacy";
import ResultPill from "./display/Search_pill";
import Pharmacy from "./display/Pharmacy";
import Apply from "./display/Apply";
function App() {
  return (
    <Router>
      <div>
        <Switch>
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
          <Route path="/noticeboard/:theme" component={Noticeboard} />
          <Route exact path="/noticeboard" component={Noticeboard} />
          <Route exact path="/askbc" component={Askbc} />
          <Route exact path="/noticewrite/:theme" component={Noticewrite} />
          <Route exact path="/noticewrite" component={Noticewrite} />
          <Route exact path="/noticeread/:theme/:num" component={Noticeread} />
          <Route exact path="/noticeread" component={Noticeread} />
          <Route exact path="/searchall" component={ResultAll} />
          <Route
            exact
            path="/searchpharmacy/:name"
            component={ResultPharmacy}
          />
          <Route exact path="/searchpharmacy" component={ResultPharmacy} />
          <Route exact path="/searchpill/:name" component={ResultPill} />
          <Route exact path="/searchpill" component={ResultPill} />
          <Route exact path="/pharmacy/:name/:address" component={Pharmacy} />
          <Route exact path="/pharmacy" component={Pharmacy} />
          <Route exact path="/apply" component={Apply} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

{
  /* <Route exact path="/" component={Auth(LandingPage, null)} />
          <Route exact path="/login" component={Auth(LoginPage, false)} />
          <Route exact path="/register" component={Auth(RegisterPage, false)} />
         */
}
