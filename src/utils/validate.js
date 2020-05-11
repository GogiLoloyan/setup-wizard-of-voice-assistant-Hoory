export function validateEmail(mail) {
  const isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail);
  return isValid;
}
export function validatePassword(password) {
  const isValid = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.{8,})/.test(password);
  return isValid;
}
