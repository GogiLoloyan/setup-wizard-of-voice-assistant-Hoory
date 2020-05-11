import React from "react";
import { useSelector } from "react-redux";
import StepWrapper from "../../../layout/StepWrapper";
import Title from "../../common/Title";
import Button from "../../common/Button";
import { selectIconByParams } from "../../../utils/selectIconByParams";

function Success() {
  const { name, gender, theme } = useSelector(store => store.voiceAssistant);
  const icon = selectIconByParams(gender, theme);

  return (
    <StepWrapper>
      {nextStep => (
        <div className="success">
          <div className="success__icon">
            <img src={icon} alt="icon" />
          </div>
          <Title>Fantastico 🎉</Title>
          <p className="success__text">
            You have successfully setup the Hoory widget on your website!
            <br />
            Proceed to Admin Dashboard to start training <b>{name}</b>
          </p>
          <Button onClick={nextStep}>Go to Admin Dashboard</Button>
        </div>
      )}
    </StepWrapper>
  );
}

export default Success;
