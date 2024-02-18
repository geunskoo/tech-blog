import React from "react";
import "./section-card-title.css";

const SectionCardTitle = ({ name }) => {

    return (
        <h3 className="section-card-title-wrapper">{name}</h3>
    );
};

export default SectionCardTitle;
