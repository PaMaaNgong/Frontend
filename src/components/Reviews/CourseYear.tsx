import React, { useState } from "react";
import "./CourseSearch.css";

interface CourseYearProps {
  courseYear: string;
}

const CourseYear: React.FC<CourseYearProps> = ({ courseYear }) => {
  return (
    <div className="flex flex-row gap-4">
      <div>
        <label
          htmlFor="semester"
          className="text-sm font-medium leading-6 text-gray-900"
        >
          Semester
        </label>
        <select
          id="semester"
          name="semester"
          className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
        >
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div>/</div>
      <div>
        <label
          htmlFor="year"
          className="text-sm font-medium leading-6 text-gray-900"
        >
          Year
        </label>
        <select
          id="year"
          name="year"
          className="h-full rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
        >
          <option>66</option>
          <option>65</option>
          <option>64</option>
          <option>63</option>
        </select>
      </div>
    </div>
  );
};

export default CourseYear;
