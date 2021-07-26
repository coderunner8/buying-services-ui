import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/";

const register = (firstname, lastname, username, email, password,company,registration, role) => {
  return axios.post(API_URL + "fbb/register/", {
    firstname,
    lastname,
    username,
    email,
    password,
    company,
    registration,
    role,
  });
};

const login = (username, password,role) => {
  return axios
    .post(API_URL + "fbb/login", {
      username,
      password,
      role,
    })
    .then((response) => {
      if (response.data.jwt) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
  
};

const logout = () => {
  localStorage.removeItem("user");
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const getQuotes = () => {
  return axios.get(API_URL + "fbb/allquotes/", { headers: authHeader() });
};

const allQuotes = () => {
  return axios.get(API_URL + "vendor/requests", { headers: authHeader() });
};

const getQuoteRequest = (
  commodity,
  count,
  weight,
  dimensions,
  countryorigin,
  provinceorigin,
  cityorigin,
  countrydes,
  provincedes,
  citydes,
) => {
  return axios.post(API_URL + "fbb/quote/", {
    commodity,
    count,
    weight,
    dimensions,
    countryorigin,
    provinceorigin,
    cityorigin,
    countrydes,
    provincedes,
    citydes,},{
    headers: authHeader(),
  });
};

export default {
  register,
  login,
  logout,
  getCurrentUser,
  getQuoteRequest,
  getQuotes,
  allQuotes,
};
