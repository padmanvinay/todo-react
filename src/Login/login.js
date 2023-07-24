import TextField from "@mui/material/TextField";
import { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const Authenticate = () => {
    if (email === "vin" && password === "care") {
      localStorage.setItem("isValid", true);
      navigate("/user");
    } else {
      alert("Invalid Login Credentials");
    }
  };

  return (
    <>
      <div className="todoContainer">
        <h2> Todo List Creator</h2>
        <div className="LoginContainer">
          <h2>Login</h2>
        </div>
        <div className="emailContainer">
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            label="Email Id"
            variant="outlined"
            required
          ></TextField>
        </div>
        <div className="passwordContainer">
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            variant="outlined"
            required
          ></TextField>
        </div>
        <div className="loginButton">
          <button onClick={Authenticate} className="innerButton">
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Login;
