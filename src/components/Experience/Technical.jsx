import React from "react";
import { useState } from "react";
import TechnicalApi from "./technicalapi";
import ExpItem from "./ExpItem";

const Technical = () => {
  const [otherTech] = useState(TechnicalApi);
  return (
    <>
      <div className="container" id="technical">
        <div className="blurright"></div>
        <h1>Techincal Experience</h1>
        <div className="blurleft"></div>
        <ExpItem exp={otherTech} />
      </div>
    </>
  );
};

export default Technical;
