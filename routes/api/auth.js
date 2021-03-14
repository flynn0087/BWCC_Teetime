const express = require("express");
const router = express.Router();
const { googlelogin } = require("../../controllers/authController");
import React, { useEffect, useState } from "react";
export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user);
      setPending(false);
    });
  }, []);

  if(pending){
    return <>Loading...</>;
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

router.get("/", (req, res) => {
  res.send("hello");
});

router.post("/", googlelogin);

module.exports = router;
