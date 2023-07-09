import { createContext, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Grid, makeStyles } from "@material-ui/core";

import Navbar from "./Component/Navbar/Navbar";
import Welcome from "./Component/Welcome/Welcome";
import MessagePopup from "./lib/MessagePopup";
import Signup from "./Component/Signup/Signup";
import Login from "./Component/Login/Login";

export const SetPopupContext = createContext();

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
  const [popup, setPopup] = useState({
    open: false,
    severity: "",
    message: "",
  });

  return (
    <>
      <BrowserRouter >
      <SetPopupContext.Provider value={{ popup, setPopup }}>
      <Grid container direction="column">
        <Grid item xs>
          <Navbar />
        </Grid>
        <Grid item className={classes.body}>
        <Routes>
          <Route exact path="/" Component={Welcome} />
          <Route exact path="/login" Component={Login} />
          <Route exact path="/signup" Component={Signup} />
        </Routes>
        </Grid>
        </Grid>
        
        <MessagePopup 
          open={popup.open}
          setOpen={(status) =>
            setPopup({
              ...popup,
              open: status,
            })
          }
        />
      </SetPopupContext.Provider>
    </BrowserRouter>
    </>
  );
}

export default App;
