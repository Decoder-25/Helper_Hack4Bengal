import {  useEffect, useState } from "react";
import {
  Button,
  Grid,
  Typography,
  Modal,
  Paper,
  makeStyles,
  TextField,
} from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  body: {
    height: "inherit",
  },
  popupDialog: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const Profile_helper = (props) => {
  const classes = useStyles();
  const [userData, setUserData] = useState();
  const [open, setOpen] = useState(false);

  const [profileDetails, setProfileDetails] = useState({
    firstName: "",
    lastName: "",
    AadharNumber: "",
    age: "",
    Gender: "",
    MobileNo: "",
    Religion: "",
    Nationality: "",
    Address: "",
    Disability: "",
    MaritalStatus: "",
    jobSector: "",
    jobExperience: "",
    jobLocation : "",
    availability: "",
    educationQualification: "",
    expectedSalary: "",
  });

  const handleInput = (key, value) => {
    setProfileDetails({
      ...profileDetails,
      [key]: value,
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("/api/v1/user/helpers/profile", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setProfileDetails(response.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  const editDetails = () => {
    setOpen(true);
  };

  const handleUpdate = () => {

    let updatedDetails = {
      ...profileDetails,
    };

    axios
      .put("/api/v1/user/helpers/update", updatedDetails, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        getData();
      })
      .catch((err) => {
        console.log(err.response);
      });
    setOpen(false);
  };


  return (
    <>
      <Grid
        container
        item
        direction="column"
        alignItems="center"
        style={{ padding: "30px", minHeight: "93vh" }}
      >
        <Grid item>
          <Typography variant="h2">Profile</Typography>
        </Grid>
        <Grid item xs>
          <Paper
            style={{
              padding: "20px",
              outline: "none",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Grid container direction="column" alignItems="stretch" spacing={3}>
              <Grid item>
                <TextField
                  label="First Name"
                  value={profileDetails.firstName}
                  onChange={(event) =>
                    handleInput("firstname", event.target.value)
                  }
                  className={classes.inputBox}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Last Name"
                  value={profileDetails.lastName}
                  onChange={(event) =>
                    handleInput("lastName", event.target.value)
                  }
                  className={classes.inputBox}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Aadhar Number"
                  value={profileDetails.AadharNumber}
                  onChange={(event) =>
                    handleInput("AadharNumber", event.target.value)
                  }
                  className={classes.inputBox}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Age"
                  value={profileDetails.age}
                  onChange={(event) => handleInput("age", event.target.value)}
                  className={classes.inputBox}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Gender"
                  value={profileDetails.Gender}
                  onChange={(event) =>
                    handleInput("Gender", event.target.value)
                  }
                  className={classes.inputBox}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Mobile No"
                  value={profileDetails.MobileNo}
                  onChange={(event) =>
                    handleInput("MobileNo", event.target.value)
                  }
                  className={classes.inputBox}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Religion"
                  value={profileDetails.Religion}
                  onChange={(event) =>
                    handleInput("Religion", event.target.value)
                  }
                  className={classes.inputBox}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Nationality"
                  value={profileDetails.Nationality}
                  onChange={(event) =>
                    handleInput("Nationality", event.target.value)
                  }
                  className={classes.inputBox}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Address"
                  value={profileDetails.Address}
                  onChange={(event) =>
                    handleInput("Address", event.target.value)
                  }
                  className={classes.inputBox}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Disability"
                  value={profileDetails.Disability}
                  onChange={(event) =>
                    handleInput("Disability", event.target.value)
                  }
                  className={classes.inputBox}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Marital Status"
                  value={profileDetails.MaritalStatus}
                  onChange={(event) =>
                    handleInput("MaritalStatus", event.target.value)
                  }
                  className={classes.inputBox}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Job Sector"
                  value={profileDetails.jobSector}
                  onChange={(event) =>
                    handleInput("jobSector", event.target.value)
                  }
                  className={classes.inputBox}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Job Experience"
                  value={profileDetails.jobExperience}
                  onChange={(event) =>
                    handleInput("jobExperience", event.target.value)
                  }
                  className={classes.inputBox}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Job Location"
                  value={profileDetails.jobLocation}
                  onChange={(event) =>
                    handleInput("jobLocation", event.target.value)
                  }
                  className={classes.inputBox}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Availability"
                  value={profileDetails.availability}
                  onChange={(event) =>
                    handleInput("availability", event.target.value)
                  }
                  className={classes.inputBox}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Education Qualification"
                  value={profileDetails.educationQualification}
                  onChange={(event) =>
                    handleInput("educationQualification", event.target.value)
                  }
                  className={classes.inputBox}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item>
                <TextField
                  label="Preferred Salary"
                  value={profileDetails.expectedSalary}
                  onChange={(event) =>
                    handleInput("expectedSalary", event.target.value)
                  }
                  className={classes.inputBox}
                  variant="outlined"
                  fullWidth
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              color="primary"
              style={{ padding: "10px 50px", marginTop: "30px" }}
              onClick={() => handleUpdate()}
            >
              Update Details
            </Button>
          </Paper>
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        className={classes.popupDialog}
      ></Modal>
    </>
  );
};

export default Profile_helper;
