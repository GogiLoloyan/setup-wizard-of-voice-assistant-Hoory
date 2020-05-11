import React from "react";

function Icons({ getIcon, setGender }) {
  return (
    <div className="styles-configuration__icons">
      <div onClick={() => setGender("female")}>
        {getIcon("female")}
      </div>
      <div onClick={() => setGender("male")}>
        {getIcon("male")}
      </div>
    </div>
  );
}

export default Icons;
