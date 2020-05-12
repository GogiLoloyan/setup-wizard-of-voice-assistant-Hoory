import React from "react";
import FemaleIcon from "../../../icon/logos/FemaleIcon";
import MaleIcon from "../../../icon/logos/MaleIcon";

function Icons({ selectedGender, setGender, colors }) {
  return (
    <div className="styles-configuration__icons">
      <FemaleIcon
        colors={colors}
        selected={selectedGender === "female"}
        onClick={() => setGender("female")}
      />
      <MaleIcon
        colors={colors}
        selected={selectedGender === "male"}
        onClick={() => setGender("male")}
      />
    </div>
  );
}

export default Icons;
