import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";
import { FaLock, FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { login } from "../../services/authService";

function LoginPage() {
  const navigate = useNavigate();

  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await login({
        identifier,
        password,
      });

      navigate("/dashboard");
    } catch {
      setError("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>

          <div className="input-box">
            <FaUser className="icon" />
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

            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            {showPassword ? (
              <FaEyeSlash
                className="password-icon"
                onClick={() => setShowPassword(false)}
              />
            ) : (
              <FaEye
                className="password-icon"
                onClick={() => setShowPassword(true)}
              />
            )}
          </div>

          <div className="remember-forget">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forgot Password?</a>
          </div>

          {error && <p className="error-message">{error}</p>}

          <button type="submit">Login</button>

          <div className="register-link">
            <p>
              Don't have an account? <a href="/register">Register</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
