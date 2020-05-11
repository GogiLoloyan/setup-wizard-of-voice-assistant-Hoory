import React from "react";
import icon from "../icon/google_icon.svg";

function SignUpWithGoogle() {
  return (
    <button type="button" className="button-google">
      <img src={icon} alt="Google" />
      Sign Up with Google
    </button>
  );
}

export default SignUpWithGoogle;
