function formIsValid(...args) {
  const argLength = args.length;

  // STATE

  const formValidated = [];

  let isFieldValid = false;
  let isEmail = "";
  let formValid = false;

  const errorMessage = {
    fieldError: "",
    emailError: "",
  };

  // validating form fields length

  function fieldLengthValid(args) {
    const fieldLength = args
      .map((arg) => arg.length > 0)
      .filter((arg) => arg === true).length;

    if (fieldLength === argLength) {
      isFieldValid = true;
    }
    if (fieldLength !== argLength) {
      isFieldValid = false;
      errorMessage.fieldError = "Fields are empty";
    }
  }

  fieldLengthValid(args);

  // validating email

  const getEmail = args.find((arg) => arg.includes("@"));

  function validateEmail(email) {
    if (email === undefined) {
      isEmail = false;
      errorMessage.emailError = "Email must be in proper format";
      return;
    }
    isEmail = email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    return isEmail;
  }

  validateEmail(getEmail);

  if (isFieldValid && isEmail) formValid = true;

  formValidated.push(formValid);
  formValidated.push(errorMessage);

  return formValidated;
}

module.exports = formIsValid;
