import { RouteObject } from "react-router-dom";
import CoursePreview from "../components/Courses/preview";
import Submited from "../components/Reviews/Submited";
import ReviewPage from "../components/Reviews/ReviewPage";
import GetCourses from "../components/Reviews/CourseInfoDB/GetCourses";
import PopupBTN from "../components/Reviews/PopupBTN";
import RatingHistogramPreview from "../components/Courses/DataVisualize/Rating/preview";
import GradeHistogramPreview from "../components/Courses/DataVisualize/Grade/preview";
import ProfilePage from "../components/Profile/ProfilePage";

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
    path: "/reviews/submited",
    element: <Submited />,
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
    path: "/profile/userId",
    element: <ProfilePage />,
  },
];

export default routes;
