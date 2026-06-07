import { useState } from "react";
import "./RegisterPage.css";
import { FaLock, FaUser, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleRegister = (event) => {
    event.preventDefault();

    console.log({
      username,
      email,
      password,
    });
  };

  return (
    <div className="register-wholePage">
      <div className="register-container">
        <div className="register-box">
          <form onSubmit={handleRegister}>
            <h1>Register</h1>

            <div className="input-box">
              <FaUser className="icon" />
              <input
                type="text"
                className="input-field"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            <div className="input-box">
              <FaEnvelope className="icon" />
              <input
                type="email"
                className="input-field"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-box">
              <FaLock className="icon" />

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="input-field"
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
                <input type="checkbox" /> I agree to the terms & conditions
              </label>
            </div>

            <button type="submit" className="submit-button">Register</button>

            <div className="register-link">
              <p>
                Already have an account? <a href="/">Login</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
