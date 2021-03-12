/* eslint-disable no-unused-vars */
import React from "react";
import Success from "../components/Success/Success";

function SuccessQR() {
  return (
    <div>
      <div className="container mx-auto">
        <div className="flow-root bg-gray-300">
          <p className="text-center my-10">SUCCESS AND CONFIRMATION</p>

          <p className="text-center my-10">
            You've scheduled a carwash at EXAMPLETIME at EXAMPLELOCATION
          </p>
        </div>
      </div>

      <div className="container bg-red-100">
        <Success />
      </div>

      <div className="container flow-root bg-green-100">
        <p className="text-center mt-10 mb-6">
          Use this QR code to claim your car wash appointment in the reserved
          line
        </p>
        <br></br>
        <p className="text-center my-6 mb-10">
          Refer your friends to the Suds Time App!
        </p>
      </div>
    </div>
  );
}

export default SuccessQR;
