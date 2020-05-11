import React from "react";

function Button({ children, onClick }) {
  return (
    <button type="submit" onClick={onClick} className="button">
      {children}
    </button>
  );
}

export default Button;
