/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import AvailWash from "./pages/AvailWash";
import Calendar from "./pages/Calendar";
import SuccessQR from "./pages/SuccessQR";
import Login from "./pages/Login";
import LogoutPage from "./pages/LogoutPage";
import LoginContext from "./utils/LoginContext";

function App() {
  return (
    <div>
      <Router>
<<<<<<< HEAD
        <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/oauth" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/availwash" component={AvailWash} />
        <Route path="/calendar" component={Calendar} />
        <Route path ="/successqr" component={SuccessQR} />
        <Route path="/logout" component={LogoutPage} />
        </Switch>
=======
        <LoginContext.Provider value={LoginContext}>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/availwash" component={AvailWash} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/successqr" component={SuccessQR} />
          <Route path="/logout" component={LogoutPage} />
        </LoginContext.Provider>
>>>>>>> 4531a11d8509a9f84384fcd6fbdb2af4be704ae7
      </Router>
    </div>
  );
}

export default App;
