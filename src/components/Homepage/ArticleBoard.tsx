import React, { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import SearchBar from "./Searchbar"; // Assuming SearchBar is in the correct path
import { CourseOverview } from "../../models";
import { getCourses } from "../../repositories/Course";
import Navbar from "./Navbar";

const ArticleBoard: React.FC = () => {
  const [courses, setCourses] = useState<CourseOverview[]>([]);
  const [filteredCourses, setFilteredCourses] = useState<CourseOverview[]>([]);
  const [currentFilter, setCurrentFilter] = useState<string>("all");

  useEffect(() => {
    getCourses().then(response => {
      setCourses(response.data);
      setFilteredCourses(response.data);
    });
  }, []);

  const handleSearch = (searchText: string) => {
    const filtered = courses.filter(course =>
      (currentFilter === "all" || course.type === currentFilter) &&
      (course.id.startsWith(searchText) ||
       course.name_th.toLowerCase().startsWith(searchText.toLowerCase()) ||
       course.name_en.toLowerCase().startsWith(searchText.toLowerCase()))
    );
    setFilteredCourses(filtered);
  };

  const handleFilterChange = (filterType: string) => {
    setCurrentFilter(filterType);
    let filtered;
    if (filterType === "all") {
      filtered = courses;
    } else {
      filtered = courses.filter(course => course.type === filterType);
    }
    setFilteredCourses(filtered);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar onFilterChange={handleFilterChange} />
      <div className="flex-grow-0">
        <SearchBar onSearch={handleSearch} />
      </div>
      <div className="flex-grow overflow-auto">
        <div className="container mx-auto w-full">
          <div className="flex flex-wrap mx-1 lg:-mx-4 font-['kanit'] font-normal">
            {filteredCourses.length > 0 ? (
              filteredCourses.map((course, index) => (
                <ArticleCard key={index} course={course} />
              ))
            ) : (
              <div className="flex items-center justify-center w-full h-full">
                <p className="text-xl md:text-6xl text-gray-400">Not found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleBoard;
