import React from "react";
import Review from "./Review";

interface ReviewPageProps {}

const ReviewPage: React.FC<ReviewPageProps> = ({}) => (
  <div className="flex justify-center py-10">
    <Review />
  </div>
);

export default ReviewPage;
