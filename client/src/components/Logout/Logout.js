/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import { GoogleLogout } from "react-google-login";


function Logout() {
  const onSuccess = (res) => {
    console.log("Logout successful!", res);
  };

  return (
    <div>
      <Link className="" to="/logout">
      <GoogleLogout
        clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      />
       </Link>
    </div>
  );
}

export default Logout;
