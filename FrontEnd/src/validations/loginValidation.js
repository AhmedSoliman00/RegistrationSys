function validation(signInData) {
  let errors = {};

  // Email validation
  if (!signInData.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(signInData.email)) {
    errors.email = "Email is invalid";
  } else {
    errors.email = "";
  }

  // Password validation
  if (!signInData.password) {
    errors.password = "Password is required";
  } else if (signInData.password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  } else {
    errors.password = "";
  }

  return errors;
}

export default validation;
