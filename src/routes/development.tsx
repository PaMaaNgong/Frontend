import { RouteObject } from "react-router-dom";
import CoursePreview from "../components/Courses/preview";
import ReviewPage from "../components/Reviews/ReviewPage";
import GetCourses from "../components/Reviews/CourseInfoDB/GetCourses";
import PopupBTN from "../components/Reviews/PopupBTN";
import RatingHistogramPreview from "../components/Courses/DataVisualize/Rating/preview";
import GradeHistogramPreview from "../components/Courses/DataVisualize/Grade/preview";
import ReviewEditBTN from "../components/Reviews/ReviewEditBTN";
import ReviewDeleteBTN from "../components/Reviews/ReviewDeleteBTN";

const routes: RouteObject[] = [
  {
    path: "/courses/:courseId", // Dynamic route for course ID
    element: <CoursePreview />,
  },
  {
    path: "/review",
    element: <ReviewPage />,
  },
  {
    path: "/reviews/getcourseinfo",
    element: <GetCourses />,
  },
  {
    path: "/reviews/reviewBTN",
    element: (
      <PopupBTN
        courseNo="261494-2"
        courseName="Adv Algorithms and Computation (selected topics in CPE)"
        reviewId="1"
        accessToken="token-1"
      />
    ),
  },
  {
    path: "/course/gradehistogram",
    element: <GradeHistogramPreview />,
  },
  {
    path: "/course/ratinghistogram",
    element: <RatingHistogramPreview />,
  },
  {
    path: "/reviews/test",
    element: (
      <div className="m-10">
        <div className="flex flex-row gap-2">
          <ReviewEditBTN
            courseNo={"000000"}
            courseName={"edit-course"}
            reviewId={"1"}
            accessToken={"token-1"}
          />
          <ReviewDeleteBTN
            courseNo={"111111"}
            courseName={"delete-course"}
            reviewId={"1"}
            accessToken={"token-1"}
          />
        </div>
      </div>
    ),
  },
];

export default routes;
