import React, { useState } from "react";
import "./pub.css";
import Publication from "./publicationapi";
import PublicationItem from "./PublicationItem";

const Publications = () => {
  const [pub, setP] = useState(Publication);
  return (
    <section className="container" id="pub" data-aos="slide-up">
      <h1>Publications</h1>
      <div className="pubs">
        <PublicationItem publication={pub} />
      </div>
    </section>
  );
};

export default Publications;
