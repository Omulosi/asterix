import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { Typography, Box } from "@material-ui/core";
import MapView from "../MapView";
const Dashboard = (props) => {
  const {
    selectDashboard,
    pushMessageToSnackbar,
    markers,
    counties,
    rivers,
    roads
  } = props;

  useEffect(selectDashboard, [selectDashboard]);

  return (
    <Fragment>
      <MapView 
        markers={markers}
        counties={counties}
        rivers={rivers}
        roads={roads}
        pushMessageToSnackbar={pushMessageToSnackbar}
      />
    </Fragment>
  );
}

Dashboard.propTypes = {
  CardChart: PropTypes.elementType,
  statistics: PropTypes.object.isRequired,
  toggleAccountActivation: PropTypes.func,
  pushMessageToSnackbar: PropTypes.func,
  targets: PropTypes.arrayOf(PropTypes.object).isRequired,
  setTargets: PropTypes.func.isRequired,
  isAccountActivated: PropTypes.bool.isRequired,
  selectDashboard: PropTypes.func.isRequired,
};

export default Dashboard;
