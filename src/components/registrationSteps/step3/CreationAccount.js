import React from "react";

import StepWrapper from "../../../layout/StepWrapper";
import AccountValidationWrraper from "../../../layout/AccountValidationWrraper";

import Info from "../../common/Info";
import Title from "../../common/Title";
import Seperator from "../../common/Seperator";
import SubmitButton from "../../common/SubmitButton";
import SignUpWithGoogle from "../../common/SignUpWithGoogle";
import InputPassword from "./components/InputPassword";
import InputEmail from "./components/InputEmail";
import InputFullName from "./components/InputFullName";

function CreationAccount() {
  return (
    <StepWrapper>
      {nextStep => (
        <AccountValidationWrraper nextStep={nextStep}>
          {onSubmit => (
            <section className="registration-form">
              <Title>Creation Account</Title>
              <SignUpWithGoogle />
              <Seperator />
              <form className="registration-form__user-form" onSubmit={e => onSubmit(e)}>
                <InputFullName />
                <InputEmail />
                <InputPassword />
                <Info>
                  By registering an account with us you agree to the&nbsp;
                  <a href="#">PP</a> and <a href="#">T&amp;S</a>
                </Info>
                <SubmitButton className="submit-btn">Create Account</SubmitButton>
                <Info className="info-link">
                  Have an account?&nbsp;
                  <b><a href="#">Sign in</a></b>
                </Info>
              </form>
            </section>
          )}
        </AccountValidationWrraper>
      )}
    </StepWrapper>
  );
}

export default CreationAccount;
