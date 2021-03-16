/* eslint-disable no-unused-vars */
import React from "react";
import { GoogleLogin } from "react-google-login";
import { refreshTokenSetup } from "../utils/refreshToken";
import axios from "axios";

function Login() {
  const googleSuccess = async (res) => {
    const google = await res;
    console.log(google);
    axios({
      method: "POST",
      url: "/api/googlelogin",
      headers: {
        "Content-Type": "application/json",
      },
      data: { tokenId: google.tokenId },
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    // refreshTokenSetup(res);
  };

  const googleFailure = (res) => {
    console.log("Login failed: res:", res);
    alert("Failed to login. 😢");
  };

  return (
    <section className="App container h-screen w-full flex justify-center items-center bg-green-500">
      <div className="w-full max-w-md bg-gray-800">
        <div className="text-center bg-white shadow-md rounded px-8 py-8 pt-8">
          <h3>Suds-Time</h3>
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
          />
        </div>
      </div>
    </section>
  );
}

export default Login;
