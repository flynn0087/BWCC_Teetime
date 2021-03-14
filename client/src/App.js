/* eslint-disable no-unused-vars */
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import AvailWash from "./pages/AvailWash";
import Calendar from "./pages/Calendar";
import SuccessQR from "./pages/SuccessQR";
import Login from "./pages/Login";
import LogoutPage from "./pages/Logout";
import {AuthProvider} from "../../routes/api/auth";
import PrivateRoute from "./privateRoute/PrivateRoute";

function App() {
  return (
    <div>
      <AuthProvider>
      <Router>
        <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/oauth" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/availwash" component={AvailWash} />
        <PrivateRoute path="/calendar" component={Calendar} />
        <PrivateRoute path ="/successqr" component={SuccessQR} />
        <PrivateRoute path="/logout" component={LogoutPage} />
        </Switch>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
