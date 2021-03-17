/* eslint-disable no-unused-vars */

import React, { useDebugValue, useState } from "react";
import Nalendar from "../components/Calendar/Calendar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function App() {
  const [value, onChange] = useState(new Date());
  let val = value.toDateString();
  return (
    <div>
      <Nalendar />
    </div>
  );
}

// function App() {
//   const [value, onChange] = useState(new Date());

//   return (
//     <div>
//       <DateTimePicker
//         onChange={onChange}
//         value={value}
//         isCalendarOpen={true}
//         format={"y-MM-dd"}
//         // minutePlaceholder={"mm"}
//         //hourPlaceholder={"hh"}
//         onClick={console.log(value)}
//         minDate={new Date()}
//       />
//     </div>
//   );
// }

export default App;
