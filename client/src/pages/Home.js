/* eslint-disable no-unused-vars */
import React, { useContext } from "react";

import Header from "../components/Header/Header";
import LoginContext from "../utils/LoginContext";

function Home() {
  const { isLoggedIn } = useContext(LoginContext);
  console.log(isLoggedIn);
  return (
    <div>
      <Header></Header>
    </div>
  );
}

export default Home;
