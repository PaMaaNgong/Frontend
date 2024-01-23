import React, { useState } from "react";
import { useLocation } from "react-router-dom";

interface SubmitedProps {}

const Submited: React.FC<SubmitedProps> = ({}) => {
  const location = useLocation();
  const data = location.state;
  const data_JSON = JSON.stringify(data);
  const courseNo = data["CourseNo"];
  const courseSemester = data["CourseSemester"];
  const courseYear = data["CourseYear"];
  const starRating = data["StarRating"];
  const grade = data["Grade"];
  const examFormat = data["ExamFormat"];
  const contentValue = data["ContentValue"];
  const classroomEnvValue = data["ClassroomEnvValue"];
  const examFormatValue = data["ExamFormatValue"];
  const exerFormatValue = data["ExerFormatValue"];
  // console.log(data);

  console.log(typeof data); // object
  console.log(typeof data_JSON); // string

  return (
    <div>
      <p>JSON: {data_JSON}</p>
      <p>CourseNo: {courseNo}</p>
      <p>CourseSemester: {courseSemester}</p>
      <p>CourseYear: {courseYear}</p>
      <p>StarRating: {starRating}</p>
      <p>Grade: {grade}</p>
      <p>ExamFormat: {examFormat}</p>
      <p>ContentValue: {contentValue}</p>
      <p>ClassroomEnvValue: {classroomEnvValue}</p>
      <p>ExamFormatValue: {examFormatValue}</p>
      <p>ExerFormatValue: {exerFormatValue}</p>
    </div>
  );
};

export default Submited;
