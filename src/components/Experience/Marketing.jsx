import React, { useState } from "react";
import ExpItem from "./ExpItem";
import MarketingApi from "./marketingapi";

const Marketing = () => {
  const [other] = useState(MarketingApi);
  return (
    <>
      <div className="container" id="marketing" data-aos="fade-down">
        <div className="blurright"></div>
        <div className="content">
          <h1>Marketing & Graphic Designing</h1>
        </div>
        <div className="blurleft"></div>
        <ExpItem exp={other} />
      </div>
    </>
  );
};

export default Marketing;
