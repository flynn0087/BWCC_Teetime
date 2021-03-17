import React, { Component, useState } from "react";
import Select from "react-select";

function ReactSelectCal() {
//   const [time, onClick] = useState(new Date());
  
  const options = [
    {
      value: "12:00",
      label: "12:00",
    },
  ];
  const SelectCal = () => <Select options={options} />;
  console.log(options);
  return (
    <div>
      <SelectCal />
    </div>
  );
}

export default ReactSelectCal;
