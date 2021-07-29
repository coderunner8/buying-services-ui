import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import "./App.css";
import "./Components/index.css";
import SignUp from "./Components/SignUp";
import VendorRegister from "./Components/VendorRegister";
import UserLogin from "./Components/UserLogin";
import BuyerPriceList from "./Components/BuyerPriceList";
import VendorLogin from "./Components/VendorLogin";
import Profile from "./Components/User_Profile";
import NewRequest from "./Components/NewRequest";
import VendorProfile from "./Components/VendorProfile";
import AllRequests from "./Components/AllRequests";
import ViewQuotes from "./Components/ViewQuotes";
import PriceResponses from "./Components/PriceResponses";

import AuthService from "./Service/auth.service";

function App() {
  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  return (
    <div>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            {currentUser ? (
              <div className="navbar-nav ml-auto">
                <Link className="navbar-brand">
                  <div className="App-head">Fanshawe Buying Services</div>
                </Link>
              </div>
            ) : (
              <div className="navbar-nav ml-auto">
                <div className="navbar-nav ml-auto">
                  <Link className="navbar-brand" to={"/"}>
                    <div className="App-head">Fanshawe Buying Services</div>
                  </Link>
                </div>
              </div>
            )}

            {currentUser ? (
              <div className="App-temp">
                <Link className="App-temp">
                  {currentUser.role} Dashboard
                </Link>

                <a href="/" className="App-temp" onClick={logOut}>
                  LogOut
                </a>
              </div>
            ) : (
              <div className="navbar-nav ml-auto"></div>
            )}
          </div>
        </nav>

        <Grid>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/vendor-sign-up" component={VendorRegister} />
            <Route path="/user-sign-in" component={UserLogin} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/vendor-profile" component={VendorProfile} />
            <Route path="/vendor-sign-in" component={VendorLogin} />
            <Route path="/NewRequest" component={NewRequest} />
            <Route path="/AllRequests" component={AllRequests} />
            <Route path="/PriceResponses" component={PriceResponses} />
            <Route path="/BuyerPriceList" component={BuyerPriceList} />
            <Route path="/allQuotes" component={ViewQuotes} />
          </Switch>
        </Grid>
      </Router>
    </div>
  );
}

export default App;
