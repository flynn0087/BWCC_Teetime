/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import AvailWash from "./pages/AvailWash";
import Calendar from "./pages/Calendar";
import SuccessQR from "./pages/SuccessQR";
import Login from "./pages/Login";
import LogoutPage from "./pages/Logout";
import { LoginContext } from "./utils/UserContext";

function App() {
  const ex = Login.googleSuccess;
  console.log(ex);

  return (
    <div>
      <Router>
        <LoginContext.Provider value={LoginContext}>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/availwash" component={AvailWash} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/successqr" component={SuccessQR} />
          <Route path="/logout" component={LogoutPage} />
        </LoginContext.Provider>
      </Router>
    </div>
  );
}

export default App;
