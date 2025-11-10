import "./signup.css";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [signupForm, setSignupForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/auth/signup",
        signupForm
      );

      // ✅ check properly for success status
      if (response.status === 200 || response.status === 201) {
        toast.success("User signed up successfully ✅");
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      }
    } catch (err) {
      console.error(err);
      toast.error("Signup failed ❌");
    }
  };
  return (
    <>
      <div className="container">
        <div className="form_area">
          <p className="title">SIGN UP</p>
          <form onSubmit={handleSubmit}>
            <div className="form_group">
              <label className="sub_title" htmlFor="name">
                username
              </label>
              <input
                placeholder="Enter your full name"
                className="form_style"
                type="text"
                name="username"
                onChange={handleChange}
                value={signupForm.username}
              />
            </div>
            <div className="form_group">
              <label className="sub_title" htmlFor="email">
                Email
              </label>
              <input
                placeholder="Enter your email"
                id="email"
                className="form_style"
                type="email"
                name="email"
                onChange={handleChange}
                value={signupForm.email}
              />
            </div>
            <div className="form_group">
              <label className="sub_title" htmlFor="password">
                Password
              </label>
              <input
                placeholder="Enter your password"
                id="password"
                className="form_style"
                name="password"
                type="password"
                onChange={handleChange}
                value={signupForm.password}
              />
            </div>
            <div>
              <button className="btn">SIGN UP</button>
              <p>
                Have an Account?{" "}
                <Link className="link" to="/login">
                  Login Here!
                </Link>
              </p>
              <a className="link" href=""></a>
            </div>
            <a className="link" href=""></a>
          </form>
        </div>
        <a className="link" href=""></a>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}
