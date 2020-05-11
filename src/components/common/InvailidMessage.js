import React from "react";

function InvailidMessage({ message }) {
  return message ? (
    <div className="error-icon">
      <div className="icon">i</div>
      <div className="container">
        <p className="error-message">{message}</p>
      </div>
    </div>
  ) : null;
}

export default InvailidMessage;
