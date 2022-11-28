import React from "react";
// import "./register.css";
import { Button, TextField } from "@mui/material";
import Dashboard from "./dashboard";
function RegisterPrisoner() {
  return (
    <Dashboard>
      <div
        className="p-container"
        style={{ marginTop: "-250px", marginLeft: "100px" }}
      >
        <div className="containerPart1" style={{ width: "100%" }}>
          <div className="form">
            <h2>Register prisoner</h2>
            <div style={{ display: "flex", gap: "20px" }}>
              <TextField
                width="2000px"
                id="outlined-text-input"
                label="Full name"
                type="FullName"
                autoComplete="current-password"
              />
              <TextField
                width="2000px"
                id="outlined-text-input"
                label="other data to recod"
                type="FullName"
                autoComplete="current-password"
              />
            </div>
            <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
              <TextField
                width="2000px"
                id="outlined-text-input"
                label="other data to recod"
                type="FullName"
                autoComplete="current-password"
              />
              <TextField
                width="2000px"
                id="outlined-text-input"
                label="other data to recod"
                type="FullName"
                autoComplete="current-password"
              />
            </div>
            <div style={{ display: "flex", gap: "20px", marginTop: "30px" }}>
              <TextField
                width="2000px"
                id="outlined-text-input"
                label="other data to recod"
                type="FullName"
                autoComplete="current-password"
              />
              <TextField
                width="2000px"
                id="outlined-text-input"
                label="other data to recod"
                type="FullName"
                autoComplete="current-password"
              />
            </div>
            <Button variant="contained" style={{ marginTop: "20px" }}>
              Register
            </Button>
          </div>
        </div>
      </div>
    </Dashboard>
  );
}

export default RegisterPrisoner;
