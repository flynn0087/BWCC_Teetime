/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import PrivateRoute from "./utils/PrivateRoutes";
import Calendar from "./pages/Calendar";
import SuccessQR from "./pages/SuccessQR";
import Login from "./pages/Login";
import LogoutPage from "./pages/LogoutPage";
import LoginContext from "./utils/LoginContext";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState({
    isSignedIn: false,
    checkIfLoggedIn: (response) => {
      checkIfLoggedIn(response);
    },
    name: "",
    headshot: "",
    id: "hello i is id",
  });
  console.log(isLoggedIn);

  const checkIfLoggedIn = (response) => {
    if (isLoggedIn.isSignedIn === true) {
      console.log("ALSO FROM APP", response);
      setIsLoggedIn({
        ...isLoggedIn,
        isSignedIn: false,
        id: response.data.googleId,
      });
      console.log()
    }
    console.log("FROM APP", response);

    return setIsLoggedIn({
      ...isLoggedIn,
      isSignedIn: true,
      name: response.data.name,
      headshot: response.data.headshot,
      id: response.data.googleId,
    });
  };
  return (
    <div className="bg-green-500">
      <Router>
        <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
           <Navbar />
          <Route exact path="/" component={Login} />
          <Switch>  
            <Route path="/home" component={Home} />
            <Route path="/calendar" component={Calendar} />
            <Route path="/successqr" component={SuccessQR} />
          </Switch>
          <Route path="/logout" component={LogoutPage} />
        </LoginContext.Provider>
      </Router>
    </div>
  );
}

export default App;
