import React, { useState } from "react";
import "./StarRating.css";

interface StarRatingProps {
  totalStars: number;
}

const StarRating: React.FC<StarRatingProps> = ({ totalStars }) => {
  const [rating, setRating] = useState(0);

  const handleStarClick = (starIndex: number): void => {
    setRating(starIndex + 1);
  };

  return (
    <div className="rating">
      <div className="star-rating">
        {[...Array(totalStars)].map((_, index) => (
          <span
            key={index}
            className={`star ${index < rating ? "active" : ""}`}
            onClick={() => handleStarClick(index)}
          >
            ★
          </span>
        ))}
        {/* <p>
          Selected Rating: {rating}/{totalStars}
        </p> */}
      </div>
    </div>
  );
};

export default StarRating;
