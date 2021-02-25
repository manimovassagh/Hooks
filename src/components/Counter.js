import React from "react";
import { useState } from "react";

const Counter = () => {
  const [counting, setCounting] = useState(null);

  const HandleCounting = () => {
    setCounting(counting + 1);
  };
  return (
    <div>
      <button onClick={() => HandleCounting()}>click me mani</button>
      <p>{counting}</p>
    </div>
  );
};

export default Counter;
