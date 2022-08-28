import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";

const Register = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [department, setDepartment] = useState("");
  const [value, setValue] = useState("Computer Science");
  const [dateofbirth, setDateofbirth] = useState(null);
  const [level, setLevel] = useState("");

  const departmentAvailable = [
    { value: "Computer Science" },
    { value: "Engineering" },
  ];

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
   
      <Box
        className="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Container maxWidth="sm">
          <Link to="/">
            <Button component="a" startIcon={<BiArrowBack fontSize="small" />}>
              Back
            </Button>
          </Link>
          <form>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Create a new account
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                Use your email to create a new account
              </Typography>
            <TextField
              required={true}
              error=""
              fullWidth
              helperText=""
              label="First Name"
              margin="normal"
              name="firstName"
              onBlur=""
              onChange=""
              value=""
              variant="outlined"
            />
            <TextField
              required={true}
              error=""
              fullWidth
              helperText=""
              label="Last Name"
              margin="normal"
              name="Last Name"
              onBlur=""
              onChange=""
              value=""
              variant="outlined"
            />
            <TextField
              required={true}
              error=""
              fullWidth
              helperText=""
              label="Programme"
              type={"text"}
              margin="normal"
              name="firstName"
              onBlur=""
              onChange=""
              value=""
              variant="outlined"
            />
              
            </Box>
            <TextField
               fullWidth
              id="outlined-select-currency"
              select
              label="Department"
              value={value}
              onChange={handleChange}
              sx={{position:'relative'}}
            >
              {departmentAvailable.map((option) => (
                <MenuItem
                  key={option.value}
                  value={option.value}
                > {option.value}</MenuItem>
              ))}
            </TextField>

            <div className="dobWrapper" style={{ position: "relative", marginTop:'10px' }}>
              <TextField
                fullWidth
                margin="normal"
                name="lasttName"
                onBlur=""
                type={"date"}
                onChange=""
                defaultValue={"dd/mm/yyyy"}
                variant="outlined"
              />
              <label
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  fontSize: "14px",
                }}
              >
                Date of Birth
              </label>
            </div>
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
              helperText={
                "The password must contain at least 8 character and contain one Uppercase character "
              }
              l
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
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                ml: -1,
              }}
            >
              <Checkbox checked="" name="policy" onChange="" />
              <Typography color="textSecondary" variant="body2">
                I have read the{" "}
                <Typography
                  color="primary"
                  underline="always"
                  variant="subtitle2"
                >
                  Terms and Conditions
                </Typography>
              </Typography>
            </Box>
            {/* {Boolean(formik.touched.policy && formik.errors.policy) && (
              <FormHelperText error>{formik.errors.policy}</FormHelperText>
            )} */}
            <Box sx={{ py: 2 }}>
              <Button
                sx={{padding:"15px", background:"var(--primary)"}}
                disabled=""
                fullWidth
                size="large"
                type="submit"
                disableElevation
                variant="contained"
              >
                Create Account
              </Button>
            </Box>
            <Typography color="textSecondary" variant="body2" >
              Have an account? <Link to={"/admin"}>Sign In</Link>
            </Typography>
          </form>
        </Container>
      </Box>
  );
};

export default Register;
