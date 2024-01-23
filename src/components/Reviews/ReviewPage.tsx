import React from "react";
import Review from "./ReviewPageComponent/Review";

interface ReviewPageProps {}

const ReviewPage: React.FC<ReviewPageProps> = ({}) => {
  return (
    <div>
      <div style={{ height: 104 }}></div>
      <div className="flex justify-center">
        <Review />
      </div>
    </div>
  );
};

export default ReviewPage;
