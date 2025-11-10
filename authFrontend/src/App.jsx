import "./App.css";
import Signup from "./components/signupForm";
import Login from "./components/loginForm";
import Navbar from "./nav";
import { Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Route path="/signup" element={Signup}></Route>
        <Route path="/login" element={Login}></Route>
      </Router>
    </>
  );
}

export default App;
