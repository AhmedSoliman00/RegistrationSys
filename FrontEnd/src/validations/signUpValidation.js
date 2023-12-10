function validation(values) {
  let errors = {
    username: "",
    email: "",
    password: ""
  };

  // Username validation
  if (!values.username.trim()) {
    errors.username = "Username is required";
  } else if (values.username.length < 3) {
    errors.username = "Username must be more than 2 characters";
  }

  // Email validation
  if (!values.email) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email is invalid";
  }

  // Password validation
  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 6) {
    errors.password = "Password must be more than 6 characters";
  }

  return errors;
}

export default validation;