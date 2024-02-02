import React, { useState } from "react";
import "./RatingsHistogram.css";

export type RatingDetail = {
  stars: number;
  count: number;
  percentage: number;
};

type HistogramProps = {
  ratings: RatingDetail[];
};

const RatingsHistogram: React.FC<HistogramProps> = ({ ratings }) => {
  // Destructure ratings from props here
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);

  const maxCount = Math.max(...ratings.map((r: RatingDetail) => r.count)); // Type the parameter r explicitly

  return (
    <div className="ratings-container">
      <div className="ratings-header">
        <span>RATINGS</span>
      </div>
      <div className="histogram">
        {ratings.map(
          (
            rating: RatingDetail,
            index: number // Type the parameters rating and index explicitly
          ) => (
            <div
              key={index}
              className="histogram-bar"
              style={{ height: `${(rating.count / maxCount) * 100}%` }}
              onMouseEnter={() => setHoveredBar(index)}
              onMouseLeave={() => setHoveredBar(null)}
            >
              <span style={{ display: hoveredBar === index ? "flex" : "none" }}>
                {rating.count} ★{rating.stars}
                <br />
                {rating.percentage}%
              </span>
            </div>
          )
        )}
      </div>
      <div className="ratings-footer">
        {/* Placeholder for rating value and stars */}
      </div>
    </div>
  );
};

export default RatingsHistogram;
