import React from "react";

export default function Input(props) {
  return (
    <div>
      <label className="input-label" htmlFor={props.id}>
        {props.label}
      </label>
      <input
        className="input"
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
      />
    </div>
  );
}
