import React, { createContext } from "react";

const LoginContext = createContext({
  isLoggedIn: false,
  checkIfLoggedIn: (response) => {},
  name: "",
  headshot: "",
  id: "",
});

export default LoginContext;
