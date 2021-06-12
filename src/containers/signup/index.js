import React, { useState } from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  MenuItem,
  FormControl,
  FormHelperText,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Copyright } from "../../components/layout/copyright";
import { useStyles } from "./style";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { Input, InputSelect } from "../../components/form";
import { ModalPopup } from "../../components/modal";
import { signIn } from "../../utils/AuthProvider";
import { useHistory } from "react-router-dom";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("Enter your first name"),
  lastName: Yup.string().required("Enter your last name"),
  gender: Yup.string().required("Please select your gender"),
  email: Yup.string()
    .required("Enter your email address")
    .email("Invalid E-mail Address"),
  password: Yup.string()
    .required("Enter your password")
    .min(8, "Password should be of minimum 8 characters length"),
});

const initialValues={
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  password: "",
 
};

const SignUp = () => {
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const classes = useStyles();

  const submitForm = () => {
    signIn();
    history.push("/home");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnChange={false}
          onSubmit={submitForm}
        >
          {({ values, touched, errors, handleChange }) => (
            <Form className={classes.form}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Input name="firstName" label="First Name" />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Input name="lastName" label="Last Name" />
                </Grid>
                <Grid item xs={12}>
                  <InputSelect name="gender" label="Gender">
                    <MenuItem value="">
                      <em>Please select</em>
                    </MenuItem>
                    <MenuItem value="male">Male</MenuItem>
                    <MenuItem value="demale">Female</MenuItem>
                  </InputSelect>
                </Grid>
                <Grid item xs={12}>
                  <Input name="email" label="Email Address" />
                </Grid>
                <Grid item xs={12}>
                  <Input name="password" label="Password" type="password" />
                </Grid>
                <Grid item xs={12}>
                  <FormControl error={touched.accept && Boolean(errors.accept)}>
                    <FormControlLabel
                      control={
                        <Checkbox name="accept" value={values.value} color="primary" />
                      }
                      label={
                        <div>
                          <span>I woulds like to </span>
                          <Link
                            component="button"
                            variant="body2"
                            onClick={() => {
                              setShowModal(!showModal);
                            }}
                          >
                            subscribe latest news and updates
                          </Link>
                        </div>
                      }
                    />
                    {touched.accept && <FormHelperText>{errors.accept}</FormHelperText> }
                  </FormControl>
                </Grid>
                <ModalPopup
                  title="Subscribe Our Updates & News"
                  isOpen={showModal}
                  handleClose={() => setShowModal(!showModal)}
                  message="Subscribe to get latest news, messages and updates from us"
                />
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
};

export default SignUp;
