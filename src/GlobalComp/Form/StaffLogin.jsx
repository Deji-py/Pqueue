import React, { useState } from "react";
import {
  Button,
  Card,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";
import { ImCancelCircle } from "react-icons/im";

import "./form.css";
import { Link } from "react-router-dom";
import Register from "../../components/Ragister";

function StaffLogin({ toggler, setToggler }) {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
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
        <h3>LOGIN TO YOUR STAFF ACCOUNT</h3>
        <form className="flex__column">
          <TextField
            id="outlined-basic"
            label="STAFF ID"
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
          <Link to="/admin" style={{width: "100%", textDecoration:"none"}}>
            <Button
              variant="contained"
              sx={{
                background: "var(--primary)",
                marginTop: "20px",
                width: "100%",
                color: "white",
                fontWeight: "bolder",
                fontSize: "17px",
                padding: "15px",
                ":hover": {
                  background: "var(--primary)",
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
          Dont have an account?{" "}
          <Link to="/staffsignup">
          <span
          
            style={{
              color: "white",
              padding: "10px",
              background: "grey",
            }}
          >
            Signup
          </span>
          </Link>
        </p>
 
      </Card>
    </div>
  );
}

export default StaffLogin;
