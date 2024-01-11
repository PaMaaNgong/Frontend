import axios from "axios";
import React, { useEffect, useState } from "react";
import courseInfoDB from "../CourseInfoDB/CourseInfo.json";

const URL = "http://localhost:3000/v1";

interface GetCoursesProps {}

const GetCourses: React.FC<GetCoursesProps> = ({}) => {
  const [courseInfo, setCourseInfo] = useState<any>([]);

  const callGetCourse = async (limit: number, offset: number) => {
    try {
      const resp = await axios.get(
        `${URL}/courses?limit=${limit}&offset=${offset}`
      );
      if (resp.data.ok) {
        // console.log(resp.data);
        const updateValue = resp.data.map((course: any) => {
          return { CourseNo: course.id, CourseName: course.name_en };
        });
        const newValue = [...courseInfo, ...updateValue];
        setCourseInfo(newValue);
      }
    } catch (err: any) {
      console.log(err.response.data.mesasge);
    }
  };

  useEffect(() => {
    // for (let i = 0; i < 100; i += 10) {
    //   callGetCourse(10, i);
    // }
  }, []);

  return <div>{JSON.stringify(courseInfo)}</div>;
};

export default GetCourses;
