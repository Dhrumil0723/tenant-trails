import './ApartmentCard.css'

function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" width="14" height="14" fill="#F5C518" aria-hidden="true">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
    </svg>
  )
}

export default function ApartmentCard({ apartment, index }) {
  const { name, neighbourhood, rating, reviews, tags, summary, image } = apartment

  return (
    <article className="apartment-card">
      <div className="apartment-image-wrap">
        <img className="apartment-image" src={image} alt={name} loading="lazy" />
        <span className="apartment-rating">
          <StarIcon />
          {rating.toFixed(1)}
        </span>
      </div>

      <div className="apartment-body">
        <h3 className="apartment-name">{name}</h3>
        <p className="apartment-meta">
          {neighbourhood} • {reviews} {reviews === 1 ? 'review' : 'reviews'}
        </p>

        {tags && tags.length > 0 ? (
          <div className="apartment-tags">
            {tags.map((tag) => (
              <span key={tag} className="apartment-tag">{tag}</span>
            ))}
          </div>
        ) : (
          <p className="apartment-no-summary">No AI summary yet</p>
        )}

        {summary && <p className="apartment-summary">{summary}</p>}

        <div className="apartment-footer">
          <span className="apartment-index">{index}</span>
          <button className="apartment-view">View details →</button>
        </div>
      </div>
    </article>
  )
}
