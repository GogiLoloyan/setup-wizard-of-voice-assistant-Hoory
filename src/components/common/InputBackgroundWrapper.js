import React from "react";

function InputBackgroundWrapper({ render, ...rest }) {
  return (
    <div style={{ ...rest }} className="input-background-wrapper">
      {render()}
    </div>
  );
}

export default InputBackgroundWrapper;
