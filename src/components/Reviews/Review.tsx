import React, { useState } from "react";
import "./Review.css";
import StarRating from "./StarRating";
import CourseSearch from "./CourseSearch";
import CourseYear from "./CourseYear";
import Grade from "./Grade";
import TextBox from "./TextBox";
import { Link } from "react-router-dom";

const Review: React.FC = () => {
  const [courseNo, setCourseNo] = useState<string>("");
  const [courseName, setCourseName] = useState<string>("");
  const [courseSemester, setCourseSemester] = useState<string>("-");
  const [courseYear, setCourseYear] = useState<string>("-");
  const [starRating, setStarRating] = useState<number>(0);
  const [grade, setGrade] = useState<string | null>(null);
  const [examFormat, setExamFormat] = useState<string | null>(null);
  const [contentValue, setContentValue] = useState<string>("");
  const [classroomEnvValue, setClassroomEnvValue] = useState<string>("");
  const [examFormatValue, setExamFormatValue] = useState<string>("");
  const [exerFormatValue, setExerFormatValue] = useState<string>("");

  const reviewState = {
    CourseNo: courseNo,
    CourseSemester: courseSemester,
    CourseYear: courseYear,
    StarRating: starRating,
    Grade: grade,
    ExamFormat: examFormat,
    ContentValue: contentValue,
    ClassroomEnvValue: classroomEnvValue,
    ExamFormatValue: examFormatValue,
    ExerFormatValue: exerFormatValue,
  };
  // console.log(reviewState);

  return (
    <div
      className="flex flex-col gap-4 border-blue-900 border-2"
      style={{ height: 800, width: 1280 }}
    >
      <div className="flex flex-row gap-10">
        <div
          className="flex flex-col gap-5 border-r-4 border-blue-900"
          style={{ width: 570 }}
        >
          <CourseSearch
            courseNo={courseNo}
            setCourseNo={setCourseNo}
            courseName={courseName}
            setCourseName={setCourseName}
          />
          <StarRating
            totalStars={5}
            starRating={starRating}
            setStarRating={setStarRating}
          />
          <CourseYear
            courseSemester={courseSemester}
            setCourseSemester={setCourseSemester}
            courseYear={courseYear}
            setCourseYear={setCourseYear}
          />
          <Grade
            grade={grade}
            setGrade={setGrade}
            examFormat={examFormat}
            setExamFormat={setExamFormat}
          />
        </div>
        <div className="flex flex-col gap-2" style={{ width: 660 }}>
          <TextBox
            title="Content"
            subTitle="เนื้อหา,เรียนแล้วรู้สึกยังไง"
            setValue={setContentValue}
            value={contentValue}
          />
          <TextBox
            title="Classroom Environment"
            subTitle="บรรยากาศในห้องเรียน"
            setValue={setClassroomEnvValue}
            value={classroomEnvValue}
          />
          <TextBox
            title="Examination Format"
            subTitle="รูปแบบข้อสอบ"
            setValue={setExamFormatValue}
            value={examFormatValue}
          />
          <TextBox
            title="Excerise Format"
            subTitle="รูปแบบแบบฝึกหัด"
            setValue={setExerFormatValue}
            value={exerFormatValue}
          />
        </div>
      </div>
      <div className="flex flex-row">
        <div className="basis-8/12 mr-4"></div>
        <div className="pl-14 flex flex-row gap-4">
          <button className="shadow-md w-40 h-16 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg text-2xl">
            Cancel
          </button>
          <button className="shadow-md w-40 h-16 bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg text-2xl">
            <Link to="/reviews/submited" state={reviewState}>
              Submit
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
