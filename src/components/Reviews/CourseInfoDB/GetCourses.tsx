import axios from "axios";
import React, { useEffect, useState } from "react";
import courseInfoDB from "../CourseInfoDB/CourseInfo.json";

const URL = "https://whale-app-3xvcg.ondigitalocean.app/v1";

interface GetCoursesProps {}

const GetCourses: React.FC<GetCoursesProps> = ({}) => {
  const [courseInfo, setCourseInfo] = useState<any>([]);
  const [isFirst, setIsFirst] = useState<boolean>(true);

  const callGetCourse = async (limit: number, offset: number) => {
    try {
      const resp = await axios.get(
        `${URL}/courses?limit=${limit}&offset=${offset}`
      );
      if (resp.data) {
        // console.log(resp.data);
        const updateValue = resp.data.map((course: any) => {
          return {
            CourseNo: course.id,
            CourseName_TH: course.name_th,
            CourseName_ENG: course.name_en,
            Type: course.type,
          };
        });
        const newValue = [...courseInfo, ...updateValue];
        setCourseInfo(newValue);
      }
    } catch (err: any) {
      console.log(err.response.data.mesasge);
    }
  };

  const getCourseInfo = () => {
    callGetCourse(100, 0);
  };

  return (
    <div>
      <button
        className="shadow-md w-48 h-16 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg text-l"
        onClick={getCourseInfo}
      >
        Get Courses Info.
      </button>
      <div></div>
      {JSON.stringify(courseInfo)}
    </div>
  );
};

export default GetCourses;
