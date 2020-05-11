import {
  VOICE_ASSISTANT_NAME,
  VOICE_ASSISTANT_GENDER,
  VOICE_ASSISTANT_THEME
} from "../constants/ActionTypes";

export const setVoiceAssistantName = name => ({
  type: VOICE_ASSISTANT_NAME,
  payload: name
});
export const setVoiceAssistantGender = gender => ({
  type: VOICE_ASSISTANT_GENDER,
  payload: gender
});
export const setVoiceAssistantTheme = theme => ({
  type: VOICE_ASSISTANT_THEME,
  payload: theme
});
