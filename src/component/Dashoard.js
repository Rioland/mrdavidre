import React, { useState, useEffect } from "react";
import "./Dash.css";
import axios from "axios";
// import { Redirect, Route } from "react-router";
import {  Link, Redirect } from "react-router-dom";

import Table from "./Table";
const api = "http://localhost:9000";

function Dashboard() {
  axios.defaults.withCredentials = true;
  const [loginState, setloginState] = useState();
  const [allusers, setallusers] = useState([]);
  
  const [token, setToken] = useState(localStorage.getItem("token"));
  console.log(token);
  const [profile, setProfile] = useState("");
  useEffect(() => {
    // const token=localStorage.getItem("token");
    axios
      .get(api + "/v1/profile", {
        headers: {
          Authorization: token,
        },
      })
      .then((resp) => {
        if (resp.data.error == true) {
          setloginState(false);
          // console.log(resp.data);
        } else {
          setloginState(true);
        }
      });
  }, []);
  //   if(token!=""){
  //     setloginState(true);
  //     // setuserToken(token)
  //    }else{
  //        setloginState(false);
  //    }

  useEffect(() => {
    axios
      .get(api + "/v1/allusers", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => {
        // console.log(res.data.data)
        setallusers(res.data.data);
      });
  }, []);

  return loginState === false ||loginState===undefined || token === "" || token===null || token ===undefined ? (
    <Redirect to="/login" exact />
  ) : (
    <div className="d-flex p-2 bd-highlight">
      <div
        className="d-flex flex-column flex-shrink-0 bg-light vh-100"
        style={{ width: 100 }}
      >
        <ul className="nav nav-pills nav-flush flex-column mb-auto text-center">
          <li className="nav-item">
            <Link className="nav-link active py-3 border-bottom">
              <i className="fa fa-home"></i> <small>Home</small>{" "}
            </Link>
          </li>

          <li>
            <Link to="#" className="nav-link py-3 border-bottom">
              <i
               
                className="fa fa-dashboard"
              ></i>{" "}
              <small>Dashboard</small>{" "}
            </Link>
          </li>
          <li>
            {" "}
            <Link to="#" className="nav-link py-3 border-bottom">
              {" "}
              <i className="fa fa-first-order"></i> <small>My Orders</small>{" "}
            </Link>{" "}
          </li>
          <li
           
          >
            {" "}
            <Link to="#" className="nav-link py-3 border-bottom">
              {" "}
              <i className="fa fa-cog"></i> <small>Settings</small>{" "}
            </Link>{" "}
          </li>
          <li>
            {" "}
            <Link to="#" className="nav-link py-3 border-bottom">
              {" "}
              <i className="fa fa-bookmark"></i> <small>Bookmark</small>{" "}
            </Link>{" "}
          </li>
        </ul>

        <div className="dropdown border-top">
          {" "}
          <Link
            to="#"
            className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle"
            id="dropdownUser3"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt="mdo"
              width="24"
              height="24"
              className="rounded-circle"
            />{" "}
          </Link>
          <ul
            className="dropdown-menu text-small shadow"
            aria-labelledby="dropdownUser3"
          >
            <li>
              <Link className="dropdown-item" to="#">
                sdfsdfsdf
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Settings
              </Link>
            </li>
            <li>
              <Link className="dropdown-item" to="#">
                Profile
              </Link>
            </li>
            <li>
              <hr className="dropdown-divider" />
            </li>
            <li>
              <Link
                onClick={() => {

                  localStorage.clear();
                  window.location.reload()
                }}
                className="dropdown-item"
                to="#"
              >
                Sign out
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div class="d-flex p-2 bd-highlight"></div>
        {/* {
      Mode=="p"?<Profile />:  <Table props={allusers} />
    } */}

        <Table props={allusers} />
        <button
          onClick={() => {
            setProfile(token);
          }}
          type="button"
          class="btn btn-primary"
          style={{ marginRight: 20 }}
        >
          Get Token
        </button>
        <button  onClick={()=>{
             axios
      .get(api + "/v1/profile", {
        headers: {
          Authorization: token,
        },
      })
      .then((resp) => {
       
    const detail=resp.data.data.user;
    setProfile("UID: "+detail.id+ ",  name: "+detail.name+",  phone: "+detail.phone+",  Username: "+detail.username)
    // console.log(detail);
      });
        }} type="button" class="btn btn-secondary">
          Get Token Details
        </button>
        <br />
        <br />
        <div className="text-break" style={{width: "auto"}}>
          {profile}
        </div>
        
      </div>
    </div>
  );
}

export default Dashboard;
