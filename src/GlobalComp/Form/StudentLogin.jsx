import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CircularProgress,
  Container,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  Snackbar,
  SnackbarContent,
  TextField,
  Typography,
} from "@mui/material";
import { ImCancelCircle, ImWarning } from "react-icons/im";

import "./form.css";
import { Link, useNavigate } from "react-router-dom";
import Register from "../../components/Ragister";
import { BiArrowBack } from "react-icons/bi";
import { UserAuth } from "../../Auth-Context";

function StudentLogin({ toggler, setToggler }) {
  const [staffID, setStaffID] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isloading, setIsloading] = useState(false);

  const [error, setError] = useState(false);
  
  const [errorMsg, setErrorMsg] = useState("");
  const { Userlogin} = UserAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsloading(true);
    try {
      await Userlogin(email, password);
      setError(false);
      setErrorMsg("");
      setIsloading(true);
      navigate("/student");
 
    } catch {
      setError(true);
      setIsloading(false);
      setErrorMsg("Wrong Email or password");
   
    }
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
          background:"cream",
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
                Sign in to your Student Account
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                Use your email to sign in account
              </Typography>
            </Box>
            <Typography variant="body2" color="error">
              {error ? <ImWarning /> : ""} {errorMsg}
            </Typography>

            <TextField
              // error={Boolean("hey")}
              fullWidth
              required={true}
              // helperText={"incorrect ID"}
              label="Matric No"
              margin="normal"
              name="staffid"
              onBlur=""
              onChange={(e) => setStaffID(e.target.value)}
              type="text"
              variant="outlined"
            />
            <TextField
              error={error}
              fullWidth
              required={true}
              label="Email Address"
              margin="normal"
              name="email"
              onBlur=""
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              variant="outlined"
            />
            <TextField
              error={error}
              fullWidth
              required={true}
              label="Password"
              margin="normal"
              name="password"
              onBlur=""
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              variant="outlined"
            />

            <Box sx={{ py: 2 }}>
              <Button
                sx={{
                  color:'black',
                  background: "var(--secondary)",
                  padding: "15px",
                  borderRadius: "10px",
                  position: "relative",
                  ":hover": {
                    background: "var(--secondary)",
                  },
                }}
                disabled=""
                fullWidth
                size="large"
                type="submit"
                onClick={(e) => handleLogin(e)}
                variant="contained"
                disableElevation
              >
                Login
                {isloading ? (
                  <CircularProgress
                    sx={{ position: "absolute", right: "20px", color: "white" }}
                  />
                ) : (
                  ""
                )}
              </Button>
            </Box>
            <Typography color="textSecondary" variant="body2">
              Dont have an account? <Link to={"/studentsignup"}>Sign up</Link>
            </Typography>
          </form>
        </Container>
      </Box>
    </div>
  );
}

export default StudentLogin;
