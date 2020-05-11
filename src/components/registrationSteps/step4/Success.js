import React from "react";
import { useSelector } from "react-redux";
import StepWrapper from "../../../layout/StepWrapper";
import Title from "../../common/Title";
import { female, male } from "../../icon/logos/index";
import Button from "../../common/Button";

function Success() {
  const { name, gender, theme } = useSelector(store => store.voiceAssistant);
  let icon;
  if (gender === "female") {
    icon = female[theme];
  } else {
    icon = male[theme];
  }

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
