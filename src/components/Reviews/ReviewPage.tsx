import React from "react";
import Review from "./ReviewPageComponent/Review";
import ReviewNavbar from "./ReviewPageComponent/ReviewNavbar";

interface ReviewPageProps {}

const ReviewPage: React.FC<ReviewPageProps> = ({}) => {
  return (
    <div>
      <ReviewNavbar />
      <div className="flex justify-center pt-3">
        <Review />
      </div>
    </div>
  );
};

export default ReviewPage;