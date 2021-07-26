import React from "react";
import AuthService from "../Service/auth.service";
import "./User_Profile.css";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { makeStyles, withStyles } from "@material-ui/core/styles";

const VendorProfile = () => {
  const currentUser = AuthService.getCurrentUser();

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(0),
      padding: "0px 300px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      fontWeight: "bold",
      marginBottom: theme.spacing(5),
      
    },
  }));

  const StyledButton = withStyles((theme) => ({
    root: {
      marginTop: theme.spacing(3),
      size: "large",
      background: "white",
      borderRadius: 3,
      border: 0,
      color: "#167bff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      height: 48,
      width:300,
      padding: "0px 80px",
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      '&:hover': {
        backgroundColor: "#e0b6eb",
      },
    },
  }))(Button);

  const classes = useStyles();
  return (
    <div className="App-bod">
      <p>Hello, {currentUser.firstname}</p>
      <div className={classes.paper}> 
          <StyledButton component={Link} to="/AllRequests">List of Requests</StyledButton>
          <StyledButton component={Link} to="/vendor-sign-in">Your Responses</StyledButton>
      </div>
    </div>
  );
};

export default VendorProfile;
