import "../cssFiles/UserLogin.css";
import { Link } from "react-router-dom";

export default function UserLogin() {
  return (
    <>
      <form className="authorization">
        <input
          type="text"
          className="enterUsername"
          placeholder="Username"
          required
        />
        <input
          type="password"
          className="enterPassword"
          placeholder="Password"
          required
        />
        <Link className="login-link" to="/Home">
          <button className="login-btn">LOGIN</button>n{" "}
        </Link>
      </form>
    </>
  );
}
