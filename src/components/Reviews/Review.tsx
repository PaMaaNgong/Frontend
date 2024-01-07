import React, { useState } from "react";
import "./Review.css";
import StarRating from "./StarRating";
import CourseSearch from "./CourseSearch";
import CourseYear from "./CourseYear";
import Grade from "./Grade";
import TextBox from "./TextBox";

const Review: React.FC = () => {
  const [contentValue, setContentValue] = useState<string>("");
  const [classroomEnvValue, setClassroomEnvValue] = useState<string>("");
  const [examFormatValue, setExamFormatValue] = useState<string>("");
  const [exerFormatValue, setExerFormatValue] = useState<string>("");

  return (
    <div className="flex flex-row gap-10">
      <div className="flex flex-col gap-5 max-w-screen-sm max-h-screen-sm">
        <CourseSearch courseNo="" />
        <StarRating totalStars={5} />
        <CourseYear courseYear="66" />
        <Grade />
      </div>
      <div className="flex flex-col gap-5 max-w-md max-h-md">
        <TextBox
          title="Content"
          subTitle="เนื้อหา,เรียนแล้วรู้สึกยังไง"
          setValue={setContentValue}
        />
        <TextBox
          title="Classroom Environment"
          subTitle="บรรยากาศในห้องเรียน"
          setValue={setClassroomEnvValue}
        />
        <TextBox
          title="Examination Format"
          subTitle="รูปแบบข้อสอบ"
          setValue={setExamFormatValue}
        />
        <TextBox
          title="Excerise Format"
          subTitle="รูแบบแบบฝึกหัด"
          setValue={setExerFormatValue}
        />
      </div>
    </div>
  );
};

export default Review;
