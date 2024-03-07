import React, { useEffect, useState } from "react";
import { getReviewDetail } from "../../repositories/Course";
import { ReviewDetail } from "../../models";
import { useParams } from "react-router-dom";

const comments: React.FC = () => {
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
      {reviews.map((review) => (
        <div>
          {" "}
          {review.content.replace(RegexWhiteSpacePattern, "") === "" ||
          review.content === "\n" ? null : (
            <div className=" p-[5px] mb-4 flex justify-between border-b-[1px] border-black pb-5">
              <div>
                {" "}
                Comment: <br /> {review.content} <br /> Environment: <br />{" "}
                {review.classroom_environment}{" "}
              </div>
              <div className="flex flex-col justify-items-center text-orange-300">
                <div className="text-center"> Rating: {review.rating} </div>
                <div className="text-center">
                  {" "}
                  Year: {`${review.semester}/${review.year}`}
                </div>
                <div className="text-center">
                  {review.grading_method.length === 2
                    ? review.grading_method[0] +
                      " & " +
                      review.grading_method[1]
                    : review.grading_method.length === 1
                    ? review.grading_method[0]
                    : "none"}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default comments;
