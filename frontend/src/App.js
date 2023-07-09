import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Grid, makeStyles } from "@material-ui/core";

import Navbar from "./Component/Navbar/Navbar";
import Welcome from "./Component/Welcome/Welcome";

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
      {/* <SetPopupContext.Provider value={{ popup, setPopup }}> */}
      <Grid container direction="column">
        <Grid item xs>
          <Navbar />
        </Grid>
        <Grid item className={classes.body}>
        <Routes>
          <Route exact path="/" Component={Welcome} />
        </Routes>
        </Grid>
        </Grid>
        
      {/* </SetPopupContext.Provider> */}
    </BrowserRouter>
    </>
  );
}

export default App;
