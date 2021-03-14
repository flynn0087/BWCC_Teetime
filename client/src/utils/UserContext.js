import React, { createContext } from "react";

export const LoginContext = createContext({
  isLoggedIn: false,
  name: "",
  headshot: "",
});
