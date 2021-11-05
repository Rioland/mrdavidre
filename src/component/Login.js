import react, { useState, useEffect } from "react";
import Dashboard from "./Dashoard";
import "../App.css";
import { Route ,Link, Redirect} from "react-router-dom";
import axios from "axios";
const api = "http://localhost:9000";
function Login() {
  axios.defaults.withCredentials = true;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loginState, setloginState] = useState(false);
  // const [loginData, setloginData] = useState(false);

  const loginFunction = () => {
    if (username != "" && password != "") {
      axios
        .post(api + "/v1/login", {
          username: username,
          password: password,
        })
        .then((resp) => {
          let prot = resp.data;
          if (prot.error == false) {
          //  setloginData(prot);
           localStorage.setItem("token",prot.token)
            setloginState(true);
          } else {
            alert(prot.message)
            setloginState(false);
          }
          //  return();
        });
    } else {
      alert("All field are requird");
    }
  };
  


  return (
    loginState==false?
    <div className="container">
      <div className="row">
        <h1>Login</h1>
      </div>
      <div className="row">
        <h4 style={{ textAlign: "center" }}>This is a simple api!</h4>
      </div>
      <div className="row input-container">
        {/* name */}
        <div className="col-xs-12">
          <div className="styled-input wide">
            <input
              type="text"
              required
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <label>Username</label>
          </div>
        </div>
        {/* password */}
        <div className="col-xs-12">
          <div className="styled-input wide">
            <input
              type="password"
              required
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            <label>Password</label>
          </div>
        </div>

        <div>
          <Link to="/register">Register</Link>
        </div>
        <div className="col-xs-12">
          <div onClick={loginFunction} className="btn-lrg submit-btn">
            Login
          </div>
        </div>
      </div>
    </div>:<Redirect to="/" exact render={
      ()=>{
        return(
          <Dashboard/>
        );
      }
    } />
  );
}

export default Login;
