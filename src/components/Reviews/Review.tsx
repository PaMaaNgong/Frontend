import React, { useState } from "react";
import "./Review.css";
import StarRating from "./StarRating";
import CourseSearch from "./CourseSearch";
import CourseYear from "./CourseYear";
import Grade from "./Grade";
import TextBox from "./TextBox";

const Review: React.FC = () => {
  const [courseNo, setCourseNo] = useState<string>("");
  const [courseName, setCourseName] = useState<string>("Eng3");
  const [courseSemester, setCourseSemester] = useState<string>("-");
  const [courseYear, setCourseYear] = useState<string>("-");
  const [starRating, setStarRating] = useState<number>(0);
  const [grade, setGrade] = useState<string | null>(null);
  const [examFormat, setExamFormat] = useState<string | null>(null);
  const [contentValue, setContentValue] = useState<string>("");
  const [classroomEnvValue, setClassroomEnvValue] = useState<string>("");
  const [examFormatValue, setExamFormatValue] = useState<string>("");
  const [exerFormatValue, setExerFormatValue] = useState<string>("");

  return (
    <div className="flex justify-center py-10">
      <div className="flex flex-col gap-5" style={{ height: 700, width: 1280 }}>
        <div className="flex flex-row gap-10">
          <div className="flex flex-col gap-5" style={{ width: 610 }}>
            <CourseSearch
              courseNo={courseNo}
              setCourseNo={setCourseNo}
              courseName={courseName}
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
          <div className="flex flex-col gap-5" style={{ width: 610 }}>
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
              subTitle="รูแบบแบบฝึกหัด"
              setValue={setExerFormatValue}
              value={exerFormatValue}
            />
          </div>
        </div>
        <div className="flex flex-row">
          <div className="basis-9/12"></div>
          <div className="flex flex-row gap-3">
            <button className="btn cancel text-2xl">Cancel</button>
            <button className="btn submit text-2xl">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
