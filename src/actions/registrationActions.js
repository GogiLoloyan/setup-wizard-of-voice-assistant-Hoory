import {
  REGISTRATION_STEPS,
  REGISTRATION_STEP,
  REGISTRATION_DONE
} from "../constants/ActionTypes";

export const setRegistrationSteps = steps => ({
  type: REGISTRATION_STEPS,
  payload: steps
});
export const setRegistrationStep = step => ({
  type: REGISTRATION_STEP,
  payload: step
});
export const setRegistrationDone = bool => ({
  type: REGISTRATION_DONE,
  payload: bool
});
