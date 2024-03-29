import React, { ReactNode } from "react";
import { CourseOverview, CourseType } from "../../models";
import { Link } from "react-router-dom";

type ArticleCardProps = {
  course: CourseOverview;
  children?: ReactNode; // Adding children prop
};

const CardProfile: React.FC<ArticleCardProps> = ({ course, children }) => {
  // ฟังก์ชันเพื่อตัดและเติม "..."
  const truncateString = (str: string, num: number) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    }
    return str;
  };

  const getImageUrlByType = (type: CourseType) => {
    switch (type) {
      case "fe":
        return "../src/components/Homepage/Card/image 27.png";
      case "me":
        return "../src/components/Homepage/card/image 28.png";
      case "ge":
        return "../src/components/Homepage/card/image 29.png";
      default:
        return ""; // Consider adding a default image URL here
    }
  };

  const mapIconUrl = (type: CourseType) => {
    switch (type) {
      case "me":
        return "src/components/Homepage/icon/image 30.png";
      case "ge":
        return "src/components/Homepage/icon/image 28.png";
      case "fe":
        return "src/components/Homepage/icon/image 27.png";
    }
  };

  return (
    <div className="mt-1 px-1 w-1/5 md:w-1/5 lg:mt-4 lg:px-4 lg:mb-4 lg:w-1/5 relative">
      {/* <Link to={`/courses/${course.id}`} className="block overflow-hidden rounded-lg"> */}
        <article className="relative overflow-hidden rounded-lg bg-white hover:shadow-lg transition-shadow duration-300">
          <img
            alt="Placeholder"
            className="block h-auto w-full object-cover mb-1"
            src={getImageUrlByType(course.type)}
          />
          <div className="p-1 md:p-4 pt-0 pb-0">
            <header className="mt-0 mb-0 pl-0">
              <h1 className="text-lg">{course.id}</h1>
            </header>
            <footer className="mt-0 mb-0">
              {truncateString(course.name_en, 17)}
            </footer>
            
          </div>
          <div className="absolute bottom-0 right-0 mb-4 mr-8 text-right">
            <div className="text-lg font-bold text-black">
              {course.rating} <span className="text-blue-600">*</span>
            </div>
            <div className="text-sm text-blue-600">
              {course.total_reviews} reviews
            </div>
          </div>
          {/* Positioning the children (buttons) at the bottom-left */}
          {children && (
            <div className="absolute top-0 right-0 mt-0.5 mr-0.5">
              {children}
            </div>
          )}
        </article>
      {/* </Link> */}
    </div>
  );
};

export default CardProfile;
