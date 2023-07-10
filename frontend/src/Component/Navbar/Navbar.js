import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    makeStyles,
  } from "@material-ui/core";
  import { useNavigate } from "react-router-dom";

import isAuth, {userType} from "../../lib/isAuth";
  
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  
  const Navbar = (props) => {
    const classes = useStyles();
    let history = useNavigate();
  
    const handleClick = (location) => {
      console.log(location);
      history(location);
    };
  
    return (
      <AppBar position="fixed" style={{ backgroundColor: "rgb(2, 54, 2)" }}>
        <Toolbar>
          <Typography
            variant="h5"
            className={classes.title}
            onClick={() => handleClick("/")}
          >
            <b>HELPER</b>
          </Typography>
          {isAuth() ? (
            userType() === "helper" ? (
              <>
                <Button color="inherit" onClick={() => handleClick("/")}>
                  Application
                </Button>
                <Button color="inherit" onClick={() => handleClick("/helper")}>
                  Profile
                </Button>
                <Button color="inherit" onClick={() => handleClick("/logout")}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Button color="inherit" onClick={() => handleClick("/myjobs")}>
                  My Jobs
                </Button>
                <Button color="inherit" onClick={() => handleClick("/recruiter")}>
                  Profile_ami
                </Button>
                <Button color="inherit" onClick={() => handleClick("/logout")}>
                  Logout
                </Button>
              </>
            )
          ) : (
          <>
            <Button color="inherit" onClick={() => handleClick("/login")}>
              <b>Login</b>
            </Button>
            <Button color="inherit" onClick={() => handleClick("/signup")}>
              <b>Signup</b>
            </Button>
          </>
          )}
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Navbar;
  