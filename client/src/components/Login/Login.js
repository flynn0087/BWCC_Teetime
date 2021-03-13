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
