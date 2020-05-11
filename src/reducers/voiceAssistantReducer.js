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
    {
      "--theme-bg":
        "linear-gradient(45deg, rgb(96, 11, 251) 0%, rgb(107, 84, 251) 100% )",
      "--theme-border": "rgb(96, 11, 251)"
    },
    {
      "--theme-bg":
        "linear-gradient(45deg, rgb(180, 236, 81) 0%, rgb(66, 147, 33) 100%)",
      "--theme-border": "rgb(180, 236, 81)"
    },
    {
      "--theme-bg":
        "linear-gradient(45deg, rgb(250, 217, 97) 0%, rgb(247, 107, 28) 100%)",
      "--theme-border": "rgb(250, 217, 97)"
    },
    {
      "--theme-bg":
        "linear-gradient(45deg, rgb(245, 81, 95) 0%, rgb(159, 4, 27) 100%)",
      "--theme-border": "rgb(245, 81, 95)"
    },
    {
      "--theme-bg":
        "linear-gradient(45deg, rgb(48, 35, 174) 0%, rgb(200, 109, 215) 100%)",
      "--theme-border": "rgb(48, 35, 174)"
    },
    {
      "--theme-bg":
        "linear-gradient(45deg, rgb(113, 23, 234) 0%, rgb(234, 96, 96) 100%)",
      "--theme-border": "rgb(113, 23, 234)"
    },
    {
      "--theme-bg":
        "linear-gradient(45deg, rgb(0, 99, 214) 0%, rgb(108, 212, 255) 100%)",
      "--theme-border": "rgb(0, 99, 214)"
    }
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
