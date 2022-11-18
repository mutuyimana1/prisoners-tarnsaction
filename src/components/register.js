import React from "react";
import "./register.css";
import { Button, TextField } from "@mui/material";
function Register() {
  return (
    <div className="register-container">
      <div className="containerPart1">
        <div className="form">
          <h2>Register to p-transactions</h2>
          <br />
          <TextField
            fullWidth
            margin="danse"
            id="standard-basic"
            label="Full name"
            variant="standard"
          />
          <br />
          <TextField
            id="standard-basic"
            label="Email"
            variant="standard"
            fullWidth
            margin="danse"
          />
          <br />
          <TextField
            id="standard-basic"
            fullWidth
            margin="danse"
            label="Password"
            variant="standard"
          />
          <br />
          <TextField
            id="standard-basic"
            fullWidth
            margin="danse"
            label="re-type password"
            variant="standard"
          />
          <br />
          <div className="not">
            <p>&#9733; Orleady have account</p>{" "}
            <p>
              {" "}
              <a>Login</a>
            </p>
          </div>

          <Button variant="contained">Register</Button>
        </div>
      </div>
      <div className="containerPart2"></div>
    </div>
  );
}

export default Register;
