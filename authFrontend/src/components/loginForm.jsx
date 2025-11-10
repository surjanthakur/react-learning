import "./signup.css";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/auth/login",
        loginForm
      );
      if (response.status == 200 || response.status == 201) {
        toast.success(`${loginForm.email} login successfully ✅`);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      }
    } catch (err) {
      toast.err("something went wrong ❌");
      console.log(err);
    }
  };
  return (
    <>
      <div className="container">
        <div className="form_area">
          <p className="title">LOGIN</p>
          <form onSubmit={handleSubmit}>
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
                value={loginForm.email}
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
                value={loginForm.password}
              />
            </div>
            <div>
              <button className="btn">LOGIN UP</button>
              <p>
                not Have an Account?{" "}
                <Link className="link" to="/signup">
                  signup Here!
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
