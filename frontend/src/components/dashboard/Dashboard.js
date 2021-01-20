// import React from "react";
// import clsx from "clsx";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import Drawer from "@material-ui/core/Drawer";
// import Box from "@material-ui/core/Box";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import List from "@material-ui/core/List";
// import Typography from "@material-ui/core/Typography";
// import Divider from "@material-ui/core/Divider";
// import IconButton from "@material-ui/core/IconButton";
// import Container from "@material-ui/core/Container";
// import MenuIcon from "@material-ui/icons/Menu";
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import { mainListItems } from "./listItems";
// import MapView from "../MapView";
// import Copyright from "../shared/Copyright";
// import UserMenuList from "../UserMenuList";

// import useStyles from "./styles";

// export default function Dashboard() {
//   const classes = useStyles();
//   const [open, setOpen] = React.useState(true);
//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };
//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div className={classes.root}>
//       <CssBaseline />
//       <AppBar
//         position="absolute"
//         className={clsx(classes.appBar, open && classes.appBarShift)}
//       >
//         <Toolbar className={classes.toolbar}>
//           <IconButton
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             className={clsx(
//               classes.menuButton,
//               open && classes.menuButtonHidden
//             )}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             component="h1"
//             variant="h6"
//             color="inherit"
//             noWrap
//             className={classes.title}
//           >
//             Dashboard
//           </Typography>
//           <UserMenuList color="inherit" />
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         variant="permanent"
//         classes={{
//           paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
//         }}
//         open={open}
//       >
//         <div className={classes.toolbarIcon}>
//           <IconButton onClick={handleDrawerClose}>
//             <ChevronLeftIcon />
//           </IconButton>
//         </div>
//         <Divider />
//         <List>{mainListItems}</List>
//       </Drawer>
//       <main className={classes.content}>
//         <div className={classes.appBarSpacer} />
//         <Container maxWidth="lg" className={classes.container}>
//           <MapView />
//           <Box pt={4}>
//             <Copyright />
//           </Box>
//         </Container>
//       </main>
//     </div>
//   );
// }

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
      <Box mt={2}>
        <Typography variant="subtitle1" gutterBottom>
            layer selection
        </Typography>
      </Box>
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
