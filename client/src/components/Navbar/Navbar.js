/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";
import Logout from "../Logout/Logout";

function Navbar() {
  return (
    <div>
      <nav className="bg-gray-900">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16">
            <nav className="flex items-center">
              <nav>
                <nav className="ml-10 flex items-baseline space-x-4">
                  <Link to="/calendar"
                    className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Car Wash Calendar
                  </Link>
                </nav>
                <nav className="ml-10 flex items-baseline space-x-4">
                  <Link to="/successQR"
                    className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                   Success QR
                  </Link>
                </nav>
              </nav>
              <Logout />
            </nav>
          </nav>
        </nav>
      </nav>
    </div>
  );
}

export default Navbar;
