import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setRegistrationStep } from "../actions/registrationActions";
import { setIsAuthValue } from "../actions/authActions";

function StepWrapper({ children }) {
  const currentStep = useSelector(store => store.registrationStep.step);
  const dispatch = useDispatch();
  const history = useHistory();

  const nextStep = (actions = [], nextStep) => {
    if (currentStep === 4) {
      dispatch(setIsAuthValue(true));
    } else {
      actions.forEach(action => dispatch(action));
      dispatch(setRegistrationStep(nextStep));
    }
    history.push(`/${nextStep}`);
  };

  return <section className="step-window">{children(nextStep)}</section>;
}

export default StepWrapper;
