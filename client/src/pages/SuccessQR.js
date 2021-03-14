/* eslint-disable no-unused-vars */
import React from "react";

import Success from "../components/Success/Success";
import Navbar from "../components/Navbar/Navbar";

function SuccessQR(  ) {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto">
        <div className="flow-root bg-green-500">
          <p className="text-center my-10 text-yellow-300 text-4xl">SUCCESS AND CONFIRMATION</p>

          <p className="text-center text-white my-10 text-2xl">
            You've scheduled a carwash at EXAMPLETIME at EXAMPLELOCATION
          </p>
        </div>
      </div>

      <div className="container bg-green-500">
        <Success />
      </div>

      <div className="container flow-root bg-green-500 h-screen">
        <p className="text-center text-white mt-10 mb-6 text-2xl">
          Use this QR code to claim your car wash appointment in the reserved
          line
        </p>
        <br></br>
        <p className="text-center text-white my-6 mb-10 text-2xl">
          Refer your friends to the Suds Time App!
        </p>
      </div>
    </div>
  );

}


export default SuccessQR;
