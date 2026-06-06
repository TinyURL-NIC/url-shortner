import { useState } from "react";
import "./LoginRegister.css";
import { FaLock, FaUser, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { login } from "../../services/authService";
import { useNavigate } from "react-router-dom";

const LoginRegister = () => {
  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [action, setAction] = useState("");
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);

  const registerLink = () => {
    setAction(" active");
  };

  const loginLink = () => {
    setAction("");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await login({
        identifier,
        password,
      });

      setError("");
      navigate("/dashboard");
    } catch {
      setError("Invalid credentials");
    }
  };

  return (
    <>
      <div className={`container${action}`}>
        <div className="form-box login">
          {/* <form action=""> */}
          <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <div className="input-box">
              <FaUser className="icon" />
              {/* <input type="text" placeholder="Username" required /> */}
              <input
                type="text"
                placeholder="Username"
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                required
              />
            </div>
            <div className="input-box">
              <FaLock className="icon" />
              {/* <input
                type={showLoginPassword ? "text" : "password"}
                placeholder="Password"
                required
              /> */}
              <input
                type={showLoginPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {showLoginPassword ? (
                <FaEyeSlash
                  className="password-icon"
                  onClick={() => setShowLoginPassword(false)}
                />
              ) : (
                <FaEye
                  className="password-icon"
                  onClick={() => setShowLoginPassword(true)}
                />
              )}
            </div>
            <div className="remember-forget">
              <label>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#">Forgot password?</a>
            </div>

            {error && <p className="error-message">{error}</p>}

            <button type="submit">Login</button>

            <div className="register-link">
              <p>
                Don't have an account?{" "}
                <a href="#" onClick={registerLink}>
                  Register
                </a>
              </p>
            </div>
          </form>
        </div>

        <div className="form-box register">
          <form action="">
            <h1>Registration</h1>
            <div className="input-box">
              <FaUser className="icon" />
              <input type="text" placeholder="Username" required />
            </div>
            <div className="input-box">
              <FaEnvelope className="icon" />
              <input type="email" placeholder="Email" required />
            </div>
            <div className="input-box">
              <FaLock className="icon" />
              <input
                type={showRegisterPassword ? "text" : "password"}
                placeholder="Password"
                required
              />
              {showRegisterPassword ? (
                <FaEyeSlash
                  className="password-icon"
                  onClick={() => setShowRegisterPassword(false)}
                />
              ) : (
                <FaEye
                  className="password-icon"
                  onClick={() => setShowRegisterPassword(true)}
                />
              )}
            </div>
            <div className="remember-forget">
              <label>
                <input type="checkbox" /> I agree to the terms & conditions
              </label>
            </div>

            <button type="submit">Register</button>

            <div className="register-link">
              <p>
                Already have an account?{" "}
                <a href="#" onClick={loginLink}>
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default LoginRegister;
