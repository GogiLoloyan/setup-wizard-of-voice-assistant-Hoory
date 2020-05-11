import React from "react";

function Icons({ getIcon, setGender }) {
  return (
    <div className="styles-configuration__icons">
      <img
        src={getIcon("female")}
        onClick={() => setGender("female")}
        alt="icon"
      />
      <img src={getIcon("male")} onClick={() => setGender("male")} alt="icon" />
    </div>
  );
}

export default Icons;
