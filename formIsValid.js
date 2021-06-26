function formIsValid(...args) {
  const argLength = args.length;

  let isFieldValid = false;
  let isEmail = "";
  let formValid = false;

  // validating form fields length

  function fieldLengthValid(args) {
    const fieldLength = args
      .map((arg) => arg.length > 0)
      .filter((arg) => arg === true).length;

    if (fieldLength === argLength) {
      isFieldValid = true;
    }
  }

  fieldLengthValid(args);

  // validating email

  const getEmail = args.find((arg) => arg.includes("@"));

  function validateEmail(email) {
    if (email === undefined) {
      isEmail = false;
      return;
    }
    isEmail = email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    return isEmail;
  }

  validateEmail(getEmail);

  if (isFieldValid && isEmail) formValid = true;

  return formValid;
}

const firstName = "Solomon";
const lastName = "David";
const email = "sol.david@express.com";

formIsValid(firstName, lastName, email);
