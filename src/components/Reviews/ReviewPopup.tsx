import React, { useEffect, useState } from "react";
import StarRating from "./ReviewPopupComponent/StarRating";
import CourseSearch from "./ReviewPopupComponent/CourseSearch";
import CourseYear from "./ReviewPopupComponent/CourseYear";
import Grade from "./ReviewPopupComponent/Grade";
import TextBox from "./ReviewPopupComponent/TextBox";
import { Link } from "react-router-dom";

interface ReviewPopupProps {
  courseNo: string;
  courseName: string;
  onClose: Function;
}

const ReviewPopup: React.FC<ReviewPopupProps> = ({
  courseNo,
  courseName,
  onClose,
}) => {
  const [starRating, setStarRating] = useState<number>(0);
  const [courseSemester, setCourseSemester] = useState<string>("-");
  const [courseYear, setCourseYear] = useState<string>("----");
  const [grade, setGrade] = useState<string>("-");
  const [examMethod, setExamMethod] = useState<string>("Null");
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
    ExamMethod: examMethod,
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
      examMethod !== "Null"
    )
      setIsDataCorrect(true);
    else setIsDataCorrect(false);
  }, [courseNo, starRating, courseSemester, courseYear, examMethod]);

  return (
    <div
      className="flex flex-col gap-4 border-blue-900 border-2"
      style={{ height: 800, width: 1280 }}
    >
      <div className="flex flex-row gap-10  pt-4">
        <div
          className="flex flex-col gap-5 ml-3.5 border-r-4 border-blue-900"
          style={{ width: 570 }}
        >
          <CourseSearch courseNo={courseNo} courseName={courseName} />
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
            examMethod={examMethod}
            setExamMethod={setExamMethod}
          />
        </div>
        <div className="flex flex-col gap-2 pl-2" style={{ width: 660 }}>
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
          <button
            className="shadow-md w-40 h-16 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg text-2xl"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className={`shadow-md w-40 h-16 ${
              isDataCorrect ? "bg-green-600 hover:bg-green-700" : "bg-gray-400"
            } text-white font-bold py-2 px-4 rounded-lg text-2xl`}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewPopup;
