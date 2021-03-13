/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Navbar from "../components/Navbar/Navbar";

function App(props) {
  const [value, onChange] = useState(new Date());
  return (
    <div>
      <Navbar />
      <Calendar
        onChange={onChange}
        value={value}
        onClickDay={() => {
          console.log({ value });
        }}
      />
    </div>
  );
}

export default App;
