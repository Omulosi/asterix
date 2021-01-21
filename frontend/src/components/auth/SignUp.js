import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { useDispatch, useSelector } from "react-redux";
import { userSignUp } from "../../redux/actions/userActionCreators";
import { useHistory } from "react-router-dom";

import { useFormik } from "formik";
import * as yup from "yup";

import Copyright from "../shared/Copyright";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const validationSchema = yup.object({
  firstName: yup
  .string('Enter your first name')
  .required('Name is required'),
  lastName: yup
  .string('Enter your last name')
  .required('Name is required'),
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});

export default function SignUp() {
  const classes = useStyles();

  const dispatch = useDispatch();
  const history = useHistory();
  const errors = useSelector((state) => state.user.errors);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      first_name: '',
      last_name:''
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
      dispatch(userSignUp(values, history));
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
             <Avatar className={classes.avatar}>
           <LockOutlinedIcon />
         </Avatar>
         <Typography component="h1" variant="h5">
           Sign Up
         </Typography>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
      <TextField
      fullWidth
      variant="outlined"
      id="firstname"
      name="firstName"
      label="First Name"
      value={formik.values.firstName}
      onChange={formik.handleChange}
      error={formik.touched.firstName && Boolean(formik.errors.firstName)}
      helperText={formik.touched.firstName && formik.errors.firstName}
      margin="normal"
     autoFocus
    />
    <TextField
    fullWidth
    variant="outlined"
    id="email"
    name="lastName"
    label="Last Name"
    value={formik.values.email}
    onChange={formik.handleChange}
    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
    helperText={formik.touched.lastName && formik.errors.lastName}
    margin="normal"
   autoFocus
  />
      
      <TextField
          fullWidth
          variant="outlined"
          id="email"
          name="email"
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
          margin="normal"
         autoFocus
        />
        <TextField
          fullWidth
          variant="outlined"
          id="password"
          name="password"
          label="Password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
          margin="normal"
         autoFocus
        />
        <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
        <Button className={classes.submit} color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>

        <Grid container>
            <Grid item>
            <Box>
             <Link href="/login" variant="body2">
                {"Already have an account? Sign In"}
              </Link>
            </Box>
            </Grid>
          </Grid>
        
      </form>
    </div>
    </Container>
  );


}
