import React from "react";

function Input(props) {
  return (
    <div className="px-4 pb-4">
      <label htmlFor="email" className="text-sm block font-bold  pb-2">
        EMAIL ADDRESS
      </label>
      <input
        type={props.type}
        name={props.name}
        id={props.id}
        className={props.className}
        placeholder={props.placeholder}
      />
    </div>
  );
}

export default Input;
