import * as React from "react";
import "./hist-card.css";

const HistCard = ({startDate, endDate, content}) => {

  return (
      <div className="hist-card-wrapper">
        <p className="hist-card-date">{startDate} ~ {endDate}</p>
        <p>{content}</p>
      </div>
  );
};

export default HistCard;  