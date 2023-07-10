// import { useContext, useState } from "react";
// import {
//   Grid,
//   TextField,
//   Button,
//   Typography,
//   makeStyles,
//   Paper,
// } from "@material-ui/core";
// import axios from "axios";
// import { Navigate } from "react-router-dom";

// import PasswordInput from "../../lib/PasswordInput";
// import EmailInput from "../../lib/EmailInput";
// import { SetPopupContext } from "../../App";

// import apiList from "../../lib/apiList";
// import isAuth from "../../lib/isAuth"

// const useStyles = makeStyles((theme) => ({
//   login:{
//     // margin:100px auto;
// 	  // border: 3px solid black,
//   },
//   title: {
//     fontFamily: ['Shadows Into Light Two', 'cursive', 'bold'].join(','),
//     color: 'rgb(2, 54, 2)',
//   },
//   body1: {
//     padding: "60px 60px",
//     // backgroundColor: '#acfcb0',
//   },
//   inputBox: {
//     width: "300px",
//   },
//   submitButton: {
//     width: "300px",
//     backgroundColor: "rgb(2, 54, 2)",
//     color: "white",
//     '&:hover':{
//       backgroundColor: "#b4fca4",
//       color: "black",
//     }
//   },
// }));

// const Login = (props) => {
//   const classes = useStyles();
//   // typography: {
//   //   fontFamily: ['Shadows Into Light Two', 'cursive'].join(','),
//   // }
//   const { popup, setPopup } = useContext(SetPopupContext);

//   const [loggedin, setLoggedin] = useState(isAuth());

//   const [loginDetails, setLoginDetails] = useState({
//     email: "",
//     password: "",
//   });

//   const [inputErrorHandler, setInputErrorHandler] = useState({
//     email: {
//       error: false,
//       message: "",
//     },
//     password: {
//       error: false,
//       message: "",
//     },
//   });

//   const handleInput = (key, value) => {
//     setLoginDetails({
//       ...loginDetails,
//       [key]: value,
//     });
//   };

//   const handleInputError = (key, status, message) => {
//     setInputErrorHandler({
//       ...inputErrorHandler,
//       [key]: {
//         error: status,
//         message: message,
//       },
//     });
//   };

//   const handleLogin = () => {
//     const verified = !Object.keys(inputErrorHandler).some((obj) => {
//       return inputErrorHandler[obj].error;
//     });
//     if (verified) {
//       axios
//         .post(apiList.login, loginDetails)
//         .then((response) => {
//           localStorage.setItem("token", response.data.token);
//           localStorage.setItem("type", response.data.type);
//           setLoggedin(isAuth());
//           setPopup({
//             open: true,
//             severity: "success",
//             message: "Logged in successfully",
//           });
//           console.log(response);
//         })
//         .catch((err) => {
//           setPopup({
//             open: true,
//             severity: "error",
//             message: err.response.data.message,
//           });
//           console.log(err.response);
//         });
//     } else {
//       setPopup({
//         open: true,
//         severity: "error",
//         message: "Incorrect Input",
//       });
//     }
//   };
//     const styles = {
//          border: '3px',
//          margin: '100px auto',
//          borderRadius: '25px',
// 	      width: '30%',
// 	      padding: '25px',
//         paddingTop: '55px',
//         paddingBottom: '70px',
//         backgroundColor: "white"
//     }
//   return (
//   // loggedin ? (
//   //   <Navigate to="/login" />
//   // ) : (
//     <Paper elevation={3} className={classes.body1} style={styles}>
//       <Grid container direction="column" spacing={4} alignItems="center" >
//         <Grid item>
//           <Typography variant="h3" component="h2" className={classes.title}>
//             <b>Login</b>
//           </Typography>
//         </Grid>
//         <Grid item>
//           <EmailInput
//             label="Email"
//             value={loginDetails.email}
//             onChange={(event) => handleInput("email", event.target.value)}
//             inputErrorHandler={inputErrorHandler}
//             handleInputError={handleInputError}
//             className={classes.inputBox}
//           />
//         </Grid>
//         <Grid item>
//           <PasswordInput
//             label="Password"
//             value={loginDetails.password}
//             onChange={(event) => handleInput("password", event.target.value)}
//             className={classes.inputBox}
//           />
//         </Grid>
//         <Grid item>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={() => handleLogin()}
//             className={classes.submitButton}
//           >
//             <b>Login</b>
//           </Button>
//         </Grid>
//       </Grid>
//     </Paper>
//   )
// }



// export default Login;

// // import React from 'react'

// // const Login = () => {
// //   return (
// //     <>
// //     <div>Login</div>
// //     <div>Login</div>
// //     <div>Login</div>
// //     <div>Login</div>
    
// //     </>
// //     )
// // }

// // export default Login

import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        const { token, type } = data;
        localStorage.setItem("token", token);
        localStorage.setItem("type", type);
        console.log("Logged in successfully:", data);
      } else {
        const errorData = await response.json();
        window.alert("Login Error")
        console.log("Login error:", errorData);
      }
    } catch (error) {
        window.alert("Login Error catch")
      console.log("Login error:", error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Log in</button>
      </form>
    </div>
  );
};

export default Login;
