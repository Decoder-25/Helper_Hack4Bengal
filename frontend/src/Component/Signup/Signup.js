 import "./Signup.css"
import React, { useState } from "react";
import { Navigate } from "react-router-dom";

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
  const [Gender, setGender] = useState("male")
  const [MobileNo, setMobileNo] = useState("")
  const [Religion, setReligion] = useState("")
  const [Nationality, setNationality] = useState("")
  const [Address, setAddress] = useState("")
  const [Disability, setDisability] = useState("no");
  const [MaritalStatus, setMaritalStatus] = useState("unmarried")
  const [jobSector, setJobSector] = useState("househelp")
  const [jobExperience, setJobExperience] = useState("fresher")
  const [jobLocation, setJobLocation] = useState("kolkata")
  const [availability, setAvailability] = useState("within 10 days")
  const [educationQualification, setEducationQualification] = useState("matriculation");
  const [expectedSalary, setExpectedSalary] = useState("")

  const [loggedin, setLoggedin] = useState(isAuth());
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8000/api/v1/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          type: userType.toLowerCase(),
          firstName,
          lastName,
          contactNumber,
          bio,
          AadharNumber,
          age,
          Gender,
          MobileNo,
          Religion,
          Nationality,
          Address,
          Disability,
          MaritalStatus,
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
        const { token, type } = data;
        localStorage.setItem("token", token);
        localStorage.setItem("type", type);
        setLoggedin(isAuth())
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

  return loggedin ? (
    <Navigate to="/"/>
  ) : (
    <>
    <div className= 'signup'>
      <h1 className="su"><b>Signup</b></h1>
      <form onSubmit={handleSubmit}>
        <div className= 'signup1'>
          <label>First Name: </label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className= 'signup1'>
          <label>Last Name: </label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="signup1">
          <label>E-mail: </label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="signup1">
          <label>Password: </label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="signup1">
          <label>User Type: </label>
          <select value={userType} onChange={(e) => setUserType(e.target.value)}>
            <option value="helper">helper</option>
            <option value="recruiter">recruiter</option>
          </select>
        </div>
        
        {userType === "helper" && (
          <>
          <div className="signup1">
          <label>Adhaar Number: </label>
          <input type="text" value={AadharNumber} onChange={(e) => setAadharNumber(e.target.value)} />
          </div>
          <div className="signup1">
          <label>Age: </label>
          <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
          <div className="signup1">
            <label>Gender: </label>
            <select value={Gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            </select>
          </div>
          <div className="signup1">
          <label>Mobile no: </label>
          <input type="text" value={MobileNo} onChange={(e) => setMobileNo(e.target.value)} />
          </div>
          <div className="signup1">
          <label>Religion: </label>
          <input type="text" value={Religion} onChange={(e) => setReligion(e.target.value)} />
          </div>
          <div className="signup1">
            <label>Nationality: </label>
            <input type="text" value={Nationality} onChange={(e) => setNationality(e.target.value)} />
          </div>
          <div className="signup1">
          <label>Address: </label>
          <input type="text" value={Address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div className="signup1">
          <label>Disability:</label>
            <select value={Disability} onChange={(e) => setDisability(e.target.value)}>
            <option value="yes">Yes</option>
            <option value="no">No</option>
            </select>
          </div>
          <div className="signup1">
            <label>Marital Status: </label>
            <select value={MaritalStatus} onChange={(e) => setMaritalStatus(e.target.value)}>
            <option value="married">Married</option>
            <option value="unmarried">Unmarried</option>
            </select>
          </div>
          <div className="signup1">
          <label>Job Sector: </label>
            <select value={jobSector} onChange={(e) => setJobSector(e.target.value)}>
            <option value="househelp">househelp</option>
            <option value="driver">driver</option>
            <option value="gardener">gardener</option>
            <option value="cook">cook</option>
            <option value="nightGuard">nightguard</option>
            <option value="babbySitter">babysitter</option>
            <option value="careTaker">caretaker</option>
            <option value="petCarer">petcarer</option>
            <option value="homeTutor">hometutor</option>
            <option value="houseKeeper">housekeeper</option>
            </select>
          </div>
          <div className="signup1">
          <label>Job Experience: </label>
          <select value={jobExperience} onChange={(e) => setJobExperience(e.target.value)}>
            <option value="fresher">fresher</option>
            <option value="1-5yrs">1-5 yrs</option>
            <option value="6-10yrs">6-10 yrs</option>
            <option value="11-15yrs">11-15 yrs</option>
            <option value="over15yrs">over 15 yrs</option>
            </select>
          </div>
          <div className="signup1">
          <label>Job Location: </label>
          <input type="text" value={jobLocation} onChange={(e) => setJobLocation(e.target.value)} />
          </div>
          <div className="signup1">
            <label>Availability: </label>
            <select value={availability} onChange={(e) => setAvailability(e.target.value)}>
            <option value="within10days">within 10 days</option>
            <option value="with20days">within 20 days</option>
            <option value="fromNextMonth">from next month</option>
            </select>
          </div>
          <div className="signup1">
          <label>Education Qualification: </label>
          <select value={educationQualification} onChange={(e) => setEducationQualification(e.target.value)}>
            <option value="belowMatriculation">below matriculation</option>
            <option value="matriculation">matriculation</option>
            <option value="higherSecondary">higher secondary</option>
            <option value="graduate">graduate</option>
            <option value="post-graduate">post-graduate</option>
            </select>
          </div>
          <div className="signup1">
          <label>Preferred Salary: </label>
          <input type="text" value={expectedSalary} onChange={(e) => setExpectedSalary(e.target.value)} />
          </div>
          </>
        )}
        {userType === "recruiter" && (
          <>
          <div className="signup1">
            <label>Bio: </label>
            <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
          </div>
          <div className="signup1">
          <label>Contact Number: </label>
          <input type="text" value={contactNumber} onChange={(e) => setContactNumber(e.target.value)} />
          </div>
          </>
        )}
        <button className="btn" type="submit"><b>Sign up</b></button>
      </form>
    </div>
    </>
  );
};

export default Signup;
