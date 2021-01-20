import React from "react";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";


import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  copyright: {
    color: "#fff",
  },
}));


const Copyright = (props) => {
  let { footer } = props;

  const classes = useStyles();
  return (
    <Typography variant="body2" color="textSecondary" className={footer? classes.copyright: null} align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://">
        Asterix
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

export default Copyright;
