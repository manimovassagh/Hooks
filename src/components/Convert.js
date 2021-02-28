import React, { useState, useEffect } from "react";

const Convert = ({ language, text }) => {
  useEffect(() => {
    console.log("new language text");
  }, [language, text]);

  return <h1>Hi to new</h1>;
};

export default Convert;
