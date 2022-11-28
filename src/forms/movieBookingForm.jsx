import React from "react";
import { Typography, TextField, Button } from "@mui/material";

const MovieBookingForm = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Typography variant="h5">Show Booking Form</Typography>
      <form>
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Name"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Phone Number"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Email"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Seat Preference"
          variant="outlined"
        />
        <br />
        <TextField
          style={{ width: "200px", margin: "5px" }}
          type="text"
          label="Number of Sets"
          variant="outlined"
        />
        <br />

        <Button variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default MovieBookingForm;
