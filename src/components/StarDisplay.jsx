// components/StarDisplay.jsx
// Renders a row of ★ icons colored by rating.
// Handles full stars, half stars, and empty stars.

function StarDisplay({ rating, size = 14 }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    let color;
    if (rating >= i) {
      color = "#facc15"; // full star
    } else if (rating >= i - 0.5) {
      color = "#fde68a"; // half star (lighter yellow)
    } else {
      color = "#e2e8f0"; // empty star
    }
    stars.push(
      <span key={i} style={{ color, fontSize: size, lineHeight: 1 }}>
        ★
      </span>
    );
  }
  return (
    <span style={{ display: "inline-flex", gap: 1 }}>{stars}</span>
  );
}

export default StarDisplay;
