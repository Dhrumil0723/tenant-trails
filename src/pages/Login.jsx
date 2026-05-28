import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Login() {
  // ── Controlled form state ─────────────────────────────────
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [globalError, setGlobalError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  // ── Validation ────────────────────────────────────────────
  function validate() {
    const e = {};
    if (!email.trim()) e.email = "Email is required.";
    else if (!email.includes("@")) e.email = "Please enter a valid email.";
    if (!password) e.password = "Password is required.";
    else if (password.length < 6) e.password = "Password must be at least 6 characters.";
    return e;
  }

  // ── Submit handler ────────────────────────────────────────
  function handleSubmit(event) {
    event.preventDefault();
    setGlobalError("");

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const result = login(email, password);
    if (result.success) {
      // useNavigate with navigation state (Lab 2 Part 2 — Navigation State)
      navigate("/dashboard", { state: { message: "Welcome back!" } });
    } else {
      setGlobalError(result.error);
    }
  }

  // Helper: clear a single field error when the user starts typing
  function clearFieldError(field) {
    setErrors((prev) => ({ ...prev, [field]: "" }));
  }

  // ── Render ────────────────────────────────────────────────
  return (
    <div className="auth-bg">
      <div className="auth-card">
        <div className="auth-logo">TenantTrails</div>
        <p className="auth-subtitle">
          See what past tenants had to say, before you sign.
        </p>

        {/* Global auth error */}
        {globalError && (
          <div className="global-error" role="alert">
            {globalError}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          {/* Email */}
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="alex@dal.ca"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                clearFieldError("email");
              }}
              className={errors.email ? "input-error" : ""}
              autoComplete="email"
            />
            {errors.email && (
              <span className="error-text" role="alert">{errors.email}</span>
            )}
          </div>

          {/* Password */}
          <div className="form-field">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                clearFieldError("password");
              }}
              className={errors.password ? "input-error" : ""}
              autoComplete="current-password"
            />
            {errors.password && (
              <span className="error-text" role="alert">{errors.password}</span>
            )}
          </div>

          <button type="submit" className="btn-primary">
            Sign In
          </button>
        </form>

        <p className="auth-footer">
          Don't have an account?{" "}
          <Link to="/signup">Create one</Link>
        </p>

        {/* Demo credentials hint */}
        <div className="demo-box">
          Demo: <strong>alex@dal.ca / password123</strong>
        </div>
      </div>
    </div>
  );
}

export default Login;
