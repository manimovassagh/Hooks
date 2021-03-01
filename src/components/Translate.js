
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from './Convert';


const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Persian",
    value: "fa",
  },
];

const Translate = () => {
  const [language, SetLanguage] = useState(options[3]);
  const [text, setText] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter text</label>
          <input value={text} onChange={(e) => setText(e.target.value)} />
        </div>
      </div>
      <Dropdown
        label="Select a Language"
        selected={language}
        onSelectedChange={SetLanguage}
        options={options}
      />
      <hr/>
      <h3 className="ui header">
      <Convert text={text} language={language} />
      </h3>
      
    </div>
  );
};

export default Translate;
