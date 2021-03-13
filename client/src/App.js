/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import AvailWash from "./pages/AvailWash";
import Calendar from "./pages/Calendar";
import SuccessQR from "./pages/SuccessQR";
import Login from "./pages/Login";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Login} />
        <Route path="/oauth" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/availwash" component={AvailWash} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/successqr" component={SuccessQR} />
      </Router>
    </div>
  );
}

export default App;
