import { RouteObject } from "react-router-dom";
import CoursePreview from "../components/Courses/preview";
import Submited from "../components/Reviews/Submited";
import ReviewPage from "../components/Reviews/ReviewPage";
import GetCourses from "../components/Reviews/CourseInfoDB/GetCourses";
import PopupBTN from "../components/Reviews/PopupBTN";

const routes: RouteObject[] = [
  {
    path: "/components/courses",
    element: <CoursePreview />,
  },
  {
    path: "/reviews/review",
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
];

export default routes;
