import React from "react";
// const wikiApi="https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=Craig%20Noone"
const Search = () => {
  return (
    <div className="ui form">
      <div className="field">
        <label>Enter your Search</label>
        <input type="text" className="input" />
      </div>
    </div>
  );
};

export default Search;
