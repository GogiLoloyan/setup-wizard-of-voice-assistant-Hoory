import React, { useContext } from "react";
import InvailidMessage from "../../../common/InvailidMessage";
import { VoiceAssistantDataContext } from "../../../../layout/VoiceAssistantNameValidationWrraper";

function AssistantNameInput() {
  const { isError, errClass, $name } = useContext(VoiceAssistantDataContext);
  return (
    <div className="wrapper">
      <input
        type="text"
        autoComplete="off"
        placeholder="Your assistant's name"
        className={errClass(isError, $name.error)}
        defaultValue={$name.value}
        onChange={({ target }) => $name.set(target.value)}
      />
      {isError && <InvailidMessage message={$name.error} />}
    </div>
  );
}

export default AssistantNameInput;
