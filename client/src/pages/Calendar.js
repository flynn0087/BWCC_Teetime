
import React, { useDebugValue, useState } from "react";
import Demo from "../components/FullCalendar/FullCalendar";
// import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function App() {
  // eslint-disable-next-line no-unused-vars
  const [value, onChange] = useState(new Date());
  let val = value.toDateString();
  return (
    <div>
      <Demo/>
    </div>
  );
}


export default App;
