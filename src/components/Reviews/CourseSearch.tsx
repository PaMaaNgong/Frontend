import React, { useState } from "react";
import "./CourseSearch.css";

interface CourseSearchProps {
  courseNo: string;
}

const CourseSearch: React.FC<CourseSearchProps> = ({ courseNo }) => {
  return (
    <div className="flex flex-row gap-5">
      <div className="basis-1/2">
        <label
          htmlFor="C_no"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Course No.
        </label>
        <div className="relative mt-2 rounded-md shadow-sm">
          <input
            type="text"
            name="C_no"
            id="C_no"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="001xxx"
          />
        </div>
      </div>
      <div className="basis-1/2">
        <div className="block text-sm font-medium leading-6 text-gray-900">
          Course Name
        </div>
        <div className="relative mt-2 rounded-md">Eng 3</div>
      </div>
    </div>
  );
};

export default CourseSearch;
