import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext.jsx'
import { apartments, neighbourhoods, sortOptions } from '../data/apartments.js'
import ApartmentCard from '../components/ApartmentCard.jsx'
import './Home.css'

export default function Home() {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()
  const [neighbourhood, setNeighbourhood] = useState('All Neighbourhoods')
  const [sort, setSort] = useState('Highest Rated')

  const filtered = useMemo(() => {
    let list = [...apartments]

    if (neighbourhood !== 'All Neighbourhoods') {
      list = list.filter((a) => a.neighbourhood === neighbourhood)
    }

    if (sort === 'Highest Rated') {
      list.sort((a, b) => b.rating - a.rating)
    } else if (sort === 'Lowest Rated') {
      list.sort((a, b) => a.rating - b.rating)
    } else if (sort === 'Most Reviews') {
      list.sort((a, b) => b.reviews - a.reviews)
    }

    return list
  }, [neighbourhood, sort])

  const totalReviews = apartments.reduce((sum, a) => sum + a.reviews, 0)
  const totalNeighbourhoods = new Set(apartments.map((a) => a.neighbourhood)).size

  const handleSignOut = () => {
    signOut()
    navigate('/')
  }

  const initials = user?.initials ?? 'AM'
  const displayName = user?.name ?? 'Alex'

  return (
    <div className="home">
      <header className="home-nav">
        <div className="container home-nav-inner">
          <Link to="/home" className="brand">TenantTrails</Link>
          <nav className="home-nav-links">
            <Link to="/home" className="home-link active">Apartments</Link>
            <Link to="/home" className="home-link">Reviews</Link>
            <Link to="/home" className="home-link">Neighbourhoods</Link>
            <Link to="/home" className="home-link">About</Link>
          </nav>
          <div className="home-nav-user">
            <span className="user-avatar">{initials}</span>
            <span className="user-name">{displayName}</span>
            <button onClick={handleSignOut} className="signout-btn">Sign out</button>
          </div>
        </div>
      </header>

      <main className="home-main">
        <div className="container">
          <h1 className="home-title">Apartments in Halifax</h1>
          <p className="home-subtitle">
            Browse honest tenant reviews and find your next home with confidence.
          </p>

          <div className="home-stats">
            <span className="stat"><strong>{apartments.length}</strong> apartments</span>
            <span className="stat"><strong>{totalReviews}</strong> reviews</span>
            <span className="stat"><strong>{totalNeighbourhoods}</strong> neighbourhoods</span>
          </div>

          <div className="home-filters">
            <select
              className="filter-select"
              value={neighbourhood}
              onChange={(e) => setNeighbourhood(e.target.value)}
            >
              {neighbourhoods.map((n) => (
                <option key={n} value={n}>{n}</option>
              ))}
            </select>

            <select
              className="filter-select"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
            >
              {sortOptions.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className="apartments-grid">
            {filtered.map((apartment, idx) => (
              <ApartmentCard
                key={apartment.id}
                apartment={apartment}
                index={idx + 1}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="empty-state">No apartments match the current filters.</p>
          )}
        </div>
      </main>
    </div>
  )
}
