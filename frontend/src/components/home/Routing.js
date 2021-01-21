import React, { memo } from "react";
import PropTypes from "prop-types";
import { Switch } from "react-router-dom";
import PropsRoute from "../shared/PropsRoute";
import Home from "./Home";
import SignIn from "../auth/SignIn";
import SignUp from "../auth/SignUp";

function Routing(props) {
  const { selectHome } = props;
  return (
    <Switch>
      <PropsRoute exact path="/" component={Home} selectHome={selectHome} />
      <PropsRoute path="/login" component={SignIn}  />
      <PropsRoute path="/register" component={SignUp} />
    </Switch>
  );
}

Routing.propTypes = {
  blogposts: PropTypes.arrayOf(PropTypes.object),
  selectHome: PropTypes.func.isRequired,
  selectBlog: PropTypes.func.isRequired,
};

export default memo(Routing);