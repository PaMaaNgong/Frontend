import React from "react";
import "./StarRating.css";

interface StarRatingProps {
  totalStars: number;
  starRating: number;
  setStarRating: Function;
}

const StarRating: React.FC<StarRatingProps> = ({
  totalStars,
  starRating,
  setStarRating,
}) => {
  const handleStarClick = (starIndex: number): void => {
    setStarRating(starIndex + 1);
  };

  return (
    <div className="flex justify-center py-5">
      <div className="rating shadow">
        <div className="star-rating">
          {[...Array(totalStars)].map((_, index) => (
            <span
              key={index}
              className={`star ${index < starRating ? "active" : ""} text-7xl`}
              onClick={() => handleStarClick(index)}
            >
              ★
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StarRating;
