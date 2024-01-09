import { RouteObject } from "react-router-dom";
import CoursePreview from "../components/Courses/preview";
import Submited from "../components/Reviews/Submited";
import ReviewPage from "../components/Reviews/ReviewPage/ReviewPage";
import ReviewPopup from "../components/Reviews/ReviewPopup/ReviewPopup";

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
    path: "/reviews/reviewpopup",
    element: (
      <div style={{ width: 1910, height: 980 }}>
        <div style={{ height: 110 }}></div>
        <div className="flex justify-center">
          <ReviewPopup />
        </div>
      </div>
    ),
  },
  {
    path: "/reviews/submited",
    element: <Submited />,
  },
];

export default routes;
