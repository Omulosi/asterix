import "./App.css";
import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "./components/dashboard/Dashboard";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={SignIn} />
        <Route path="/login" component={SignIn} />
        <Route path="/signup" component={SignUp} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </>
  );
};

export default App;
