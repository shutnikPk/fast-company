import React from "react";
const QualityComponent = ({ qual }) => {
  return (
    <span className={`badge bg-` + qual.color}>
      {qual.name}
    </span>
  );
};

export default QualityComponent;
