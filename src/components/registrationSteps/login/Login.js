import React from "react";

import Info from "../../common/Info";
import Title from "../../common/Title";
import Seperator from "../../common/Seperator";
import SubmitButton from "../../common/SubmitButton";
import SignUpWithGoogle from "../../common/SignUpWithGoogle";
import InputPassword from "./components/InputPassword";
import InputEmail from "./components/InputEmail";
import LoginValidationWrraper from "../../../layout/LoginValidationWrraper";

function Login() {
  return (
    <LoginValidationWrraper>
      {onSubmit => (
        <section className="login-form">
          <Title>Sign in to your account</Title>
          <SignUpWithGoogle />
          <Seperator />
          <form className="login-form__login" onSubmit={onSubmit}>
            <InputEmail />
            <InputPassword />

            <SubmitButton className="submit-btn">Sign In</SubmitButton>
            <Info className="info-link">
              Don't have an account?&nbsp;
              <b>
                <a href="#">Sign Up</a>
              </b>
            </Info>
            <Info className="info-link">
              <b>
                <a href="#">Forgot password?</a>
              </b>
            </Info>
          </form>
        </section>
      )}
    </LoginValidationWrraper>
  );
}

export default Login;
