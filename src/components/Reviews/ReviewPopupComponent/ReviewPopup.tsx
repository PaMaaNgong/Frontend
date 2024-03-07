import React, { useEffect, useState } from "react";
import StarRating from "../ReviewPageComponent/StarRating";
import CourseSearch from "./CourseSearch";
import CourseYear from "../ReviewPageComponent/CourseYear";
import Grade from "../ReviewPageComponent/Grade";
import TextBox from "../ReviewPageComponent/TextBox";
import axios from "axios";
import SubmitBTN from "../ReviewPageComponent/SubmitBTN";
import RadioSelection from "../RadioSelection";
import RadioThreeButton from "../RadioThreeButton";

const URL = "https://whale-app-3xvcg.ondigitalocean.app/v1";

interface ReviewPopupProps {
  courseNo: string;
  courseName: string;
  onClose: any;
  reviewId: string;
  accessToken: string;
}

const ReviewPopup: React.FC<ReviewPopupProps> = ({
  courseNo,
  courseName,
  onClose,
  reviewId,
  accessToken,
}) => {
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

  const createReviewState = () => {
    let exercise_format: string[] = [];
    if (exerciseFormatSelection === "Individual งานเดี่ยว")
      exercise_format = ["individual"];
    else if (exerciseFormatSelection === "Group งานกลุ่ม")
      exercise_format = ["group"];
    else if (exerciseFormatSelection === "Both ทั้งสอง")
      exercise_format = ["group", "individual"];

    let exercise_difficulty: string = "";
    if (exerciseFormatButton === "Easy ง่าย") exercise_difficulty = "easy";
    else if (exerciseFormatButton === "Normal ปานกลาง")
      exercise_difficulty = "normal";
    else if (exerciseFormatButton === "Hard ยาก") exercise_difficulty = "hard";

    let examination_format: string[] = [];
    if (examinationFormatSelection === "Objective test ปรนัย")
      examination_format = ["objective"];
    else if (examinationFormatSelection === "Subjective test อัตนัย")
      examination_format = ["subjective"];
    else if (examinationFormatSelection === "Both ทั้งสอง")
      examination_format = ["objective", "subjective"];

    let examination_difficulty: string = "";
    if (examinationFormatButton === "Easy ง่าย")
      examination_difficulty = "easy";
    else if (examinationFormatButton === "Normal ปานกลาง")
      examination_difficulty = "normal";
    else if (examinationFormatButton === "Hard ยาก")
      examination_difficulty = "hard";

    return {
      rating: starRating,
      grade: grade,
      content: `${contentValue}`,
      classroom_environment: `${classroomEnvValue}`,
      other: `${other}`,
      exercise_format: {
        format: exercise_format,
        difficulty: exercise_difficulty,
      },
      examination_format: {
        format: examination_format,
        difficulty: examination_difficulty,
      },
      grading_method: examMethod,
      semester: courseSemester,
      year: Number(courseYear),
    };
  };

  useEffect(() => {
    if (
      courseNo !== "" &&
      starRating !== 0 &&
      courseSemester !== "-" &&
      courseYear !== "----" &&
      examMethod !== null &&
      contentValue !== "" &&
      classroomEnvValue !== "" &&
      // other !== "" &&
      exerciseFormatSelection !== "" &&
      exerciseFormatButton !== "" &&
      examinationFormatSelection !== "" &&
      examinationFormatButton !== ""
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
    // other,
    exerciseFormatSelection,
    exerciseFormatButton,
    examinationFormatSelection,
    examinationFormatButton,
  ]);

  const callPostReview = async () => {
    console.log(`${URL}/course/${courseNo}/reviews`);
    console.log(createReviewState());
    const accessToken = "token-1";
    // const accessToken = localStorage.getItem("accessToken");
    try {
      const resp = await axios.post(
        `${URL}/course/${courseNo}/reviews`,
        createReviewState(),
        {
          headers: { accessToken: accessToken },
        }
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
      <div className="flex flex-row gap-10 pt-4">
        <div
          className="flex flex-col gap-5 ml-3.5 border-r-0 border-blue-900"
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
            triggleReset={triggleReset}
          />
          <TextBox
            title="Classroom Environment"
            subTitle="บรรยากาศในห้องเรียน"
            setValue={setClassroomEnvValue}
            value={classroomEnvValue}
            triggleReset={triggleReset}
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
                value={exerciseFormatSelection}
                setValue={setExerciseFormatSelection}
                triggleReset={triggleReset}
              />
              <RadioThreeButton
                value={exerciseFormatButton}
                setValue={setExerciseFormatButton}
                value_list={["Easy ง่าย", "Normal ปานกลาง", "Hard ยาก"]}
                triggleReset={triggleReset}
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
                value={examinationFormatSelection}
                setValue={setExaminationFormatSelection}
                triggleReset={triggleReset}
              />
              <RadioThreeButton
                value={examinationFormatButton}
                setValue={setExaminationFormatButton}
                value_list={["Easy ง่าย", "Normal ปานกลาง", "Hard ยาก"]}
                triggleReset={triggleReset}
              />
            </div>
            {/* {examinationFormatSelection}
            {examinationFormatButton} */}
          </div>
          <TextBox
            title="Other"
            subTitle="ข้อมูลอื่นๆที่อยากบอก (Optional)"
            setValue={setOther}
            value={other}
            triggleReset={triggleReset}
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
