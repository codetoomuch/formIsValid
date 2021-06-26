function formIsValid(...args) {
  const isLengthValid = args.map((arg) => arg.length > 0);

  const getEmail = args.find((arg) => arg.includes("@"));

  // validating email

  function validateEmail(email) {
    if (email === undefined) {
      console.log(false);
      return;
    }
    const isEmail = email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    console.log(isEmail);
  }

  validateEmail(getEmail);
}

const firstName = "Solomon";
const lastName = "David";
const email = "sol.david@express.com";

formIsValid(firstName, lastName, email);
