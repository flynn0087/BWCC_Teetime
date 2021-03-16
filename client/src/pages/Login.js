/* eslint-disable no-unused-vars */
import React, {useContext} from "react";
import { GoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "../utils/refreshToken";
import axios from "axios";
import LoginContext from "../utils/LoginContext";

function Login() {

  const { isLoggedIn, checkIfLoggedIn } = useContext(LoginContext);
  const googleSuccess = async (res) => {
    const googleId = res.profileObj.googleId;
    const google = await res;
    console.log(google);
    axios({
      method: "POST",
      url: "/api/googlelogin",
      headers: {
        "Content-Type": "application/json",
      },
      data: { tokenId: google.tokenId, id: googleId },
    })
      .then((response) => {
        if (response.googleId && isLoggedIn === false) {
          checkIfLoggedIn();
        }
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    refreshTokenSetup(res);
  };

  const googleFailure = (res) => {
    console.log("Login failed: res:", res);
    alert("Failed to login. 😢");
  };

  return (
    <section className="App h-screen w-full flex justify-center items-center bg-green-500">
      <div className="w-full max-w-md bg-gray-800">
        <div className="text-center bg-white shadow-md rounded px-8 py-8 pt-8">
          <h3>Sudz-Time</h3>
          <hr></hr>
          <p className="m-10">For Scheduling your Car Wash on the Run</p>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Login"
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy={"single_host_origin"}
            style={{ marginTop: "100px" }}
            isSignedIn={true}
            uxMode="redirect"
            redirectUri="http://localhost:8080/home"
          />
        </div>
      </div>
    </section>
  );
}

export default Login;
