import React, { useState } from "react";
import "./CourseSearch.css";

interface CourseSearchProps {
  courseNo: string;
  setCourseNo: Function;
  courseName: string;
}

const CourseSearch: React.FC<CourseSearchProps> = ({
  courseNo,
  setCourseNo,
  courseName,
}) => {
  return (
    <div className="flex flex-row gap-5">
      <div className="basis-1/2">
        <label htmlFor="C_no" className="text-2xl">
          Course No.
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            name="C_no"
            id="C_no"
            className="w-full rounded-md py-1.5 pl-7 pr-20 ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 text-xl"
            placeholder="001xxx"
            onChange={(e) => setCourseNo(e.target.value)}
            value={courseNo}
            maxLength={10}
          />
        </div>
      </div>
      <div className="basis-1/2">
        <div className="text-2xl">Course Name</div>
        <div className="mt-2 text-xl">{courseName}</div>
      </div>
    </div>
  );
};

export default CourseSearch;
