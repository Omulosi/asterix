import React, { Fragment, Suspense, lazy } from "react";
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import theme from "./theme";
import GlobalStyles from "./GlobalStyles";
import * as serviceWorker from "./serviceWorker";
import Pace from "./components/shared/Pace";
import PrivateRoute from "./components/PrivateRoute";


const LoggedInComponent  = lazy(() => import("./components/dashboard/Main"));

const LoggedOutComponent = lazy(() => import("./components/home/Main"));

const App = () => {
  return (
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        <Pace color={theme.palette.primary.light} />
        <Suspense fallback={<Fragment />}>
          <Switch>
            <PrivateRoute path="/c">
              <LoggedInComponent />
            </PrivateRoute>
            <Route>
              <LoggedOutComponent />
            </Route>
          </Switch>
        </Suspense>
      </MuiThemeProvider>
    </BrowserRouter>
  );
};


serviceWorker.register();

export default App;
