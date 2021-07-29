import React, { useEffect, useState } from "react";
import AuthService from "../Service/auth.service";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import "./User_Profile.css";

function AllRequests() {
  const [quoteList, setQuoteList] = useState({});
  const [open, setOpen] = useState(false);
  const [confirmation, setConfirmation] = useState(false);
  const [price, setPrice] = useState();
  const [comment, setComment] = useState();
  const [message, setMessage] = useState();
  const [id, setId] = useState();

  useEffect(() => {
    let mounted = true;
    AuthService.allQuotes().then((items) => {
      if (mounted) {
        setQuoteList(items);
      }
    });
    return () => (mounted = false);
  }, []);

  const handleClickOpen = (e) => {
    setId(e);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setConfirmation(false);
  };

  const handleConfirm = () => {
    
    handleAccept();
  };

  const handleAccept = (e) => {
    AuthService.setPrice(price, comment, id).then(
      () => {
        window.location.reload(false);
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setMessage(resMessage);
      }
    );
    setOpen(false);
    window.location.reload();
  };

  const onChangeprice = (e) => {
    setPrice(e.target.value);
  };

  const onChangecomment = (e) => {
    setComment(e.target.value);
  };

  const handleClickReject = (e) => {
    setId(e);
    setPrice('NA');
    setComment("NA");
    setConfirmation(true);
  };

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
                <th>Country Destination</th>
                <th>Province Destination</th>
                <th>City Destination</th>
                <th>Created Date</th>
                <th colSpan="2" className="App-thead">
                  Action
                </th>
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
                    <td>{quote.createdDate}</td>
                    <td>
                      <Link onClick={() => handleClickOpen(quote.id)}>
                        Accept
                      </Link>
                    </td>
                    <td>
                      <Link onClick={() => handleClickReject(quote.id)}>Reject </Link>
                    </td>
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

          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Price</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Give a price estimate for the Customer. Once Submitted, cannot
                be taken back.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="price"
                label="Estimate in CAD"
                value={price}
                onChange={onChangeprice}
                type="price"
                fullWidth
              />
              <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Comments"
                value={comment}
                onChange={onChangecomment}
                type="comments"
                fullWidth
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleAccept} color="primary">
                Submit
              </Button>
            </DialogActions>
          </Dialog>
          <Dialog
            open={confirmation}
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
          >
            <DialogTitle id="form-dialog-title">Are you Sure to reject the quote request</DialogTitle>
            <DialogActions>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button onClick={handleAccept} color="primary">
                Confirm
              </Button>
            </DialogActions>
          </Dialog>
          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllRequests;
