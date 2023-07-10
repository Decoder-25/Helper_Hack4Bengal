import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Grid, makeStyles } from "@material-ui/core";

import Navbar from "./Component/Navbar/Navbar";
import Welcome from "./Component/Welcome/Welcome";
import Signup from "./Component/Signup/Signup";
import Login from "./Component/Login/Login";
import Profile_ami from "./Component/Profile/Profile_ami";
import Profile_helper from "./Component/Profile/Profile_helper";
import Logout from "./Component/Logout/Logout";


const useStyles = makeStyles((theme) => ({
  body: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "98vh",
    paddingTop: "64px",
    boxSizing: "border-box",
    width: "100%",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <BrowserRouter >
      <Grid container direction="column">
        <Grid item xs>
          <Navbar />
        </Grid>
        <Grid item className={classes.body}>
        <Routes>
          <Route exact path="/" Component={Welcome} />
          <Route exact path="/login" Component={Login} />
          <Route exact path="/signup" Component={Signup} />
          <Route exact path="/logout" Component={Logout} />
          <Route exact  path="/profile_ami" Component={Profile_ami}/>
          <Route exact path="/profile_helper" Component={Profile_helper}/>
          <Route />
        </Routes>
        </Grid>
        </Grid>
    </BrowserRouter>
    </>
  );
}

export default App;
