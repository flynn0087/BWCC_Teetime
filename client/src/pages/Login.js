/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import { GoogleLogin } from "react-google-login";
// import { refreshTokenSetup } from "../utils/refreshToken";
import axios from "axios";
import LoginContext from "../utils/LoginContext";
import { useHistory } from "react-router-dom";

function Login() {
  const { isLoggedIn, checkIfLoggedIn } = useContext(LoginContext);
  const history = useHistory();
  console.log(isLoggedIn.isSignedIn);

  const googleSuccess = async (res) => {
    const googleId = res.profileObj.googleId;
    const name = res.profileObj.name;
    const email = res.profileObj.email;
    const headshot = res.profileObj.imageUrl;
    console.log(googleId, "googId");
    const google = await res;
    axios({
      method: "POST",
      url: "/api/googlelogin",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        tokenId: google.tokenId,
        id: googleId,
        headshot: headshot,
        email: email,
        name: name,
      },
    })
      .then((response) => {
        console.log(response, "USER INFO");
        if (response) {
          isLoggedIn.checkIfLoggedIn(response);
        }
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
  useEffect(() => {
    console.log("this is useEffect redirect");
    if (isLoggedIn.isSignedIn === true) {
      history.push("/home");
    }
  }, [isLoggedIn.isSignedIn]);
  return (
    <section className="App h-screen w-full flex justify-center items-center bg-green-500">
      <div className="w-full max-w-md bg-gray-800">
        <div className="text-center bg-white shadow-md rounded px-8 py-8 pt-8">
          <h3>{isLoggedIn.name}</h3>
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
