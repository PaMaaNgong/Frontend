import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import SearchBar from "./SearchBar"; // Assuming SearchBar is in the correct path
import { CourseOverview } from "../../models";
import { getCourses } from "../../repositories/Course";

const ArticleBoard: React.FC = () => {
  const [courses, setCourses] = useState<CourseOverview[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<CourseOverview[]>([]);

  useEffect(() => {
    getCourses().then(response => {
      setCourses(response.data);
      setFilteredCourses(response.data); // Initially show all courses
    });
  }, []);

  const handleSearch = (searchText: string) => {
    const filtered = courses.filter(course => 
      course.id.startsWith(searchText) ||
      course.name_th.toLowerCase().startsWith(searchText.toLowerCase()) ||
      course.name_en.toLowerCase().startsWith(searchText.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  return (
    <div className="overflow-auto max-h-[930px] max-w-[5000px]">
      <div className="container my-12 mx-auto px-8 md:px-12 w-full">
        <SearchBar onSearch={handleSearch} />
        <div className="flex flex-wrap -mx-1 lg:-mx-4 font-['kanit'] font-normal">
          {filteredCourses.map((course, index) => (
            <ArticleCard key={index} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleBoard;
