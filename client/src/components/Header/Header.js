import React, { useContext } from "react";
import LoginContext from "../../utils/LoginContext";

function Input() {
  const { isLoggedIn } = useContext(LoginContext);

  return (
    <div className="px-4 pb-4 text-5xl">
      <div>
        <h1>Welcome {isLoggedIn.name}</h1>
        <img className="rounded-full" src={isLoggedIn.headshot} alt="headshot"></img>
      </div>
      <br></br>
      <hr></hr>
    </div>
  );
}

export default Input;
