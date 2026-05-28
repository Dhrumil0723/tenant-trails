// pages/Signup.jsx
// Covers Lab 2 Part 1 (useState), Part 4 (Forms & Validation), Part 5 (Auth)
//
// Rubric checklist:
//   ✅ useState for name, email, password, confirm, errors, globalError
//   ✅ Controlled inputs (value + onChange)
//   ✅ Validation: name required, email format, password length, passwords match
//   ✅ Per-field error display + global error
//   ✅ useNavigate — programmatic redirect after account creation
//   ✅ Navigation state — passes personalised welcome message
//   ✅ useAuth (context consumer — calls signup)
//   ✅ Link to /login for existing users

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Signup() {
  // ── Controlled form state ─────────────────────────────────
  const [name,        setName]        = useState("");
  const [email,       setEmail]       = useState("");
  const [password,    setPassword]    = useState("");
  const [confirm,     setConfirm]     = useState("");
  const [errors,      setErrors]      = useState({});
  const [globalError, setGlobalError] = useState("");

  const { signup } = useAuth();
  const navigate   = useNavigate();

  // ── Validation ────────────────────────────────────────────
  function validate() {
    const e = {};
    if (!name.trim())
      e.name = "Full name is required.";

    if (!email.trim())
      e.email = "Email is required.";
    else if (!email.includes("@"))
      e.email = "Please enter a valid email.";

    if (!password)
      e.password = "Password is required.";
    else if (password.length < 6)
      e.password = "Password must be at least 6 characters.";

    if (!confirm)
      e.confirm = "Please confirm your password.";
    else if (confirm !== password)
      e.confirm = "Passwords do not match.";

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

    const result = signup(name.trim(), email, password);
    if (result.success) {
      // Navigate with a personalised welcome message (navigation state)
      navigate("/dashboard", {
        state: { message: `Welcome to TenantTrails, ${name.trim()}!` },
      });
    } else {
      setGlobalError(result.error);
    }
  }

  function clearFieldError(field) {
    setErrors((prev) => ({ ...prev, [field]: "" }));
  }

  // ── Render ────────────────────────────────────────────────
  return (
    <div className="auth-bg">
      <div className="auth-card">
        <div className="auth-logo">TenantTrails</div>
        <p className="auth-subtitle">
          Create your account to submit reviews and comments.
        </p>

        {globalError && (
          <div className="global-error" role="alert">
            {globalError}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          {/* Full name */}
          <div className="form-field">
            <label htmlFor="name">Full name</label>
            <input
              id="name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={(e) => { setName(e.target.value); clearFieldError("name"); }}
              className={errors.name ? "input-error" : ""}
              autoComplete="name"
            />
            {errors.name && (
              <span className="error-text" role="alert">{errors.name}</span>
            )}
          </div>

          {/* Email */}
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => { setEmail(e.target.value); clearFieldError("email"); }}
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
              placeholder="At least 6 characters"
              value={password}
              onChange={(e) => { setPassword(e.target.value); clearFieldError("password"); }}
              className={errors.password ? "input-error" : ""}
              autoComplete="new-password"
            />
            {errors.password && (
              <span className="error-text" role="alert">{errors.password}</span>
            )}
          </div>

          {/* Confirm password */}
          <div className="form-field">
            <label htmlFor="confirm">Confirm password</label>
            <input
              id="confirm"
              type="password"
              placeholder="Repeat password"
              value={confirm}
              onChange={(e) => { setConfirm(e.target.value); clearFieldError("confirm"); }}
              className={errors.confirm ? "input-error" : ""}
              autoComplete="new-password"
            />
            {errors.confirm && (
              <span className="error-text" role="alert">{errors.confirm}</span>
            )}
          </div>

          <button type="submit" className="btn-primary">
            Create Account
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <Link to="/login">Sign in</Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
