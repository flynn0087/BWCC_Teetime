import React, { useContext } from "react";

import { Link } from "react-router-dom";
import LoginContext from "../utils/LoginContext";

function LogoutPage() {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext);
  return (
    <div>
      <div className="container mx-auto">
        <div className="flow-root bg-golf bg-no-repeat bg-fixed bg-cover">
          <p className="mt-20 text-center text-white text-2xl">
            You have successfully logged out!
          </p>
          <div className="flex h-screen justify-center content-center">
            <Link
              className="text-white text-2xl"
              to="/"
              onClick={() => {
                if (isLoggedIn.isSignedIn === true) {
                  setIsLoggedIn({ ...isLoggedIn, isSignedIn: false });
                }
              }}
            >
              <br></br>
              <button
                type="button"
                className="rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
              >
                Return to Log On
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoutPage;
