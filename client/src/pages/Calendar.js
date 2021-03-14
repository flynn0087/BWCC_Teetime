/* eslint-disable no-unused-vars */

import React, { useDebugValue, useState, useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import { AuthContext } from "../../../routes/api/auth";
import Nalendar from "../components/Calendar/Calendar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Navbar from "../components/Navbar/Navbar";

function App( {history} ) {
  const [value, onChange] = useState(new Date());
  let val = value.toDateString();
  return (
    <div>
      <Nalendar />
    </div>
  )
  [history]
  
}

const { currentUser } = useContext(AuthContext);

if (!currentUser) {
  return <Redirect to="/oauth" />
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

export default withRouter (App);
