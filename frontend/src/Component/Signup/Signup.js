// import { useState, useContext } from "react";
// import {
//   Grid,
//   TextField,
//   Button,
//   Typography,
//   makeStyles,
//   Paper,
//   MenuItem,
//   Input,
// } from "@material-ui/core";
// import axios from "axios";
// import { Navigate } from "react-router-dom";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/material.css";
// import "./Signup.css"

// import PasswordInput from "../../lib/PasswordInput";
// import EmailInput from "../../lib/EmailInput";
// import { SetPopupContext } from "../../App";

// import apiList from "../../lib/apiList";
// import isAuth from "../../lib/isAuth";

// const useStyles = makeStyles((theme) => ({
//   // box: {
//   //   padding: "60px 60px",
//   // },
//   title1: {
//     fontFamily: ['Shadows Into Light Two', 'cursive', 'bold'].join(','),
//     color: 'rgb(2, 54, 2)',
//     paddingBottom: '30px',
//   },

//   body: {
//     padding: "60px 60px",
//   },
//   inputBox: {
//     width: "400px",
//   },
//   submitButton: {
//     width: "400px",
//     backgroundColor: "rgb(2, 54, 2)",
//     color: "white",
//     '&:hover':{
//     backgroundColor: "#b4fca4",
//     color: "black",
//     }
//   },
// }));

// const Signup = (props) => {
//   const classes = useStyles();
//   const { popup, setPopup } = useContext(SetPopupContext);

//   const [loggedin, setLoggedin] = useState(isAuth());

//   const [signupDetails, setSignupDetails] = useState({
//     type: "applicant",
//     email: "",
//     password: "",
//     firstName: "",
//     lastName: "",
//     AadharNumber: "",
//     age: "",
//     Gender: "male",
//     MobileNo: "",
//     Religion: "",
//     Nationality: "",
//     Address: "",
//     Disability: "no",
//     MaritalStatus: "unmarried",
//     jobSector: "househelp",
//     jobExperience: "fresher",
//     jobLocation: "kolkata",
//     availability: "within 10 days",
//     educationQualification: "matriculation",
//     expectedSalary: "",
//   });

//   const [phone, setPhone] = useState("");

//   const [inputErrorHandler, setInputErrorHandler] = useState({
//     email: {
//       untouched: true,
//       required: true,
//       error: false,
//       message: "",
//     },
//     password: {
//       untouched: true,
//       required: true,
//       error: false,
//       message: "",
//     },
//     firstName: {
//       untouched: true,
//       required: true,
//       error: false,
//       message: "",
//     },
//     lastName: {
//       untouched: true,
//       required: true,
//       error: false,
//       message: "",
//     },
//   });

//   const handleInput = (key, value) => {
//     setSignupDetails({
//       ...signupDetails,
//       [key]: value,
//     });
//     // console.log(setSignupDetails)
//   };



//   const handleInputError = (key, status, message) => {
//     setInputErrorHandler({ 
//       ...inputErrorHandler,
//       [key]: {
//         required: true,
//         untouched: false,
//         error: status,
//         message: message,
//       },
//     });
//   };

//   const handleLogin = () => {
//     const tmpErrorHandler = {};
//     Object.keys(inputErrorHandler).forEach((obj) => {
//       if (inputErrorHandler[obj].required && inputErrorHandler[obj].untouched) {
//         tmpErrorHandler[obj] = {
//           required: true,
//           untouched: false,
//           error: true,
//           message: `${obj[0].toUpperCase() + obj.substr(1)} is required`,
//         };
//       } else {
//         tmpErrorHandler[obj] = inputErrorHandler[obj];
//       }
//     });

//     let updatedDetails = {
//       ...signupDetails,
//     };

//     setSignupDetails(updatedDetails);

//     const verified = !Object.keys(tmpErrorHandler).some((obj) => {
//       return tmpErrorHandler[obj].error;
//     });

//     if (true) {
//       axios
//         .post(apiList.signup, updatedDetails)
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
//       setInputErrorHandler(tmpErrorHandler);
//       setPopup({
//         open: true,
//         severity: "error",
//         message: "Incorrect Input",
//       });
//     }
//   };

//   const handleLoginRecruiter = () => {
//     const tmpErrorHandler = {};
//     Object.keys(inputErrorHandler).forEach((obj) => {
//       if (inputErrorHandler[obj].required && inputErrorHandler[obj].untouched) {
//         tmpErrorHandler[obj] = {
//           required: true,
//           untouched: false,
//           error: true,
//           message: `${obj[0].toUpperCase() + obj.substr(1)} is required`,
//         };
//       } else {
//         tmpErrorHandler[obj] = inputErrorHandler[obj];
//       }
//     });

//     let updatedDetails = {
//       ...signupDetails,
//     };
//     if (phone !== "") {
//       updatedDetails = {
//         ...signupDetails,
//         MobileNo: `+${phone}`,
//       };
//     } else {
//       updatedDetails = {
//         ...signupDetails,
//         MobileNo: "",
//       };
//     }

//     setSignupDetails(updatedDetails);

//     const verified = !Object.keys(tmpErrorHandler).some((obj) => {
//       return tmpErrorHandler[obj].error;
//     });

//     console.log(updatedDetails);

//     if (verified) {
//       axios
//         .post(apiList.signup, updatedDetails)
//         .then((response) => {
//           localStorage.setItem("token", response.data.token);
//           localStorage.setItem("type", response.data.type);
//           // setLoggedin(isAuth());

//           setPopup({
//             open: true,
//             severity: "success",
//             message: "Signup done successfully",
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
//       setInputErrorHandler(tmpErrorHandler);
//       setPopup({
//         open: true,
//         severity: "error",
//         message: "Incorrect Input",
//       });
//     }
//   };

//   const styles1 = {
//     border: '3px',
//     margin: '95px auto',
//     borderRadius: '25px',
//     width: '30%',
//     padding: '55px',
//     backgroundColor: "white",
// }

//   return (
//   // loggedin ? (
//   //   <Navigate to="/" />
//   // ) : (
//     // <Paper elevation={3} className={classes.body} style={styles1}>
//     //   <Grid container direction="column" spacing={4} alignItems="center" >
//     // // loggedin ? (
//     // //   <Navigate to="/" />
//     // // ) : (
//     <Paper elevation={3} className={classes.body}>
//       <Grid container direction="column" spacing={4} alignItems="center">
//         <Grid item>
//           <Typography variant="h3" component="h2" className={classes.title1}>
//             <b>Signup</b>
//           </Typography>
//         </Grid>
//         <Grid item>
//           <TextField
//             select
//             label="Category"
//             variant="outlined"
//             className={classes.inputBox}
//             value={signupDetails.type}
//             onChange={(event) => {
//               handleInput("type", event.target.value);
//             }}
//           >
//             <MenuItem value="applicant">Helper</MenuItem>
//             <MenuItem value="recruiter">Recruiter</MenuItem>
//           </TextField>
//         </Grid>
//         <Grid item>
//           <TextField
//             label="First Name"
//             value={signupDetails.name}
//             onChange={(event) => handleInput("firstname", event.target.value)}
//             className={classes.inputBox}
//             error={inputErrorHandler.firstName.error}
//             helperText={inputErrorHandler.firstName.message}
//             onBlur={(event) => {
//               if (event.target.value === "") {
//                 handleInputError("firstname", true, "First Name is required");
//               } else {
//                 handleInputError("firstname", false, "");
//               }
//             }}
//             variant="outlined"
//           />
//         </Grid>
//         <Grid item>
//           <TextField
//             label="Last Name"
//             value={signupDetails.name}
//             onChange={(event) => handleInput("lastname", event.target.value)}
//             className={classes.inputBox}
//             error={inputErrorHandler.firstName.error}
//             helperText={inputErrorHandler.firstName.message}
//             onBlur={(event) => {
//               if (event.target.value === "") {
//                 handleInputError("lastname", true, "Last Name is required");
//               } else {
//                 handleInputError("lastname", false, "");
//               }
//             }}
//             variant="outlined"
//           />
//         </Grid>
//         <Grid item>
//           <EmailInput
//             label="Email"
//             value={signupDetails.email}
//             onChange={(event) => handleInput("email", event.target.value)}
//             inputErrorHandler={inputErrorHandler}
//             handleInputError={handleInputError}
//             className={classes.inputBox}
//             required={true}
//           />
//         </Grid>
//         <Grid item>
//           <PasswordInput
//             label="Password"
//             value={signupDetails.password}
//             onChange={(event) => handleInput("password", event.target.value)}
//             className={classes.inputBox}
//             error={inputErrorHandler.password.error}
//             helperText={inputErrorHandler.password.message}
//             onBlur={(event) => {
//               if (event.target.value === "") {
//                 handleInputError("password", true, "Password is required");
//               } else {
//                 handleInputError("password", false, "");
//               }
//             }}
//           />
//         </Grid>
//         {signupDetails.type === "applicant" ? (
//           <>
//           <Grid item>
//             <TextField
//               label="Adhaar Number"
//               variant="outlined"
//               className="box"
//               value={signupDetails.AadharNumber}
//               onChange={(event) => {
//                 handleInput("AadharNumber", event.target.value);
//               }}
//               fullWidth
//             >
//             </TextField>
//           </Grid>
//           <Grid item>
//             <TextField
//               label="Age"
//               variant="outlined"
//               className="box"
//               value={signupDetails.DOB}
//               onChange={(event) => {
//                 handleInput("DOB", event.target.value);
//               }}
//               fullWidth
//             >
//             </TextField>
//           </Grid>
//           <Grid item>
//             <TextField
//               select
//               label="Marital Status"
//               variant="outlined"
//               className="box"
//               value={signupDetails.MaritalStatus}
//               onChange={(event) => {
//                 handleInput("maritalStatus", event.target.value);
//               }}
//               fullWidth
//             >
//               <MenuItem value="male">Male</MenuItem>
//               <MenuItem value="No">Female</MenuItem>
//             </TextField>
//           </Grid>
//           <Grid item>
//             <TextField
//               select
//               label="Gender"
//               variant="outlined"
//               className="box"
//               value={signupDetails.MaritalStatus}
//               onChange={(event) => {
//                 handleInput("maritalStatus", event.target.value);
//               }}
//               fullWidth
//             >
//               <MenuItem value="Yes">Married</MenuItem>
//               <MenuItem value="No">Unmarried</MenuItem>
//               <MenuItem value="other">Other</MenuItem>
//             </TextField>
//           </Grid>
//           <Grid item>
//             <Grid item>
//               <TextField
//                 label="Adhaar Number"
//                 variant="outlined"
//                 value={signupDetails.AadharNumber}
//                 onChange={(event) => {
//                   handleInput("AadharNumber", event.target.value);
//                 }}
//                 fullWidth
//               ></TextField>
//             </Grid>
//             <Grid item>
//               <TextField
//                 label="Age"
//                 variant="outlined"
//                 value={signupDetails.age}
//                 onChange={(event) => {
//                   handleInput("age", event.target.value);
//                 }}
//                 fullWidth
//               ></TextField>
//             </Grid>
//             <Grid item>
//               <TextField
//                 select
//                 label="Marital Status"
//                 variant="outlined"
//                 value={signupDetails.MaritalStatus}
//                 onChange={(event) => {
//                   handleInput("MaritalStatus", event.target.value);
//                 }}
//                 fullWidth
//               >
//                 <MenuItem value="Yes">Married</MenuItem>
//                 <MenuItem value="No">Unmarried</MenuItem>
//                 <MenuItem value="other">Other</MenuItem>
//               </TextField>
//             </Grid>
//             <Grid item>
//               <TextField
//                 select
//                 label="Gender"
//                 variant="outlined"
//                 value={signupDetails.Gender}
//                 onChange={(event) => {
//                   handleInput("Gender", event.target.value);
//                 }}
//                 fullWidth
//               >
//                 <MenuItem value="male">male</MenuItem>
//                 <MenuItem value="female">female</MenuItem>
//                 <MenuItem value="other">other</MenuItem>
//               </TextField>
//             </Grid>
//             <Grid item>
//               <PhoneInput
//                 country={"in"}
//                 value={phone}
//                 className="box"
//                 onChange={(phone) => setPhone(phone)}
//               />
//           </Grid>
//           <Grid item>
//             <TextField
//               label="Religion"
//               variant="outlined"
//               className="box"
//               value={signupDetails.Religion}
//               onChange={(event) => {
//                 handleInput("Religion", event.target.value);
//               }}
//               fullWidth
//             >
//             </TextField>
//           </Grid>
//           <Grid item>
//             <TextField
//               label="Nationality"
//               variant="outlined"
//               className="box"
//               value={signupDetails.Nationality}
//               onChange={(event) => {
//                 handleInput("Nationality", event.target.value);
//               }}
//               fullWidth
//             >
//             </TextField>
//           </Grid>
//           <Grid item>
//             <TextField
//               label="Address"
//               variant="outlined"
//               className="box"
//               value={signupDetails.Address}
//               onChange={(event) => {
//                 handleInput("Address", event.target.value);
//               }}
//               fullWidth
//             >
//             </TextField>
//           </Grid>
//           <Grid item>
//             <TextField
//               select
//               label="Disability"
//               variant="outlined"
//               className="box"
//               value={signupDetails.Disability}
//               onChange={(event) => {
//                 handleInput("Disability", event.target.value);
//               }}
//               fullWidth
//             >
//               <MenuItem value="Yes">Yes</MenuItem>
//               <MenuItem value="No">No</MenuItem>
//             </TextField>
//           </Grid>
//           <Grid item>
//             <TextField
//               select
//               label="Gender"
//               variant="outlined"
//               className="box"
//               value={signupDetails.MaritalStatus}
//               onChange={(event) => {
//                 handleInput("maritalStatus", event.target.value);
//               }}
//               fullWidth
//             >
//               <MenuItem value="Yes">Married</MenuItem>
//               <MenuItem value="No">Unmarried</MenuItem>
//               <MenuItem value="other">Other</MenuItem>
//             </TextField>
//           </Grid>
//           <Grid item>
//             <TextField
//               select
//               label="Sector"
//               variant="outlined"
//               className="box"
//               value={signupDetails.jobSector}
//               onChange={(event) => {
//                 handleInput("jobSector", event.target.value);
//               }}
//               fullWidth
//             >
//               <MenuItem value="househelp">househelp</MenuItem>
//               <MenuItem value="driver">driver</MenuItem>
//               <MenuItem value="gardener">gardener</MenuItem>
//               <MenuItem value="cook">cook</MenuItem>
//               <MenuItem value="nightguard">nightguard</MenuItem>
//               <MenuItem value="babysitter">babysitter</MenuItem>
//               <MenuItem value="caretaker">caretaker</MenuItem>
//               <MenuItem value="petcarer">petcarer</MenuItem>
//               <MenuItem value="hometutor">hometutor</MenuItem>
//               <MenuItem value="housekeeper">housekeeper</MenuItem>
//             </TextField>
//           </Grid>
//           <Grid item>
//             <TextField
//               select
//               label="Experience"
//               variant="outlined"
//               className="box"
//               value={signupDetails.jobExperience}
//               onChange={(event) => {
//                 handleInput("jobExperience", event.target.value);
//               }}
//               fullWidth
//             >
//               <MenuItem value="fresher">fresher</MenuItem>
//               <MenuItem value="1-5 yrs">1-5 yrs</MenuItem>
//               <MenuItem value="5-10 yrs">5-10 yrs</MenuItem>
//               <MenuItem value="10-15 yrs">10-15 yrs</MenuItem>
//               <MenuItem value="over 15 yrs">over 15 yrs</MenuItem>
//               <MenuItem value={0}>within 10 days</MenuItem>
//               <MenuItem value={1}>within 20 days</MenuItem>
//               <MenuItem value={2}>from next month</MenuItem>
//             </TextField>
//           </Grid>
//           <Grid item>
//             <TextField
//               label="Job Location"
//               variant="outlined"
//               className="box"
//               value={signupDetails.jobLocation}
//               onChange={(event) => {
//                 handleInput("jobLocation", event.target.value);
//               }}
//               fullWidth
//             >
//             </TextField>
//           </Grid>
//           <Grid item>
//             <TextField
//               select
//               label="Availability"
//               variant="outlined"
//               className="box"
//               value={signupDetails.availability}
//               onChange={(event) => {
//                 handleInput("availability", event.target.value);
//               }}
//               fullWidth
//             >
//               <MenuItem value="within 10 days">within 10 days</MenuItem>
//               <MenuItem value="within 20 days">within 20 days</MenuItem>
//               <MenuItem value="from next month">from next month</MenuItem>
//               <MenuItem value={0}>fresher</MenuItem>
//               <MenuItem value={1}>1-5 yrs</MenuItem>
//               <MenuItem value={2}>5-10 yrs</MenuItem>
//               <MenuItem value={3}>10-15 yrs</MenuItem>
//               <MenuItem value={4}>over 15 yrs</MenuItem>
//             </TextField>
//           </Grid>
//           <Grid item>
//             <TextField
//               select
//               label="Education Qualification"
//               variant="outlined"
//               className="box"
//               value={signupDetails.educationQualification}
//               onChange={(event) => {
//                 handleInput("educationQualification", event.target.value);
//               }}
//               fullWidth
//             >
//               <MenuItem value="below matriculation">below matriculation</MenuItem>
//               <MenuItem value="matriculation">matriculation</MenuItem>
//               <MenuItem value="higher secondary">higher secondary</MenuItem>
//               <MenuItem value="graduate">graduate</MenuItem>
//               <MenuItem value="post-graduate">post-graduate</MenuItem>
//             </TextField>
//           </Grid>
//           <Grid item>
//             <TextField
//               label="Preferred Salary"
//               variant="outlined"
//               className="box"
//               value={signupDetails.expectedSalary}
//               onChange={(event) => {
//                 handleInput("expectedSalary", event.target.value);
//               }}
//               fullWidth
//             >
//             </TextField>
//           </Grid>
//             </Grid>
//             <Grid item>
//               <TextField
//                 label="Religion"
//                 variant="outlined"
//                 value={signupDetails.Religion}
//                 onChange={(event) => {
//                   handleInput("Religion", event.target.value);
//                 }}
//                 fullWidth
//               ></TextField>
//             </Grid>
//             <Grid item>
//               <TextField
//                 label="Nationality"
//                 variant="outlined"
//                 value={signupDetails.Nationality}
//                 onChange={(event) => {
//                   handleInput("Nationality", event.target.value);
//                 }}
//                 fullWidth
//               ></TextField>
//             </Grid>
//             <Grid item>
//               <TextField
//                 label="Address"
//                 variant="outlined"
//                 value={signupDetails.Address}
//                 onChange={(event) => {
//                   handleInput("Address", event.target.value);
//                 }}
//                 fullWidth
//               ></TextField>
//             </Grid>
//             <Grid item>
//               <TextField
//                 select
//                 label="Disability"
//                 variant="outlined"
//                 value={signupDetails.Disability}
//                 onChange={(event) => {
//                   handleInput("Disability", event.target.value);
//                 }}
//                 fullWidth
//               >
//                 <MenuItem value="Yes">Yes</MenuItem>
//                 <MenuItem value="No">No</MenuItem>
//               </TextField>
//             </Grid>
//             <Grid item>
//               <TextField
//                 select
//                 label="Sector"
//                 variant="outlined"
//                 value={signupDetails.jobSector}
//                 onChange={(event) => {
//                   handleInput("jobSector", event.target.value);
//                 }}
//                 fullWidth
//               >
//                 <MenuItem value="househelp">househelp</MenuItem>
//                 <MenuItem value="driver">driver</MenuItem>
//                 <MenuItem value="gardener">gardener</MenuItem>
//                 <MenuItem value="cook">cook</MenuItem>
//                 <MenuItem value="nightguard">nightguard</MenuItem>
//                 <MenuItem value="babysitter">babysitter</MenuItem>
//                 <MenuItem value="caretaker">caretaker</MenuItem>
//                 <MenuItem value="petcarer">petcarer</MenuItem>
//                 <MenuItem value="hometutor">hometutor</MenuItem>
//                 <MenuItem value="housekeeper">housekeeper</MenuItem>
//               </TextField>
//             </Grid>
//             <Grid item>
//               <TextField
//                 select
//                 label="Experience"
//                 variant="outlined"
//                 value={signupDetails.jobExperience}
//                 onChange={(event) => {
//                   handleInput("jobExperience", event.target.value);
//                 }}
//                 fullWidth
//               >
//                 <MenuItem value={0}>fresher</MenuItem>
//                 <MenuItem value={1}>1-5 yrs</MenuItem>
//                 <MenuItem value={2}>5-10 yrs</MenuItem>
//                 <MenuItem value={3}>10-15 yrs</MenuItem>
//                 <MenuItem value={4}>over 15 yrs</MenuItem>
//               </TextField>
//             </Grid>
//             <Grid item>
//               <TextField
//                 label="Job Location"
//                 variant="outlined"
//                 value={signupDetails.jobLocation}
//                 onChange={(event) => {
//                   handleInput("jobLocation", event.target.value);
//                 }}
//                 fullWidth
//               ></TextField>
//             </Grid>
//             <Grid item>
//               <TextField
//                 select
//                 label="Availability"
//                 variant="outlined"
//                 value={signupDetails.availability}
//                 onChange={(event) => {
//                   handleInput("availability", event.target.value);
//                 }}
//                 fullWidth
//               >
//                 <MenuItem value={0}>within 10 days</MenuItem>
//                 <MenuItem value={1}>within 20 days</MenuItem>
//                 <MenuItem value={2}>from next month</MenuItem>
//               </TextField>
//             </Grid>
//             <Grid item>
//               <TextField
//                 select
//                 label="Education Qualification"
//                 variant="outlined"
//                 value={signupDetails.educationQualification}
//                 onChange={(event) => {
//                   handleInput("educationQualification", event.target.value);
//                 }}
//                 fullWidth
//               >
//                 <MenuItem value={0}>below matriculation</MenuItem>
//                 <MenuItem value={1}>matriculation</MenuItem>
//                 <MenuItem value={2}>higher secondary</MenuItem>
//                 <MenuItem value={3}>graduate</MenuItem>
//                 <MenuItem value={3}>post-graduate</MenuItem>
//               </TextField>
//             </Grid>
//             <Grid item>
//               <TextField
//                 label="Preferred Salary"
//                 variant="outlined"
//                 value={signupDetails.expectedSalary}
//                 onChange={(event) => {
//                   handleInput("expectedSalary", event.target.value);
//                 }}
//                 fullWidth
//               ></TextField>
//             </Grid>
//           </>
//         ) : (
//           <>
//             <Grid item style={{ width: "100%" }}>
//               <TextField
//                 label="Bio (upto 250 words)"
//                 multiline
//                 rows={8}
//                 style={{ width: "100%" }}
//                 variant="outlined"
//                 value={signupDetails.bio}
//                 onChange={(event) => {
//                   if (
//                     event.target.value.split(" ").filter(function (n) {
//                       return n != "";
//                     }).length <= 250
//                   ) {
//                     handleInput("bio", event.target.value);
//                   }
//                 }}
//               />
//             </Grid>
//             <Grid item>
//               <PhoneInput
//                 country={"in"}
//                 value={phone}
//                 onChange={(phone) => setPhone(phone)}
//               />
//             </Grid>
//           </>
//         )}

//         <Grid item>
//           <Button
//             variant="contained"
//             color="primary"
//             onClick={() => {
//               signupDetails.type === "applicant"
//                 ? handleLogin()
//                 : handleLoginRecruiter();
//             }}
//             className={classes.submitButton}
//           >
//             <b>Signup</b>
//           </Button>
//         </Grid>
//       </Grid>
//     </Paper>
//   );
// };

// export default Signup;

// // {/* <Grid item>
// //           <PasswordInput
// //             label="Re-enter Password"
// //             value={signupDetails.tmpPassword}
// //             onChange={(event) => handleInput("tmpPassword", event.target.value)}
// //             className={classes.inputBox}
// //             labelWidth={140}
// //             helperText={inputErrorHandler.tmpPassword.message}
// //             error={inputErrorHandler.tmpPassword.error}
// //             onBlur={(event) => {
// //               if (event.target.value !== signupDetails.password) {
// //                 handleInputError(
// //                   "tmpPassword",
// //                   true,
// //                   "Passwords are not same."
// //                 );
// //               }
// //             }}
// //           />
// //         </Grid> */}

import React, { useState } from "react";
import isAuth from "../../lib/isAuth";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("recruiter");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [bio, setBio] = useState("")
  const [AadharNumber, setAadharNumber] = useState("");
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("male")
  const [MobileNo, setMobileNo] = useState("")
  const [religion, setReligion] = useState("")
  const [nationality, setNationality] = useState("")
  const [address, setAddress] = useState("")
  const [disability, setDisability] = useState("no");
  const [maritalStatus, setMaritalStatus] = useState("unmarried")
  const [jobSector, setJobSector] = useState("houseHelp")
  const [jobExperience, setJobExperience] = useState("fresher")
  const [jobLocation, setJobLocation] = useState("kolkata")
  const [availability, setAvailability] = useState("within 10 days")
  const [educationQualification, setEducationQualification] = useState("matriculation");
  const [expectedSalary, setExpectedSalary] = useState("")
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          firstName,
          lastName,
          contactNumber,
          bio,
          AadharNumber,
          age,
          gender,
          MobileNo,
          religion,
          nationality,
          address,
          disability,
          maritalStatus,
          jobSector,
          jobExperience,
          jobLocation,
          availability,
          educationQualification,
          expectedSalary,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("type", response.data.type);
        console.log("User registered successfully:", data);
      } else {
        const errorData = await response.json();
        window.alert("Invalid Registration")
        console.log("Signup error:", errorData);
      }
    } catch (error) {
      window.alert("Invalid Registration uyiu")
      console.log("Signup error:", error);
    }
  };

  return (
    <>
    <div>
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div>
          <label>Last Name:</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <label>User Type:</label>
          <select value={userType} onChange={(e) => setUserType(e.target.value)}>
            <option value="helper">Helper</option>
            <option value="recruiter">Recruiter</option>
          </select>
        </div>
        
        {userType === "helper" && (
          <>
          <div>
          <label>Adhaar Number:</label>
          <input type="text" value={AadharNumber} onChange={(e) => setAadharNumber(e.target.value)} />
          </div>
          <div>
          <label>Age:</label>
          <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <div>
            <label>Gender:</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            </select>
          </div>
          <div>
          <label>Mobile no:</label>
          <input type="text" value={MobileNo} onChange={(e) => setMobileNo(e.target.value)} />
          </div>
          <div>
          <label>Religion:</label>
          <input type="text" value={religion} onChange={(e) => setReligion(e.target.value)} />
          </div>
          <div>
            <label>Nationality:</label>
            <input type="text" value={nationality} onChange={(e) => setNationality(e.target.value)} />
          </div>
          <div>
          <label>Address:</label>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div>
          <label>Disability:</label>
            <select value={disability} onChange={(e) => setDisability(e.target.value)}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            </select>
          </div>
          <div>
            <label>Marital Status:</label>
            <select value={maritalStatus} onChange={(e) => setMaritalStatus(e.target.value)}>
            <option value="married">Married</option>
            <option value="unmarried">Unmarried</option>
            </select>
          </div>
          <div>
          <label>Job Sector:</label>
            <select value={jobSector} onChange={(e) => setJobSector(e.target.value)}>
            <option value="houseHelp">House Help</option>
            <option value="driver">Driver</option>
            <option value="gardener">Gardener</option>
            <option value="cook">Cook</option>
            <option value="nightGuard">NightGuard</option>
            <option value="babbySitter">Baby Sitter</option>
            <option value="careTaker">Care Taker</option>
            <option value="petCarer">PetCarer</option>
            <option value="homeTutor">Home Tutor</option>
            <option value="houseKeeper">House Keeper</option>
            </select>
          </div>
          <div>
          <label>Job Experience:</label>
          <select value={jobExperience} onChange={(e) => setJobExperience(e.target.value)}>
            <option value="fresher">Fresher</option>
            <option value="1-5yrs">1-5 yrs</option>
            <option value="6-10yrs">6-10 yrs</option>
            <option value="11-15yrs">11-15 yrs</option>
            <option value="over15yrs">Over 15 yrs</option>
            </select>
          </div>
          <div>
          <label>Job Location:</label>
          <input type="text" value={jobLocation} onChange={(e) => setJobLocation(e.target.value)} />
          </div>
          <div>
            <label>Availability:</label>
            <select value={availability} onChange={(e) => setAvailability(e.target.value)}>
            <option value="within10days">within 10 days</option>
            <option value="with20days">within 20 days</option>
            <option value="fromNextMonth">From next month</option>
            </select>
          </div>
          <div>
          <label>Education Qualification:</label>
          <select value={educationQualification} onChange={(e) => setEducationQualification(e.target.value)}>
            <option value="belowMatriculation">below matriculation</option>
            <option value="matriculation">matriculation</option>
            <option value="higherSecondary">higher Secondary</option>
            <option value="graduate">graduate</option>
            <option value="post-graduate">Post Graduate</option>
            </select>
          </div>
          <div>
          <label>Preferred Salary:</label>
          <input type="text" value={expectedSalary} onChange={(e) => setExpectedSalary(e.target.value)} />
          </div>
          </>
        )}
        {userType === "recruiter" && (
          <div>
            <label>Bio:</label>
            <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
          </div>
        )}
        <div>
            <label>Contact Number:</label>
            <input type="text" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
        </div>
        <button type="submit">Sign up</button>
      </form>
    </div>
    </>
  );
};

export default Signup;
