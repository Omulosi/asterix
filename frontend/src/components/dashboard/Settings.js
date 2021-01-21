import React, {useEffect  } from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  table: {
  },
  cells: {
    border: "none"
  }
});

const Settings = (props) => {
  const {
    selectSettings,
    pushMessageToSnackbar,
  } = props;

  const classes = useStyles();


  useEffect(selectSettings, [selectSettings]);
  return (
    <TableContainer component={Paper}>
    <Table className={classes.table}>
    <TableBody>
  
      <TableRow >
        <TableCell component="th" scope="row" className={classes.cells}>
        <Box fontWeight="fontWeightBold">
        Current Password
        </Box>
        </TableCell>
        <TableCell align="left" className={classes.cells}>
        
        </TableCell>
      </TableRow>

          <TableRow>
          <TableCell component="th" scope="row" className={classes.cells}>
         
          <Box fontWeight="fontWeightBold">
          New Password
          </Box>
          </TableCell>
          <TableCell align="right" className={classes.cells}>
          
          </TableCell>
        </TableRow>

        <TableRow>
        <TableCell component="th" scope="row" className={classes.cells}>
        
        <Box fontWeight="fontWeightBold">
        Confirm New Password
        </Box>
        </TableCell>
        <TableCell align="right" className={classes.cells}>
        
        </TableCell>
      </TableRow>

  </TableBody>
    </Table>

    </TableContainer>
  );
}

export default Settings;
