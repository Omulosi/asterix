import React, { memo, useCallback, useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core";
import Routing from "./Routing";
import NavBar from "./NavBar";
import ConsecutiveSnackbarMessages from "../shared/ConsecutiveSnackbarMessages";
import smoothScrollTop from "../../utils/smoothScrollTop";

const styles = (theme) => ({
  main: {
    marginLeft: theme.spacing(9),
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.down("xs")]: {
      marginLeft: 0,
    },
  },
});


function Main(props) {
  const { classes } = props;
  const [selectedTab, setSelectedTab] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [counties, setCounties] = useState({ views: [], profit: [] });
  const [rivers, setRivers] = useState([]);
  const [roads, setRoads] = useState([]);
  const [pushMessageToSnackbar, setPushMessageToSnackbar] = useState(null);

  const fetchMarkers = useCallback(() => {
      //Axios call to remote API
    const markers = [];

    setMarkers(markers);

  }, [setMarkers]);

  const fetchCounties = useCallback(() => {
   let counties = [];
    setCounties(counties);
  }, [setCounties]);

  const fetchRivers = useCallback(() => {
    setRivers([]);
  }, [setRivers]);

  const fetchRoads = useCallback(() => {
    setRoads([]);
  }, [setRoads]);

  const selectDashboard = useCallback(() => {
    smoothScrollTop();
    document.title = "Asterix - Dashboard";
    setSelectedTab("Dashboard");
  }, [
    setSelectedTab,
  ]);

  const selectProfile = useCallback(() => {
    smoothScrollTop();
    document.title = "Asterix - Profile";
    setSelectedTab("Profile");
  }, [
    setSelectedTab,
  ]);

  const selectSettings = useCallback(() => {
    smoothScrollTop();
    document.title = "Asterix - Subscription";
    setSelectedTab("Subscription");
  }, [setSelectedTab]);

  const getPushMessageFromChild = useCallback(
    (pushMessage) => {
      setPushMessageToSnackbar(() => pushMessage);
    },
    [setPushMessageToSnackbar]
  );

  //Load pertinent data
  useEffect(() => {
    fetchCounties();
    fetchMarkers();
    fetchRivers();
    fetchRoads();
  }, [
    fetchCounties,
    fetchMarkers,
    fetchRivers,
    fetchRoads,
  ]);

  return (
    <Fragment>
      <NavBar
        selectedTab={selectedTab}
      />
      <ConsecutiveSnackbarMessages
        getPushMessageFromChild={getPushMessageFromChild}
      />
      <main className={classNames(classes.main)}>
        <Routing
          pushMessageToSnackbar={pushMessageToSnackbar}
          selectDashboard={selectDashboard}
          selectProfile={selectProfile}
          selectSettings={selectSettings}
          markers={markers}
          counties={counties}
          rivers={rivers}
          roads={roads}
        />
      </main>
    </Fragment>
  );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(memo(Main));