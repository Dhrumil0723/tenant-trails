// pages/Landing.jsx
// Public landing page. Links to /login and /signup.

import { Link } from "react-router-dom";

function Landing() {
  return (
    <div className="landing-wrap">
      {/* Nav */}
      <nav className="landing-nav">
        <Link to="/" className="landing-logo">TenantTrails</Link>
        <div className="landing-nav-actions">
          <Link to="/login"  className="btn-outline">Sign in</Link>
          <Link to="/signup" className="btn-filled">Get started</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="landing-hero">
        <div className="landing-hero-inner">
          <span className="landing-badge">Halifax's tenant review platform</span>

          <h1 className="landing-title">
            Know your apartment<br />
            <span>before you sign.</span>
          </h1>

          <p className="landing-desc">
            Read honest reviews from real tenants. Search Halifax apartments,
            compare neighbourhoods, and make confident rental decisions.
          </p>

          <div className="landing-actions">
            <Link to="/signup" className="btn-filled btn-large">Get started free</Link>
            <Link to="/login"  className="btn-outline btn-large">Sign in</Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
