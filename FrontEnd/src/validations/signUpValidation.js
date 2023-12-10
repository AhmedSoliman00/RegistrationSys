function validation(values) {
 let errors = {};

 
 if (!values.username) {
  errors.username = "Name is required";
 } else if (values.name.length < 3) {
  errors.username = "Name must be more than 2 characters";
 }


 if (!values.email) {
  errors.email = "Email is required";
 } else if (!/\S+@\S+\.\S+/.test(values.email)) {
  errors.email = "Email is invalid";
 }


 if (!values.password) {
  errors.password = "Password is required";
 } else if (values.password.length < 6) {
  errors.password = "Password must be more than 6 characters";
 }

 return errors;
}

export default validation;