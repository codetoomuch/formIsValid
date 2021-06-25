function formIsValid(...args) {
  const isLengthValid = args.map((arg) => arg.length > 0);

  const email = args.filter((arg) => arg.includes("@")).pop();
  console.log(email);
  console.log(args);

  function validateEmail(email) {
    const isEmail = email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
    console.log(isEmail);
  }

  validateEmail(email);
}

const firstName = "Solomon";
const lastName = "David";
const email = "solomon.david@express.com";

formIsValid(firstName, lastName, email);
