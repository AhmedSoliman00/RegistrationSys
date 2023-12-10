import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import validation from "../validations/loginValidation";
import axios from "axios";

function SignIn() {
  const navigate = useNavigate();
  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({}); 
  
  const handleChange = (e) => {
    setSignInData({ ...signInData, [e.target.id]: e.target.value });
  }

  const handleSubmit =  (e) => {
    e.preventDefault();
    const validationErrors = validation(signInData);
    setErrors(validationErrors);
    if (
      validationErrors.email === "" &&
      validationErrors.password === ""
    ) {
      axios.post("http://localhost:8081/signin", signInData)
          .then((res) => {
            if (res.data.message === "success") {
              navigate("/home");
            } else {
              console.log(res.data)
              alert("Invalid credentials");
            }
          })
    }
  } // This closing brace was misplaced

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form className="flex flex-col gap-4 mx-auto" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg focus:outline-red-300"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg focus:outline-red-300"
          id="password"
          onChange={handleChange}
        />
        {Object.keys(errors).length > 0 && (
          <div className="text-red-500">
            {Object.values(errors).map((error, index) => (
              <p key={index}>{error}</p>
            ))}
          </div>
        )}
        <button
          className="bg-orange-400 text-white p-3 rounded-lg uppercase font-bold hover:duration-500 hover:bg-orange-600 transition-colors "
        >
          Sign In
        </button>
      </form>
      <div className="mt-5">
        <p>Dont have an account?</p>
        <Link to={"/sign-up"}>
          <span className="text-blue-600">Sign Up</span>
        </Link>
      </div>
    </div>
  );
}

export default SignIn;