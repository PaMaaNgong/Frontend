import React, { useEffect, useState } from "react";
import StarRating from "./StarRating";
import CourseSearch from "./CourseSearch";
import CourseYear from "./CourseYear";
import Grade from "./Grade";
import TextBox from "./TextBox";
import { Link } from "react-router-dom";

const Review: React.FC = () => {
  const [courseNo, setCourseNo] = useState<string>("");
  const [courseName, setCourseName] = useState<string>("");
  const [starRating, setStarRating] = useState<number>(0);
  const [courseSemester, setCourseSemester] = useState<string>("-");
  const [courseYear, setCourseYear] = useState<string>("----");
  const [grade, setGrade] = useState<string | null>(null);
  const [examFormat, setExamFormat] = useState<string>("Null");
  const [contentValue, setContentValue] = useState<string>("");
  const [classroomEnvValue, setClassroomEnvValue] = useState<string>("");
  const [examFormatValue, setExamFormatValue] = useState<string>("");
  const [exerFormatValue, setExerFormatValue] = useState<string>("");
  const [isDataCorrect, setIsDataCorrect] = useState<boolean>(false);

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

  useEffect(() => {
    if (
      courseNo !== "" &&
      starRating !== 0 &&
      courseSemester !== "-" &&
      courseYear !== "----" &&
      examFormat !== "Null"
    )
      setIsDataCorrect(true);
    else setIsDataCorrect(false);
  }, [courseNo, starRating, courseSemester, courseYear, examFormat]);

  return (
    <div
      className="flex flex-col gap-4 border-blue-900 border-2"
      style={{ height: 900, width: 1600 }}
    >
      <div className="flex flex-row gap-10  pt-4">
        <div
          className="flex flex-col gap-5 ml-3.5 border-r-4 border-blue-900"
          style={{ width: 720 }}
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
        <div className="flex flex-col gap-2 pl-2">
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
      <div className="flex justify-end">
        <div className="flex flex-row gap-4 pr-8">
          <button className="shadow-md w-48 h-20 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg text-3xl">
            Cancel
          </button>
          <button
            className={`shadow-md w-48 h-20 ${
              isDataCorrect ? "bg-green-600 hover:bg-green-700" : "bg-gray-400"
            } text-white font-bold py-2 px-4 rounded-lg text-3xl`}
          >
            {isDataCorrect ? (
              <Link to="/reviews/submited" state={reviewState}>
                Submit
              </Link>
            ) : (
              <>Submit</>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Review;
