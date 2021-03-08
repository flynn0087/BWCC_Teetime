import React from "react";
import { GoogleLogout } from "react-google-login";

function Logout() {
  const onSuccess = (res) => {
    console.log("Logout successful!", res);
  };

  return (
    <div>
      <GoogleLogout clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID} buttonText="Logout" onLogoutSuccess={onSuccess} />
    </div>
  );
}

export default Logout;
