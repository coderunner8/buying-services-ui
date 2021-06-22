import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home";
import "./App.css";
import "./Components/index.css";
import SignUp from "./Components/SignUp"
import UserLogin from "./Components/UserLogin";
import VendorLogin from "./Components/VendorLogin";

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/"}>
              <div className="App-head">
              Fanshawe Buying Services
              </div>
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
              </ul>
            </div>
          </div>
        </nav>

          <Grid>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/user-sign-in" component={UserLogin} />
            <Route path="/vendor-sign-in" component={VendorLogin} />
          </Switch>
          </Grid>
      </div>
    </Router>
  );
}

export default App;
