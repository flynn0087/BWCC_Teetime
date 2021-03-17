import React, { Component } from "react";
import { Redirect, Route, useLocation } from "react-router-dom";
import { fakeAuth } from "../Login/Login";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();

  return (
    <Route {...rest}>
      {fakeAuth.isAuthenticated === true ? (
        <Component />
      ) : (
        <Redirect to={{ pathname: "/oauth", state: { from: location } }} />
      )}
    </Route>
  );
};

export default PrivateRoute;
