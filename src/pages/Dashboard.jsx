// pages/Dashboard.jsx
// Covers ALL five Lab 2 topics:
//
//   Part 1 — useState (search, neighbourhood, sortBy, welcomeMsg)
//   Part 1 — useEffect (auto-dismiss welcome banner after 4 s)
//   Part 1 — Conditional rendering ({welcomeMsg && <banner>}, {filtered.length === 0 && ...})
//   Part 2 — Link (apartment cards navigate to /apartment/:id)
//   Part 2 — useNavigate (logout handler)
//   Part 2 — useLocation (read navigation state from Login/Signup)
//   Part 3 — useAuth (context consumer — user, logout)
//   Part 5 — Protected (wrapped in ProtectedRoute in App.jsx)

import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { useAuth }    from "../context/AuthContext";
import StarDisplay    from "../components/StarDisplay";
import { apartments } from "../data/mockData";

// ── Helpers ──────────────────────────────────────────────────────
function getInitials(name) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}

// Unique neighbourhood list for the filter dropdown
const NEIGHBOURHOODS = [
  "All Neighbourhoods",
  ...new Set(apartments.map((a) => a.neighbourhood)),
];

// ── Component ─────────────────────────────────────────────────────
function Dashboard() {
  const { user, logout } = useAuth();
  const navigate         = useNavigate();
  const location         = useLocation();

  // ── State ───────────────────────────────────────────────────────
  // Lab 2 Part 1: useState
  const [search,        setSearch]        = useState("");
  const [neighbourhood, setNeighbourhood] = useState("All Neighbourhoods");
  const [sortBy,        setSortBy]        = useState("Highest Rated");
  const [welcomeMsg,    setWelcomeMsg]    = useState(
    location.state?.message ?? ""  // Lab 2 Part 2: navigation state
  );

  // ── Side effects ────────────────────────────────────────────────
  // Lab 2 Part 1: useEffect — auto-dismiss the welcome banner
  useEffect(() => {
    if (!welcomeMsg) return;
    const timer = setTimeout(() => setWelcomeMsg(""), 4000);
    return () => clearTimeout(timer); // cleanup
  }, [welcomeMsg]);

  // ── Derived data ─────────────────────────────────────────────────
  const filtered = apartments
    .filter((apt) => {
      const q = search.trim().toLowerCase();
      const matchSearch =
        q === "" ||
        apt.name.toLowerCase().includes(q) ||
        apt.address.toLowerCase().includes(q) ||
        apt.neighbourhood.toLowerCase().includes(q);
      const matchNbhd =
        neighbourhood === "All Neighbourhoods" ||
        apt.neighbourhood === neighbourhood;
      return matchSearch && matchNbhd;
    })
    .sort((a, b) => {
      if (sortBy === "Highest Rated") return b.rating - a.rating;
      if (sortBy === "Lowest Rated")  return a.rating - b.rating;
      if (sortBy === "Most Reviews")  return b.reviewCount - a.reviewCount;
      if (sortBy === "A–Z")           return a.name.localeCompare(b.name);
      return 0;
    });

  const totalReviews     = apartments.reduce((s, a) => s + a.reviewCount, 0);
  const uniqueNbhdCount  = new Set(apartments.map((a) => a.neighbourhood)).size;

  // ── Handlers ─────────────────────────────────────────────────────
  function handleLogout() {
    logout();
    navigate("/login"); // useNavigate — programmatic redirect after logout
  }

  // ── Render ───────────────────────────────────────────────────────
  return (
    <div>
      {/* ── Navbar ─────────────────────────────────────────────── */}
      <nav className="navbar">
        <Link to="/dashboard" className="navbar-logo">TenantTrails</Link>

        {/* Search bar — controls `search` state */}
        <div className="navbar-search">
          <span className="navbar-search-icon">🔍</span>
          <input
            type="text"
            placeholder="Search apartments by address or neighbourhood..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="navbar-spacer" />

        <div className="navbar-user">
          <div className="user-avatar">{getInitials(user.name)}</div>
          <span className="user-name">{user.name}</span>
          <button className="btn-signout" onClick={handleLogout}>
            Sign out
          </button>
        </div>
      </nav>

      {/* ── Welcome banner (conditional rendering + useEffect dismiss) */}
      {welcomeMsg && (
        <div className="welcome-banner">
          <span>👋 {welcomeMsg}</span>
          <button
            className="welcome-banner-dismiss"
            onClick={() => setWelcomeMsg("")}
            aria-label="Dismiss"
          >
            ×
          </button>
        </div>
      )}

      {/* ── Main content ────────────────────────────────────────── */}
      <div className="dashboard-bg">
        <div className="dashboard-content">

          {/* Header */}
          <h1 className="dashboard-title">Apartments in Halifax</h1>
          <p className="dashboard-subtitle">
            Honest reviews from real tenants. Read before you rent.
          </p>

          {/* Stats */}
          <div className="stat-chips">
            <span className="stat-chip">{apartments.length} apartments</span>
            <span className="stat-chip">{totalReviews} reviews</span>
            <span className="stat-chip">{uniqueNbhdCount} neighbourhoods</span>
          </div>

          {/* Filters */}
          <div className="filters">
            <select
              className="filter-select"
              value={neighbourhood}
              onChange={(e) => setNeighbourhood(e.target.value)}
              aria-label="Filter by neighbourhood"
            >
              {NEIGHBOURHOODS.map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>

            <select
              className="filter-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              aria-label="Sort apartments"
            >
              <option>Highest Rated</option>
              <option>Lowest Rated</option>
              <option>Most Reviews</option>
              <option>A–Z</option>
            </select>
          </div>

          {/* Card grid */}
          <div className="cards-grid">
            {filtered.length === 0 ? (
              // Conditional rendering — empty state
              <div className="no-results">
                <h3>No apartments found</h3>
                <p>Try adjusting your search or filter.</p>
              </div>
            ) : (
              filtered.map((apt) => (
                // Link navigates to /apartment/:id (URL params)
                <Link
                  key={apt.id}
                  to={`/apartment/${apt.id}`}
                  className="apt-card"
                >
                  <div className="apt-card-img-wrap">
                    <img
                      src={apt.image}
                      alt={apt.name}
                      className="apt-card-img"
                      onError={(e) => {
                        e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(apt.name)}&size=700&background=e2e8f0&color=64748b`;
                      }}
                    />
                    <div className="apt-card-badge">
                      <span className="star">★</span>
                      {apt.rating.toFixed(1)}
                    </div>
                  </div>

                  <div className="apt-card-body">
                    <div className="apt-card-name">{apt.name}</div>
                    <div className="apt-card-addr">
                      <span className="pin">📍</span>
                      {apt.address} · {apt.neighbourhood}
                    </div>

                    {/* Tags — conditional rendering */}
                    <div className="apt-card-tags">
                      {apt.tags.length > 0
                        ? apt.tags.map((tag) => (
                            <span key={tag} className="tag">{tag}</span>
                          ))
                        : <span className="tag-empty">No AI summary yet</span>
                      }
                    </div>

                    <div className="apt-card-foot">
                      <span className="review-count">
                        {apt.reviewCount} review{apt.reviewCount !== 1 ? "s" : ""}
                      </span>
                      <StarDisplay rating={apt.rating} size={14} />
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
