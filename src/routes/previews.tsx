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
        courseNo="207115-001"
        courseName="Physics Laboratory for Engineering and Agro-Industry Students 1"
      />
    ),
  },
];

export default routes;
