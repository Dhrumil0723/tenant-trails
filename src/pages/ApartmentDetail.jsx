// pages/ApartmentDetail.jsx
// Covers Lab 2 Part 1 (useEffect — page title side effect)
//          Part 2 (useParams, Link, useNavigate)
//          Part 5 (Protected — wrapped in ProtectedRoute in App.jsx)

import { useParams, Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";

import { useAuth }    from "../context/AuthContext";
import StarDisplay    from "../components/StarDisplay";
import { apartments } from "../data/mockData";

function getInitials(name) {
  return name.split(" ").map((n) => n[0]).join("").toUpperCase().slice(0, 2);
}

function ApartmentDetail() {
  // ── Part 2: useParams — read :id from the URL ──────────────
  const { id }         = useParams();
  const navigate       = useNavigate();
  const { user, logout } = useAuth();

  const apartment = apartments.find((a) => a.id === parseInt(id));

  // ── Part 1: useEffect — update browser tab title ───────────
  useEffect(() => {
    if (apartment) {
      document.title = `${apartment.name} — TenantTrails`;
    } else {
      document.title = "Not Found — TenantTrails";
    }
    // Cleanup: restore default title when leaving the page
    return () => {
      document.title = "TenantTrails";
    };
  }, [apartment]);

  // ── Handlers ────────────────────────────────────────────────
  function handleLogout() {
    logout();
    navigate("/login");
  }

  // ── Not found ────────────────────────────────────────────────
  if (!apartment) {
    return (
      <div>
        <nav className="navbar">
          <Link to="/dashboard" className="navbar-logo">TenantTrails</Link>
          <div className="navbar-spacer" />
        </nav>
        <div className="not-found">
          <h2>Apartment not found</h2>
          <Link to="/dashboard">← Back to apartments</Link>
        </div>
      </div>
    );
  }

  // ── Render ───────────────────────────────────────────────────
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/dashboard" className="navbar-logo">TenantTrails</Link>
        <div className="navbar-spacer" />
        <div className="navbar-user">
          <div className="user-avatar">{getInitials(user.name)}</div>
          <span className="user-name">{user.name}</span>
          <button className="btn-signout" onClick={handleLogout}>Sign out</button>
        </div>
      </nav>

      <div className="detail-bg">
        <div className="detail-content">

          {/* Back link */}
          <Link to="/dashboard" className="back-link">← Back to apartments</Link>

          {/* Hero image */}
          <div className="detail-hero">
            <img
              src={apartment.image}
              alt={apartment.name}
              onError={(e) => {
                e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(apartment.name)}&size=860&background=e2e8f0&color=64748b`;
              }}
            />
          </div>

          {/* Name + rating */}
          <div className="detail-header">
            <h1 className="detail-name">{apartment.name}</h1>
            <div className="detail-rating-block">
              <span className="detail-rating-num">{apartment.rating.toFixed(1)}</span>
              <StarDisplay rating={apartment.rating} size={20} />
            </div>
          </div>

          {/* Address */}
          <div className="detail-addr">
            <span>📍</span>
            {apartment.address} · {apartment.neighbourhood}
          </div>

          {/* Tags */}
          {apartment.tags.length > 0 && (
            <div className="detail-tags">
              {apartment.tags.map((tag) => (
                <span key={tag} className="detail-tag">{tag}</span>
              ))}
            </div>
          )}

          {/* AI summary — conditional rendering */}
          {apartment.aiSummary && (
            <div className="ai-card">
              <div className="ai-card-label">✨ AI Summary</div>
              <p className="ai-card-text">{apartment.aiSummary}</p>
            </div>
          )}

          {/* Reviews */}
          <h2 className="reviews-heading">
            Reviews ({apartment.reviewCount})
          </h2>

          {apartment.reviews.map((review) => (
            <div key={review.id} className="review-card">
              <div className="review-top">
                <div>
                  <div className="review-author">{review.author}</div>
                  <StarDisplay rating={review.rating} size={13} />
                </div>
                <span className="review-date">{review.date}</span>
              </div>
              <p className="review-body">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ApartmentDetail;
