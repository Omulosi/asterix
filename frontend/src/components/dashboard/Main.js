import React, { memo, useCallback, useState, useEffect, Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { withStyles } from "@material-ui/core";
import Routing from "./Routing";
import AuthNavBar from "./AuthNavBar";
import ConsecutiveSnackbarMessages from "../shared/ConsecutiveSnackbarMessages";
import smoothScrollTop from "../../utils/smoothScrollTop";

import kenya_counties from "../../dummy_data/counties";
import kenya_rivers from "../../dummy_data/kenya_rivers";
import kenya_roads from "../../dummy_data/kenya_roads";
import kenya_markers from "../../dummy_data/markers";

import { PROFILE_ENDPOINT } from "../../config";
import { axiosWithAuth } from "../../utils/axiosAuth";

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
  const [markers, setMarkers] = useState({});
  const [counties, setCounties] = useState({});
  const [rivers, setRivers] = useState({});
  const [roads, setRoads] = useState({});
  const [pushMessageToSnackbar, setPushMessageToSnackbar] = useState(null);
  const [profileData, setProfileData] = useState({});


  // Fetch Data
  const fetchMarkers = useCallback(() => {
      //Axios call to remote API
    setMarkers(kenya_markers);

  }, [setMarkers]);

  const fetchCounties = useCallback(() => {
    setCounties(kenya_counties);
  }, [setCounties]);

  const fetchRivers = useCallback(() => {
    setRivers(kenya_rivers);
  }, [setRivers]);

  const fetchRoads = useCallback(() => {
    setRoads(kenya_roads);
  }, [setRoads]);

  const fetchProfileData = useCallback(() => {
    axiosWithAuth()
    .get(`${PROFILE_ENDPOINT}`)
    .then( ({ data }) => {
      setProfileData(data);
    }).catch((err) => {
      console.log(err);
      alert(err.message);
    })
  }, [setProfileData])

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
    document.title = "Asterix - Settings";
    setSelectedTab("Settings");
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
    fetchProfileData();
  }, [
    fetchCounties,
    fetchMarkers,
    fetchRivers,
    fetchRoads,
    fetchProfileData
  ]);

  return (
    <Fragment>
      <AuthNavBar
        selectedTab={selectedTab}
        profileData={profileData}
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
          profileData={profileData}
        />
      </main>
    </Fragment>
  );
}

Main.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(memo(Main));
