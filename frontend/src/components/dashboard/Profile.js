import React, {useEffect  } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles({
  table: {
  },
  cells: {
    border: "none"
  }
});


const Profile = (props) => {
  const {
    selectProfile,
    pushMessageToSnackbar,
    profileData
  } = props;

  const classes = useStyles();

  const {
    firstName,
    lastName,
    email,
    isStaff
  } = profileData;

  const handleClick = () => {
    pushMessageToSnackbar({
      text: "You clicked on something!"
    });
  }

  useEffect(selectProfile, [selectProfile]);

  return (
    <TableContainer component={Paper}>
    <Table className={classes.table}>
    <TableBody>
  
      <TableRow >
        <TableCell component="th" scope="row" className={classes.cells}>
       
        <Box fontWeight="fontWeightBold">
        First Name
        </Box>
        </TableCell>
        <TableCell align="left" className={classes.cells}>
        <form className={classes.root} autoComplete="off">
            <TextField
            id="standard-full-width"
            style={{ margin: 8 }}
            fullWidth
            margin="normal"
            value={`${firstName}`}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </form>
        </TableCell>
      </TableRow>

          <TableRow>
          <TableCell component="th" scope="row" className={classes.cells}>
          <Box fontWeight="fontWeightBold">
          Last Name
          </Box>
          </TableCell>
          <TableCell align="right" className={classes.cells}>
          <form className={classes.root} autoComplete="off">
          <TextField
          id="standard-full-width"
          style={{ margin: 8 }}
          fullWidth
          margin="normal"
          value={`${lastName}`}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </form>
          </TableCell>
        </TableRow>

        <TableRow>
        <TableCell component="th" scope="row" className={classes.cells}>
        <Box fontWeight="fontWeightBold">
        Email
        </Box>
        </TableCell>
        <TableCell align="right" className={classes.cells}>
        <form>
        <TextField
        id="standard-full-width"
        style={{ margin: 8 }}
        fullWidth
        margin="normal"
        value={`${email}`}
        InputLabelProps={{
          shrink: true,
        }}
      /></form>
        </TableCell>
      </TableRow>

      <TableRow>
      <TableCell component="th" scope="row" className={classes.cells}>
      <Box fontWeight="fontWeightBold">
        Admin Status
        </Box>
      </TableCell>
      <TableCell align="left" className={classes.cells}>
      {`${isStaff? 'You are an admin': 'Normal user'}`}
      </TableCell>
    </TableRow>
  </TableBody>
    </Table>

    </TableContainer>
  );
}

export default Profile;
