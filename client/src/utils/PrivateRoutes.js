import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import LoginContext from "./LoginContext";

function PrivateRoute({ component: Component, ...props }) {
  const { isLoggedIn } = useContext(LoginContext);
  return (
    <Route
      {...props}
      render={(routeProps) => {
        return isLoggedIn.isSignedIn === true ? <Component {...routeProps} /> : <Redirect to={"/"} />;
      }}
    />
  );
}
export default PrivateRoute;
