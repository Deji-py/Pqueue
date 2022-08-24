import { Button, Card, IconButton, Modal, TextField } from "@mui/material";
import React from "react";
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";

import "./form.css";

function StudentForm({ toggler, setToggler }) {
  return (
    <div
      className="modal flex__column"
      style={{ display: toggler === true ? "flex" : "none" }}
    >
      <Card sx={{ padding: "30px" }} className="formcard">
        <IconButton
          aria-label="delete"
          onClick={() => setToggler(false)}
          style={{ transform: "translateY(-20px)" }}
        >
          <ImCancelCircle />
        </IconButton>
        <h3>LOGIN TO YOUR STUDENT ACCOUNT</h3>
        <form className="flex__column">
          <TextField
            id="outlined-basic"
            label="Matric / Student ID"
            variant="outlined"
            sx={{
              marginTop: "30px",
              width: "100%",
              ":focus": {
                border: "solid 5px red",
              },
            }}
          />

          <TextField
            id="outlined-basic"
            label="Email Adress"
            variant="outlined"
            sx={{ marginTop: "30px", width: "100%" }}
          />

          <TextField
            id="outlined-basic"
            label="Password"
            variant="outlined"
            sx={{ marginTop: "30px", width: "100%" }}
          />
          <Link to="/student" style={{ textDecoration: "none", width: "100%" }}>
            <Button
              variant="contained"
              sx={{
                background: "var(--secondary)",
                marginTop: "20px",
                width: "100%",
                color: "black",
                fontWeight: "bolder",
                fontSize: "17px",
                padding: "15px",
                ":hover": {
                  background: "var(--secondary)",
                },
              }}
              disableElevation
            >
              Log in
            </Button>
          </Link>
        </form>

        <p style={{ marginTop: "10px" }}>Forgot Password?</p>

        <p style={{ marginTop: "40px", textAlign: "center" }} className="qta">
          Dont have an account? <Link to="/">Signup</Link>
        </p>
      </Card>
    </div>
  );
}

export default StudentForm;
