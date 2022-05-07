import React from "react";
import "./pub.css";

const PublicationItem = ({ publication }) => {
  return (
    <>
      {publication.map((val) => {
        return (
          <>
            <article className="pub-item" id={val.id}>
              <div className="pub-image">
                <img src={val.image} alt="" />
              </div>
              <h3>{val.title}</h3>
              <h5>
                <i>{val.journal}</i>
              </h5>
              <a href={val.url} target="_blank" rel="noopener noreferrer">
                Open
              </a>
            </article>
          </>
        );
      })}
    </>
  );
};

export default PublicationItem;
