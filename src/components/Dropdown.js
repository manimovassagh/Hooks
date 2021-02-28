import React, { useState, useEffect, useRef } from "react";

const Dropdown = ({ label,options, selected, onSelectedChange }) => {
  const [open, SetOpen] = useState(false);

  const ref = useRef();
  useEffect(() => {
    document.body.addEventListener("click", (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      SetOpen(false);
    });
  }, []);

  const colorList = options.map((option, index) => {
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });
  console.log(ref.current);

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{label}</label>
        <div
          onClick={() => {
            SetOpen(!open);
          }}
          className={`ui  ${selected.value} label selection dropdown    ${
            open ? "visible active" : ""
          }`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label} </div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {colorList}
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default Dropdown;
