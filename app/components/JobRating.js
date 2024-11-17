const StarRating = ({ rating }) => {
  const stars = [];

  // Create an array of full stars, half stars, and empty stars
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push("★"); // Full star
    } else if (rating >= i - 0.5) {
      stars.push("☆"); // Half star
    } else {
      stars.push("☆"); // Empty star
    }
  }

  return <div className="text-secondary pl-2">{stars.join(" ")}</div>;
};

export default StarRating;
