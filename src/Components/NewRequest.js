import React, { useState, useRef } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Form from "react-validation/build/form";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Container from "@material-ui/core/Container";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import "./index.css";
import AuthService from "../Service/auth.service";
import CheckButton from "react-validation/build/button";
import Footer from "./Footer";

const NewRequest = (props) => {
  const form = useRef();
  const checkBtn = useRef();
  const [commodity, setCommodity] = useState("");
  const [message, setMessage] = useState("");
  const [count, setCount] = useState("");
  const [weight, setWeight] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [countryorigin, setCountryorigin] = useState("");
  const [provinceorigin, setProvinceorigin] = useState("");
  const [cityorigin, setCityorigin] = useState("");
  const [countrydes, setCountrydes] = useState("");
  const [provincedes, setProvincedes] = useState("");
  const [citydes, setCitydes] = useState("");
  const [loading, setLoading] = useState(false);
  const role = "Buyer";

  const required = (value) => {
    if (!value) {
      return (
        <div className="alert alert-danger" role="alert">
          This field is required!
        </div>
      );
    }
  };

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

  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    form: {
      width: "100%", // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

  const onChangecommodity = (e) => {
    setCommodity(e.target.value);
  };

  const onChangecount = (e) => {
    setCount(e.target.value);
  };

  const onChangeweight = (e) => {
    setWeight(e.target.value);
  };

  const onChangedimensions = (e) => {
    setDimensions(e.target.value);
  };

  const onChangecountryorigin = (e) => {
    setCountryorigin(e.target.value);
  };

  const onChangecountrydes = (e) => {
    setCountrydes(e.target.value);
  };

  const onChangeprovinceorigin = (e) => {
    setProvinceorigin(e.target.value);
  };

  const onChangeprovincedes = (e) => {
    setProvincedes(e.target.value);
  };

  const onChangecityorigin = (e) => {
    setCityorigin(e.target.value);
  };

  const onChangecitydes = (e) => {
    setCitydes(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.getQuoteRequest(
        commodity,
        count,
        weight,
        dimensions,
        countryorigin,
        provinceorigin,
        cityorigin,
        countrydes,
        provincedes,
        citydes
      ).then(
        () => {
          props.history.push("/profile");
          window.location.reload(5);
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
            <Typography component="h1" variant="h4">
              <div className="App-head">Enter the Package Details</div>
            </Typography>
            <Form onSubmit={handleLogin} className={classes.form} ref={form}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <label htmlFor="Commodity"></label>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="commodity"
                    label="Commodity"
                    name="commodity"
                    value={commodity}
                    onChange={onChangecommodity}
                    autoComplete="commodity"
                    validations={[required]}
                  />
                </Grid>
                <Grid item xs={6}>
                  <label htmlFor="Count"></label>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="count"
                    label="Count"
                    name="count"
                    value={count}
                    onChange={onChangecount}
                    autoComplete="count"
                    validations={[required]}
                  />
                </Grid>
                <Grid item xs={6}>
                  <label htmlFor="Weight"></label>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="weight"
                    label="Weight"
                    name="weight"
                    value={weight}
                    onChange={onChangeweight}
                    autoComplete="weight"
                    validations={[required]}
                  />
                </Grid>
                <Grid item xs={12}>
                  <label htmlFor="Dimensions"></label>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="dimensions"
                    label="Dimensions"
                    name="dimensions"
                    value={dimensions}
                    onChange={onChangedimensions}
                    autoComplete="dimensions"
                    validations={[required]}
                  />
                </Grid>
                <Grid item xs={12}>
                  <label htmlFor="CountryOrigin"></label>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="countryorigin"
                    label="Country Origin"
                    name="countryorigin"
                    value={countryorigin}
                    onChange={onChangecountryorigin}
                    autoComplete="countryorigin"
                    validations={[required]}
                  />
                </Grid>
                <Grid item xs={6}>
                  <label htmlFor="ProvinceOrigin"></label>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="provinceorigin"
                    label="Province Origin"
                    name="provinceorigin"
                    value={provinceorigin}
                    onChange={onChangeprovinceorigin}
                    autoComplete="provinceorigin"
                    validations={[required]}
                  />
                </Grid>
                <Grid item xs={6}>
                  <label htmlFor="City Origin"></label>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="cityorigin"
                    label="City Origin"
                    name="cityorigin"
                    value={cityorigin}
                    onChange={onChangecityorigin}
                    autoComplete="cityorigin"
                    validations={[required]}
                  />
                </Grid>
                <Grid item xs={12}>
                  <label htmlFor="CountryDes"></label>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="countrydes"
                    label="Country Destination"
                    name="countrydes"
                    value={countrydes}
                    onChange={onChangecountrydes}
                    autoComplete="countrydes"
                    validations={[required]}
                  />
                </Grid>
                <Grid item xs={6}>
                  <label htmlFor="ProvinceDestination"></label>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="provincedes"
                    label="Province Destination"
                    name="provincedes"
                    value={provincedes}
                    onChange={onChangeprovincedes}
                    autoComplete="provincedes"
                    validations={[required]}
                  />
                </Grid>
                <Grid item xs={6}>
                  <label htmlFor="CityDestination"></label>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="citydes"
                    label="City Destination"
                    name="citydes"
                    value={citydes}
                    onChange={onChangecitydes}
                    autoComplete="citydes"
                    validations={[required]}
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
                Submit Quote
              </StyledButton>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="/profile" to={"/profile"}>
                    Back to Main Dashboard
                  </Link>
                </Grid>
              </Grid>
              {message && (
                <div className="form-group">
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </div>
              )}

              <CheckButton style={{ display: "none" }} ref={checkBtn} />
            </Form>
          </Container>
          
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default NewRequest;
