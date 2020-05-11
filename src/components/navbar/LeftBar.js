import React from "react";
import Seperator from "../common/Seperator";

function LeftBar({ children }) {
  const [logo, list] = children;
  return (
    <div className="bar">
      {logo}
      <Seperator />
      {list}
    </div>
  );
}

export default LeftBar;
