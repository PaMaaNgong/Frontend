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
    <div className="flex flex-row gap-0 pl-3">
      <div className="basis-4/12">
        <label
          htmlFor="C_no"
          className="pl-0.5 text-2xl text-blue-900 font-bold"
        >
          Course No.
        </label>
        <div className="relative mt-3">
          <input
            type="text"
            name="C_no"
            id="C_no"
            className="w-9/12 border-b-2 border-gray-700 shadow-sm pt-2 pl-1.5 placeholder:text-gray-500 text-2xl"
            placeholder="001xxx-001"
            onChange={(e) => setCourseNo(e.target.value)}
            value={courseNo}
            maxLength={10}
          />
        </div>
      </div>
      <div className="basis-8/12">
        <div className="text-2xl text-blue-900 font-bold">Course Name</div>
        <div className="pt-5 text-2xl text-gray-1000">{courseName}</div>
      </div>
    </div>
  );
};

export default CourseSearch;
