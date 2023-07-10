import { useEffect, useContext } from "react";
import { Navigate } from "react-router-dom";

const Logout = (props) => {
  useEffect(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("type");
    window.alert("Logged out");
    console.log("logged out successfully");
  }, []);
  return <Navigate to="/login" />;
};

export default Logout;

