import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import "./Custom.css";
import "./index.css";
import Footer from "./Footer";

function Home() {
  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(0),
      padding: "0px 300px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: theme.spacing(5),
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(3),
    },
  }));
  const StyledButton = withStyles((theme) => ({
    root: {
      marginTop: theme.spacing(3),
      size: "large",
      background: "#167bff",
      borderRadius: 3,
      border: 0,
      color: "#ffffff",
      fontWeight: "bold",
      display: "flex",
      alignItems: "center",
      
      justifyContent: "center",
      height: 48,
      padding: "0px 80px",
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    },
  }))(Button);

  const classes = useStyles();
  return (
    <div >
      <h1 className="custom-title">Welcome, Let's get Started</h1>
      <div className="auth-wrapper">
        <div className={classes.paper}>
          <Grid container spacing={10}>
            <Grid item xs={12} sm={6}>
              <div className="auth-inner">
                <div className={classes.root}>
                  <h3 className="App-head">Buyer</h3>
                  <p className="App-head">Ship from the solace of your home</p>
                  <p className="App-body">
                    This tool gives you more flexibility and control by offering
                    Quotations from different vendors and options to select
                    preffered vendor according to your needs. It’s easy to use
                    this feature, just one click away.
                  </p>

                  <StyledButton component={Link} to="/user-sign-in">
                    Click here!
                  </StyledButton>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="auth-inner">
                <div className={classes.root}>
                  <h3 className="App-head">Vendor</h3>
                  <p className="App-head">Ship from the solace of your home</p>
                  <p className="App-body">
                    This can give you more flexibility and control by offering
                    Quotations from different vendors and options to select
                    preffered vendor according to your needs. It’s easy to use
                    this feature, just one click away.
                  </p>
                  <StyledButton component={Link} to="/vendor-sign-in">
                    Click here!
                  </StyledButton>
                </div>
              </div>
            </Grid>
            
          </Grid>
          
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
