import React, { useEffect, useState } from "react";
import StarRating from "./StarRating";
import CourseSearch from "./CourseSearch";
import CourseYear from "./CourseYear";
import Grade from "./Grade";
import TextBox from "./TextBox";
import axios from "axios";
import SubmitBTN from "./SubmitBTN";
import RadioSelection from "../RadioSelection";
import RadioThreeButton from "../RadioThreeButton";

const URL = "https://whale-app-3xvcg.ondigitalocean.app/v1";

const Review: React.FC = () => {
  const [courseNo, setCourseNo] = useState<string>("");
  const [courseName, setCourseName] = useState<string>("");
  const [starRating, setStarRating] = useState<number>(0);
  const [courseSemester, setCourseSemester] = useState<string>("-");
  const [courseYear, setCourseYear] = useState<string>("----");
  const [grade, setGrade] = useState<string>("-");
  const [examMethod, setExamMethod] = useState<Array<string> | null>(null);
  const [contentValue, setContentValue] = useState<string>("");
  const [classroomEnvValue, setClassroomEnvValue] = useState<string>("");
  const [other, setOther] = useState<string>("");
  const [isDataCorrect, setIsDataCorrect] = useState<boolean>(false);
  const [triggleReset, setTriggleReset] = useState<boolean>(false);
  const [exerciseFormatSelection, setExerciseFormatSelection] =
    useState<string>("");
  const [exerciseFormatButton, setExerciseFormatButton] = useState<string>("");
  const [examinationFormatSelection, setExaminationFormatSelection] =
    useState<string>("");
  const [examinationFormatButton, setExaminationFormatButton] =
    useState<string>("");

  const reviewState = {
    rating: starRating,
    grade: grade,
    content: `${contentValue}`,
    classroom_environment: `${classroomEnvValue}`,
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
      classroomEnvValue !== ""
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
    setCourseNo("");
    setCourseName("");
    setStarRating(0);
    setCourseSemester("-");
    setCourseYear("----");
    setGrade("-");
    setExamMethod(null);
    setContentValue("");
    setClassroomEnvValue("");
    setIsDataCorrect(false);
  };

  const submitBTN = () => {
    if (isDataCorrect) {
      callPostReview();
      clearReivewStatus();
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
          {/* Exercise Format */}
          <div>
            <div>
              <span className="text-2xl text-blue-900 font-bold">
                Exercise Format
              </span>
              <span className="text-2xl">{"  "}</span>
              <span className=" text-2xl text-blue-900">
                รูปแบบฝึกแบบฝึกหัด
              </span>
            </div>
            <div className="flex flex-col gap-1 pt-1 pb-1">
              <RadioSelection
                label1="Individual งานเดี่ยว"
                label2="Group งานกลุ่ม"
                label3="Both ทั้งสอง"
                setValue={setExerciseFormatSelection}
              />
              <RadioThreeButton
                value={exerciseFormatButton}
                setValue={setExerciseFormatButton}
                value_list={["Easy ง่าย", "Normal ปานกลาง", "Hard ยาก"]}
              />
            </div>
            {/* {exerciseFormatSelection}
            {exerciseFormatButton} */}
          </div>
          {/* Examination Format */}
          <div>
            <div>
              <span className="text-2xl text-blue-900 font-bold">
                Examination Format
              </span>
              <span className="text-2xl">{"  "}</span>
              <span className=" text-2xl text-blue-900">รูปแบบข้อสอบ</span>
            </div>
            <div className="flex flex-col gap-1 pt-1 pb-1">
              <RadioSelection
                label1="Objective test ปรนัย"
                label2="Subjective test อัตนัย"
                label3="Both ทั้งสอง"
                setValue={setExaminationFormatSelection}
              />
              <RadioThreeButton
                value={examinationFormatButton}
                setValue={setExaminationFormatButton}
                value_list={["Easy ง่าย", "Normal ปานกลาง", "Hard ยาก"]}
              />
            </div>
            {/* {examinationFormatSelection}
            {examinationFormatButton} */}
          </div>
          <TextBox
            title="Other"
            subTitle="ข้อมูลอื่นๆที่อยากบอก"
            setValue={setOther}
            value={other}
          />
        </div>
      </div>
      <div className="flex justify-end">
        <div className="flex flex-row gap-4 pr-8">
          <button className="shadow-md w-36 h-14 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg text-2xl">
            Cancel
          </button>
          <SubmitBTN
            isDataCorrect={isDataCorrect}
            onClick={submitBTN}
            onClose={undefined}
          />
        </div>
      </div>
    </div>
  );
};

export default Review;
