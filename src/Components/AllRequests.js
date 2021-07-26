import React, { useEffect, useState } from "react";
import AuthService from "../Service/auth.service";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import "./User_Profile.css";

function AllRequests() {
  const [quoteList, setQuoteList] = useState({});

  useEffect(() => {
    let mounted = true;
    AuthService.allQuotes().then((items) => {
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
            <thead >
              <tr >
                <th>Commodity</th>
                <th>Count</th>
                <th>Weight</th>
                <th>Dimensions</th>
                <th>Country Origin</th>
                <th>Province Origin</th>
                <th>City Origin</th>
                <th>Country Destination</th>
                <th>Province Destination</th>
                <th>City Destination</th>
                <th colSpan="2" className="App-thead">Action</th>
              </tr>
            </thead>
            <tbody>
              {quoteList.data &&
                quoteList.data.map((quote, i) => (
                  <tr key={quote.id}>
                    <td>{quote.commodity}</td>
                    <td>{quote.count}</td>
                    <td>{quote.weight}</td>
                    <td>{quote.dimensions}</td>
                    <td>{quote.countryorigin}</td>
                    <td>{quote.provinceorigin}</td>
                    <td>{quote.cityorigin}</td>
                    <td>{quote.countrydes}</td>
                    <td>{quote.provincedes}</td>
                    <td>{quote.citydes}</td>
                    <td><a href="/vendor-profile">Accept </a></td>
                    <td><a href="/vendor-profile">Reject </a></td>
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

export default AllRequests;
