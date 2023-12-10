import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <h1>App</h1>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-up" element={<SignUp />} />
        <Route path="home" element={<Home />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
