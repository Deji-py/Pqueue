import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  Container,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { ImCancelCircle } from "react-icons/im";

import "./form.css";
import { Link } from "react-router-dom";
import Register from "../../components/Ragister";
import { BiArrowBack } from "react-icons/bi";

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
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
          overflow: "scroll",
        }}
      >
        <Container maxWidth="sm">
          <Button
            component="a"
            startIcon={<BiArrowBack fontSize="small" />}
            onClick={() => setToggler(false)}
          >
            Back
          </Button>

          <form>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Sign in to your Account
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                Use your email to sign in account
              </Typography>
            </Box>
            <TextField
              // error={Boolean("hey")}
              fullWidth
              error={true}
              required={true}
              helperText={"incorrect ID"}
              label="Staff ID"
              margin="normal"
              name="email"
              onBlur=""
              onChange=""
              type="email"
              value=""
              variant="outlined"
            />
            <TextField
              // error={Boolean("hey")}
              fullWidth
              error={true}
              required={true}
              helperText={"invalid email"}
              label="Email Address"
              margin="normal"
              name="email"
              onBlur=""
              onChange=""
              type="email"
              value=""
              variant="outlined"
            />
            <TextField
              error={true}
              fullWidth
              helperText={"password incorrect "}
              required={true}
              label="Password"
              margin="normal"
              name="password"
              onBlur=""
              onChange=""
              type="password"
              value=""
              variant="outlined"
            />

            <Box sx={{ py: 2 }}>
              <Button
                sx={{
                  background: "var(--primary)",
                  padding: "15px",
                  borderRadius: "10px",
                }}
                disabled=""
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                disableElevation
              >
                Login
              </Button>
            </Box>
            <Typography color="textSecondary" variant="body2">
              Dont have an account? <Link to={"/staffsignup"}>Sign up</Link>
            </Typography>
          </form>
        </Container>
      </Box>
    </div>
  );
}

export default StaffLogin;
