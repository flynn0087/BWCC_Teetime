/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";
import Logout from "../Logout/Logout";
import React, { useContext } from "react";
import LoginContext from "../../utils/LoginContext";

function Navbar() {
  const { isLoggedIn } = useContext(LoginContext);
  return (
    <nav className="bg-gray-900 py-2 flex flex-row">
      <Link to="/home" className="pl-4">
        <img className="rounded-full" src={isLoggedIn.headshot} alt="headshot"></img>
      </Link>
      <div className="ml-10 flex items-center space-x-4 justify-end">
        <Link
          to="/home"
          className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Home
        </Link>
        <Link
          to="/calendar"
          className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Tee Time Calendar
        </Link>
        <Link
          to="/successQR"
          className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
        >
          Success QR
        </Link>
        <Logout />
      </div>
    </nav>
  );
}

export default Navbar;
