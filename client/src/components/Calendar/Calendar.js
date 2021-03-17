import axios from "axios";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import Navbar from "../Navbar/Navbar";
import ReactSelectCal from "../ReactSelectCal/ReactSelectCal";

function Nalendar(props) {
  const [value, onChange] = useState(new Date());
  const [time, setTime] = useState("");
  const [dateVal, setDateVal] = useState("");
  let val = value.toDateString();
  return (
    <div>
      <Navbar />
      <div className="mx-auto container">
        <ReactSelectCal
          time={time}
          setTime={setTime}
          dateVal={dateVal}
          setDateVal={setDateVal}
          // onClick={(e) => console.log(e.target.textContent)}
          // eslint-disable-next-line no-undef
          // onClick={this.array[i].value}
          // // // eslint-disable-next-line no-undef
          // onClick={console.log(array[0].value)}
        />
        <section className="App h-screen w-full flex justify-center items-center bg-green-500">
          <Calendar
            className="p-5 w-auto"
            onChange={onChange}
            value={[new Date()]}
            onClickDay={() => {
              console.log(val);
              setDateVal(val);
              if ((dateVal !== "") & (time !== "")) {

                //axios call
  
                axios({
                  method: "POST",
                  url: "api/appointments",
                  data :{
                  day: dateVal[0],
                  month: dateVal[1],
                  date : dateVal[2],
                  year: dateVal[3]
                  },
                })
                .then((response) => {
                  console.log(response, "DAY MONTH DATE YEAR CALENDAR.JS");
                  setTime("");
                  setDateVal("");
                })
                .catch((error) => {
                  console.log(error);
                });
                
              }
            }}
          />
        </section>
      </div>
    </div>
  );
}

// import React from 'react';
// require("dotenv").config();

// function App() {

//     let gapi = window.gapi

//     // eslint-disable-next-line no-undef
//     let CLIENT_ID = `${REACT_APP_GOOGLE_CALENDAR_CLIENT_ID}`
//     // eslint-disable-next-line no-undef
//     let API_KEY = `${REACT_APP_GOOGLE_CALENDAR_API_KEY}`
//     let DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"]
//     let SCOPES = "https://www.googleapis.com/auth/calendar.events"

//     const handleClick = () => {
//       gapi.load("client:auth2", () => {
//         console.log("loaded client")

//         gapi.client.init({
//           apiKey: API_KEY,
//           clientId: CLIENT_ID,
//           discoveryDocs: DISCOVERY_DOCS,
//           scope: SCOPES,
//         })

//         gapi.client.load("calendar", "v3", () => console.log("load calendar"))

//         gapi.auth2.getAuthInstance().signIn()
//         .then(() => {

//           let event = {
//             "id": "",
//             "status": "",
//             "htmlLink": "",
//             "summary": "",
//             "description": "",
//             "location": "",

//             "start": {
//               "date": (new Date()).toISOString(),
//               "dateTime": valueOf(),
//               "timeZone": "America/Minneapolis"
//             },
//             "end": {
//               "date": (new Date()).toISOString(),
//               "dateTime": "America/Minneapolis",
//               "timeZone": ""
//             },
//             "attendees": [
//                 {
//                   "id": "",
//                   "email": "",
//                   "displayName": "",
//                 }
//               ],
//           }

//           let request = gapi.client.calendar.events.insert({
//             "calendarId": "primary",
//             "resource": event,
//           })

//           request.execute(event => {
//             console.log(event)
//             window.open(event.htmlLink)
//           })

//           // get events
//           gapi.client.calendar.events.list({
//             "calendarId": "primary",
//             "timeMin": (new Date()).toISOString(),
//             "showDeleted": false,
//             "singleEvents": true,
//             "maxResults": 5,
//             "orderBy": "startTime"
//           }).then(response => {
//             const events = response.result.items
//             console.log("EVENTS: ", events)
//           })

//         })
//       })
//     }

//     return (
//       <div className="App">
//         <header className="App-header">
//           <p>Add to Google Calendar</p>
//           <button onClick={handleClick}>Add Event</button>
//         </header>
//       </div>
//     );
//   }

export default Nalendar;
