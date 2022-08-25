import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { BiArrowBack } from "react-icons/bi";

const Register = () => {
  return (
    <>
      <Box
        component="main"
        sx={{
          alignItems: "center",
          display: "flex",
          flexGrow: 1,
          minHeight: "100%",
        }}
      >
        <Container maxWidth="sm">
          <Button component="a" startIcon={<BiArrowBack fontSize="small" />}>
            Dashboard
          </Button>

          <form>
            <Box sx={{ my: 3 }}>
              <Typography color="textPrimary" variant="h4">
                Create a new account
              </Typography>
              <Typography color="textSecondary" gutterBottom variant="body2">
                Use your email to create a new account
              </Typography>
            </Box>
            <TextField
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
              error=""
              fullWidth
              helperText=""
              label="LastName Name"
              margin="normal"
              name="lasttName"
              onBlur=""
              onChange=""
              value=""
              variant="outlined"
            />
            <TextField
              // error={Boolean("hey")}
              fullWidth
              helperText={"hey"}
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
              error={Boolean("hey")}
              fullWidth
              helperText={"hey"}
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
      
                  <Link color="primary" underline="always" variant="subtitle2">
                    Terms and Conditions
                  </Link>
                
              </Typography>
            </Box>
            {/* {Boolean(formik.touched.policy && formik.errors.policy) && (
              <FormHelperText error>{formik.errors.policy}</FormHelperText>
            )} */}
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled=""
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign Up Now
              </Button>
            </Box>
            <Typography color="textSecondary" variant="body2">
              Have an account?{" "}
              <Link variant="subtitle2" underline="hover">
                Sign In
              </Link>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Register;
