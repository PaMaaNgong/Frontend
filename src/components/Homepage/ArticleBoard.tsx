import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import axios from "axios";
import { CourseOverview, CourseType } from "../../models";
import { getCourses } from "../../repositories/Course";

const ArticleBoard: React.FC = () => {
  const containerRef = React.useRef<HTMLDivElement | null>(null);
  const [courses, setCourses] = React.useState<CourseOverview[]>([]);
  useEffect(() => {
    if (!containerRef.current) return;
    getCourses().then(response => {
      setCourses(response.data)
    })
  }, [containerRef]);
  return (
    <div className="overflow-auto max-h-[930px] max-w-[5000px]">
      <div className="container my-12 mx-auto px-8 md:px-12 w-full">
        {/* ... */}
        <div ref={containerRef} className="flex flex-wrap -mx-1 lg:-mx-4 font-['kanit'] font-normal">
          {courses.map((course, index) => (
            <ArticleCard key={index} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleBoard;
