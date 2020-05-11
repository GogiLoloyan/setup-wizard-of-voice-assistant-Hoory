import React from "react";

function Info({ children, className = "" }) {
  return <p className={`info ${className}`}>{children}</p>;
}

export default Info;
