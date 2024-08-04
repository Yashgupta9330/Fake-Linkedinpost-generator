import React from "react";

const ViewsIcon: React.FC = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentcolor"
      width="1.2rem"
      height="1.2rem"
      {...props}
      viewBox="0 0 24 24"
    >
      <g>
        <path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z"></path>
      </g>
    </svg>
  );
};

export default ViewsIcon;
