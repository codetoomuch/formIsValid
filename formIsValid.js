function formIsValid(...args) {
  let isEmail = "";

  // validating form fields length

  const isLengthValid = args
    .map((arg) => arg.length > 0)
    .reduce((arg) => arg === true);

  const getEmail = args.find((arg) => arg.includes("@"));

  // validating email

  function validateEmail(email) {
    if (email === undefined) {
      isEmail = false;
      return;
    }
    isEmail = email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    return isEmail;
  }

  validateEmail(getEmail);

  if (isLengthValid && isEmail) {
    console.log(true);
  } else {
    console.log(false);
  }
}

const firstName = "Solomon";
const lastName = "David";
const email = "sol.david@express.com";

formIsValid(firstName, lastName, email);
