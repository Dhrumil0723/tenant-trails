import { Link } from 'react-router-dom'
import './Landing.css'

export default function Landing() {
  return (
    <div className="landing">
      <header className="landing-nav">
        <div className="container landing-nav-inner">
          <Link to="/" className="brand">TenantTrails</Link>
          <nav className="landing-nav-actions">
            <Link to="/login" className="nav-link">Sign In</Link>
            <Link to="/login" className="btn btn-primary nav-cta">Get Started</Link>
          </nav>
        </div>
      </header>

      <main className="landing-main">
        <div className="container hero">
          <span className="hero-badge">Launching in Halifax, Nova Scotia</span>

          <h1 className="hero-title">
            Know what you&apos;re<br />
            signing before<br />
            you sign it.
          </h1>

          <p className="hero-subtitle">
            Read honest reviews from past tenants. See AI-generated summaries.
            Make informed decisions about where you live.
          </p>

          <div className="hero-actions">
            <Link to="/login" className="btn btn-primary">Create Free Account</Link>
            <Link to="/login" className="btn btn-outline">Sign In</Link>
          </div>

          <section className="features">
            <div className="feature">
              <div className="feature-icon" aria-hidden="true">⭐</div>
              <h3 className="feature-title">Verified Reviews</h3>
              <p className="feature-desc">Real ratings with photos and videos from past tenants.</p>
            </div>
            <div className="feature">
              <div className="feature-icon" aria-hidden="true">🤖</div>
              <h3 className="feature-title">AI Summaries</h3>
              <p className="feature-desc">Key issues and sentiment extracted from every review.</p>
            </div>
            <div className="feature">
              <div className="feature-icon" aria-hidden="true">💬</div>
              <h3 className="feature-title">Ask Questions</h3>
              <p className="feature-desc">Comment on reviews and get answers from past tenants.</p>
            </div>
          </section>
        </div>
      </main>
    </div>
  )
}
