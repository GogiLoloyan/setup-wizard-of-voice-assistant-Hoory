import React from "react";
import { useSelector } from "react-redux";
import StepWrapper from "../../../layout/StepWrapper";
import Title from "../../common/Title";
import Button from "../../common/Button";
import FemaleIcon from "../../icon/logos/FemaleIcon";
import MaleIcon from "../../icon/logos/MaleIcon";

function Success() {
  const { name, gender, theme, themes } = useSelector(store => store.voiceAssistant);
  const Icon = gender === "female" ? FemaleIcon : MaleIcon;
  return (
    <StepWrapper>
      {nextStep => (
        <div className="success">
          <Icon colors={themes[theme]} />
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
