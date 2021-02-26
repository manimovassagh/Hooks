import React, { useState } from "react";

const Search = () => {

  const [term, setTerm] = useState("");


  return (
    <div className="ui form">
      <div className="field">
        <label>Enter your Search</label>
        <input value={term} onChange={e => setTerm(e.value)} className="input" />
      </div>
    </div>
  );
};

export default Search;
