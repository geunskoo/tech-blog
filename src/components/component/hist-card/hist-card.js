import * as React from "react"

const HistCard = ({startDate, endDate, content}) => {

  return (
      <div className="hist-card-container">
        <p>{startDate} ~ {endDate}</p>
        <p>{content}</p>
      </div>
  );
};

export default HistCard;  