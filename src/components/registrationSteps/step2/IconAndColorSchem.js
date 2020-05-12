import React, { useState } from "react";
import { useSelector } from "react-redux";

import {
  setVoiceAssistantGender,
  setVoiceAssistantTheme
} from "../../../actions/voiceAssistantActions";
import StepWrapper from "../../../layout/StepWrapper";
import Icons from "./components/Icons";
import ColorTheme from "./components/ColorTheme";
import Title from "../../common/Title";
import SubmitButton from "../../common/SubmitButton";

function IconAndColorSchem() {
  const {
    gender: defaultGender,
    theme: defaultTheme,
    themes,
    name
  } = useSelector(store => store.voiceAssistant);
  const [gender, setGender] = useState(defaultGender);
  const [theme, setTheme] = useState(defaultTheme);

  const handleSubmit = (e, nextStep, step) => {
    e.preventDefault();
    const genderAction = setVoiceAssistantGender(gender);
    const themeAction = setVoiceAssistantTheme(theme);
    nextStep([genderAction, themeAction], step);
  };

  return (
    <StepWrapper>
      {nextStep => (
        <form
          className="styles-configuration"
          onSubmit={e => handleSubmit(e, nextStep, 3)}
        >
          <Title>{`Select ${name}'s icon`}</Title>
          <Icons
            setGender={setGender}
            selectedGender={gender}
            colors={themes[theme]}
          />
          <Title>Select color scheme</Title>
          <ColorTheme theme={theme} setTheme={setTheme} themes={themes} />
          <SubmitButton className="create-button">Next</SubmitButton>
        </form>
      )}
    </StepWrapper>
  );
}

export default IconAndColorSchem;
