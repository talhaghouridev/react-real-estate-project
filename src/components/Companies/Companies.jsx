import React from "react";
import "./Companies.scss";
import { COMPANIES_IMAGE } from "../../constants";
const Companies = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {COMPANIES_IMAGE.map((item, i) => (
          <>
            <img src={item} alt={`Image ${i+1}` } />
          </>
        ))}
      </div>
    </section>
  );
};

export default Companies;
