import React from "react";
import "./register.css";
import { Button, TextField } from "@mui/material";
function Login() {
  return (
    <div className="login-container">
      <div className="containerPart1">
        <div className="form">
          <h2>Login to p-transactions</h2>
          <br />
          <TextField
            fullWidth
            margin="danse"
            id="standard-basic"
            label="Email"
            variant="standard"
          />
          <br />
          <TextField
            id="standard-basic"
            label="password"
            variant="standard"
            fullWidth
            margin="danse"
          />

          <br />
          <div className="not">
            <p>
              &#9733; Remember me <a>Login</a>
            </p>{" "}
            <p>
              <a> forget password</a>
            </p>
          </div>

          <Button variant="contained">Login</Button>
        </div>
      </div>
      <div className="containerPart2"></div>
    </div>
  );
}

export default Login;
