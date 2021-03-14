import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Link } from "react-router-dom";

function LogoutPage() {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <div className="flow-root bg-green-500">
          <p className="mt-20 text-center text-white text-2xl">
            You have successfully logged out!
          </p>
          <br></br>
          <div className="flex items-center justify-center h-screen">
            <Link className="text-white text-2xl" to="/">
              <button
                type="button"
                className="justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
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
