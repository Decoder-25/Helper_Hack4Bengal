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
      <AppBar position="fixed" style={{backgroundColor: 'green' }}>
        <Toolbar>
          <Typography variant="h5" className={classes.title} onClick={() => handleClick("/")}>
            HELPER
          </Typography>
          
        <>
          <Button color="inherit" onClick={() => handleClick("/login")}>
            Login
          </Button>
          <Button color="inherit" onClick={() => handleClick("/signup")}>
            Signup
          </Button>
        </>
        </Toolbar>
      </AppBar>
    );
  };
  
  export default Navbar;
  