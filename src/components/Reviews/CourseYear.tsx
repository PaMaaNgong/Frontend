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
    <div className="flex flex-row gap-4">
      <div>
        <label htmlFor="semester" className="text-2xl pr-4">
          Semester
        </label>
        <select
          id="semester"
          name="semester"
          className="pl-1 pr-1 text-2xl"
          value={courseSemester}
          onChange={(e) => setCourseSemester(e.target.value)}
        >
          <option>-</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
        </select>
      </div>
      <div className="text-2xl">/</div>
      <div>
        <label htmlFor="year" className="text-2xl pr-4">
          Year
        </label>
        <select
          id="year"
          name="year"
          className="pl-1 pr-1 text-2xl"
          value={courseYear}
          onChange={(e) => setCourseYear(e.target.value)}
        >
          <option>-</option>
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
