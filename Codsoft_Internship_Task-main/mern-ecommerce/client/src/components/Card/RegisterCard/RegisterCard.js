import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./RegisterCard.css";

const RegisterCard = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    if (!fname || !lname || !email || !password)
      return setError("Please fill in all fields");
    setLoading(true);
    try {
      const res = await axios.post("/api/auth/register", {
        firstName: fname,
        lastName: lname,
        email,
        password,
      });
      if (res.status === 201 || res.status === 200) navigate("/account/login");
      else setError("Registration failed");
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message)
        setError(err.response.data.message);
      else setError("Unable to contact server");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register__card__container">
      <div className="register__card">
        <div className="register__header">
          <h1>Create Account</h1>
        </div>
        <form className="register__inputs" onSubmit={handleSubmit}>
          <div className="fname__input__container reg__input__container">
            <label className="fname__label input__label">First name</label>
            <input
              value={fname}
              onChange={(e) => setFname(e.target.value)}
              type="text"
              className="fname__input register__input"
            />
          </div>
          <div className="lname__input__container reg__input__container">
            <label className="lname__label input__label">Last name</label>
            <input
              value={lname}
              onChange={(e) => setLname(e.target.value)}
              type="text"
              className="lname__input register__input"
            />
          </div>
          <div className="email__input__container reg__input__container">
            <label className="email__label input__label">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="email__input register__input"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="password__input__container reg__input__container">
            <label className="password__label input__label">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="password__input register__input"
            />
          </div>
          {error && <div className="auth__error">{error}</div>}
          <div className="register__button__container">
            <button
              className="register__button"
              type="submit"
              disabled={loading}
            >
              {loading ? "Creating..." : "Create Account"}
            </button>
          </div>
        </form>
        <div className="register__other__actions">
          <div className="register__login__account">
            Already have account? <Link to="/account/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterCard;
