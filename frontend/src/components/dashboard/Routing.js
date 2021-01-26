import React, { memo } from "react";
import PropTypes from "prop-types";
import { Switch, useRouteMatch } from "react-router-dom";
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
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
    },
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      width: "90%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2),
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
      width: "100%",
      marginLeft: "auto",
      marginRight: "auto",
      padding: "1%",
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
    roads,
    profileData
  } = props;

  let {path} = useRouteMatch();

  return (
    <div className={classes.wrapper}>
      <Switch>
        <PropsRoute
          path={`${path}/profile`}
          exact
          component={Profile}
          pushMessageToSnackbar={pushMessageToSnackbar}
          selectProfile={selectProfile}
          profileData={profileData}
        />
        <PropsRoute
          path={`${path}/settings`}
          exact
          component={Settings}
          pushMessageToSnackbar={pushMessageToSnackbar}
          selectSettings={selectSettings}
        />
        <PropsRoute
          path={`${path}/dashboard`}
          exact
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