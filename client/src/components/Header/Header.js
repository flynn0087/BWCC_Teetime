import React, { useContext } from "react";
import LoginContext from "../../utils/LoginContext";

function Input() {
  const { isLoggedIn } = useContext(LoginContext);

  return (
    <div className="px-4 pb-4 pt-8 text-5xl">
      <div className="text-center">
        <h1>Welcome {isLoggedIn.name}</h1>
      </div>
      <br></br>
      <hr></hr>
    </div>
  );
}

export default Input;
