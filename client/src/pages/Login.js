/* eslint-disable no-unused-vars */
import React, { useContext, useEffect } from "react";
import { GoogleLogin } from "react-google-login";
// import { refreshTokenSetup } from "../utils/refreshToken";
import axios from "axios";
import LoginContext from "../utils/LoginContext";
import { useHistory } from "react-router-dom";


function Login() {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
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
    <section className="App container h-screen w-full flex justify-center items-center bg-green-500 shadow-2xl">
      <div className="w-full max-w-md bg-gray-800 shadow-2xl">
        <div className="text-center bg-white rounded pb-8 pl-8 pr-8 pt-8 text-2xl">
          <p>The Tee-Time Scheduler</p>
          <img
            src="https://st2.depositphotos.com/1457362/7253/v/600/depositphotos_72532695-stock-illustration-golf-emblem.jpg"
            alt="logo"
            height="400px"
            width="400px"
          ></img>

          <hr></hr>
          <p className="m-10">It's Tee-Time</p>
          <GoogleLogin
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText="Login with Google"
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
