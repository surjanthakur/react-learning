import "./signup.css";

export default function Login() {
  const [signupForm, setSignupForm] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target.value;
    setSignupForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      <div className="container">
        <div className="form_area">
          <p className="title">LOGIN</p>
          <form onSubmit={handleSubmit}>
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
              <button className="btn">LOGIN UP</button>
              <p>
                not Have an Account?{" "}
                <a className="link" href="">
                  signup Here!
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
