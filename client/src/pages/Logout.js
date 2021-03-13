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
            Click this link to return to login page!
          </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LogoutPage;
