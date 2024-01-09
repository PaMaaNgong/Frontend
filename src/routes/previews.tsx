import { RouteObject } from "react-router-dom";
import CoursePreview from "../components/Courses/preview";
import Review from "../components/Reviews/Review";
import Submited from "../components/Reviews/Submited";
import ReviewPage from "../components/Reviews/ReviewPage";

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
    path: "/reviews/component/review",
    element: <Review />,
  },
  {
    path: "/reviews/submited",
    element: <Submited />,
  },
];

export default routes;
