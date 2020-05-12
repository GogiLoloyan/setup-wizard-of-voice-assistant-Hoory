import {
  VOICE_ASSISTANT_NAME,
  VOICE_ASSISTANT_GENDER,
  VOICE_ASSISTANT_THEME
} from "../constants/ActionTypes";

const defaultState = {
  name: "",
  gender: "female",
  theme: 0,
  themes: [
    ["rgb(96, 11, 251)", "rgb(107, 84, 251)"],
    ["rgb(180, 236, 81)", "rgb(66, 147, 33)"],
    ["rgb(250, 217, 97)", "rgb(247, 107, 28)"],
    ["rgb(245, 81, 95)", "rgb(159, 4, 27)"],
    ["rgb(48, 35, 174)", "rgb(200, 109, 215)"],
    ["rgb(113, 23, 234)", "rgb(234, 96, 96)"],
    ["rgb(0, 99, 214)", "rgb(108, 212, 255)"]
  ]
};

const voiceAssistantReducer = (state = defaultState, action) => {
  switch (action.type) {
    case VOICE_ASSISTANT_NAME:
      return {
        ...state,
        name: action.payload
      };
    case VOICE_ASSISTANT_GENDER:
      return {
        ...state,
        gender: action.payload
      };
    case VOICE_ASSISTANT_THEME:
      return {
        ...state,
        theme: action.payload
      };
    default:
      return state;
  }
};

export default voiceAssistantReducer;
