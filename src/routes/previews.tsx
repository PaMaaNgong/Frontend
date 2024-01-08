import { RouteObject } from "react-router-dom";
import CoursePreview from "../components/Courses/preview";
import Review from "../components/Reviews/Review";
import Submited from "../components/Reviews/Submited";

const routes: RouteObject[] = [
  {
    path: "/components/courses",
    element: <CoursePreview />,
  },
  {
    path: "/reviews/review",
    element: <Review />,
  },
  {
    path: "/reviews/submited",
    element: <Submited />,
  },
];

export default routes;
