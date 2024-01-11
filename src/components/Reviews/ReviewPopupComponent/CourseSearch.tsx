import React, { useEffect, useState } from "react";

interface CourseSearchProps {
  courseNo: string;
  courseName: string;
}

const CourseSearch: React.FC<CourseSearchProps> = ({
  courseNo,
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
          <div>
            <input
              type="text"
              disabled
              className="w-9/12 border-b-2 border-gray-700 shadow-sm pt-2 pl-1.5 text-2xl font-medium"
              style={{ width: 150 }}
              value={courseNo}
              maxLength={10}
            />
          </div>
        </div>
      </div>
      <div className="basis-8/12">
        <div className="text-2xl text-blue-900 font-bold">Course Name</div>
        <div className={`h-24 pt-5 text-2xl text-gray-1000 font-medium `}>
          {courseName}
        </div>
      </div>
    </div>
  );
};

export default CourseSearch;
