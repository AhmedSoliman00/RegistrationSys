import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import validation from "../validations/signUpValidation";
import axios from "axios";

function SignUp() {
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setError] = useState({});

  function handleChange(e) {
    setSignUpData({ ...signUpData, [e.target.id]: e.target.value });
    
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validation(signUpData);
    setError(validationErrors);
    if (
      validationErrors.username === "" &&
      validationErrors.email === "" &&
      validationErrors.password === ""
    ) {
      axios.post("http://localhost:8081/signup", signUpData)
        .then((res) => {
          navigate("/");
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4 mx-auto" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg focus:outline-red-300"
          id="username"
          onChange={handleChange}
        />
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
        <button className="bg-orange-400 text-white p-3 rounded-lg uppercase font-bold hover:duration-500 hover:bg-orange-600 transition-colors ">
          SignUp
        </button>
      </form>
      <div className="mt-5">
        <p>Have an account?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-600">Sign in</span>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
