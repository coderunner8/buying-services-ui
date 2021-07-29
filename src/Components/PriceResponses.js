import React, { useEffect, useState } from "react";
import AuthService from "../Service/auth.service";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import "./User_Profile.css";
import Footer from "./Footer";

function PriceResponses() {
  const [quoteList, setQuoteList] = useState({});

  useEffect(() => {
    let mounted = true;
    AuthService.priceQuotes().then((items) => {
      if (mounted) {
        setQuoteList(items);
      }
    });
    return () => (mounted = false);
  }, []);
  return (
    <div>
      <div className="auth-wrapper">
        <div className="auth-inner">
          <table className="table table-striped App-thead">
            <thead>
              <tr>
                <th>Commodity</th>
                <th>Count</th>
                <th>Weight</th>
                <th>Dimensions</th>
                <th>Country Origin</th>
                <th>Province Origin</th>
                <th>City Origin</th>
                <th>Country to</th>
                <th>Province to</th>
                <th>City to</th>
                <th>Created Date</th>
                <th>Price in CAD</th>
                <th>Comments</th>
              </tr>
            </thead>
            <tbody>
              {quoteList.data &&
                quoteList.data.map((quote, i) => (
                  <tr key={quote[0].id}>
                    <td>{quote[0].commodity}</td>
                    <td>{quote[0].count}</td>
                    <td>{quote[0].weight}</td>
                    <td>{quote[0].dimensions}</td>
                    <td>{quote[0].countryorigin}</td>
                    <td>{quote[0].provinceorigin}</td>
                    <td>{quote[0].cityorigin}</td>
                    <td>{quote[0].countrydes}</td>
                    <td>{quote[0].provincedes}</td>
                    <td>{quote[0].citydes}</td>
                    <td>{quote[0].createdDate}</td>
                    <td>{quote[1].price}</td>
                    <td>{quote[1].comments}</td>                    
                  </tr>
                ))}
            </tbody>
          </table>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/vendor-profile" to={"/vendor-profile"}>
                Back to Main Dashboard
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default PriceResponses;
