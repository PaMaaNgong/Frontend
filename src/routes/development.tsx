import { RouteObject } from "react-router-dom";
import CoursePreview from "../components/Courses/preview";
import ReviewPage from "../components/Reviews/ReviewPage";
import GetCourses from "../components/Reviews/CourseInfoDB/GetCourses";
import PopupBTN from "../components/Reviews/PopupBTN";

import LoginPage from "../components/Login/LoginPage";
import ProfilePage from "../components/Profile/ProfilePage";
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
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/profile/:token",
    element: <ProfilePage majorElectiveProgress={0} totalMajorElectives={0} />,
  },
  {
    path: "/reviews/test",
    element: (
      <div className="m-10">
        <div className="flex flex-row gap-2">
          <ReviewEditBTN
            courseNo={"201100"}
            courseName={"วิทยาศาสตร์บูรณาการ"}
            reviewId={"14"}
            accessToken={"token-1"}
          />
          <ReviewDeleteBTN
            courseNo={"127100"}
            courseName={"delete-course"}
            reviewId={"16"}
            accessToken={"token-1"}
          />
        </div>
      </div>
    ),
  },
];

export default routes;
