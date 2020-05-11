import {
  REGISTRATION_STEPS,
  REGISTRATION_STEP,
  REGISTRATION_DONE
} from "../constants/ActionTypes";

const defaultState = {
  steps: [1, 2, 3, 4],
  step: 1,
  done: false
};

const registrationReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REGISTRATION_STEPS:
      return {
        ...state,
        steps: action.payload
      };
    case REGISTRATION_STEP:
      return {
        ...state,
        step: action.payload
      };
    case REGISTRATION_DONE:
      return {
        ...state,
        done: action.payload
      };
    default:
      return state;
  }
};

export default registrationReducer;
