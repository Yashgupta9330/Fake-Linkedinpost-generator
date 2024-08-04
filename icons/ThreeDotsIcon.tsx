import React from "react";

const ThreeDotsHorizontalSimple: React.FC = (props) => {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" {...props}>
      <circle cx="5" cy="12" r="2"></circle>
      <circle cx="12" cy="12" r="2"></circle>
      <circle cx="19" cy="12" r="2"></circle>
    </svg>
  );
};

export default ThreeDotsHorizontalSimple;
