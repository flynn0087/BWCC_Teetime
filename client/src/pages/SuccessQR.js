/* eslint-disable no-unused-vars */
import React from "react";

function SuccessQR() {
  return (
    <div >
      <div class="md:container md:mx-auto">
        <div className="flow-root bg-gray-300">
          <p className="text-center">SUCCESS AND CONFIRMATION</p>
      
          <p className="text-center">You've scheduled a carwash at EXAMPLETIME at EXAMPLELOCATION</p>
        </div>
      </div>

      <div class="flow-root bg-red-100">
        <img className="object-center" alt="qr code" src="https://via.placeholder.com/350"></img>
      </div>

      <div class="flow-root bg-green-100">
        <p className="text-center" >Use this QR code to claim your car wash appointment in the reserved line</p>
        <br></br>
        <p className="text-center" >Refer your friends to the Suds Time App!</p>
      </div>
    </div>
  );
}

export default SuccessQR;
