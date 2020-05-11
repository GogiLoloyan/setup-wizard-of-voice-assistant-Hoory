import { female, male } from "../components/icon/logos";

export const selectIconByParams = (gender, theme) =>
  gender === "female" ? female[theme] : male[theme];
