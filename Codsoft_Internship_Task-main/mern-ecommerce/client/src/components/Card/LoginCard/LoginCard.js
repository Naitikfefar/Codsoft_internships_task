import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./LoginCard.css";

const LoginCard = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (!email || !password) return setError("Please fill in all fields");
    setLoading(true);
    try {
      const res = await axios.post("/api/auth/login", { email, password });
      // on success navigate to account page (adjust as needed)
      if (res.status === 200) navigate("/account/me");
      else setError("Login failed");
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message)
        setError(err.response.data.message);
      else setError("Unable to contact server or invalid credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login__card__container">
      <div className="login__card">
        <div className="login__header">
          <h1>Login</h1>
        </div>
        <form className="login__inputs" onSubmit={handleSubmit}>
          <div className="email__input__container input__container">
            <label className="email__label input__label">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="email__input login__input"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="password__input__container input__container">
            <label className="password__label input__label">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="password__input login__input"
              placeholder="**********"
            />
          </div>
          {error && <div className="auth__error">{error}</div>}
          <div className="login__button__container">
            <button className="login__button" type="submit" disabled={loading}>
              {loading ? "Logging in..." : "LOGIN"}
            </button>
          </div>
        </form>
        <div className="login__other__actions">
          <div className="login__forgot__password">Forgot password?</div>
          <div className="login__new__account">
            Don't have account?{" "}
            <Link to="/account/register">Create account</Link>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
