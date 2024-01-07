import React from "react";
import "./Review.css";
import StarRating from "./StarRating";
import CourseSearch from "./CourseSearch";
import CourseYear from "./CourseYear";
import Grade from "./Grade";

const Review: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col gap-5 max-w-screen-sm max-h-screen-sm">
        <CourseSearch courseNo="" />
        <StarRating totalStars={5} />
        <CourseYear courseYear="66" />
        <Grade />
      </div>
    </div>
  );
};

export default Review;
