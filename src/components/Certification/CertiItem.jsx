import React from "react";
import "./certi.css";

const CertiItem = (val) => {
  return (
    <article className="cert-item" id={val.id}>
      <div className="cert-image">
        <img src={val.logo} alt="" />
      </div>
      <h3>{val.name}</h3>
      <h5>
        <i>{val.company}</i>
      </h5>
      <a href={val.url} target="_blank" rel="noopener noreferrer">
        Open
      </a>
    </article>
  );
};
export default CertiItem;
