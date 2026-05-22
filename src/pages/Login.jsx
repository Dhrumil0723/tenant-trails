import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import './Login.css'

export default function Login() {
  const [email, setEmail] = useState('alex@dal.ca')
  const [password, setPassword] = useState('password123')
  const [error, setError] = useState('')
  const { signIn } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email || !password) {
      setError('Please enter both email and password.')
      return
    }
    signIn(email)
    navigate('/home')
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-brand">TenantTrails</h1>
        <p className="login-subtitle">Welcome back. Sign in to read and share honest reviews.</p>

        <form className="login-form" onSubmit={handleSubmit}>
          <label className="field">
            <span className="field-label">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="field-input"
              autoComplete="email"
            />
          </label>

          <label className="field">
            <span className="field-label">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="field-input"
              autoComplete="current-password"
            />
          </label>

          {error && <div className="login-error">{error}</div>}

          <button type="submit" className="btn btn-primary btn-block">Sign In</button>
        </form>

        <p className="login-footer">
          Don&apos;t have an account?{' '}
          <Link to="/login" className="login-link">Create one</Link>
        </p>

        <p className="login-demo">
          Demo: <span className="login-demo-creds">alex@dal.ca / password123</span>
        </p>
      </div>
    </div>
  )
}
