import axios from "axios";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import Navbar from "../Navbar/Navbar";
import ReactSelectCal from "../ReactSelectCal/ReactSelectCal";

function Nalendar(_props) {
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
        />
        <section className="App h-screen w-full flex justify-center items-center bg-green-500">
          <Calendar
            className="p-5 w-auto"
            onChange={onChange}
            value={[new Date()]}
            onClickDay={() => {
              setDateVal(val);
              if ((dateVal !== "") & (time !== "")) {
                console.log(dateVal, time ,"dateVal and time")

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
                .then((_response) => {
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



export default Nalendar;
