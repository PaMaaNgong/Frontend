import React, { useEffect, useState } from "react";
import StarRating from "../ReviewPageComponent/StarRating";
import CourseSearch from "./CourseSearch";
import CourseYear from "../ReviewPageComponent/CourseYear";
import Grade from "../ReviewPageComponent/Grade";
import TextBox from "../ReviewPageComponent/TextBox";
import axios from "axios";
import SubmitBTN from "../ReviewPageComponent/SubmitBTN";

const URL = "https://whale-app-3xvcg.ondigitalocean.app/v1";

interface ReviewPopupProps {
  courseNo: string;
  courseName: string;
  onClose: any;
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
  const [examMethod, setExamMethod] = useState<Array<string> | null>(null);
  const [contentValue, setContentValue] = useState<string>("");
  const [classroomEnvValue, setClassroomEnvValue] = useState<string>("");
  const [examFormatValue, setExamFormatValue] = useState<string>("");
  const [exerFormatValue, setExerFormatValue] = useState<string>("");
  const [isDataCorrect, setIsDataCorrect] = useState<boolean>(false);
  const [triggleReset, setTriggleReset] = useState<boolean>(false);

  const reviewState = {
    rating: starRating,
    grade: grade,
    content: `${contentValue}`,
    classroom_environment: `${classroomEnvValue}`,
    examination_format: `${examFormatValue}`,
    exercise_format: `${exerFormatValue}`,
    grading_method: examMethod,
    semester: courseSemester,
    year: Number(courseYear),
  };
  // console.log(reviewState);

  useEffect(() => {
    if (
      courseNo !== "" &&
      starRating !== 0 &&
      courseSemester !== "-" &&
      courseYear !== "----" &&
      examMethod !== null &&
      contentValue !== "" &&
      classroomEnvValue !== "" &&
      examFormatValue !== "" &&
      exerFormatValue !== ""
    )
      setIsDataCorrect(true);
    else setIsDataCorrect(false);
  }, [
    courseNo,
    starRating,
    courseSemester,
    courseYear,
    examMethod,
    contentValue,
    classroomEnvValue,
    examFormatValue,
    exerFormatValue,
  ]);

  const callPostReview = async () => {
    console.log(`${URL}/course/${courseNo}/reviews`);
    console.log(reviewState);
    try {
      const resp = await axios.post(
        `${URL}/course/${courseNo}/reviews`,
        reviewState
      );
      if (resp.data.ok) alert("review suscessed");
    } catch (err: any) {
      alert(err.response.data.message);
    }
  };

  const clearReivewStatus = () => {
    setTriggleReset(!triggleReset);
    setStarRating(0);
    setCourseSemester("-");
    setCourseYear("----");
    setGrade("-");
    setExamMethod(null);
    setContentValue("");
    setClassroomEnvValue("");
    setExamFormatValue("");
    setExerFormatValue("");
    setIsDataCorrect(false);
  };

  const submitBTN = () => {
    if (isDataCorrect) {
      callPostReview();
      // clearReivewStatus();
    }
  };

  return (
    <div
      className="flex flex-col gap-3 border-blue-900 border-0 font-['kanit']"
      style={{ height: 800, width: 1280 }}
    >
      <div className="flex flex-row gap-3 pt-4">
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
            triggleReset={triggleReset}
            credit={3}
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
      <div className="flex justify-end">
        <div className="flex flex-row gap-4 pr-8">
          <button
            className="shadow-md w-36 h-14 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg text-2xl"
            onClick={onClose}
          >
            Cancel
          </button>
          {/* <button
            className={`shadow-md w-36 h-14 ${
              isDataCorrect ? "bg-green-600 hover:bg-green-700" : "bg-gray-400"
            } text-white font-bold py-2 px-4 rounded-lg text-2xl`}
            onClick={submitBTN}
          >
            Submit
          </button> */}
          <SubmitBTN
            isDataCorrect={isDataCorrect}
            onClick={submitBTN}
            onClose={onClose}
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewPopup;
