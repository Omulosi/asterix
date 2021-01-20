import React, { memo } from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import { withStyles } from "@material-ui/core";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import Settings from "./Settings";

import PropsRoute from "../shared/PropsRoute";

const styles = (theme) => ({
  wrapper: {
    margin: theme.spacing(1),
    width: "auto",
    [theme.breakpoints.up("xs")]: {
      width: "95%",
      marginLeft: "auto",
      marginRight: "auto",
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      width: "82.5%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      width: "70%",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },
});

function Routing(props) {
  const {
    classes,
    pushMessageToSnackbar,
    selectDashboard,
    selectProfile,
    selectSettings,
    markers,
    counties,
    rivers,
    roads
  } = props;
  return (
    <div className={classes.wrapper}>
      <Switch>
        <PropsRoute
          path="/c/profile"
          component={Profile}
          pushMessageToSnackbar={pushMessageToSnackbar}
          selectProfile={selectProfile}
        />
        <PropsRoute
          path="/c/settings"
          component={Settings}
          pushMessageToSnackbar={pushMessageToSnackbar}
          selectSettings={selectSettings}
        />
        <PropsRoute
          path="/c/dashboard"
          component={Dashboard}
          pushMessageToSnackbar={pushMessageToSnackbar}
          selectDashboard={selectDashboard}
          markers={markers}
          counties={counties}
          rivers={rivers}
          roads={roads}
        />
      </Switch>
    </div>
  );
}

Routing.propTypes = {
  classes: PropTypes.object.isRequired,
  pushMessageToSnackbar: PropTypes.func,
  selectDashboard: PropTypes.func.isRequired,
  selectProfile: PropTypes.func.isRequired,
  selectSettings: PropTypes.func.isRequired,
  selectLogout: PropTypes.func.isRequired,
};

export default withStyles(styles, { withTheme: true })(memo(Routing));