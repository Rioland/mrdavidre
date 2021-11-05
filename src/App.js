import react, { useState, useEffect } from "react";

//  import {BrowserRouter as Router}from
import Login from "./component/Login";
import Register from "./component/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Dashboard from "./component/Dashoard";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => {
            
            return <Dashboard />;
          }}
        />

        <Route
          exact
          path="/login"
          render={() => {
            return <Login />;
          }}
        />

<Route
          exact
          path="/register"
          render={() => {
            return <Register />;
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
