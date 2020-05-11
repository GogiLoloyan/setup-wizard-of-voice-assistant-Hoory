import { combineReducers } from "redux";
import authReducer from "./authReducer";
import voiceAssistantReducer from "./voiceAssistantReducer";
import registrationReducer from "./registrationReducer";

export default combineReducers({
  auth: authReducer,
  voiceAssistant: voiceAssistantReducer,
  registrationStep: registrationReducer
});
