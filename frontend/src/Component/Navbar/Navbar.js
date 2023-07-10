import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    makeStyles,
  } from "@material-ui/core";
  import { useNavigate } from "react-router-dom";
  
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

          <>
            <Button color="inherit" onClick={() => handleClick("/login")}>
              <b>Login</b>
            </Button>
            <Button color="inherit" onClick={() => handleClick("/signup")}>
              <b>Signup</b>
            </Button>
            {/* <Button color="inherit" onClick={() => handleClick("/logout")}>
              <b>Logout</b>
            </Button> */}
          </>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Navbar;
  