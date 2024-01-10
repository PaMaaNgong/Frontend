import { RouteObject } from "react-router-dom";
import CoursePreview from "../components/Courses/preview";
import Submited from "../components/Reviews/Submited";
import ReviewPage from "../components/Reviews/ReviewPage";
import ReviewPopup from "../components/Reviews/ReviewPopup";

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
          <ReviewPopup
            courseNo="207115-001"
            courseName="Physics Laboratory for Engineering and Agro-Industry Students 1"
          />
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
