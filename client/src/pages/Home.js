/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import Course from "../components/Course/Course"
import Header from "../components/Header/Header";
import LoginContext from "../utils/LoginContext";

function Home() {
  const { isLoggedIn } = useContext(LoginContext);
  return (
    <div className="bg-golf bg-no-repeat bg-fixed bg-cover">
      
      <Header></Header>
      
      
      <Course></Course>
      
    </div>
  );
}

export default Home;
