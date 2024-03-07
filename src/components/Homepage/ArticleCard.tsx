import React from "react";
import { CourseOverview, CourseType } from "../../models";
import { Link } from "react-router-dom";

type ArticleCardProps = {
  course: CourseOverview;
};

const ArticleCard: React.FC<ArticleCardProps> = ({ course }) => {
  const truncateString = (str: string, num: number) => {
    if (str.length > num) {
      return str.slice(0, num) + "...";
    }
    return str;
  };

  const getImageUrlByType = (type: CourseType) => {
    switch (type) {
      case "fe":
        return "src/components/Homepage/Card/image 27.png";
      case "me":
        return "src/components/Homepage/Card/image 28.png";
      case "ge":
        return "src/components/Homepage/Card/image 29.png";
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
    <div className="mt-0 px-1 w-1/5 md:w-1/5 lg:mt-4 lg:px-4 lg:mb-4 lg:w-1/5 relative">
    <Link to={`/courses/${course.id}`} className="block overflow-hidden rounded-lg">
      <article className="overflow-hidden rounded-lg bg-white hover:shadow-lg transition-shadow duration-300">
        <div className="scale-90 transform transition duration-300 hover:scale-100"> {/* Scale down the card */}
          <img alt="Placeholder" className="block h-auto w-full object-cover mb-0" src={getImageUrlByType(course.type)} />
          <div className="md:p-0 mt-0 ml-3 mb-3">
            <header className="mt-0 mb-0 pl-0">
              <h1 className="text-lg">{course.id}</h1>
            </header>
            <footer className="mt-0">
              {truncateString(course.name_en, 18)}
            </footer>
          </div>
          <div className="absolute bottom-0 right-0 mb-0 mr-4 text-right">
            <div className="text-lg font-bold">{course.rating} <span className="text-blue-600">*</span></div>
            <div className="text-sm text-blue-600">{course.total_reviews} reviews</div>
          </div>
        </div>
      </article>
    </Link>
  </div>
  );
};

export default ArticleCard;
