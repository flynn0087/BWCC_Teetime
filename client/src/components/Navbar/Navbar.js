/* eslint-disable no-unused-vars */
import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="bg-gray-900">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16">
            <nav className="flex items-center">
              <nav>
                <nav className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="/availwash"
                    className="bg-blue-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Available Washes
                  </a>

                  <a
                    href="/calendar"
                    className="text-white hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  >
                    Car Wash Calendar
                  </a>
                </nav>
              </nav>
            </nav>
          </nav>
        </nav>
      </nav>
    </div>
  );
}

export default Navbar;
