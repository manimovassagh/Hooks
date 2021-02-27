/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";

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
    label: "The Read color",
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
];

export default () => {
  return (
    <div>
      <Search />
      <Dropdown options={options} />
    </div>
  );
};
