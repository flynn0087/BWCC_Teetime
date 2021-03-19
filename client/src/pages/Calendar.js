
import React, { useDebugValue, useState } from "react";
import Demo from "../components/FullCalendar/FullCalendar";
// import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function App() {
  const [value, onChange] = useState(new Date());
  let val = value.toDateString();
  return (
    <div>
      <Demo/>
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
