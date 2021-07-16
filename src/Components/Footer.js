import React from 'react';
import "./Custom.css";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Logo from "./Logo.png";

function footer() {
    return (
        <div className="App-foot">
            <Grid container spacing={1}>
                <Grid item xs={12} sm={4}>
                <img src={Logo} alt="Fanshawe Buying Services" />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <h3>Fanshawe Buying Services</h3>
                    <p>For Buyers</p>
                    <p>For Vendors</p>
                    <p>For Carrers</p>
                    <p>Covid Related</p>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                    <h4>Contact us</h4>
                    <p>Email: vamcp26@gmail.com</p>
                    <p>Phone: (+1) 5198712630</p>
                    <p>London, ON</p>
                    </Grid>
                </Grid>
        </div>
    )
}

export default footer
