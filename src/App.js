/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import { useState } from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";

const items = [
  {
    title: "What is a Framework",
    content: "a Framework is something that make your life easier",
  },
  {
    title: "why use a framework",
    content: "because it is more secure and usable",
  },
  {
    title: "what is the most favorite framework?",
    content: "the best is React Js",
  },
];
const options = [
  {
    label: "The Red color",
    value: "red",
  },
  {
    label: "The Green color",
    value: "green",
  },
  {
    label: "The Blue color",
    value: "blue",
  },
  {
    label: "The Pink color",
    value: "pink",
  },
  {
    label: "The olive color",
    value: "olive",
  },
];

const showAccordion = () => {
  if (window.location.pathname === "/") {
    return <Accordion items={items} />;
  }
};

const showList = () => {
  if (window.location.pathname === "/list") {
    return <Search />;
  }
};

const showDropdown = () => {
  if (window.location.pathname === "/dropdown") {
    return <Dropdown />;
  }
};

const showTranslate=()=>{
  if (window.location.pathname === "/translate") {
    return <Translate />;
  }

}

export default () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {showAccordion()}
      {showList()}
      {showDropdown()}
      {showTranslate()}
    </div>
  );
};
