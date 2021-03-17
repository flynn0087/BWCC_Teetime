import React, { Component, useState } from "react";
import Select from "react-select";

function ReactSelectCal(props) {
  //   const [time, onClick] = useState(new Date());

  const options = [
    {
      value: "12:00",
      label: "12:00",
    },
    {
      value: "1:00",
      label: "1:00",
    },
  ];
  const SelectCal = () => <Select options={options} />;
  // console.log(options);
  return (
    <div
      onClick={(e) => {
        if (
          e.target.textContent === "" ||
          e.target.textContent === "Select..."
        ) {
          return;
        }
        props.setTime(e.target.textContent);
        if (props.dateVal !== "" && props.time !== "") {
          //axios call
          console.log(e.target.textContent, "SELECTCAL TIME ON ReactSelectCal.js");
          console.log("Damnnnnn Daniel");
          props.setTime("");
          props.setDateVal("");
        }
        // console.log(e);
        // console.log(e.target);
      }}
    >
      <div>Select A Time</div>
      <SelectCal />
    </div>
  );
}

export default ReactSelectCal;
