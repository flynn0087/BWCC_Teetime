/* eslint-disable no-unused-vars */
import React from "react";

import Success from "../components/Success/Success";
import Navbar from "../components/Navbar/Navbar";

function SuccessQR(  ) {
  return (
    <div className="bg-golf bg-no-repeat bg-fixed bg-cover">
      <div className="container mx-auto">
        <div className="flow-root ">
          <p className="text-center my-10 text-yellow-300 text-4xl">SUCCESS AND CONFIRMATION</p>

          <p className="text-center text-black font-bold my-10 text-2xl">
            You've scheduled a teetime at EXAMPLETIME at Bushwood CC
          </p>
        </div>
      </div>

      <div className="container ">
        <Success />
      </div>

      <div className="container flow-root  h-screen">
        <p className="text-center text-black font-bold mt-10 mb-6 text-2xl">
          Use this QR code to Check In!
        </p>
        <br></br>
        <p className="animate-bounce text-center font-bold  text-black my-6 mb-10 text-2xl">
          Refer your friends to the Bushwood CC & Tee Time App!
        </p>
      </div>
    </div>
  );

}


export default SuccessQR;
