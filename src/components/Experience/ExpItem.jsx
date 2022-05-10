import React from "react";
import "./exp.css";

const ExpItem = ({ exp }) => {
  return (
    <>
      {exp.map((props) => {
        return (
          <>
            <article className="exp-item" id={props.id}>
              <h2>{props.company}</h2>
              <h4>
                <i>{props.designation}</i>
              </h4>
              <p>{props.description}</p>
              <button>
                <a
                  href={props.certificate}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Certificate
                </a>
              </button>
            </article>
          </>
        );
      })}
    </>
  );
};

export default ExpItem;
