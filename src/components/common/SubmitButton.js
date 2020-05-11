import React from "react";

function SubmitButton({ className, children }) {
  return (
    <button type="submit" className={`submit-button ${className}`}>
      {children}
    </button>
  );
}

export default SubmitButton;
