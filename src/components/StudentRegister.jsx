import {
    Box,
    Button,
    Checkbox,
    CircularProgress,
    Container,
    FormHelperText,
    MenuItem,
    TextField,
    Typography,
  } from "@mui/material";
  import { useState } from "react";
  import { BiArrowBack } from "react-icons/bi";
  import { Link, useNavigate } from "react-router-dom";
  import { UserAuth } from "../Auth-Context";
  import { db } from "../firebase-config";
  import { collection, addDoc } from "@firebase/firestore";
  
  const StudentRegister = () => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [programme, setProgramme] = useState("ND3");
    const [email, setEmail] = useState("");
    const [staffID, setStaffID] = useState("");
    const [registerpassword, setRegisterPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [matcherror, setMatcherror] = useState(false);
    const [isloading, setIsloading] = useState(false);
    const [error, setError] = useState(false);
  
    const [department, setDepartment] = useState("Computer Science");
    const [dateofbirth, setDateofbirth] = useState(null);
  
    // const createUser = useContext()
    
  
    const departmentAvailable = [
      { value: "Computer Science" },
      { value: "Engineering" },
    ];
  
    const programmeAvailable = [
      { value: "ND1" },
      { value: "ND2" },
      { value: "ND3" },
      { value: "HND1" },
      { value: "HND2" },
    ];
  
    const navigate = useNavigate();
   
    const handleDepartmentChange = (e) => {
      setDepartment(e.target.value);
    };
    const handleProgrammeChange = (e) => {
      setProgramme(e.target.value);
    };
  
    const students = collection(db, "students");
  
    const { createUser} = UserAuth();
  
    const handleSubmit = async (e) => {
      setMatcherror("");
      e.preventDefault();
      setIsloading(true);
  
      try {
        if (registerpassword === confirmpassword) {
          setError(false);
          setIsloading(true);
          await createUser(email, registerpassword);
          try{
            await addDoc(students, {
              name: firstname + " " + lastname,
              programme: programme,
              department: department,
              dateofbirth: dateofbirth,
            })
          }
          catch(e){
            console.log(e.message);
          }
    
  
          
          navigate("/student");
  
          // setIsloading(false);
        } else {
          setIsloading(false);
          setError(true);
          setMatcherror("Password does not match");
          // setIsloading(false);
        }
      } catch (e) {
        setError(e.message);
        setError(false);
        // setIsloading(false);
      }
    };
  
    return (
      <Box
        className="main"
        sx={{
          alignItems: "center",
          display: "flex",
          overflowX:"scroll",
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
                onChange={(e) => setFirstName(e.target.value)}
                fullWidth
                helperText=""
                label="First Name"
                margin="normal"
                name="firstName"
                onBlur=""
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
                onChange={(e) => setLastName(e.target.value)}
                variant="outlined"
              />
                 <TextField
                required={true}
                error=""
                fullWidth
                helperText=""
                label=" Matric"
                margin="normal"
                name="Matric"
                onBlur=""
                onChange={(e) => setStaffID(e.target.value)}
                variant="outlined"
              />
            </Box>
            <TextField
              fullWidth
              id="outlined-select-currency"
              select
              label="programme"
              value={programme}
              onChange={handleProgrammeChange}
              sx={{ position: "relative", marginBottom: "30px" }}
            >
              {programmeAvailable.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {" "}
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              fullWidth
              id="outlined-select-currency"
              select
              label="Department"
              value={department}
              onChange={handleDepartmentChange}
              sx={{ position: "relative", marginBottom: "10px" }}
            >
              {departmentAvailable.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {" "}
                  {option.value}
                </MenuItem>
              ))}
            </TextField>
  
            <div
              className="dobWrapper"
              style={{ position: "relative", marginTop: "10px" }}
            >
              <TextField
                fullWidth
                margin="normal"
                name="lasttName"
                onBlur=""
                type={"date"}
                onChange={(e) => setDateofbirth(e.target.value)}
                defaultValue={"yyyy-MM-dd"}
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
              // helperText={
              //   "The password must contain at least 8 character and contain one Uppercase character "
              // }
              required={true}
              label="Password"
              margin="normal"
              name="password"
              onBlur=""
              onChange={(e) => setRegisterPassword(e.target.value)}
              type="password"
              variant="outlined"
            />
            <TextField
              error={error}
              fullWidth
              helperText={matcherror}
              required={true}
              label="Confirm Password"
              margin="normal"
              name="password"
              onBlur=""
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              variant="outlined"
            />
            <Box
              sx={{
                alignItems: "center",
                display: "flex",
                ml: -1,
              }}
            >
              <Checkbox  name="policy"  />
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
                sx={{
                  padding: "15px",
                  color:'black',
                  background: "var(--secondary)",
                  ":hover": {
                    background: "var(--secondary)",
                  },
                }}
                disabled=""
                fullWidth
                size="large"
                type="submit"
                onClick={(e) => handleSubmit(e)}
                disableElevation
                variant="contained"
              >
                Create Account
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
              Have an account? <Link to={"/"}>Sign In</Link>
            </Typography>
          </form>
        </Container>
      </Box>
    );
  };
  
  export default StudentRegister;
  