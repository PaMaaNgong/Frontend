import React from "react";
import CommentDetail from "./CommentDetail";

import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getReviewDetail } from "../../repositories/Course";
import { ReviewDetail } from "../../models";

const CommmentEach: React.FC = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [reviews, setReviews] = React.useState<ReviewDetail[]>([]);

  useEffect(() => {
    getReviewDetail(`${courseId}`).then((response) => {
      setReviews(response.data);
      console.log(response.data);
    });
  }, []);

  const RegexWhiteSpacePattern = /\s+/g;

  return (
    <div>
      {reviews.map((review, i) => (
        <div>
          {" "}
          {review.content.replace(RegexWhiteSpacePattern, "") === "" ||
          review.content === "\n" ? null : (
            <CommentDetail
              key={i}
              content={review.content}
              classroom_environment={review.classroom_environment}
              examination_format={review.examination_format.format}
              examimation_difficulty={review.examination_format.difficulty}
              exercise_format={review.exercise_format.format}
              exercise_difficulty={review.exercise_format.difficulty}
              grading_method={review.grading_method}
              semester={review.semester}
              year={review.year}
              rating={review.rating}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default CommmentEach;
