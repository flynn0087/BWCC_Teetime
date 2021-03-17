import React, { useState } from "react";
import { Redirect, useLocation } from "react-router-dom";

export default function Login() {
  const { state } = useLocation();
  const { from } = state || { from: { pathname: "/" } };
  const [redirectToReferrer, setRedirectToReferrer] = useState(false);

  const login = () => {
    fakeAuth.authenticate(() => {
      setRedirectToReferrer(true);
    });
  };

  if (redirectToReferrer) {
    return <Redirect to={from} />;
  }

  return (
    <div>
      <p>You must log in to view the page at {from.pathname}</p>
      <button onClick={login}>Log in</button>
    </div>
  );
}

/* A fake authentication function */
export const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 100);
  }
};

// /* eslint-disable no-unused-vars */
// import React from "react";
// import axios from "axios";

// import { GoogleLogin } from "react-google-login";

// import { refreshTokenSetup } from "../../utils/refreshToken";

// function Login() {
//   const onSuccess = (res) => {
//     console.log(res, res.profileObj);
//     axios({
//       method: "POST",
//       url: "http://localhost:8080/api/googlelogin",
//       data: { tokendId: res.tokendId },
//     })
//       .then((response) => {
//         console.log(response);
//       })
//       .catch((error) => {
//         console.log(error);
//       });

//     refreshTokenSetup(res);
//   };

//   const onFailure = (res) => {
//     console.log("Login failed: res:", res);
//     alert("Failed to login. 😢 ");
//   };

//   return (
//     <div>
//       <GoogleLogin
//         clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
//         buttonText="Login"
//         onSuccess={onSuccess}
//         onFailure={onFailure}
//         cookiePolicy={"single_host_origin"}
//         style={{ marginTop: "100px" }}
//         isSignedIn={true}
//       />
//     </div>
//   );
// }

// export default Login;
