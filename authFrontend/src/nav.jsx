import "./nav.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="main">
        <Link to="login">login</Link>&nbsp;&nbsp;
        <Link to="signup">Signup</Link>
      </div>
    </>
  );
}
