import React, { useState } from "react";
import "./CourseSearch.css";

interface CourseYearProps {
  courseSemester: string;
  setCourseSemester: Function;
  courseYear: string;
  setCourseYear: Function;
}

const CourseYear: React.FC<CourseYearProps> = ({
  courseSemester,
  setCourseSemester,
  courseYear,
  setCourseYear,
}) => {
  return (
    <div className="flex flex-row gap-4 pl-3">
      <div>
        <label
          htmlFor="semester"
          className="text-2xl text-blue-900 font-bold pr-4"
        >
          Semester
        </label>
        <select
          id="semester"
          name="semester"
          className="shadow-sm pl-3 pr-1 py-1 text-2xl bg-gray-50 rounded-xl"
          style={{ cursor: "pointer" }}
          value={courseSemester}
          onChange={(e) => setCourseSemester(e.target.value)}
        >
          <option>-</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div className="py-1 text-2xl text-blue-900 font-bold">/</div>
      <div>
        <label htmlFor="year" className="text-2xl text-blue-900 font-bold pr-4">
          Year
        </label>
        <select
          id="year"
          name="year"
          className="shadow-sm pl-3 pr-1 py-1 text-2xl bg-gray-50 rounded-xl"
          style={{ cursor: "pointer" }}
          value={courseYear}
          onChange={(e) => setCourseYear(e.target.value)}
        >
          <option>----</option>
          <option>2566</option>
          <option>2565</option>
          <option>2564</option>
          <option>2563</option>
        </select>
      </div>
    </div>
  );
};

export default CourseYear;
