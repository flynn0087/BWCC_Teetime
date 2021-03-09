/* eslint-disable no-unused-vars */
import React from "react";
import Login from "./components/Login/Login";
import Logout from "./components/Logout/Logout";
import Input from "./components/Input/Input";

require("dotenv").config();

function App() {
  return (
    <section className="App h-screen w-full flex justify-center items-center bg-green-500">
      <div className="w-full max-w-md bg-gray-800">
        <form action="" className=" bg-white shadow-md rounded px-8 py-8 pt-8">
          <Input
            type="email"
            name="email"
            id=""
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300 "
            placeholder="Johnbull@example.com"
          />
          <Input
            type="password"
            name="email"
            id=""
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline border-blue-300"
            placeholder="Enter your password"
          />
          <Login />
          <Logout />
        </form>
      </div>
    </section>
  );
}
export default App;
