import React, { useState, useRef } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "./Custom.css";
import "./index.css";
import Footer from "./Footer";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";

import AuthService from "../Service/auth.service";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
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
      display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
      height: 48,
      padding: "0px 80px",
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    },
  }))(Button);

  const VendorLogin = (props) => {
    const form = useRef();
    const checkBtn = useRef();
    const role="Vendor";
  
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [username, setUsername] = useState("");
  
    const onChangeUsername = (e) => {
      setUsername(e.target.value);
    };
  
    const onChangePassword = (e) => {
      setPassword(e.target.value);
    };
  
    const handleLogin = (e) => {
      e.preventDefault();
  
      setMessage("");
      setLoading(true);
  
      form.current.validateAll();
  
      if (checkBtn.current.context._errors.length === 0) {
        AuthService.login(username, password,role).then(
          () => {
            props.history.push("/vendor-profile");
            window.location.reload();
          },
          (error) => {
            const resMessage =
              (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
  
            setLoading(false);
            setMessage(resMessage);
          }
        );
      } else {
        setLoading(false);
      }
    };
    const classes = useStyles();
  
    return (
      <div>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div className={classes.paper}>
                <Avatar className={classes.avatar}></Avatar>
                <Typography component="h1" variant="h4">
                  <div className="App-head">Login to your Account</div>
                </Typography>
                <Form
                  onSubmit={handleLogin}
                  className={classes.form}
                  ref={form}
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <label htmlFor="username"></label>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        id="username"
                        label="Username"
                        name="username"
                        value={username}
                        onChange={onChangeUsername}
                        autoComplete="username"
                        validations={[required, vusername]}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <label htmlFor="password"></label>
                      <TextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        value={password}
                        onChange={onChangePassword}
                        validations={[required]}
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                      />
                    </Grid>
                  </Grid>
                  <StyledButton
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Login
                  </StyledButton>
                  {message && (
                    <div className="form-group">
                      <div className="alert alert-danger" role="alert">
                        {message}
                      </div>
                    </div>
                  )}
                  <Grid container justify="flex-end">
                    <Grid item>
                      <Link href="/vendor-sign-up" to={"/vendor-sign-up"}>
                        Click here to Register
                      </Link>
                    </Grid>
                  </Grid>
                  <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
              </div>
              <Box mt={5}>
                <Copyright />
              </Box>
            </Container>
          </div>
        </div>
        <Footer />
      </div>
    );
  };
  
  export default VendorLogin;