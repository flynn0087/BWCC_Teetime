/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import OAuth from "./pages/OAuth";
import Home from "./pages/Home";
import AvailWash from "./pages/AvailWash";
import Calendar from "./pages/Calendar";
import SuccessQR from "./pages/SuccessQR";

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={OAuth} />
        <Route path="/oauth" component={OAuth} />
        <Route path="/home" component={Home} />
        <Route path="/availwash" component={AvailWash} />
        <Route path="/calendar" component={Calendar} />
        <Route path="/successqr" component={SuccessQR} />
      </Router>
    </div>
  );
}

export default App;
