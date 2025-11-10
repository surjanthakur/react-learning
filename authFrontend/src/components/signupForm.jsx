import "./signup.css";
import { useState } from "react";

export default function Signup() {
  const [signupForm, setSignupForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  handleChange = (e) => {
    const { name, value } = e.target.value;
    setSignupForm((prev) => ({ ...prev, [name]: value }));
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="container">
        <div className="form_area">
          <p className="title">SIGN UP</p>
          <form onChange={handleSubmit}>
            <div className="form_group">
              <label className="sub_title" for="name">
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
              <label className="sub_title" for="email">
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
              <label className="sub_title" for="password">
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
                <a className="link" href="">
                  Login Here!
                </a>
              </p>
              <a className="link" href=""></a>
            </div>
            <a className="link" href=""></a>
          </form>
        </div>
        <a className="link" href=""></a>
      </div>
    </>
  );
}
