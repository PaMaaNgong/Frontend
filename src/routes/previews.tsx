import {RouteObject} from "react-router-dom";
import CoursePreview from "../components/Courses/preview";

const routes: RouteObject[] = [
    {
        path: "/components/courses",
        element: <CoursePreview/>
    }
]

export default routes;