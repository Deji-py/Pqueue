

import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Typography
} from '@mui/material';
import { BiArrowBack } from 'react-icons/bi';


const Register = () => {


  return (
    <>
      {/* <Head>
        <title>
          Register | Material Kit
        </title>
      </Head> */}
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="sm">
          {/* <NextLink
            href="/"
            passHref
          >
            <Button
              component="a"
              startIcon={<BiArrowBack fontSize="small" />}
            >
              Dashboard
            </Button>
          </NextLink> */}
          <form >
            <Box sx={{ my: 3 }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                Create a new account
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
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
            {/* <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Email Address"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Password"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"
            />
            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                ml: -1
              }}
            >
              <Checkbox
                checked={formik.values.policy}
                name="policy"
                onChange={formik.handleChange}
              />
              <Typography
                color="textSecondary"
                variant="body2"
              >
                I have read the
                {' '}
                <NextLink
                  href="#"
                  passHref
                >
                  <Link
                    color="primary"
                    underline="always"
                    variant="subtitle2"
                  >
                    Terms and Conditions
                  </Link>
                </NextLink>
              </Typography>
            </Box>
            {Boolean(formik.touched.policy && formik.errors.policy) && (
              <FormHelperText error>
                {formik.errors.policy}
              </FormHelperText>
            )}
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              > */}
                {/* Sign Up Now
              </Button> */}
            {/* </Box> */}
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Have an account?
              {' '}
              {/* <NextLink
                href="/login"
                passHref
              >
                <Link
                  variant="subtitle2"
                  underline="hover"
                >
                  Sign In
                </Link>
              </NextLink> */}
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Register;
