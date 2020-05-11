import React from "react";

import StepWrapper from "../../../layout/StepWrapper";
import SubmitButton from "../../common/SubmitButton";
import Title from "../../common/Title";
import Icon from "./components/Icon";
import AssistantNameInput from "./components/AssistantNameInput";
import VoiceAssistantNameValidationWrraper from "../../../layout/VoiceAssistantNameValidationWrraper";

function VoiceAssistantName() {
  return (
    <StepWrapper>
      {nextStep => (
        <VoiceAssistantNameValidationWrraper nextStep={nextStep}>
          {onSubmit => (
            <form className="account-info" onSubmit={e => onSubmit(e)}>
              <Icon />
              <Title>Name your assistant</Title>
              <AssistantNameInput />
              <SubmitButton className="start-button">Start</SubmitButton>
            </form>
          )}
        </VoiceAssistantNameValidationWrraper>
      )}
    </StepWrapper>
  );
}

export default VoiceAssistantName;
