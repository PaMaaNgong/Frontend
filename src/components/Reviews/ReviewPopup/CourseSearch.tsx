import React, { useEffect, useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import CourseInfo from "../CourseInfo";

interface CourseSearchProps {
  courseNo: string;
  setCourseNo: Function;
  courseName: string;
  setCourseName: Function;
}

const CourseSearch: React.FC<CourseSearchProps> = ({
  courseNo,
  setCourseNo,
  courseName,
  setCourseName,
}) => {
  const courseNoInfo = CourseInfo.map((course) => course.CourseNo);
  // console.log(courseNoInfo);
  const [inputValue, setInputValue] = useState("");
  const [hasCourseName, setHasCourseName] = useState<boolean>(false);

  useEffect(() => {
    const courseMatch = CourseInfo.find(
      (course) => course.CourseNo === courseNo
    );
    if (courseMatch) {
      setCourseName(courseMatch.CourseName);
      setHasCourseName(true);
    } else {
      setCourseName("Choose a course for review");
      setHasCourseName(false);
    }
  }, [courseNo]);

  return (
    <div className="flex flex-row gap-0 pl-3">
      <div className="basis-4/12">
        <label
          htmlFor="C_no"
          className="pl-0.5 text-2xl text-blue-900 font-bold"
        >
          Course No.
        </label>
        <div className="relative mt-3">
          {/* <input
            type="text"
            name="C_no"
            id="C_no"
            className="w-9/12 border-b-2 border-gray-700 shadow-sm pt-2 pl-1.5 placeholder:text-gray-500 text-2xl"
            placeholder="001xxx-001"
            onChange={(e) => setCourseNo(e.target.value)}
            value={courseNo}
            maxLength={10}
          /> */}
          <div>
            <Autocomplete
              value={courseNo}
              onChange={(event: any, newValue: string | null) => {
                if (newValue === null) setCourseNo("");
                else setCourseNo(newValue);
              }}
              inputValue={inputValue}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
                if (courseNoInfo.includes(newInputValue))
                  setCourseNo(newInputValue);
              }}
              sx={{
                display: "inline-block",
                "& input": {
                  width: 150,
                },
              }}
              options={courseNoInfo}
              renderInput={(params) => (
                <div ref={params.InputProps.ref}>
                  <input
                    type="text"
                    {...params.inputProps}
                    placeholder="001xxx-001"
                    className="w-9/12 border-b-2 border-gray-700 shadow-sm pt-2 pl-1.5 placeholder:text-gray-500 text-2xl font-medium"
                    maxLength={10}
                  />
                </div>
              )}
            />
          </div>
        </div>
      </div>
      <div className="basis-8/12">
        <div className="text-2xl text-blue-900 font-bold">Course Name</div>
        <div
          className={`h-24 pt-5 text-2xl text-gray-1000 font-medium ${
            hasCourseName ? "" : "text-red-600"
          }`}
        >
          {courseName}
        </div>
        {/* <div>{`inputValue: '${inputValue}'`}</div>
        <div>{`courseNo: '${courseNo}'`}</div> */}
      </div>
    </div>
  );
};

export default CourseSearch;
