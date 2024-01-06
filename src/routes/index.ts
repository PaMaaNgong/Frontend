
import {RouteObject} from "react-router-dom";
import development from "./development";
import production from "./production";

const index: RouteObject[] = [
    ...development,
    ...production
]
export default index;