import React, { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";

import axios from "axios";
const api = "http://localhost:9000";
function Register() {
axios.defaults.withCredentials = true;
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [comPassword, setcomPassword] = useState("");
  const register = () => {
    if (
      username !== "" &&
      password !== "" &&
      phoneNumber !== "" &&
      comPassword !== "" &&
      name != ""
    ) {
      if (comPassword == password) {
        axios
          .post(api+"/v1/register", {
            name: name,
            password: password,
            username: username,
            phoneNumber: phoneNumber,
          })
          .then((res) => {
           let prot=res.data;
           if(prot.error===false){
             alert("successfull please login")
           }
          });
      } else {
        alert("password not match");
      }
    }else{
		alert("All field are required")
	}
  };
  return (
    <div className="container">
      <div className="row">
        <h1>Register</h1>
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
                setName(e.target.value);
              }}
            />
            <label>Name</label>
          </div>
        </div>
        {/* email */}
        <div className="col-md-6 col-sm-12">
          <div className="styled-input" style={{ float: "right" }}>
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
        {/* phone */}
        <div className="col-md-6 col-sm-12">
          <div className="styled-input" style={{ float: "right" }}>
            <input
              type="text"
              required
              onChange={(e) => {
                setphoneNumber(e.target.value);
              }}
            />
            <label>Phone Number</label>
          </div>
        </div>
        {/* password */}
        <div className="col-md-6 col-sm-12">
          <div className="styled-input">
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              required
            />
            <label>Password</label>
          </div>
        </div>
        {/* password again */}
        <div className="col-md-6 col-sm-12">
          <div className="styled-input">
            <input
              type="password"
              required
              onChange={(e) => {
                setcomPassword(e.target.value);
              }}
            />
            <label>Comfirm Password</label>
          </div>
        </div>

        <div>
          <Link to="/login">Login</Link>
        </div>
        <div className="col-xs-12">
          <div onClick={register} className="btn-lrg submit-btn">
            Register
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
