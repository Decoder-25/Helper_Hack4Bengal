import { useState, useContext } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  makeStyles,
  Paper,
  MenuItem,
  Input,
} from "@material-ui/core";
import axios from "axios";
import { Navigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";

import PasswordInput from "../../lib/PasswordInput";
import EmailInput from "../../lib/EmailInput";
import { SetPopupContext } from "../../App";

import apiList from "../../lib/apiList";
import isAuth from "../../lib/isAuth";

const useStyles = makeStyles((theme) => ({
  body: {
    padding: "60px 60px",
  },
  inputBox: {
    width: "400px",
  },
  submitButton: {
    width: "400px",
  },
}));

const Signup = (props) => {
  const classes = useStyles();
  const setPopup = useContext(SetPopupContext);

  const [loggedin, setLoggedin] = useState(isAuth());

  const [signupDetails, setSignupDetails] = useState({
    type: "applicant",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    AadharNumber: "",
    age: "",
    Gender: "male",
    MobileNo: "",
    Religion: "",
    Nationality: "",
    Address: "",
    Disability: "no",
    MaritalStatus: "unmarried",
    jobSector: "househelp",
    jobExperience: "fresher",
    jobLocation : "kolkata",
    availability: "within 10 days",
    educationQualification: "matriculation",
    expectedSalary: "",
  });

  const [phone, setPhone] = useState("");

  const [inputErrorHandler, setInputErrorHandler] = useState({
    email: {
      untouched: true,
      required: true,
      error: false,
      message: "",
    },
    password: {
      untouched: true,
      required: true,
      error: false,
      message: "",
    },
    name: {
      untouched: true,
      required: true,
      error: false,
      message: "",
    },
  });

  const handleInput = (key, value) => {
    setSignupDetails({
      ...signupDetails,
      [key]: value,
    });
  };

  const handleInputError = (key, status, message) => {
    setInputErrorHandler({
      ...inputErrorHandler,
      [key]: {
        required: true,
        untouched: false,
        error: status,
        message: message,
      },
    });
  };

  const handleLogin = () => {
    const tmpErrorHandler = {};
    Object.keys(inputErrorHandler).forEach((obj) => {
      if (inputErrorHandler[obj].required && inputErrorHandler[obj].untouched) {
        tmpErrorHandler[obj] = {
          required: true,
          untouched: false,
          error: true,
          message: `${obj[0].toUpperCase() + obj.substr(1)} is required`,
        };
      } else {
        tmpErrorHandler[obj] = inputErrorHandler[obj];
      }
    });

    let updatedDetails = {
      ...signupDetails,
    };

    setSignupDetails(updatedDetails);

    const verified = !Object.keys(tmpErrorHandler).some((obj) => {
      return tmpErrorHandler[obj].error;
    });

    if (verified) {
      axios
        .post(apiList.signup, updatedDetails)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("type", response.data.type);
          setLoggedin(isAuth());
          setPopup({
            open: true,
            severity: "success",
            message: "Logged in successfully",
          });
          console.log(response);
        })
        .catch((err) => {
          setPopup({
            open: true,
            severity: "error",
            message: err.response.data.message,
          });
          console.log(err.response);
        });
    } else {
      setInputErrorHandler(tmpErrorHandler);
      setPopup({
        open: true,
        severity: "error",
        message: "Incorrect Input",
      });
    }
  };

  const handleLoginRecruiter = () => {
    const tmpErrorHandler = {};
    Object.keys(inputErrorHandler).forEach((obj) => {
      if (inputErrorHandler[obj].required && inputErrorHandler[obj].untouched) {
        tmpErrorHandler[obj] = {
          required: true,
          untouched: false,
          error: true,
          message: `${obj[0].toUpperCase() + obj.substr(1)} is required`,
        };
      } else {
        tmpErrorHandler[obj] = inputErrorHandler[obj];
      }
    });

    let updatedDetails = {
      ...signupDetails,
    };
    if (phone !== "") {
      updatedDetails = {
        ...signupDetails,
        MobileNo: `+${phone}`,
      };
    } else {
      updatedDetails = {
        ...signupDetails,
        MobileNo: "",
      };
    }

    setSignupDetails(updatedDetails);

    const verified = !Object.keys(tmpErrorHandler).some((obj) => {
      return tmpErrorHandler[obj].error;
    });

    console.log(updatedDetails);

    if (verified) {
      axios
        .post(apiList.signup, updatedDetails)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("type", response.data.type);
          setLoggedin(isAuth());
          setPopup({
            open: true,
            severity: "success",
            message: "Logged in successfully",
          });
          console.log(response);
        })
        .catch((err) => {
          setPopup({
            open: true,
            severity: "error",
            message: err.response.data.message,
          });
          console.log(err.response);
        });
    } else {
      setInputErrorHandler(tmpErrorHandler);
      setPopup({
        open: true,
        severity: "error",
        message: "Incorrect Input",
      });
    }
  };

  return (
  // loggedin ? (
  //   <Navigate to="/" />
  // ) : (
    <Paper elevation={3} className={classes.body}>
      <Grid container direction="column" spacing={4} alignItems="center">
        <Grid item>
          <Typography variant="h3" component="h2">
            Signup
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            select
            label="Category"
            variant="outlined"
            className={classes.inputBox}
            value={signupDetails.type}
            onChange={(event) => {
              handleInput("type", event.target.value);
            }}
          >
            <MenuItem value="applicant">Helper</MenuItem>
            <MenuItem value="recruiter">Recruiter</MenuItem>
          </TextField>
        </Grid>
        <Grid item>
          <TextField
            label="First Name"
            value={signupDetails.name}
            onChange={(event) => handleInput("firstname", event.target.value)}
            className={classes.inputBox}
            error={inputErrorHandler.name.error}
            helperText={inputErrorHandler.name.message}
            onBlur={(event) => {
              if (event.target.value === "") {
                handleInputError("firstname", true, "First Name is required");
              } else {
                handleInputError("firstname", false, "");
              }
            }}
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <TextField
            label="Last Name"
            value={signupDetails.name}
            onChange={(event) => handleInput("lastname", event.target.value)}
            className={classes.inputBox}
            error={inputErrorHandler.name.error}
            helperText={inputErrorHandler.name.message}
            onBlur={(event) => {
              if (event.target.value === "") {
                handleInputError("lastname", true, "Last Name is required");
              } else {
                handleInputError("lastname", false, "");
              }
            }}
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <EmailInput
            label="Email"
            value={signupDetails.email}
            onChange={(event) => handleInput("email", event.target.value)}
            inputErrorHandler={inputErrorHandler}
            handleInputError={handleInputError}
            className={classes.inputBox}
            required={true}
          />
        </Grid>
        <Grid item>
          <PasswordInput
            label="Password"
            value={signupDetails.password}
            onChange={(event) => handleInput("password", event.target.value)}
            className={classes.inputBox}
            error={inputErrorHandler.password.error}
            helperText={inputErrorHandler.password.message}
            onBlur={(event) => {
              if (event.target.value === "") {
                handleInputError("password", true, "Password is required");
              } else {
                handleInputError("password", false, "");
              }
            }}
          />
        </Grid>
        {signupDetails.type === "applicant" ? (
          <>
          <Grid item>
            <TextField
              label="Adhaar Number"
              variant="outlined"
              value={signupDetails.AadharNumber}
              onChange={(event) => {
                handleInput("AadharNumber", event.target.value);
              }}
              fullWidth
            >
            </TextField>
          </Grid>
          <Grid item>
            <TextField
              label="Age"
              variant="outlined"
              value={signupDetails.age}
              onChange={(event) => {
                handleInput("age", event.target.value);
              }}
              fullWidth
            >
            </TextField>
          </Grid>
          <Grid item>
            <TextField
              select
              label="Marital Status"
              variant="outlined"
              value={signupDetails.MaritalStatus}
              onChange={(event) => {
                handleInput("MaritalStatus", event.target.value);
              }}
              fullWidth
            >
              <MenuItem value="Yes">Married</MenuItem>
              <MenuItem value="No">Unmarried</MenuItem>
              <MenuItem value="other">Other</MenuItem>
            </TextField>
          </Grid>
          <Grid item>
            <TextField
              select
              label="Gender"
              variant="outlined"
              value={signupDetails.Gender}
              onChange={(event) => {
                handleInput("Gender", event.target.value);
              }}
              fullWidth
            >
              <MenuItem value="male">male</MenuItem>
              <MenuItem value="female">female</MenuItem>
              <MenuItem value="other">other</MenuItem>
            </TextField>
          </Grid>
          <Grid item>
              <PhoneInput
                country={"in"}
                value={phone}
                onChange={(phone) => setPhone(phone)}
              />
          </Grid>
          <Grid item>
            <TextField
              label="Religion"
              variant="outlined"
              value={signupDetails.Religion}
              onChange={(event) => {
                handleInput("Religion", event.target.value);
              }}
              fullWidth
            >
            </TextField>
          </Grid>
          <Grid item>
            <TextField
              label="Nationality"
              variant="outlined"
              value={signupDetails.Nationality}
              onChange={(event) => {
                handleInput("Nationality", event.target.value);
              }}
              fullWidth
            >
            </TextField>
          </Grid>
          <Grid item>
            <TextField
              label="Address"
              variant="outlined"
              value={signupDetails.Address}
              onChange={(event) => {
                handleInput("Address", event.target.value);
              }}
              fullWidth
            >
            </TextField>
          </Grid>
          <Grid item>
            <TextField
              select
              label="Disability"
              variant="outlined"
              value={signupDetails.Disability}
              onChange={(event) => {
                handleInput("Disability", event.target.value);
              }}
              fullWidth
            >
              <MenuItem value="Yes">Yes</MenuItem>
              <MenuItem value="No">No</MenuItem>
            </TextField>
          </Grid>
          <Grid item>
            <TextField
              select
              label="Sector"
              variant="outlined"
              value={signupDetails.jobSector}
              onChange={(event) => {
                handleInput("jobSector", event.target.value);
              }}
              fullWidth
            >
              <MenuItem value="househelp">househelp</MenuItem>
              <MenuItem value="driver">driver</MenuItem>
              <MenuItem value="gardener">gardener</MenuItem>
              <MenuItem value="cook">cook</MenuItem>
              <MenuItem value="nightguard">nightguard</MenuItem>
              <MenuItem value="babysitter">babysitter</MenuItem>
              <MenuItem value="caretaker">caretaker</MenuItem>
              <MenuItem value="petcarer">petcarer</MenuItem>
              <MenuItem value="hometutor">hometutor</MenuItem>
              <MenuItem value="housekeeper">housekeeper</MenuItem>
            </TextField>
          </Grid>
          <Grid item>
            <TextField
              select
              label="Experience"
              variant="outlined"
              value={signupDetails.jobExperience}
              onChange={(event) => {
                handleInput("jobExperience", event.target.value);
              }}
              fullWidth
            >
              <MenuItem value={0}>fresher</MenuItem>
              <MenuItem value={1}>1-5 yrs</MenuItem>
              <MenuItem value={2}>5-10 yrs</MenuItem>
              <MenuItem value={3}>10-15 yrs</MenuItem>
              <MenuItem value={4}>over 15 yrs</MenuItem>
            </TextField>
          </Grid>
          <Grid item>
            <TextField
              label="Job Location"
              variant="outlined"
              value={signupDetails.jobLocation}
              onChange={(event) => {
                handleInput("jobLocation", event.target.value);
              }}
              fullWidth
            >
            </TextField>
          </Grid>
          <Grid item>
            <TextField
              select
              label="Availability"
              variant="outlined"
              value={signupDetails.availability}
              onChange={(event) => {
                handleInput("availability", event.target.value);
              }}
              fullWidth
            >
              <MenuItem value={0}>within 10 days</MenuItem>
              <MenuItem value={1}>within 20 days</MenuItem>
              <MenuItem value={2}>from next month</MenuItem>
            </TextField>
          </Grid>
          <Grid item>
            <TextField
              select
              label="Education Qualification"
              variant="outlined"
              value={signupDetails.educationQualification}
              onChange={(event) => {
                handleInput("educationQualification", event.target.value);
              }}
              fullWidth
            >
              <MenuItem value={0}>below matriculation</MenuItem>
              <MenuItem value={1}>matriculation</MenuItem>
              <MenuItem value={2}>higher secondary</MenuItem>
              <MenuItem value={3}>graduate</MenuItem>
              <MenuItem value={3}>post-graduate</MenuItem>
            </TextField>
          </Grid>
          <Grid item>
            <TextField
              label="Preferred Salary"
              variant="outlined"
              value={signupDetails.expectedSalary}
              onChange={(event) => {
                handleInput("expectedSalary", event.target.value);
              }}
              fullWidth
            >
            </TextField>
          </Grid>
          </>
        ) : (
          <>
            <Grid item style={{ width: "100%" }}>
              <TextField
                label="Bio (upto 250 words)"
                multiline
                rows={8}
                style={{ width: "100%" }}
                variant="outlined"
                value={signupDetails.bio}
                onChange={(event) => {
                  if (
                    event.target.value.split(" ").filter(function (n) {
                      return n != "";
                    }).length <= 250
                  ) {
                    handleInput("bio", event.target.value);
                  }
                }}
              />
            </Grid>
            <Grid item>
              <PhoneInput
                country={"in"}
                value={phone}
                onChange={(phone) => setPhone(phone)}
              />
            </Grid>
          </>
        )}

        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              signupDetails.type === "applicant"
                ? handleLogin()
                : handleLoginRecruiter();
            }}
            className={classes.submitButton}
          >
            Signup
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default Signup;

// {/* <Grid item>
//           <PasswordInput
//             label="Re-enter Password"
//             value={signupDetails.tmpPassword}
//             onChange={(event) => handleInput("tmpPassword", event.target.value)}
//             className={classes.inputBox}
//             labelWidth={140}
//             helperText={inputErrorHandler.tmpPassword.message}
//             error={inputErrorHandler.tmpPassword.error}
//             onBlur={(event) => {
//               if (event.target.value !== signupDetails.password) {
//                 handleInputError(
//                   "tmpPassword",
//                   true,
//                   "Passwords are not same."
//                 );
//               }
//             }}
//           />
//         </Grid> */}
