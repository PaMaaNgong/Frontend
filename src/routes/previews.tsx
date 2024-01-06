import { RouteObject } from "react-router-dom";
import CoursePreview from "../components/Courses/preview";
import Review from "../components/Reviews/Review";

const routes: RouteObject[] = [
  {
    path: "/components/courses",
    element: <CoursePreview />,
  },
  {
    path: "/reviews/review",
    element: <Review />,
  },
];

export default routes;
