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
import Footer from "./Footer";

import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";
import { isEmail} from "validator";

import AuthService from "../Service/auth.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    padding: "0px 80px",
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  },
}))(Button);

const VendorRegister = (props) =>{
  const form = useRef();
  const checkBtn = useRef();

  const [email, setEmail] = useState("");
  const [fname, setFname] = useState("");
  const [username, setUsername] = useState("");
  const [lname, setLname] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [registration, setRegistration] = useState("");
  const role="Vendor";

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeFname = (e) => {
    const fname = e.target.value;
    setFname(fname);
  };

  const onChangeLname = (e) => {
    const lname = e.target.value;
    setLname(lname);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeCompany = (e) => {
    setCompany(e.target.value);
  };

  const onChangeRegistration = (e) => {
    setRegistration(e.target.value);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(fname,lname,username,email, password,company,registration,role).then(
        (response) => {
          setMessage(response.data.message); 
          setSuccessful(true);
          props.history.push("/vendor-sign-in");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
      );
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
                <div className="App-head">Create your Account</div>
              </Typography>
              <Form
                onSubmit={handleRegister}
                className={classes.form}
                ref={form}
              >
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      autoComplete="fname"
                      variant="outlined"
                      required
                      fullWidth
                      name="firstname"
                      label="First Name"
                      value={fname}
                      onChange={onChangeFname}
                      autoFocus
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      label="Last Name"
                      name="lastName"
                      value={lname}
                      onChange={onChangeLname}
                      autoComplete="lname"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      label="Username"
                      name="username"
                      value={username}
                      onChange={onChangeUsername}
                      validations={[required, vusername]}
                      autoComplete="username"
                    />
                    </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      label="Email Address"
                      name="email"
                      value={email}
                      onChange={onChangeEmail}
                      validations={[required, validEmail]}
                      autoComplete="email"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="password"
                      label="Password"
                      value={password}
                      type="password"
                      onChange={onChangePassword}
                      validations={[required, vpassword]}
                      autoComplete="current-password"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="company"
                      label="Company Name"
                      value={company}
                      onChange={onChangeCompany}
                      validations={[required]}
                      autoComplete="company"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      variant="outlined"
                      required
                      fullWidth
                      name="registration"
                      label="Company Registration Number"
                      value={registration}
                      onChange={onChangeRegistration}
                      validations={[required]}
                      autoComplete="registration"
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
                  Register
                </StyledButton>
                {message && (
            <div className="form-group">
              <div
                className={ successful ? "alert alert-success" : "alert alert-danger" }
                role="alert"
              >
                {message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link href="/user-sign-in" variant="body2">
                      Already have an account? Login
                    </Link>
                  </Grid>
                </Grid>
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

export default VendorRegister;
