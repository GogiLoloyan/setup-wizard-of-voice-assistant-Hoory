import React from "react";
import { useSelector } from "react-redux";
import { useLink } from "valuelink";
import { setVoiceAssistantName } from "../actions/voiceAssistantActions";

const VoiceAssistantDataContext = React.createContext(null);

const VoiceAssistantNameValidationWrraper = props => {
  const { name } = useSelector(store => store.voiceAssistant);

  const $name = useLink(name);
  const $error = useLink(false);

  $name.check(x => x, "Name should not be empty.");

  const errClass = (isError, error) =>
    `account-info__input ${isError && error ? "error" : ""}`;

  const handleOnSubmit = e => {
    e.preventDefault();
    const valid = !$name.error;
    if (valid) handleDispatch();
    $error.set(!valid);
  };

  const handleDispatch = () => {
    const action = setVoiceAssistantName($name.value);
    const step = 2;
    props.nextStep([action], step);
  };

  const state = {
    $name,
    isError: $error.value,
    errClass
  };

  return (
    <VoiceAssistantDataContext.Provider value={state}>
      {props.children(handleOnSubmit)}
    </VoiceAssistantDataContext.Provider>
  );
};

export default VoiceAssistantNameValidationWrraper;
export { VoiceAssistantDataContext };
