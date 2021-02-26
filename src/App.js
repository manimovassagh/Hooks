/* eslint-disable import/no-anonymous-default-export */
import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

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

export default () => {
  return (
    <div>
      <Search />
    </div>
  );
};
