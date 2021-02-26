import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");

  useEffect(()=>{
      console.log("some log");
  },[]);

  return (
    <div className="ui form">
      <div className="field">
        <label>Enter your Search</label>
        <input
          value={term}
          onChange={(e) => setTerm(e.value)}
          className="input"
        />
      </div>
    </div>
  );
};

export default Search;
